import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Button,
  Icon,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const PresentReadingScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [onprereads, setOnprereads] = React.useState('');
  const [radioButtonGroup2Value, setRadioButtonGroup2Value] =
    React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const convertMonthNoToMonthNumber = monthNo => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthName = monthNames[monthNo - 1];
    console.log(monthName);
    return monthName;
  };
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const Preds = (
          await CISAPPApi.onDemandsPresentRedsPOST(Constants, {
            meterNumber: props.route?.params?.metno ?? null,
            userId: Constants['userId'],
          })
        )?.json;
        const ptest = JSON.parse(
          (Preds && Preds[0])?.data[0]?.data
        )?.responseData;
        /* hidden 'Log to Console' action */

        const valueBs7aqlnz = ptest;
        setOnprereads(valueBs7aqlnz);
        const kk = valueBs7aqlnz;
        console.log(kk);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 44,
                justifyContent: 'center',
                width: 44,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </View>
        </Touchable>
        {/* View bill and make payment */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 10,
            },
            dimensions.width
          )}
        >
          {transalate(Variables, 'Present Reading')}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20, paddingTop: 20 },
          dimensions.width
        )}
      >
        {/* Payment summary */}
        <View>
          {/* pr2 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['accordion'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['accordion'].style,
                {
                  marginLeft: 20,
                  marginRight: 20,
                  paddingBottom: 3,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 3,
                }
              ),
              dimensions.width
            )}
          >
            <AccordionGroup
              caretSize={24}
              iconSize={24}
              expanded={true}
              label={transalate(Variables, 'Reading Details')}
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'stretch',
                  color: theme.colors['ShopAppBlue'],
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 16,
                  paddingBottom: 8,
                  paddingTop: 8,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Current */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Current (A)')}
                </Text>
                {/* Current value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.current}
                </Text>
              </View>
              {/* view */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Voltage */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Voltage (V)')}
                </Text>
                {/* Voltage value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.voltage}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Average Power Factor */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Average Power Factor')}
                </Text>
                {/* Average Power Factor value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.avgPowerFactor}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Due Date */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Date')}
                </Text>
                {/* last date */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.readDate}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Current Reading  */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Current Reading (KVAH)')}
                </Text>
                {/* Current Reading  value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.singlePhaseReading}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Current Reading  */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Current Reading (KVAH)')}
                </Text>
                {/* Current Reading  value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.singlePhaseReading}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* R Phase Current */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'R Phase Current (A)')}
                </Text>
                {/* R Phase Current value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.RPhaseCurrent}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 1,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* R Phase Voltage */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'R Phase Voltage (V)')}
                </Text>
                {/* R Phase Voltage value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.RPhaseVoltage}
                </Text>
              </View>
              {/* View  */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 1,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Y Phase Current */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Y Phase Current (A)')}
                </Text>
                {/* Y Phase Current value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.YPhaseCurrent}
                </Text>
              </View>
              {/* View   */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 1,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Y Phase Voltage */}
                <>
                  {!transalate(Variables, 'Y Phase Voltage (V)') ? null : (
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'flex-start',
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_500Medium',
                          lineHeight: 20,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Y Phase Voltage (V)')}
                    </Text>
                  )}
                </>
                {/* Y Phase Voltage value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.YPhaseVoltage}
                </Text>
              </View>
              {/* View    */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 1,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* B Phase Current */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'B Phase Current (A)')}
                </Text>
                {/* B Phase Current value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.BPhaseCurrent}
                </Text>
              </View>
              {/* View   */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    opacity: 1,
                    paddingBottom: 10,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* B Phase Voltage */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'flex-start',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'B Phase Voltage (V)')}
                </Text>
                {/* B Phase Voltage value */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'stretch',
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_500Medium',
                      lineHeight: 20,
                    },
                    dimensions.width
                  )}
                >
                  {onprereads?.BPhaseVoltage}
                </Text>
              </View>
            </AccordionGroup>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(PresentReadingScreen);
