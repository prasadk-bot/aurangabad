import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { FlatList, Text, View } from 'react-native';

const PaymentListBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <FlatList
      data={[]}
      horizontal={false}
      inverted={false}
      keyExtractor={(listData, index) =>
        listData?.id ?? listData?.uuid ?? index.toString()
      }
      keyboardShouldPersistTaps={'never'}
      listKey={'ZtlaKvS3'}
      nestedScrollEnabled={false}
      numColumns={1}
      onEndReachedThreshold={0.5}
      renderItem={({ item, index }) => {
        const listData = item;
        return (
          <>
            {/* card */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Custom Color_21'],
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <View>
                {/* date */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { fontFamily: 'Roboto_400Regular', fontSize: 16 }
                    ),
                    dimensions.width
                  )}
                >
                  {listData?.paymentDate}
                </Text>
                {/* purpose */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    dimensions.width
                  )}
                >
                  {listData?.paymentMode}
                </Text>
              </View>
              {/* View 2 */}
              <View>
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { fontFamily: 'Roboto_700Bold', fontSize: 18 }
                    ),
                    dimensions.width
                  )}
                >
                  {'₹'}
                  {listData?.amountPaid}
                </Text>
              </View>
              {/* download */}
              <View
                style={StyleSheet.applyWidth(
                  { alignSelf: 'center', justifyContent: 'center' },
                  dimensions.width
                )}
              >
                <Touchable
                  onPress={() => {
                    const handler = async () => {
                      try {
                        await WebBrowser.openBrowserAsync(
                          `http://mbackend.fluentgrid.com:9887/fgweb/web/json/plugin/com.fluentgrid.cp.plugin.DynamicServiceReportGenerator/service?name=BILL PAYMENT RECEIPT&prno=${listData?.prno}&scno=${listData?.scno}`
                        );
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                >
                  <Icon size={24} name={'Feather/arrow-down-circle'} />
                </Touchable>
              </View>
            </View>
          </>
        );
      }}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
    />
  );
};

export default withTheme(PaymentListBlock);
