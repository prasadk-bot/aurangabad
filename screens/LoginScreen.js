import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Checkbox,
  CheckboxRow,
  Divider,
  Icon,
  ScreenContainer,
  Swiper,
  SwiperItem,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const LoginScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ERROR_MESSAGE, setERROR_MESSAGE] = React.useState('');
  const [accountno, setAccountno] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [hiddenPassword, setHiddenPassword] = React.useState(true);
  const [passswordErrorMsg, setPassswordErrorMsg] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [profileDetails, setProfileDetails] = React.useState({});
  const [serviceconnectionnumber, setServiceconnectionnumber] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [userNameErrorMsg, setUserNameErrorMsg] = React.useState('');
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const validatePassword = password => {
    var errorMessage = null;
    if (!password.trim()) {
      errorMessage = 'Password is required ';
    }
    return errorMessage;
  };

  const validateuserName = userName => {
    var errorMessage = null;
    if (!userName.trim()) {
      errorMessage = 'Username is required';
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
      msg33: 'Group Created',
      msg34: 'Group Creation Error',
      msg35: 'Added Group is Valid',
      msg36: 'Account Added Successfully',
      msg37: 'Add Account Error',
      msg38: 'Entered Account/SC Number Is Not Registered',
      msg39: 'In Request Required Parameters Not Present.',
      msg40: 'Entered OTP Not Found',
      msg41: 'OTP Sent SuccessFully To ',
      msg42: 'Email Changed Successfully',
    };

    return scheme[msg];
  };
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      console.log('this is a test');
      console.log(Constants['new_acc']);
      console.log(Constants['passac']);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Keyboard Aware Scroll View 2 */}
      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
      >
        {/* header */}
        <View
          {...GlobalStyles.ViewStyles(theme)['fef hed'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['fef hed'].style,
            dimensions.width
          )}
        >
          {/* Back Click */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 48,
              },
              dimensions.width
            )}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                size={24}
                color={theme.colors['Custom Color_2']}
                name={'Ionicons/arrow-back-sharp'}
              />
            </Touchable>
          </View>
          {/* Screen Heading */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_700Bold',
                fontSize: 18,
                marginLeft: 16,
              },
              dimensions.width
            )}
          >
            {transalate(Variables, 'Login to Your Account')}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'stretch',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingBottom: 20,
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          <View
            {...GlobalStyles.ViewStyles(theme)['VIEW'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['VIEW'].style, {
                marginTop: 10,
              }),
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['banner 3'].props}
              source={Images.Nashik}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['banner 3'].style,
                  {
                    height: [
                      { minWidth: Breakpoints.Laptop, value: 90 },
                      { minWidth: Breakpoints.Mobile, value: 76 },
                    ],
                    width: [
                      { minWidth: Breakpoints.Laptop, value: 245 },
                      { minWidth: Breakpoints.Mobile, value: 234 },
                    ],
                  }
                ),
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', marginTop: 10 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Roboto_700Bold', fontSize: 16 }
                  ),
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Utility Self Service')}
              </Text>
            </View>
          </View>
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
          {/* User Name */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['BG Gray'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
                opacity: 1,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Medium']}
              name={'Ionicons/person'}
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
                    setServiceconnectionnumber(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                editable={true}
                placeholder={transalate(Variables, 'User name').toString()}
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
                value={serviceconnectionnumber}
              />
            </View>
          </View>
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
            {transalate(Variables, userNameErrorMsg)}
          </Text>
          {/* Password */}
          <>
            {!hiddenPassword ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['BG Gray'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 16,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'space-between',
                    marginTop: 15,
                    paddingLeft: 20,
                    paddingRight: 20,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors['Medium']}
                  name={'FontAwesome/lock'}
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
                        setPassword(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    editable={true}
                    maxLength={12}
                    placeholder={transalate(Variables, 'Password').toString()}
                    placeholderTextColor={theme.colors['Medium']}
                    secureTextEntry={true}
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
                    value={password}
                  />
                </View>
                <Checkbox
                  onPress={newCheckboxValue => {
                    const checkboxValue = newCheckboxValue;
                    try {
                      undefined;
                      setVisiblePassword(true);
                      setHiddenPassword(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  checkedIcon={'Ionicons/eye-off'}
                  status={checkboxValue}
                  uncheckedIcon={'Ionicons/eye-off'}
                />
              </View>
            )}
          </>
          {/* Password */}
          <>
            {!visiblePassword ? null : (
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['BG Gray'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors['Divider'],
                    borderLeftWidth: 1,
                    borderRadius: 16,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'space-between',
                    marginTop: 15,
                    paddingLeft: 20,
                    paddingRight: 20,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors['Custom Color_20']}
                  name={'FontAwesome/lock'}
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
                        setPassword(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    editable={true}
                    maxLength={12}
                    placeholder={transalate(Variables, 'Password').toString()}
                    placeholderTextColor={theme.colors['Custom Color_20']}
                    secureTextEntry={false}
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
                    value={password}
                  />
                </View>
                <Checkbox
                  onPress={newCheckboxValue => {
                    const checkboxValue = newCheckboxValue;
                    try {
                      setHiddenPassword(true);
                      setVisiblePassword(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  checkedIcon={'Ionicons/eye'}
                  status={checkboxValue}
                  uncheckedIcon={'Ionicons/eye'}
                />
              </View>
            )}
          </>
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
            {passswordErrorMsg}
          </Text>
          {/* Sign in */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  const userNameErrorMsg = validateuserName(
                    serviceconnectionnumber
                  );
                  const passswordErrorMsg = validatePassword(password);
                  setUserNameErrorMsg(userNameErrorMsg);
                  setPassswordErrorMsg(passswordErrorMsg);
                  if (userNameErrorMsg?.length) {
                    return;
                  }
                  if (passswordErrorMsg?.length) {
                    return;
                  }
                  const logindata = (
                    await CISAPPApi.loginPOST(Constants, {
                      accountno: serviceconnectionnumber,
                      pwd: password,
                    })
                  )?.json;
                  console.log(logindata);
                  const messagejson = logindata?.[0].data?.error?.message;
                  setERROR_MESSAGE(messagejson);
                  const accountIdJson = (logindata && logindata[0])?.data[0]
                    ?.data?.ACCOUNT_ID;
                  const emailJson = (logindata && logindata[0])?.data[0]?.data
                    ?.EMAIL;
                  const mobileNumberJson = (logindata && logindata[0])?.data[0]
                    ?.data?.MOBILE_NUMBER;
                  const userIdJson = (logindata && logindata[0])?.data[0]?.data
                    ?.ID;
                  const consumerNoJson = (logindata && logindata[0])?.data[0]
                    ?.data?.CONSUMER_NUMBER;
                  setGlobalVariableValue({
                    key: 'name',
                    value: accountIdJson,
                  });
                  setGlobalVariableValue({
                    key: 'email',
                    value: emailJson,
                  });
                  setGlobalVariableValue({
                    key: 'mobileNumber',
                    value: mobileNumberJson,
                  });
                  setGlobalVariableValue({
                    key: 'userId',
                    value: (() => {
                      const e = userIdJson;
                      console.log(e);
                      return e;
                    })(),
                  });
                  setGlobalVariableValue({
                    key: 'consumerNo',
                    value: consumerNoJson,
                  });
                  if (messagejson?.length) {
                    return;
                  }
                  navigation.navigate('DashboardScreen', {
                    Name: serviceconnectionnumber,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 14,
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                marginBottom: 15,
                marginTop: 20,
                width: '100%',
              },
              dimensions.width
            )}
            title={`${transalate(Variables, 'Login')}`}
          />
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
              },
              dimensions.width
            )}
          >
            {/* Login with OTP */}
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('LoginOTPScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'flex-start',
                    flexDirection: 'row',
                    paddingBottom: 10,
                    paddingTop: 10,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color'],
                      fontFamily: 'Roboto_500Medium',
                      fontSize: 15,
                      marginLeft: 10,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Login with OTP')}
                </Text>
              </View>
            </Touchable>
            {/* Forgot Password */}
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('ForgotpasswordScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingBottom: 10,
                    paddingTop: 10,
                  },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors['Custom Color'],
                      fontFamily: 'Roboto_500Medium',
                      fontSize: 15,
                      marginLeft: 10,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Forgot password?')}
                </Text>
              </View>
            </Touchable>
          </View>
          {/* Sign up */}
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'passac',
                  value: '',
                });
                navigation.navigate('RegisterScreen');
                /* hidden 'Navigate' action */
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Medium'],
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 15,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Don’t have an account?')}
              </Text>

              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 15,
                    marginLeft: 7,
                    textDecorationLine: 'underline',
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Register')}
              </Text>
            </View>
          </Touchable>
          {/* Promotions 2 */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'stretch', marginTop: 8, width: '100%' },
              dimensions.width
            )}
          >
            <CISAPPApi.FetchBANNERSPOST>
              {({ loading, error, data, refetchBANNERS }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <Swiper
                    data={fetchData && fetchData[0].data}
                    dotActiveColor={theme.colors.primary}
                    dotColor={theme.colors.light}
                    dotsTouchable={true}
                    keyExtractor={(swiperData, index) =>
                      swiperData?.id ?? swiperData?.uuid ?? index.toString()
                    }
                    listKey={'X9oCUCxD'}
                    loop={false}
                    minDistanceForAction={0.2}
                    minDistanceToCapture={5}
                    renderItem={({ item, index }) => {
                      const swiperData = item;
                      return (
                        <>
                          {!swiperData ? null : (
                            <SwiperItem
                              style={StyleSheet.applyWidth(
                                {
                                  alignSelf: 'stretch',
                                  height: 108,
                                  width: '100%',
                                },
                                dimensions.width
                              )}
                            >
                              {/* banner */}
                              <Image
                                resizeMode={'cover'}
                                {...GlobalStyles.ImageStyles(theme)['banner 3']
                                  .props}
                                source={{ uri: `${swiperData?.attachment}` }}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.ImageStyles(theme)['banner 3']
                                      .style,
                                    {
                                      borderRadius: 8,
                                      height: 108,
                                      width: '100%',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              />
                            </SwiperItem>
                          )}
                        </>
                      );
                    }}
                    timeout={0}
                    vertical={false}
                    {...GlobalStyles.SwiperStyles(theme)['Swiper'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.SwiperStyles(theme)['Swiper'].style,
                        {
                          alignSelf: 'auto',
                          backgroundColor: 'rgb(255, 255, 255)',
                          borderColor: 'rgb(222, 221, 221)',
                          height: 108,
                          position: 'relative',
                        }
                      ),
                      dimensions.width
                    )}
                  />
                );
              }}
            </CISAPPApi.FetchBANNERSPOST>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* bottom */}
      <View
        {...GlobalStyles.ViewStyles(theme)['bottom'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['bottom'].style, {
            alignContent: 'center',
            alignItems: 'flex-end',
            alignSelf: 'auto',
            borderColor: theme.colors['Custom #d8d8d8'],
            borderTopWidth: 1,
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 20,
          }),
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: 'rgb(0,0,0)',
              fontFamily: 'Roboto_400Regular',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {transalate(Variables, 'Powered by Fluentgrid ')}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LoginScreen);
