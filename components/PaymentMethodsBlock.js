import React from 'react';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { RadioButtonGroup, RadioButtonRow, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const PaymentMethodsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState(undefined);

  return (
    <View
      style={StyleSheet.applyWidth(
        { flexDirection: 'column' },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { borderRadius: 12, overflow: 'hidden' },
          dimensions.width
        )}
      >
        <RadioButtonGroup
          onValueChange={newRadioButtonGroupValue => {
            const radioButtonGroupValue = newRadioButtonGroupValue;
            try {
              setRadioButtonGroupValue(radioButtonGroupValue);
            } catch (err) {
              console.error(err);
            }
          }}
          value={radioButtonGroupValue}
        >
          {/* Payment Methods */}
          <CISAPPApi.FetchPaymentGatewayPOST>
            {({ loading, error, data, refetchPaymentGateway }) => {
              const paymentMethodsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  data={paymentMethodsData && paymentMethodsData[0].data}
                  estimatedItemSize={50}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(flashListData, index) =>
                    flashListData?.id ?? flashListData?.uuid ?? index.toString()
                  }
                  listKey={'6A2vB9mj'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const flashListData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            height: 64,
                            justifyContent: 'space-between',
                            paddingBottom: 10,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 10,
                          },
                          dimensions.width
                        )}
                      >
                        <Image
                          resizeMode={'cover'}
                          source={{ uri: `${flashListData?.attachment}` }}
                          style={StyleSheet.applyWidth(
                            { height: 18, width: 60 },
                            dimensions.width
                          )}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1 },
                            dimensions.width
                          )}
                        >
                          <RadioButtonRow
                            color={theme.colors.primary}
                            unselectedColor={theme.colors.primary}
                            label={flashListData?.name}
                            style={StyleSheet.applyWidth(
                              { fontFamily: 'Inter_500Medium' },
                              dimensions.width
                            )}
                            value={flashListData?.name}
                          />
                        </View>
                      </View>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  contentContainerStyle={StyleSheet.applyWidth(
                    {
                      borderRadius: 12,
                      overflow: 'hidden',
                      paddingBottom: 10,
                      paddingTop: 10,
                    },
                    dimensions.width
                  )}
                />
              );
            }}
          </CISAPPApi.FetchPaymentGatewayPOST>
        </RadioButtonGroup>
      </View>
    </View>
  );
};

export default withTheme(PaymentMethodsBlock);
