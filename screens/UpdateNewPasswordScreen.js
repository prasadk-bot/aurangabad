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
  Checkbox,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const UpdateNewPasswordScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [changepasswordSuccessMsg, setChangepasswordSuccessMsg] =
    React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [checkboxValue2, setCheckboxValue2] = React.useState(false);
  const [confirmpassword, setConfirmpassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [hiddenPassword, setHiddenPassword] = React.useState(true);
  const [newpassword, setNewpassword] = React.useState('');
  const [passwordUpdateErrorMgs, setPasswordUpdateErrorMgs] =
    React.useState('');
  const [updateConfirmpasswordErrorMgs, setUpdateConfirmpasswordErrorMgs] =
    React.useState('');
  const [updatePasswordErrorMgs, setUpdatePasswordErrorMgs] =
    React.useState('');
  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const passwordUpdate = (newPwd, confirmPwd) => {
    console.log('newPassword' + newPwd);
    console.log('confirmPassword' + confirmPwd);
    let customErrorMessage = null;
    if (newPwd != confirmPwd) {
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
      // "msg6" : "You are not smart meter consumer",
      msg6: 'SMS service gateway not configured',
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
    };

    return scheme[msg];
  };

  const validateConfirmpassword = password => {
    var errorMessage = null;
    if (!password.trim()) {
      errorMessage = 'Confirm password is required';
    }
    return errorMessage;
  };

  const validateUpdatepassword = password => {
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
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
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
        {/* Update new password */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 12,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {transalate(Variables, 'Update Password')}
        </Text>
      </View>
      {/* Error Message */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            alignSelf: 'flex-start',
            color: theme.colors['Error'],
            fontFamily: 'Roboto_400Regular',
            fontSize: 14,
            marginTop: 75,
            opacity: 1,
            paddingLeft: 20,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {processErrorMessage(Constants['ERROR_MESSAGE'])}
      </Text>
      {/* OTP */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* password1 */}
        <>
          {!hiddenPassword ? null : (
            <View
              {...GlobalStyles.ViewStyles(theme)['password'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['password'].style,
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
                      setNewpassword(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  webShowOutline={true}
                  editable={true}
                  maxLength={12}
                  placeholder={transalate(Variables, 'New password').toString()}
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
                  value={newpassword}
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
        {/* password */}
        <>
          {!visiblePassword ? null : (
            <View
              {...GlobalStyles.ViewStyles(theme)['password'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['password'].style,
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
                      setNewpassword(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  webShowOutline={true}
                  editable={true}
                  maxLength={12}
                  placeholder={transalate(Variables, 'New password').toString()}
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
                  value={newpassword}
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
        {/* Error new password mgs */}
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
          {updatePasswordErrorMgs}
        </Text>
        {/* password */}
        <View
          {...GlobalStyles.ViewStyles(theme)['password'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['password'].style,
              { marginTop: 30 }
            ),
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
              placeholder={transalate(Variables, 'Confirm password').toString()}
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
        {/* Error new password mgs */}
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
          {updateConfirmpasswordErrorMgs}
        </Text>
        {/* Error new password mgs 2 */}
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
      </View>

      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* Submit */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                const updatePasswordErrorMgs =
                  validateUpdatepassword(newpassword);
                const updateConfirmpasswordErrorMgs =
                  validateConfirmpassword(confirmpassword);
                /* hidden 'Run a Custom Function' action */
                const passwordResult = passwordUpdate(
                  (() => {
                    const e = newpassword;
                    console.log(e);
                    return e;
                  })(),
                  (() => {
                    const e = confirmpassword;
                    console.log(e);
                    return e;
                  })()
                );
                setUpdatePasswordErrorMgs(updatePasswordErrorMgs);
                setUpdateConfirmpasswordErrorMgs(updateConfirmpasswordErrorMgs);
                setErrorMessage(passwordResult);
                if (updatePasswordErrorMgs?.length) {
                  return;
                }
                if (updateConfirmpasswordErrorMgs?.length) {
                  return;
                }
                if (passwordResult?.length) {
                  return;
                }
                setErrorMessage('');
                console.log(passwordResult);
                const ResultJson = (
                  await CISAPPApi.aftersentOTPforgorpasswordPOST(Constants, {
                    accno: (() => {
                      const e = Constants['OTP_SERVICE_NUMBER'];
                      console.log(e);
                      return e;
                    })(),
                    newPassword: (() => {
                      const e = confirmpassword;
                      console.log(e);
                      return e;
                    })(),
                    otp: (() => {
                      const e = props.route?.params?.userEnteredOTP ?? '';
                      console.log(e);
                      return e;
                    })(),
                    transid: (() => {
                      const e = Constants['OTP_ACK_NUMBER'];
                      console.log(e);
                      return e;
                    })(),
                  })
                )?.json;
                console.log(ResultJson);
                const messagejson = ResultJson?.[0].data?.error?.message;
                setErrorMessage(messagejson);
                const changepasswordSuccessMsg =
                  ResultJson && ResultJson[0].data[0].message;
                setChangepasswordSuccessMsg(changepasswordSuccessMsg);
                if (messagejson?.length) {
                  return;
                }
                navigation.navigate('ChangePasswordSuccessGuestScreen', {
                  changePasswordSuccessMsg: changepasswordSuccessMsg,
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
              marginTop: 50,
            },
            dimensions.width
          )}
          title={`${transalate(Variables, 'Submit')}`}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(UpdateNewPasswordScreen);
