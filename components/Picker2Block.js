import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, Icon, Picker, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const Picker2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['viewbilldetails'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ViewStyles(theme)['viewbilldetails'].style,
          { height: 50, justifyContent: 'flex-start' }
        ),
        dimensions.width
      )}
    >
      {/* Enter customer service number */}
      <View
        {...GlobalStyles.ViewStyles(theme)['user name'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['user name'].style,
          dimensions.width
        )}
      >
        <Icon
          size={24}
          color={theme.colors['Medium']}
          name={'MaterialIcons/house'}
        />
        <Picker
          autoDismissKeyboard={true}
          dropDownBackgroundColor={theme.colors.background}
          dropDownBorderColor={theme.colors.divider}
          dropDownBorderRadius={8}
          dropDownBorderWidth={1}
          dropDownTextColor={theme.colors.strong}
          iconSize={24}
          leftIconMode={'inset'}
          mode={'native'}
          onValueChange={newPickerValue => {
            const handler = async () => {
              try {
                const consumerDetailsJson = (
                  await CISAPPApi.consumerDetailsPOST(Constants, {})
                )?.json;
                console.log(consumerDetailsJson);
                const prepaidFlag = (
                  consumerDetailsJson && consumerDetailsJson[0]
                )?.data?.prepaidFlag;
                console.log();
                const meterNo = (consumerDetailsJson && consumerDetailsJson[0])
                  ?.data?.meterNumber;
                console.log(meterNo);
                const Scno = (consumerDetailsJson && consumerDetailsJson[0])
                  ?.data?.scno;
                console.log(Scno);
                const Name = (consumerDetailsJson && consumerDetailsJson[0])
                  ?.data?.name;
                const Billdetailsjson = (
                  await CISAPPApi.viewBillDetailsPOST(Constants, {
                    action: newPickerValue,
                  })
                )?.json;
                const prepaiddetailsJson = await (async () => {
                  if (prepaidFlag === undefined) {
                    return (
                      await CISAPPApi.prepaidApiPOST(Constants, {
                        mtrno: meterNo,
                      })
                    )?.json;
                  }
                })();
                console.log(prepaiddetailsJson);
                const availableBalance = (
                  prepaiddetailsJson && prepaiddetailsJson[0]
                )?.data[0]?.avail_balance;
                console.log(availableBalance);
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          selectedIconColor={theme.colors.strong}
          selectedIconName={'Feather/check'}
          selectedIconSize={20}
          type={'solid'}
          defaultValue={Constants['name']}
          iconColor={theme.colors['Medium']}
          options={Constants['manageaccount_picker']}
          placeholder={' '}
          placeholderTextColor={theme.colors['Medium']}
          rightIconName={'Feather/chevron-down'}
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors['Background'],
              borderWidth: 1,
              fontFamily: 'Roboto_400Regular',
              marginTop: -5,
            },
            dimensions.width
          )}
        />
      </View>
    </View>
  );
};

export default withTheme(Picker2Block);
