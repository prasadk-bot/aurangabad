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
  Icon,
  NumberInput,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegisterScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ERROR_MESSAGE, setERROR_MESSAGE] = React.useState('');
  const [Mobileno, setMobileno] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [confirmpassword, setConfirmpassword] = React.useState('');
  const [confirmpasswordErrorMsg, setConfirmpasswordErrorMsg] =
    React.useState('');
  const [email, setEmail] = React.useState('');
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [hiddenPassword, setHiddenPassword] = React.useState(true);
  const [hiddenPassword2, setHiddenPassword2] = React.useState(true);
  const [mobilenoErrorMsg, setMobilenoErrorMsg] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = React.useState('');
  const [registerSuccessMsg, setRegisterSuccessMsg] = React.useState('');
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [serviceconnectionnumber, setServiceconnectionnumber] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const [visiblePassword2, setVisiblePassword2] = React.useState(false);
  const validateScno = scNo => {
    var errorMessage = null;
    if (!scNo.trim()) {
      errorMessage = 'Service connection number is required';
    }
    return errorMessage;
  };

  const validateEmail = email => {
    var errorMessage = null;
    if (!email.trim()) {
      errorMessage = 'Email is required';
    } else {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (!emailRegex.test(email)) {
        errorMessage = 'Invalid email';
      }
    }
    return errorMessage;
  };

  const validateConfirmPassword = confirmPassword => {
    var errorMessage = null;
    if (!confirmPassword.trim()) {
      errorMessage = 'Confirm password is required';
    }
    return errorMessage;
  };

  const passwordUpdate = (pwd, confirmPwd) => {
    console.log('Password' + pwd);
    console.log('confirmPassword' + confirmPwd);
    let customErrorMessage = null;
    if (pwd != confirmPwd) {
      customErrorMessage = 'Password and Confirm Password did not match';
      return customErrorMessage;
    }
  };

  const processErrorMessage = msg => {
    const scheme = {
      msg1: 'Password Changed Successfully',
      msg2: 'Problem while Sending OTP SMS',
      msg3: 'OTP send SuccessFully TO the existing Mobile',
      msg4: 'Input password details not same as in DB !',
      msg5: 'The user is already registered',
      // "msg6" : "Consumer already registered",
      msg6: 'You are not smart meter consumer',
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

  const validateMobileNo = mobileNo => {
    var errorMessage = null;
    var mobileNumber = null;
    mobileNumber = mobileNo.toString();
    console.log('mobileNo' + mobileNumber);
    if (mobileNumber.length == 0) {
      // console.log("mobileNumber"+mobileNumber.length);
      errorMessage = 'Mobile number is required';
    } else if (mobileNumber.length == 10) {
      console.log('number' + mobileNumber.length);
      let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
      if (!regex.test(mobileNumber)) {
        errorMessage = 'Invalid mobile number(ex: 987XXXX789)';
      }
    } else if (mobileNumber.length < 10) {
      console.log('less' + mobileNumber.length);
      errorMessage = 'Enter 10 digit mobile number';
    }
    return errorMessage;
  };

  const validatePassword = password => {
    var errorMessage = null;
    if (!password.trim()) {
      errorMessage = 'Password is required';
    } else {
      const minLength = 8; // Minimum length of the password
      const uppercaseRegex = /[A-Z]/; // Regex to check for at least one uppercase letter
      const lowercaseRegex = /[a-z]/; // Regex to check for at least one lowercase letter
      const digitRegex = /[0-9]/; // Regex to check for at least one digit
      const charactertRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/; //Regex to check for at least one special characters
      // Check the minimum length
      if (password.length < minLength) {
        return (
          'Password must be at least ' +
          minLength +
          ' characters, one upper case, one lower case, one digit, one special character.'
        );
      }

      // Check for at least one uppercase letter
      if (!uppercaseRegex.test(password)) {
        return (
          'Password must be at least ' +
          minLength +
          ' characters, one upper case, one lower case, one digit, one special character.'
        );
      }

      // Check for at least one lowercase letter
      if (!lowercaseRegex.test(password)) {
        return (
          'Password must be at least ' +
          minLength +
          ' characters, one upper case, one lower case, one digit, one special character.'
        );
      }

      // Check for at least one digit
      if (!digitRegex.test(password)) {
        return (
          'Password must be at least ' +
          minLength +
          ' characters, one upper case, one lower case, one digit, one special character.'
        );
      }
      // Check for at least one digit
      if (!charactertRegex.test(password)) {
        return (
          'Password must be at least ' +
          minLength +
          ' characters, one upper case, one lower case, one digit, one special character.'
        );
      }
      // Password is valid
      //return "Password is valid.";
    }
    //return "Password is required";
  };

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* header */}
      <View
        {...GlobalStyles.ViewStyles(theme)['fef hed'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['fef hed'].style, {
            margin: 10,
          }),
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
          {'Register'}
        </Text>
      </View>

      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        contentContainerStyle={StyleSheet.applyWidth(
          {
            alignContent: 'stretch',
            alignSelf: 'stretch',
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'stretch',
              alignItems: 'center',
              alignSelf: 'stretch',
              flex: 1,
              justifyContent: 'flex-start',
              marginBottom: 20,
              paddingLeft: 24,
              paddingRight: 24,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Logo */}
          <Image
            resizeMode={'cover'}
            source={Images.Nashik}
            style={StyleSheet.applyWidth(
              { height: 76, marginBottom: 10, marginTop: 10, width: 234 },
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
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
          {/* Error message */}
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
                    setServiceconnectionnumber(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                editable={true}
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
                value={serviceconnectionnumber}
              />
            </View>
          </View>
          {/* Scno Error message */}
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
            {transalate(Variables, scnoErrorMsg)}
          </Text>
          {/* Mobile Number */}
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
                marginTop: 20,
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
              name={'Entypo/phone'}
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
                    setMobileno(newNumberInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                webShowOutline={true}
                {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
                editable={true}
                maxLength={10}
                placeholder={'Mobile Number'}
                placeholderTextColor={theme.colors['Medium']}
                style={StyleSheet.applyWidth(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                  dimensions.width
                )}
                value={Mobileno}
              />
            </View>
          </View>
          {/* Mobileno Error message */}
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
            {mobilenoErrorMsg}
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
                    marginTop: 20,
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
                    maxLength={10}
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
                      setCheckboxValue(newCheckboxValue);
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
                    marginTop: 20,
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
                      undefined;
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
          {/* Password Error message */}
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
            {passwordErrorMsg}
          </Text>
          {/* Confirm Password */}
          <>
            {!hiddenPassword2 ? null : (
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
                    marginTop: 20,
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
                        setConfirmpassword(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    editable={true}
                    maxLength={12}
                    placeholder={transalate(
                      Variables,
                      'Confirm password'
                    ).toString()}
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
                    value={confirmpassword}
                  />
                </View>
              </View>
            )}
          </>
          {/* Confirm password Error message */}
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
            {confirmpasswordErrorMsg}
          </Text>
          {/* Error message */}
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
            {errorMessage}
          </Text>
          {/* Confirm Password */}
          <>
            {!visiblePassword2 ? null : (
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
                    marginTop: 20,
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
                        setConfirmpassword(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    editable={true}
                    maxLength={12}
                    placeholder={'Confirm password'}
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
                    value={confirmpassword}
                  />
                </View>
              </View>
            )}
          </>
          {/* Sign Up */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              const handler = async () => {
                try {
                  const scnoErrorMsg = validateScno(serviceconnectionnumber);
                  /* hidden 'Run a Custom Function' action */
                  const mobilenoErrorMsg = validateMobileNo(Mobileno);
                  const passwordErrorMsg = validatePassword(password);
                  const confirmpasswordErrorMsg =
                    validateConfirmPassword(confirmpassword);
                  const passwordResult = passwordUpdate(
                    password,
                    confirmpassword
                  );
                  setScnoErrorMsg(scnoErrorMsg);
                  /* hidden 'Set Variable' action */
                  setMobilenoErrorMsg(mobilenoErrorMsg);
                  setPasswordErrorMsg(passwordErrorMsg);
                  setConfirmpasswordErrorMsg(confirmpasswordErrorMsg);
                  setErrorMessage(passwordResult);
                  if (scnoErrorMsg?.length) {
                    return;
                  }
                  /* hidden 'Conditional Stop' action */
                  if (mobilenoErrorMsg?.length) {
                    return;
                  }
                  if (passwordErrorMsg?.length) {
                    return;
                  }
                  if (confirmpasswordErrorMsg?.length) {
                    return;
                  }
                  return;
                  if (passwordResult?.length) {
                    return;
                  }
                  setErrorMessage('');
                  console.log(passwordResult);
                  const registredvalues = (
                    await CISAPPApi.registeredPOST(Constants, {
                      accno: serviceconnectionnumber,
                      mobileNo: Mobileno,
                      password: password,
                    })
                  )?.json;
                  console.log(registredvalues);
                  const test = setGlobalVariableValue({
                    key: 'OTP_ACK_NUMBER',
                    value: (() => {
                      const e = (registredvalues && registredvalues[0])?.data[0]
                        ?.data?.id;
                      console.log(e);
                      return e;
                    })(),
                  });
                  const messagejson = registredvalues?.[0].data?.error?.message;
                  setERROR_MESSAGE(messagejson);
                  console.log(messagejson);
                  /* hidden 'Extract Key' action */
                  /* hidden 'Set Variable' action */
                  /* hidden 'Log to Console' action */
                  if (messagejson?.length) {
                    return;
                  }
                  navigation.navigate('RegistrationOTPSubmitScreen', {
                    userenterscno: serviceconnectionnumber,
                    userenterpassword: password,
                    Userentermobile: Mobileno,
                    userenteremail: email,
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
                fontSize: 15,
                marginTop: 20,
                width: '100%',
              },
              dimensions.width
            )}
            title={`${transalate(Variables, 'Continue')}`}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(RegisterScreen);
