import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import * as WebBrowser from 'expo-web-browser';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const RechargeGuestScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [addAmount1, setAddAmount1] = React.useState(100);
  const [addAmount2, setAddAmount2] = React.useState(250);
  const [addAmountt3, setAddAmountt3] = React.useState(450);
  const [amount1, setAmount1] = React.useState(100);
  const [amountErrorMsg, setAmountErrorMsg] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [numberInputValue3, setNumberInputValue3] = React.useState('');
  const [radioButtonGroup2Value, setRadioButtonGroup2Value] =
    React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [rechargeAmount, setRechargeAmount] = React.useState('');
  const [rechargedetails, setRechargedetails] = React.useState({});
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [updatedAmount, setUpdatedAmount] = React.useState('');
  const validateScno = scNo => {
    var errorMessage = null;
    if (!scNo.trim()) {
      errorMessage = 'Service connection number is required';
    }
    return errorMessage;
  };

  const validateAmount = amount => {
    var errorMessage = null;
    var amountValue = null;
    amountValue = amount.toString();
    console.log('amount' + amountValue);
    if (amountValue.length == 0) {
      errorMessage = 'Amount is required';
    }
    return errorMessage;
  };

  const advanceAmountFun = (buttonValue, amountInput, updatedAmountValue) => {
    console.log('Amount' + amountInput);
    let updatedValue = 0;
    if (updatedAmountValue == 0) {
      updatedValue = amountInput + buttonValue + updatedAmountValue;
    } else {
      updatedValue = buttonValue + updatedAmountValue;
    }
    console.log('updatedValue' + updatedValue);

    return updatedValue;
  };

  const amountDisplayFun = amount => {
    console.log('amount' + amount);
    if (amount != null) {
      setrechargeAmount(amount);
    }
  };

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
          {transalate(Variables, 'Recharge Now')}
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
          { marginTop: 40, paddingBottom: 20 },
          dimensions.width
        )}
      >
        {/* Payment summary */}
        <View>
          {/* Enter details */}
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
            {/* Service connection number */}
            <View
              {...GlobalStyles.ViewStyles(theme)['user name 2'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['user name 2'].style,
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors['Medium']}
                name={'MaterialIcons/house'}
              />
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingLeft: 10, paddingRight: 10 },
                  dimensions.width
                )}
              >
                <TextInput
                  autoCapitalize={'none'}
                  autoCorrect={true}
                  changeTextDelay={500}
                  onChangeText={newTextInputValue => {
                    try {
                      setGlobalVariableValue({
                        key: 'consumerScNo',
                        value: newTextInputValue,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  webShowOutline={true}
                  editable={false}
                  placeholder={transalate(
                    Variables,
                    'Service connection number'
                  ).toString()}
                  placeholderTextColor={theme.colors['Medium']}
                  style={StyleSheet.applyWidth(
                    {
                      borderRadius: 8,
                      fontFamily: 'Roboto_400Regular',
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      paddingTop: 8,
                    },
                    dimensions.width
                  )}
                  value={Constants['consumerScNo']}
                />
              </View>
            </View>
            {/* service connection Error Mgs */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Error'],
                    fontFamily: 'Roboto_400Regular',
                  }
                ),
                dimensions.width
              )}
            >
              {scnoErrorMsg}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  opacity: 1,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Amount */}
              <View
                {...GlobalStyles.ViewStyles(theme)['user name 3'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.ViewStyles(theme)['user name 3'].style,
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors['Medium']}
                  name={'FontAwesome/rupee'}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 10, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <NumberInput
                    changeTextDelay={500}
                    onChangeText={newNumberInputValue => {
                      try {
                        setUpdatedAmount(newNumberInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    {...GlobalStyles.NumberInputStyles(theme)['Number Input']
                      .props}
                    editable={true}
                    placeholder={'Amount'}
                    placeholderTextColor={theme.colors['Medium']}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.NumberInputStyles(theme)['Number Input']
                        .style,
                      dimensions.width
                    )}
                    value={updatedAmount}
                  />
                </View>
              </View>
              {/* Amount valid message */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Error'],
                      fontFamily: 'Roboto_400Regular',
                    }
                  ),
                  dimensions.width
                )}
              >
                {amountErrorMsg}
              </Text>
              {/* Mobile */}
              <View
                {...GlobalStyles.ViewStyles(theme)['uname'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['uname'].style,
                    { marginTop: 20 }
                  ),
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <Button
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setAddAmount1(100);
                        const amountResult = advanceAmountFun(
                          addAmount1,
                          updatedAmount,
                          updatedAmount
                        );
                        console.log(amountResult);
                        setUpdatedAmount(amountResult);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'+₹100'}
                  />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <Button
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setAddAmount2(250);
                        const amountResult = advanceAmountFun(
                          addAmount2,
                          updatedAmount,
                          updatedAmount
                        );
                        console.log(amountResult);
                        setUpdatedAmount(amountResult);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'+₹250'}
                  />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <Button
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setAddAmountt3(450);
                        const amountResult = advanceAmountFun(
                          addAmountt3,
                          updatedAmount,
                          updatedAmount
                        );
                        console.log(amountResult);
                        setUpdatedAmount(amountResult);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'+₹450'}
                  />
                </View>
              </View>
            </View>
            {/* Section Header */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Section Header'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Section Header'].style,
                dimensions.width
              )}
            >
              {/* Heading */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 14,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Select Payment Method')}
              </Text>
            </View>
            {/* Payment Methods */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Payment Methods 2'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Payment Methods 2'].style,
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 12, overflow: 'hidden' },
                  dimensions.width
                )}
              >
                <RadioButtonGroup
                  onValueChange={newRadioButtonGroupValue => {
                    try {
                      setRadioButtonGroupValue(newRadioButtonGroupValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={radioButtonGroupValue}
                >
                  {/* Payment Methods */}
                  <CISAPPApi.FetchPaymentGatewayPOST>
                    {({ loading, error, data, refetchPaymentGateway }) => {
                      const paymentMethodsData = data?.json;
                      if (loading) {
                        return <ActivityIndicator />;
                      }

                      if (error || data?.status < 200 || data?.status >= 300) {
                        return <ActivityIndicator />;
                      }

                      return (
                        <FlashList
                          data={
                            paymentMethodsData && paymentMethodsData[0].data
                          }
                          estimatedItemSize={50}
                          horizontal={false}
                          inverted={false}
                          keyExtractor={(flashListData, index) =>
                            flashListData?.id
                          }
                          listKey={'dm4NiMcx'}
                          numColumns={1}
                          onEndReachedThreshold={0.5}
                          renderItem={({ item, index }) => {
                            const flashListData = item;
                            return (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    height: 64,
                                    justifyContent: 'space-between',
                                    paddingBottom: 10,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    paddingTop: 10,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Image
                                  resizeMode={'cover'}
                                  source={{
                                    uri: `${flashListData?.attachment}`,
                                  }}
                                  style={StyleSheet.applyWidth(
                                    { height: 18, width: 60 },
                                    dimensions.width
                                  )}
                                />
                                <View
                                  style={StyleSheet.applyWidth(
                                    { flex: 1 },
                                    dimensions.width
                                  )}
                                >
                                  <RadioButtonRow
                                    color={theme.colors.primary}
                                    unselectedColor={theme.colors.primary}
                                    label={flashListData?.name}
                                    style={StyleSheet.applyWidth(
                                      { fontFamily: 'Inter_500Medium' },
                                      dimensions.width
                                    )}
                                    value={flashListData?.id}
                                  />
                                </View>
                              </View>
                            );
                          }}
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                          contentContainerStyle={StyleSheet.applyWidth(
                            {
                              borderRadius: 12,
                              overflow: 'hidden',
                              paddingBottom: 10,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        />
                      );
                    }}
                  </CISAPPApi.FetchPaymentGatewayPOST>
                </RadioButtonGroup>
              </View>
            </View>
          </View>
        </View>
        {/* Pay */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                const scnoErrorMsg = validateScno(Constants['consumerScNo']);
                const amountErrorMsg = validateAmount(updatedAmount);
                setScnoErrorMsg(scnoErrorMsg);
                setAmountErrorMsg(amountErrorMsg);
                if (scnoErrorMsg?.length) {
                  return;
                }
                if (amountErrorMsg?.length) {
                  return;
                }
                const recdet = (
                  await CISAPPApi.consumerDetailsPOST(Constants, {
                    accno: Constants['consumerScNo'],
                  })
                )?.json;
                console.log(recdet);
                const recdett = recdet && recdet[0].data;
                setRechargedetails(recdett);
                const paymentJson = (
                  await CISAPPApi.rechargeProcessPOST(Constants, {
                    accno: (() => {
                      const e = recdett?.accountNo;
                      console.log(e);
                      return e;
                    })(),
                    amount: (() => {
                      const e = updatedAmount;
                      console.log(e);
                      return e;
                    })(),
                    billid: (() => {
                      const e = recdett?.consumerId;
                      console.log(e);
                      return e;
                    })(),
                    consid: (() => {
                      const e = recdett?.meterNumber;
                      console.log(e);
                      return e;
                    })(),
                    email: 'NA',
                    from: 'APP',
                    gateway: (() => {
                      const e = radioButtonGroupValue;
                      console.log(e);
                      return e;
                    })(),
                    mobile: 'NA',
                    name: (() => {
                      const e = recdett?.name;
                      console.log(e);
                      return e;
                    })(),
                    officeName: 'NA',
                    officeid: 'NA',
                    paymentType: 'PRE',
                    scno: (() => {
                      const e = recdett?.scno;
                      console.log(e);
                      return e;
                    })(),
                    ucode: 'NA',
                  })
                )?.json;
                console.log(paymentJson);
                const url = setGlobalVariableValue({
                  key: 'payemntfinalurl',
                  value: (paymentJson && paymentJson[0].data)?.data,
                });
                await WebBrowser.openBrowserAsync(`${url}`);
                navigation.navigate('RechargeConfirmationGuestScreen', {
                  serviceConnectionNo: props.route?.params?.serviceConNo ?? '',
                  Name: props.route?.params?.Name ?? '',
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['GetFit Orange'],
              borderRadius: 14,
              fontFamily: 'Roboto_400Regular',
              fontSize: 16,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 35,
            },
            dimensions.width
          )}
          title={`${transalate(Variables, 'Make Payment')}`}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RechargeGuestScreen);
