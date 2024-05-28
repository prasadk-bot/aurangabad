import React from 'react';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  RadioButton,
  RadioButtonGroup,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const RbgBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState(undefined);

  return (
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
      {/* Profiles */}
      <DraftbitExampleApi.FetchDoctorsListGET count={3}>
        {({ loading, error, data, refetchDoctorsList }) => {
          const profilesData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <FlashList
              data={profilesData}
              estimatedItemSize={50}
              horizontal={false}
              inverted={false}
              keyExtractor={(flashListData, index) =>
                flashListData?.id ?? flashListData?.uuid ?? index.toString()
              }
              listKey={'PX34YkGN'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => {
                const flashListData = item;
                return (
                  <Touchable>
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginTop: 20,
                        },
                        dimensions.width
                      )}
                    >
                      <RadioButton
                        color={theme.colors.primary}
                        selectedIcon={'MaterialIcons/radio-button-checked'}
                        size={24}
                        unselectedColor={theme.colors.primary}
                        unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                        value={flashListData?.id}
                      />
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: theme.colors['Custom Color'],
                            borderRadius: 12,
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 10,
                            paddingBottom: 20,
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 20,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { marginLeft: 12 },
                            dimensions.width
                          )}
                        >
                          {/* Name */}
                          <Text
                            accessible={true}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_500Medium',
                                fontSize: 18,
                                marginBottom: 5,
                              },
                              dimensions.width
                            )}
                          >
                            {flashListData?.first_name}
                          </Text>
                          {/* Relation */}
                          <Text
                            accessible={true}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_300Light',
                                fontSize: 12,
                                opacity: 0.4,
                              },
                              dimensions.width
                            )}
                          >
                            {flashListData?.job_title}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Touchable>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </DraftbitExampleApi.FetchDoctorsListGET>
    </RadioButtonGroup>
  );
};

export default withTheme(RbgBlock);
