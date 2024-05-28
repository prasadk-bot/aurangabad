import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const TableComponent1Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [selectedTab2, setSelectedTab2] = React.useState('');
  const buildBillingString = Scno => {
    console.log(`billing/rest/getBillDataService/${Scno}`);
    return `billing/rest/getBillDataService/${Scno}`;
  };

  const manageAccountFun = ManageAccountDetails => {
    return ManageAccountDetails.map(team => {
      return { label: team.new_added_account, value: team.new_added_account };
    });
  };

  const buildConsumerString = Scno => {
    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  const prepaidBillingString = meterNo => {
    console.log(
      `/SPM/getAllSpmMonthlyBillDetailsTByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`
    );
    return `/SPM/getAllSpmMonthlyBillDetailsTByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`;
  };

  const convertDateTimeToDate = dateTime => {
    const date = dateTime.split(' ');
    console.log('date' + date);

    const str = date[0];

    return str;
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

  return (
    <>
      {!(selectedTab2 === 'prepaidtable') ? null : (
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgb(211, 211, 211)',
              borderBottomWidth: 1,
              borderColor: 'rgb(211, 211, 211)',
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Bill Month */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderColor: theme.colors['White'],
                borderRightWidth: 1,
                flex: 1,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['ViewBG'],
                  height: 40,
                  justifyContent: 'center',
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
                      color: 'rgb(42, 42, 42)',
                      fontFamily: 'Roboto_700Bold',
                      textAlign: 'center',
                      textTransform: 'capitalize',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Bill month'}
              </Text>
            </View>
          </View>
          {/* Units */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderColor: theme.colors['White'],
                borderRightWidth: 1,
                flex: 1,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['ViewBG'],
                  height: 40,
                  justifyContent: 'center',
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
                      color: 'rgb(42, 42, 42)',
                      fontFamily: 'Roboto_700Bold',
                      textAlign: 'center',
                      textTransform: 'capitalize',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Units(Kwh)'}
              </Text>
            </View>
          </View>
          {/* Amount */}
          <View
            style={StyleSheet.applyWidth(
              { borderColor: theme.colors['White'], flex: 1 },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['ViewBG'],
                  height: 40,
                  justifyContent: 'center',
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
                      color: 'rgb(42, 42, 42)',
                      fontFamily: 'Roboto_700Bold',
                      textAlign: 'center',
                      textTransform: 'capitalize',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Bill Amount'}
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default withTheme(TableComponent1Block);
