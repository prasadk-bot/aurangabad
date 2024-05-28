import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { FlatList, Text, View } from 'react-native';

const List2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <FlatList
      data={[]}
      horizontal={false}
      inverted={false}
      keyExtractor={(listData, index) =>
        listData?.id ?? listData?.uuid ?? index.toString()
      }
      keyboardShouldPersistTaps={'never'}
      listKey={'XyKLdVb9'}
      nestedScrollEnabled={false}
      numColumns={1}
      onEndReachedThreshold={0.5}
      renderItem={({ item, index }) => {
        const listData = item;
        return (
          <>
            {/* Details */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Details'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['Details'].style,
                  {
                    borderBottomWidth: 1,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                  }
                ),
                dimensions.width
              )}
            >
              {/* Bill Issue Date */}
              <View
                style={StyleSheet.applyWidth(
                  { borderRightWidth: 1, flex: 1 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { height: 40, justifyContent: 'center' },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 14,
                        textAlign: 'center',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {(() => {
                      const e = listData?.BillIssueDate;
                      console.log(e);
                      return e;
                    })()}
                  </Text>
                </View>
              </View>
              {/* Amount */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'stretch',
                    borderRightWidth: 1,
                    flex: 1,
                    marginRight: 1,
                  },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'flex-end',
                      alignSelf: 'flex-end',
                      height: 40,
                      justifyContent: 'center',
                      padding: 12,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 14,
                        textAlign: 'right',
                        textTransform: 'capitalize',
                      },
                      dimensions.width
                    )}
                  >
                    {'₹'}
                    {listData?.BillAmount}
                  </Text>
                </View>
              </View>
              {/* Download */}
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, marginRight: 1 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'center',
                      height: 40,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      const handler = async () => {
                        try {
                          await WebBrowser.openBrowserAsync(
                            `http://20.192.2.50:9388/fgweb/web/json/plugin/com.fluentgrid.cp.plugin.DynamicServiceReportGenerator/service?name=POSTPAID_BILL&month=${listData?.BillMonth}&year=${listData?.BillYear}&scno=`
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
            </View>
          </>
        );
      }}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
    />
  );
};

export default withTheme(List2Block);
