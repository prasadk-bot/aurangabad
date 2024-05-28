import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { RadioButtonGroup, RadioButtonRow, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const RadioButtonsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['View11'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['View11'].style, {
          flexDirection: 'column',
          justifyContent: 'space-between',
        }),
        dimensions.width
      )}
    >
      <RadioButtonGroup
        onValueChange={newRadioButtonGroupValue => {
          const handler = async () => {
            try {
              console.log(newRadioButtonGroupValue);
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
              const loadpatternJson = (
                await CISAPPApi.loadPatternPOST(Constants, {
                  days: newRadioButtonGroupValue,
                  mtrno: meterNo,
                })
              )?.json;
              console.log(loadpatternJson);
              const voltageJson = (
                await CISAPPApi.powerQualityVoltagePOST(Constants, {
                  days: newRadioButtonGroupValue,
                  mtrno: meterNo,
                })
              )?.json;
              console.log(voltageJson);
              console.log(voltageJson);
              const currentJson = (
                await CISAPPApi.powerQualityCurrentPOST(Constants, {
                  days: newRadioButtonGroupValue,
                  mtrno: meterNo,
                })
              )?.json;
              console.log(currentJson);
              const powerfactorJson = (
                await CISAPPApi.powerQualityPowerFactorPOST(Constants, {
                  days: newRadioButtonGroupValue,
                  mtrno: meterNo,
                })
              )?.json;
              console.log(powerfactorJson);
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
        direction={'horizontal'}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 120,
            },
            dimensions.width
          )}
        >
          <RadioButtonRow
            color={theme.colors.primary}
            unselectedColor={theme.colors.primary}
            direction={'row-reverse'}
            label={'7Days'}
            style={StyleSheet.applyWidth(
              { fontFamily: 'Roboto_400Regular', fontSize: 14 },
              dimensions.width
            )}
            value={7}
          />
          <RadioButtonRow
            color={theme.colors.primary}
            unselectedColor={theme.colors.primary}
            direction={'row-reverse'}
            label={'15Days'}
            style={StyleSheet.applyWidth(
              { fontFamily: 'Roboto_400Regular', fontSize: 14 },
              dimensions.width
            )}
            value={15}
          />
          <RadioButtonRow
            color={theme.colors.primary}
            unselectedColor={theme.colors.primary}
            direction={'row-reverse'}
            label={'30Days'}
            style={StyleSheet.applyWidth(
              { fontFamily: 'Roboto_400Regular', fontSize: 14 },
              dimensions.width
            )}
            value={30}
          />
        </View>
      </RadioButtonGroup>
    </View>
  );
};

export default withTheme(RadioButtonsBlock);
