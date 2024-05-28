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
  Link,
  PinInput,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';

const RegistrationOTPSubmitScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ERROR_MESSAGE, setERROR_MESSAGE] = React.useState('');
  const [otpErrorMsg, setOtpErrorMsg] = React.useState('');
  const [otpValue1, setOtpValue1] = React.useState('');
  const [otpValue2, setOtpValue2] = React.useState('');
  const [otpValue3, setOtpValue3] = React.useState('');
  const [otpValue4, setOtpValue4] = React.useState('');
  const [pinInputValue, setPinInputValue] = React.useState('');
  const [registerSuccessMsg, setRegisterSuccessMsg] = React.useState('');
  const [seconds, setSeconds] = React.useState(61);
  const [textInputValue, setTextInputValue] = React.useState(0);
  const [codeInputValue, setCodeInputValue] = React.useState(undefined);
  const createOTP = () => {
    return `${otpValue1}${otpValue2}${otpValue3}${otpValue4}`;
  };

  const otpVerify = (otpResult, otp) => {
    if (otpResult === otp) {
      // Navigate to the change password screen
      //console.log('Navigating to change password screen...');
      return otpVerify;
      // Add your navigation logic here
    } else {
      console.log('Incorrect OTP. Please try again.');
    }
  };

  const startTimer = () => {
    const intervalId = setInterval(() => {
      if (seconds) {
        setSeconds(prev =>
          prev > 0 ? prev - 1 : (setSeconds(61), clearInterval(intervalId))
        );
      }
    }, 1000);

    return seconds;
  };

  const createHelper = (text, index) => {
    const inputRefs = [];
    const otp = [];

    return function help(text, index) {
      otp[index] = text;

      if (index < length - 1) {
        inputRefs[index + 1].focus();
      }

      const handleBackspace = index => {
        if (index > 0) {
          otp[index - 1] = '';
          inputRefs[index - 1].focus();
        }
      };
    };
  };

  const otpValidation = otp => {
    var errorMessage = null;
    if (!otp.trim()) {
      errorMessage = 'Otp is required';
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
    };

    return scheme[msg];
  };

  const onOtpKeyPressBack = (Variables, index, text) => {
    return ({ nativeEvent: { key: value } }) => {
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          OTPInput1.current.focus();
        } else if (index === 2) {
          OTPInput2.current.focus();
        } else if (index === 3) {
          console.log('3');
          OTPInput3.current.focus();
        }

        if (isAndroid && index > 0) {
          const otpArraycopy = otpArray.concat();
          otpArraycopy[index - 1] = '';
          setotpArray(otpArraycopy);
        }
      }
    };
  };

  const focusOnwardBackward = (otpValue1, otpValue2, otpValue3, otpValue4) => {
    var otpValue1 = null;
    var otpValue2 = null;
    var otpValue3 = null;
    var otpValue4 = null;
    const onOtpChange = index => {
      return value => {
        if (isNaN(Number(value))) {
          // do nothing when a non digit is pressed
          return;
        }
        const otpArrayCopy = otpArray.concat();
        otpArrayCopy[index] = value;
        setOtpArray(otpArrayCopy);

        // auto focus to next InputText if value is not blank
        if (value !== '') {
          if (index === 0) {
            otpValue2.current.focus();
          } else if (index === 1) {
            otpValue3.current.focus();
          } else if (index === 2) {
            otpValue4.current.focus();
          }
        }
      };
    };
  };

  const check_otp = otp => {
    const ChangePasswordScreen = () => {
      // Function to handle OTP verification
      const verifyOTP = () => {
        if (userOTP === otpValue) {
          // Navigate to the change password screen
          console.log('Navigating to change password screen...');
          // Add your navigation logic here
        } else {
          console.log('Incorrect OTP. Please try again.');
        }
      };
    };
  };
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      const seconds = startTimer();
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);
  const oTPInput1Zgm7HbytRef = React.useRef();
  const oTPInput2E7Djb5mjRef = React.useRef();
  const oTPInput3IW6lmGfjRef = React.useRef();
  const oTPInput4wMPDfNmdRef = React.useRef();

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
        {/* heading */}
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
          {transalate(Variables, 'Confirm OTP')}
        </Text>
      </View>
      {/* OTP Mobile and email */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
            fontFamily: 'Roboto_400Regular',
            fontSize: 14,
            letterSpacing: 0.3,
            lineHeight: 21,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 75,
            opacity: 1,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {transalate(
          Variables,
          'Check the OTP sent to your registered phone number and email address'
        )}
      </Text>
      {/* error */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            alignSelf: 'flex-start',
            color: theme.colors['Community_Dark_Red'],
            fontFamily: 'Roboto_400Regular',
            marginTop: 50,
            paddingLeft: 30,
            paddingTop: 5,
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {processErrorMessage(ERROR_MESSAGE)}
      </Text>
      {/* OTP */}
      <View
        style={StyleSheet.applyWidth(
          { paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        <PinInput
          autoComplete={'one-time-code'}
          blurOnFull={true}
          cellCount={4}
          changeTextDelay={500}
          clearOnCellFocus={true}
          focusedBorderColor={theme.colors.primary}
          keyboardType={'number-pad'}
          onChangeText={newPinInputValue => {
            const codeInputValue = newPinInputValue;
            try {
              setPinInputValue(newPinInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          onInputFull={finalValue => {
            const codeInputValue = finalValue;
            try {
            } catch (err) {
              console.error(err);
            }
          }}
          renderItem={({ cellValue, isFocused }) => {
            return null;
          }}
          secureTextEntry={false}
          {...GlobalStyles.PinInputStyles(theme)['Pin Input'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.PinInputStyles(theme)['Pin Input'].style,
              {
                backgroundColor: theme.colors['BG Gray'],
                borderColor: theme.colors['Divider'],
                borderRadius: 16,
                fontFamily: 'System',
                fontSize: 18,
                fontWeight: '700',
                maxHeight: 61,
                padding: 8,
                width: '100%',
              }
            ),
            dimensions.width
          )}
          value={pinInputValue}
        />
      </View>

      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            color: theme.colors['Error'],
            fontFamily: 'Roboto_400Regular',
            paddingLeft: 30,
          }),
          dimensions.width
        )}
      >
        {transalate(Variables, otpErrorMsg)}
      </Text>
      {/* Resend otp */}
      <View
        style={StyleSheet.applyWidth(
          { alignSelf: 'center', marginTop: 45 },
          dimensions.width
        )}
      >
        {/* timer */}
        <>
          {!(seconds !== 61) ? null : (
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color'],
                  fontFamily: 'System',
                  fontSize: 15,
                  fontWeight: '600',
                  letterSpacing: 0.3,
                  lineHeight: 21,
                  opacity: 1,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {transalate(Variables, 'Resend OTP')} {seconds}
              {' sec'}
            </Text>
          )}
        </>
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                const seconds = startTimer();
                setSeconds(seconds);
                setERROR_MESSAGE('');
                setPinInputValue('');
                const registredvalues = (
                  await CISAPPApi.registeredPOST(Constants, {
                    accno: Constants['passac'],
                    password: props.route?.params?.userenterpassword ?? '',
                  })
                )?.json;
                const test = setGlobalVariableValue({
                  key: 'OTP_ACK_NUMBER',
                  value: (registredvalues && registredvalues[0])?.data[0]?.data
                    ?.id,
                });
                setGlobalVariableValue({
                  key: 'name',
                  value: props.route?.params?.userenterscno ?? '',
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* Resend code */}
          <>
            {!(seconds === 61) ? null : (
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Strong'],
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    opacity: 1,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Resend OTP')}
              </Text>
            )}
          </>
        </Touchable>
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
                const otpResult = createOTP();
                console.log(otpResult);
                const otpErrorMsg = otpValidation(pinInputValue);
                setOtpErrorMsg(otpErrorMsg);
                if (otpErrorMsg?.length) {
                  return;
                }
                const registredvalues = (
                  await CISAPPApi.registeredSentOTPPOST(Constants, {
                    accno: (() => {
                      const e = props.route?.params?.userenterscno ?? '';
                      console.log(e);
                      return e;
                    })(),
                    mobileNo: (() => {
                      const e = props.route?.params?.Userentermobile ?? '';
                      console.log(e);
                      return e;
                    })(),
                    otp: (() => {
                      const e = pinInputValue;
                      console.log(e);
                      return e;
                    })(),
                    password: (() => {
                      const e = props.route?.params?.userenterpassword ?? '';
                      console.log(e);
                      return e;
                    })(),
                    scno: (() => {
                      const e = Constants['new_acc'];
                      console.log(e);
                      return e;
                    })(),
                    txid: (() => {
                      const e = Constants['OTP_ACK_NUMBER'];
                      console.log(e);
                      return e;
                    })(),
                  })
                )?.json;
                const messionj = registredvalues?.[0].data?.error?.message;
                console.log(messionj);
                setERROR_MESSAGE(messionj);
                const registeredSuccessMsg =
                  registredvalues && registredvalues[0].data[0].message;
                setRegisterSuccessMsg(registeredSuccessMsg);
                if (messionj?.length) {
                  return;
                }
                navigation.navigate('RegisterSuccessScreen', {
                  registerMsg: registeredSuccessMsg,
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

export default withTheme(RegistrationOTPSubmitScreen);
