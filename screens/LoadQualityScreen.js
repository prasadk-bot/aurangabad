import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import * as Load from '../custom-files/Load';
import * as PowerQualityCurrent from '../custom-files/PowerQualityCurrent';
import * as PowerQualityPowerFactor from '../custom-files/PowerQualityPowerFactor';
import * as PowerVoltage from '../custom-files/PowerVoltage';
import transalate from '../global-functions/transalate';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  Picker,
  RadioButton,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { Image, ScrollView, Text, View } from 'react-native';

const LoadQualityScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [ShowNav, setShowNav] = React.useState(false);
  const [currentScreen, setCurrentScreen] = React.useState({});
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [loadpatterndeatils, setLoadpatterndeatils] = React.useState({});
  const [meterNumber, setMeterNumber] = React.useState({});
  const [powerfactorScreen, setPowerfactorScreen] = React.useState({});
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('content');
  const [serviceConNumber, setServiceConNumber] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [visibleHindi, setVisibleHindi] = React.useState(false);
  const [voltageScreen, setVoltageScreen] = React.useState({});
  const buildConsumerString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  const convertDateMonthYearToDateMonth = dateString => {
    const [day, monthIndex, year] = dateString.split(' ');
    const month = months[parseInt(monthIndex) - 1];
    console.log('month' + month);
    const str = '${month};';
    return str;
  };
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        setTextInputValue(Constants['name']);
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            accno: Constants['name'],
          })
        )?.json;
        console.log(consumerDetailsJson);
        const meterNo = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.meterNumber;
        setMeterNumber(meterNo && meterNo[0].data);
        console.log(meterNo);
        const loadpatternJson = (
          await CISAPPApi.loadPatternPOST(Constants, {
            accountno: Constants['name'],
            days: 30,
            mtrno: meterNo,
          })
        )?.json;
        console.log(loadpatternJson);

        const valueEUkqkMfn = loadpatternJson && loadpatternJson[0].data.data;
        setLoadpatterndeatils(valueEUkqkMfn);
        const loadpattern = valueEUkqkMfn;
        const voltageJson = (
          await CISAPPApi.powerQualityVoltagePOST(Constants, {
            accountno: Constants['name'],
            days: 30,
            mtrno: meterNo,
          })
        )?.json;
        console.log(voltageJson);

        const valuebcxGb3ha = voltageJson && voltageJson[0].data;
        setVoltageScreen(valuebcxGb3ha);
        const voltage = valuebcxGb3ha;
        const currentJson = (
          await CISAPPApi.powerQualityCurrentPOST(Constants, {
            accountno: Constants['name'],
            days: 30,
            mtrno: meterNo,
          })
        )?.json;
        console.log(currentJson);

        const valuewchLhRVq = currentJson && currentJson[0].data;
        setCurrentScreen(valuewchLhRVq);
        const current = valuewchLhRVq;
        const powerfactorJson = (
          await CISAPPApi.powerQualityPowerFactorPOST(Constants, {
            accountno: Constants['name'],
            days: 30,
            mtrno: meterNo,
          })
        )?.json;
        console.log(powerfactorJson);

        const valuerKvHy12l = powerfactorJson && powerfactorJson[0].data;
        setPowerfactorScreen(valuerKvHy12l);
        const powerfactor = valuerKvHy12l;
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'row' },
        dimensions.width
      )}
    >
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-around' },
          dimensions.width
        )}
      >
        {/* headerp */}
        <View
          {...GlobalStyles.ViewStyles(theme)['headerp 3'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['headerp 3'].style,
              { marginTop: 45 }
            ),
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
          {/* Load and quality */}
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
            {transalate(Variables, 'Load and Quality')}
          </Text>
        </View>

        <ScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          {/* Body */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, justifyContent: 'space-around' },
              dimensions.width
            )}
          >
            {/* amblock */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              {/* picker1 */}
              <View
                {...GlobalStyles.ViewStyles(theme)['category'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['category'].style,
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 16,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      marginBottom: 20,
                      paddingLeft: 20,
                      paddingRight: 20,
                    }
                  ),
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
                        setTextInputValue(newPickerValue);
                        const consumerDetailsJson = (
                          await CISAPPApi.consumerDetailsPOST(Constants, {
                            accno: newPickerValue,
                          })
                        )?.json;
                        console.log(consumerDetailsJson);
                        const prepaidFlag = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.prepaidFlag;
                        console.log(prepaidFlag);
                        const meterNo = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.meterNumber;
                        console.log(meterNo);
                        const loadpatternJson = (
                          await CISAPPApi.loadPatternPOST(Constants, {
                            accountno: newPickerValue,
                            days: radioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(loadpatternJson);

                        const valued8yeDb5x = newPickerValue;
                        setTextInputValue(valued8yeDb5x);
                        const loadpattern = valued8yeDb5x;
                        const voltageJson = (
                          await CISAPPApi.powerQualityVoltagePOST(Constants, {
                            accountno: newPickerValue,
                            days: radioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(voltageJson);

                        const valueGnap9EUr =
                          voltageJson && voltageJson[0].data;
                        setVoltageScreen(valueGnap9EUr);
                        const voltage = valueGnap9EUr;
                        const currentJson = (
                          await CISAPPApi.powerQualityCurrentPOST(Constants, {
                            accountno: newPickerValue,
                            days: radioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(currentJson);

                        const valueneYqQbxG =
                          currentJson && currentJson[0].data;
                        setCurrentScreen(valueneYqQbxG);
                        const current = valueneYqQbxG;
                        const powerfactorJson = (
                          await CISAPPApi.powerQualityPowerFactorPOST(
                            Constants,
                            {
                              accountno: newPickerValue,
                              days: radioButtonGroupValue,
                              mtrno: meterNo,
                            }
                          )
                        )?.json;
                        console.log(powerfactorJson);

                        const valueMRaWecea =
                          powerfactorJson && powerfactorJson[0].data;
                        setPowerfactorScreen(valueMRaWecea);
                        const powerfactor = valueMRaWecea;
                        setServiceConNumber(newPickerValue);
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
                      width: '95%',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                />
              </View>
              {/* Radiobutton view */}
              <View
                {...GlobalStyles.ViewStyles(theme)['View11'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['View11'].style,
                    { flexDirection: 'column', justifyContent: 'space-between' }
                  ),
                  dimensions.width
                )}
              >
                <RadioButtonGroup
                  onValueChange={newRadioButtonGroupValue => {
                    const handler = async () => {
                      try {
                        console.log(newRadioButtonGroupValue);
                        const consumerDetailsJson = (
                          await CISAPPApi.consumerDetailsPOST(Constants, {
                            accno: textInputValue,
                          })
                        )?.json;
                        console.log(consumerDetailsJson);
                        const prepaidFlag = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.prepaidFlag;
                        console.log(prepaidFlag);
                        const meterNo = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.meterNumber;
                        console.log(meterNo);
                        const loadpatternJson = (
                          await CISAPPApi.loadPatternPOST(Constants, {
                            accountno: textInputValue,
                            days: newRadioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(loadpatternJson);
                        const voltageJson = (
                          await CISAPPApi.powerQualityVoltagePOST(Constants, {
                            accountno: textInputValue,
                            days: newRadioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(voltageJson);

                        const valuevbK3wQTN =
                          voltageJson && voltageJson[0].data;
                        setVoltageScreen(valuevbK3wQTN);
                        const voltage = valuevbK3wQTN;
                        console.log(voltageJson);
                        const currentJson = (
                          await CISAPPApi.powerQualityCurrentPOST(Constants, {
                            accountno: textInputValue,
                            days: newRadioButtonGroupValue,
                            mtrno: meterNo,
                          })
                        )?.json;
                        console.log(currentJson);

                        const valuemD0U6YX7 =
                          currentJson && currentJson[0].data;
                        setCurrentScreen(valuemD0U6YX7);
                        const current = valuemD0U6YX7;
                        const powerfactorJson = (
                          await CISAPPApi.powerQualityPowerFactorPOST(
                            Constants,
                            {
                              accountno: textInputValue,
                              days: newRadioButtonGroupValue,
                              mtrno: meterNo,
                            }
                          )
                        )?.json;
                        console.log(powerfactorJson);

                        const valueXFXe8t0b =
                          powerfactorJson && powerfactorJson[0].data;
                        setPowerfactorScreen(valueXFXe8t0b);
                        const powerfactor = valueXFXe8t0b;
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
                        width: '100%',
                      },
                      dimensions.width
                    )}
                  >
                    <RadioButtonRow
                      color={theme.colors.primary}
                      unselectedColor={theme.colors.primary}
                      direction={'row-reverse'}
                      label={transalate(
                        Variables,
                        transalate(Variables, '7Days')
                      )}
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
                      label={transalate(Variables, '15Days')}
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
                      label={transalate(Variables, '30Days')}
                      style={StyleSheet.applyWidth(
                        { fontFamily: 'Roboto_400Regular', fontSize: 14 },
                        dimensions.width
                      )}
                      value={30}
                    />
                  </View>
                </RadioButtonGroup>
              </View>
              {/* section header */}
              <View
                {...GlobalStyles.ViewStyles(theme)['section header 2'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['section header 2'].style,
                    {
                      flexDirection: 'column',
                      justifyContent: 'center',
                      paddingBottom: 12,
                      paddingTop: 15,
                    }
                  ),
                  dimensions.width
                )}
              >
                {/* Heading */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'center',
                      color: theme.colors['ShopAppBlue'],
                      fontFamily: 'Roboto_400Regular',
                      fontSize: 16,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Load Pattern')}
                </Text>
              </View>
              {/* Dashboard */}
              <View
                {...GlobalStyles.ViewStyles(theme)['Dashboard'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['Dashboard'].style,
                  dimensions.width
                )}
              >
                <>
                  {!loadpatterndeatils?.length ? null : (
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'center', flex: 1, width: '100%' },
                        dimensions.width
                      )}
                    >
                      <Utils.CustomCodeErrorBoundary>
                        <Load.LineChartComponent2
                          loadpatterndeatils={loadpatterndeatils}
                        />
                      </Utils.CustomCodeErrorBoundary>
                    </View>
                  )}
                </>
              </View>
              {/* section header */}
              <View
                {...GlobalStyles.ViewStyles(theme)['section header 2'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['section header 2'].style,
                    {
                      flexDirection: 'column',
                      justifyContent: 'center',
                      paddingBottom: 20,
                      paddingTop: 15,
                    }
                  ),
                  dimensions.width
                )}
              >
                {/* Heading */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      alignSelf: 'center',
                      color: theme.colors['ShopAppBlue'],
                      fontFamily: 'Roboto_400Regular',
                      fontSize: 16,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Power Quality')}
                </Text>
              </View>
              {/* Tabs */}
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
                {/* tab1 */}
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
                  {/* content */}
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Selected */}
                    <>
                      {!(selectedTab === 'content') ? null : (
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 3,
                                borderColor: theme.colors['Primary'],
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
                              {transalate(Variables, 'Voltage')}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Unselected */}
                    <>
                      {!(selectedTab !== 'content') ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setSelectedTab('content');
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
                              {transalate(Variables, 'Voltage')}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </View>
                {/* tab2 */}
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
                  {/* content2 */}
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Selected */}
                    <>
                      {!(selectedTab === 'content2') ? null : (
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 3,
                                borderColor: theme.colors['Primary'],
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
                              {transalate(Variables, 'Current')}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Unselected */}
                    <>
                      {!(selectedTab !== 'content2') ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setSelectedTab('content2');
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
                              {transalate(Variables, 'Current')}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </View>
                {/* tab3 */}
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
                  {/* content3 */}
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Selected */}
                    <>
                      {!(selectedTab === 'content3') ? null : (
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 3,
                                borderColor: theme.colors['Primary'],
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
                              {transalate(Variables, 'Power Factor')}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                    {/* Unselected */}
                    <>
                      {!(selectedTab !== 'content3') ? null : (
                        <Touchable
                          onPress={() => {
                            try {
                              setSelectedTab('content3');
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
                              {transalate(Variables, 'Power Factor')}
                            </Text>
                          </View>
                        </Touchable>
                      )}
                    </>
                  </View>
                </View>
              </View>
              {/* content */}
              <>
                {!(selectedTab === 'content') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Dashboard'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Dashboard'].style,
                      dimensions.width
                    )}
                  >
                    <>
                      {!voltageScreen?.length ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', flex: 1, width: '100%' },
                            dimensions.width
                          )}
                        >
                          <Utils.CustomCodeErrorBoundary>
                            <PowerVoltage.BarChartExample
                              voltageScreen={voltageScreen}
                            />
                          </Utils.CustomCodeErrorBoundary>
                        </View>
                      )}
                    </>
                  </View>
                )}
              </>
              {/* content2 */}
              <>
                {!(selectedTab === 'content2') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Dashboard'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Dashboard'].style,
                      dimensions.width
                    )}
                  >
                    <>
                      {!currentScreen?.length ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', flex: 1, width: '100%' },
                            dimensions.width
                          )}
                        >
                          <Utils.CustomCodeErrorBoundary>
                            <PowerQualityCurrent.BarChartExample
                              currentScreen={currentScreen}
                            />
                          </Utils.CustomCodeErrorBoundary>
                        </View>
                      )}
                    </>
                  </View>
                )}
              </>
              {/* content3 */}
              <>
                {!(selectedTab === 'content3') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['Dashboard'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['Dashboard'].style,
                      dimensions.width
                    )}
                  >
                    <>
                      {!powerfactorScreen?.length ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            { alignItems: 'center', flex: 1, width: '100%' },
                            dimensions.width
                          )}
                        >
                          <Utils.CustomCodeErrorBoundary>
                            <PowerQualityPowerFactor.BarChartExample
                              powerfactorScreen={powerfactorScreen}
                            />
                          </Utils.CustomCodeErrorBoundary>
                        </View>
                      )}
                    </>
                  </View>
                )}
              </>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoadQualityScreen);
