import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const MainTabsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [selectedTab3, setSelectedTab3] = React.useState('');
  const convertDateTimeToDate = dateTime => {
    const date = dateTime.split(' ');
    console.log('date' + date);

    const str = date[0];

    return str;
  };

  const buildBillingString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/getBillDataService/${Scno}`);
    return `billing/rest/getBillDataService/${Scno}`;
  };

  const convertMonthNoToMonthName = monthNo => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthName = monthNames[monthNo - 1];
    console.log(monthName);
    return monthName;
  };

  const buildString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/getBillDataWss/${Scno}`);
    return `billing/rest/getBillDataWss/${Scno}`;
  };

  const converDateTimeToDate = dateTime => {
    const date = dateTime.split(' ');
    console.log('date' + date);

    const str = date[0];

    return str;
  };

  const prepaidBillingString = meterNo => {
    console.log(
      `/SPM/getAllSpmMonthlyBillDetailsTByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`
    );
    return `/SPM/getAllSpmMonthlyBillDetailsTByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`;
  };

  const dailybillHistoryBuildString = meterNo => {
    //console.log(`/SPM/getAllSpmRechargeHistoryDetailsByMeterNumberOrAccountNo?meterNumberOrAccountNo=${meterNo}`)
    return `/SPM/getAllSpmBillDetailsByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`;

    //return `/SPM/getAllSpmRechargeHistoryDetailsByMeterNumberOrAccountNo?meterNumberOrAccountNo=${meterNo}`
  };

  const buildConsumerString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  const manageAccountFun = ManageAccountDetails => {
    return ManageAccountDetails.map(team => {
      return { label: team.new_added_account, value: team.new_added_account };
    });
  };

  return (
    <>
      {!(prepaidFlag === 'Y') ? null : (
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          {/* chart */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* prepaidchart */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* selected */}
              <>
                {!(selectedTab3 === 'prepaidchart1') ? null : (
                  <Touchable>
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          borderBottomWidth: 3,
                          borderColor: theme.colors['Custom Color'],
                          height: 25,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors['Custom Color'],
                              fontFamily: 'Roboto_400Regular',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Chart'}
                      </Text>
                    </View>
                  </Touchable>
                )}
              </>
              {/* unselected */}
              <>
                {!(selectedTab3 !== 'prepaidchart1') ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setSelectedTab3('prepaidchart1');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          borderBottomWidth: 2,
                          borderColor: theme.colors['Light'],
                          height: 25,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors['Light'],
                              fontFamily: 'Roboto_400Regular',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Chart'}
                      </Text>
                    </View>
                  </Touchable>
                )}
              </>
            </View>
          </View>
          {/* table */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* prepaidtable */}
            <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
              {/* selected */}
              <>
                {!(selectedTab3 === 'prepaidtable1') ? null : (
                  <Touchable>
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          borderBottomWidth: 3,
                          borderColor: theme.colors['Custom Color'],
                          height: 25,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors['Custom Color'],
                              fontFamily: 'Roboto_400Regular',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Table'}
                      </Text>
                    </View>
                  </Touchable>
                )}
              </>
              {/* unselected */}
              <>
                {!(selectedTab3 !== 'prepaidtable1') ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        setSelectedTab3('prepaidtable1');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          borderBottomWidth: 2,
                          borderColor: theme.colors['Light'],
                          height: 25,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors['Light'],
                              fontFamily: 'Roboto_400Regular',
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Table'}
                      </Text>
                    </View>
                  </Touchable>
                )}
              </>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default withTheme(MainTabsBlock);
