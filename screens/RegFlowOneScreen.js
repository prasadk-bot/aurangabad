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
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import { FlatList, Image, Text, View } from 'react-native';

const RegFlowOneScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ERROR_MESSAGE, setERROR_MESSAGE] = React.useState('');
  const [billIssuee, setBillIssuee] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [existAcct, setExistAcct] = React.useState('');
  const [getcondetails, setGetcondetails] = React.useState({});
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [newAcct, setNewAcct] = React.useState('');
  const [numberres, setNumberres] = React.useState('');
  const [passaanoo, setPassaanoo] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);
  const [visibleHindi, setVisibleHindi] = React.useState(false);
  const validateScno = scNo => {
    var errorMessage = null;
    if (!scNo.trim()) {
      errorMessage = 'Account / consumer number is required';
    }
    return errorMessage;
  };

  const billIssue = billingStatus => {
    var errorMessage = null;
    if (billingStatus == 'P') {
      errorMessage =
        'Selected/EnteredAccount/SC Number Permanently Disconnected';
    } else if (billingStatus == 'C') {
      errorMessage = 'Selected/EnteredAccount/SC Number Permanently Closed';
    }

    return errorMessage;
  };

  const processErrorMessage = msg => {
    const scheme = {
      msg1: 'Password Changed Successfully',
      msg2: 'Problem while Sending OTP SMS',
      msg3: 'OTP send SuccessFully TO the existing Mobile',
      msg4: 'Input password details not same as in DB !',
      msg5: 'The user is already registered',
      msg6: 'Please enter valid consumer number',
      msg7: 'Invalid OTP',
      msg8: 'Problem while creating an user',
      msg9: 'User Creation Done Successfully',
      msg10: 'Mobile Number Doesnot exist for this consumer!',
      msg11: 'Problem while generating OTP!',
      msg12: 'Email ID Doesnot exist for this consumer in registration Table',
      msg13: 'OTP sent to your Registred Email Address',
      msg14: 'The OTP has expired!',
      msg15: 'Problem while updating password!',
      msg16: 'Existing email not Found',
      msg17: 'password details not found in the input data!',
      msg18: 'Old password and New Password must not be same !',
      msg19: 'Problem while updating password',
      msg20: 'OTP sent SuccessFully',
      msg21: 'Phone Number Changed Successfully',
      msg22: 'Logical Error',
      msg23: 'Entered consumer number is already registered',
      msg24: 'Entered consumer number already mapped',
      msg26: 'Accounts added for the existing consumer limit is exceeded',
      msg27: 'Should not same login account and entered account',
      msg28: '* Invalid Consumer Number',
      msg29: '* Invalid Credentials',
      msg30: 'Invalid Password',
      msg31: 'OTP Limit Exceeded, Please Try Again!',
      msg32: "Account Dosen't Have SmartMeter",
      msg31: 'OTP Limit Exceeded, Please Try Again!',
      msg32: "Account Dosen't Have SmartMeter",
      msg33: 'Group Created',
      msg34: 'Group Creation Error',
      msg35: 'Added Group is Valid',
      msg36: 'Account Added Successfully',
      msg37: 'Add Account Error',
    };

    return scheme[msg];
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'column' },
        dimensions.width
      )}
    >
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, flexBasis: 1, justifyContent: 'flex-start' },
          dimensions.width
        )}
      >
        {/* Header */}
        <View
          {...GlobalStyles.ViewStyles(theme)['Header 3'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['Header 3'].style,
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
            {transalate(Variables, 'Registration Process')}
          </Text>
        </View>
        {/* amblock */}
        <View
          style={StyleSheet.applyWidth(
            {
              justifyContent: 'flex-start',
              marginTop: 60,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          {/* error message */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'flex-start',
                color: theme.colors['Error'],
                fontFamily: 'Roboto_400Regular',
              }),
              dimensions.width
            )}
          >
            {processErrorMessage(ERROR_MESSAGE)}
          </Text>
          {/* Service connection number */}
          <View
            {...GlobalStyles.ViewStyles(theme)['user name'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['user name'].style,
                { height: 50, paddingLeft: 20, paddingRight: 10 }
              ),
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
                    setNewAcct(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                editable={true}
                placeholder={transalate(
                  Variables,
                  'Account/Consumer number'
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
                value={newAcct}
              />
            </View>
          </View>
          {/* New service connection error message */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'flex-start',
                color: theme.colors['Error'],
                fontFamily: 'Roboto_400Regular',
                paddingBottom: 20,
              }),
              dimensions.width
            )}
          >
            {transalate(Variables, scnoErrorMsg)}
          </Text>
          {/* Submit */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  const scnoErrorMsg = validateScno(newAcct);
                  setScnoErrorMsg(scnoErrorMsg);
                  if (scnoErrorMsg?.length) {
                    return;
                  }
                  const adsercondetresult = (
                    await CISAPPApi.regGetConsumerDetailsPOST(Constants, {
                      accno: newAcct,
                    })
                  )?.json;
                  const messagejson =
                    adsercondetresult?.[0].data?.error?.message;
                  setERROR_MESSAGE(messagejson);
                  setGlobalVariableValue({
                    key: 'new_acc',
                    value: (() => {
                      const e = newAcct;
                      console.log(e);
                      return e;
                    })(),
                  });
                  const getcondetails = adsercondetresult?.[0].data;
                  setGetcondetails(
                    (() => {
                      const e = getcondetails;
                      console.log(e);
                      return e;
                    })()
                  );
                  if (messagejson?.length) {
                    return;
                  }
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            {...GlobalStyles.ButtonStyles(theme)['Submit'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Submit'].style,
                { borderRadius: 14, fontSize: 16 }
              ),
              dimensions.width
            )}
            title={`${transalate(Variables, 'Search')}`}
          />
        </View>
        {/* test */}
        <>
          {!getcondetails ? null : (
            <View
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  marginTop: 30,
                  minHeight: 300,
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              {/* message */}
              <>
                {!newAcct ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors['Custom Color_6'],
                        borderRadius: 4,
                        flexDirection: 'row',
                        height: 40,
                        paddingLeft: 8,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors['Primary']}
                      name={'Ionicons/ios-information-circle-outline'}
                      size={20}
                    />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_300Light',
                          fontSize: 14,
                          marginLeft: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(
                        Variables,
                        'Select the account number and continue'
                      )}
                    </Text>
                  </View>
                )}
              </>
              <RadioButtonGroup
                onValueChange={newRadioButtonGroupValue => {
                  const radioButtonGroupValue = newRadioButtonGroupValue;
                  try {
                    setRadioButtonGroupValue2(newRadioButtonGroupValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                value={radioButtonGroupValue2}
              >
                <FlatList
                  data={getcondetails}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(listData, index) => listData}
                  keyboardShouldPersistTaps={'never'}
                  listKey={'KubXu09A'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <>
                        <Touchable
                          onPress={() => {
                            try {
                              const finalANo = setGlobalVariableValue({
                                key: 'passac',
                                value: listData?.accountNo,
                              });
                              setGlobalVariableValue({
                                key: 'passac',
                                value: finalANo,
                              });

                              const valueuzqwUSrq = listData?.billingStatus;
                              setBillIssuee(valueuzqwUSrq);
                              const bs = valueuzqwUSrq;
                              setBillIssuee(bs);
                              console.log(Constants['passac']);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderColor: theme.colors['Custom #acacac'],
                                borderRadius: 2,
                                borderWidth: 1,
                                flexDirection: 'row',
                                marginTop: 20,
                                paddingLeft: 5,
                                paddingRight: 3,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Radio Button 2 */}
                            <RadioButton
                              color={theme.colors.primary}
                              onPress={() => {
                                try {
                                  const finalANo = setGlobalVariableValue({
                                    key: 'passac',
                                    value: listData?.accountNo,
                                  });
                                  setGlobalVariableValue({
                                    key: 'passac',
                                    value: finalANo,
                                  });

                                  const valueAV96GpIk = listData?.billingStatus;
                                  setBillIssuee(valueAV96GpIk);
                                  const bs = valueAV96GpIk;
                                  setBillIssuee(bs);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              selectedIcon={
                                'MaterialIcons/radio-button-checked'
                              }
                              size={24}
                              unselectedColor={theme.colors.primary}
                              unselectedIcon={
                                'MaterialIcons/radio-button-unchecked'
                              }
                              value={listData?.accountNo}
                            />
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  backgroundColor: theme.colors['White'],
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
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 15,
                                      marginBottom: 5,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {transalate(Variables, 'Account No')}
                                  {': '}
                                  {listData?.accountNo}
                                </Text>
                                {/* Name 2 */}
                                <Text
                                  accessible={true}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 15,
                                      marginBottom: 5,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {transalate(Variables, 'Name')}
                                  {': '}
                                  {listData?.name}
                                </Text>
                                {/* Relation */}
                                <Text
                                  accessible={true}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.strong,
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 15,
                                      opacity: 1,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {transalate(Variables, 'Division')}
                                  {': '}
                                  {listData?.division}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </Touchable>
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                />
              </RadioButtonGroup>
              {/* error */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { color: theme.colors['Error'], paddingTop: 10 }
                  ),
                  dimensions.width
                )}
              >
                {numberres}
              </Text>
            </View>
          )}
        </>
        <>
          {!radioButtonGroupValue2 ? null : (
            <Button
              iconPosition={'left'}
              onPress={() => {
                try {
                  const jsonres = billIssue(billIssuee);
                  setNumberres(jsonres);
                  if (jsonres?.length) {
                    return;
                  }
                  navigation.navigate('RegisterScreen', {
                    selectaccountno: Constants['passac'],
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                  {
                    borderRadius: 14,
                    fontSize: 16,
                    marginBottom: 45,
                    marginLeft: 20,
                    marginRight: 20,
                  }
                ),
                dimensions.width
              )}
              title={`${transalate(Variables, 'Continue')}`}
            />
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RegFlowOneScreen);
