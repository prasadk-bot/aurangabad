import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Picker, TextInput, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const Picker2Block3 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['category'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['category'].style, {
          borderBottomWidth: 1,
          borderColor: theme.colors['Divider'],
          borderLeftWidth: 1,
          borderRadius: 16,
          borderRightWidth: 1,
          borderTopWidth: 1,
          height: 50,
          marginBottom: 30,
          paddingLeft: 20,
          paddingRight: 20,
        }),
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
            const pickerValue = newPickerValue;
            try {
              const consumerDetailsJson = (
                await CISAPPApi.consumerDetailsPOST(Constants, {})
              )?.json;
              console.log(consumerDetailsJson);
              const prepaidFlag = (
                consumerDetailsJson && consumerDetailsJson[0]
              )?.data?.prepaidFlag;
              console.log(prepaidFlag);
              const meterNo = (consumerDetailsJson && consumerDetailsJson[0])
                ?.data?.meterNumber;
              console.log(meterNo);
              const BillingHistoryJson = (
                await CISAPPApi.billingHistoryPOST(Constants, {
                  action: newPickerValue,
                })
              )?.json;
              console.log(BillingHistoryJson);
              const prepaidBillingHistoryJson = await (async () => {
                if (prepaidFlag === undefined) {
                  return (
                    await CISAPPApi.billingHistoryPrepaidPOST(Constants, {
                      action: meterNo,
                    })
                  )?.json;
                }
              })();
              console.log(prepaidBillingHistoryJson);
              const prepaidBillingHistoryResult =
                prepaidBillingHistoryJson &&
                prepaidBillingHistoryJson[0].data.data;
              console.log(prepaidBillingHistoryResult);
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
  );
};

export default withTheme(Picker2Block3);
