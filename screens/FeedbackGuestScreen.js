import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  ScreenContainer,
  StarRating,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View } from 'react-native';

const FeedbackGuestScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [Email, setEmail] = React.useState('');
  const [Name, setName] = React.useState('');
  const [Response, setResponse] = React.useState('');
  const [Suggestion, setSuggestion] = React.useState('');
  const [display, setDisplay] = React.useState(true);
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [feedBackMsg, setFeedBackMsg] = React.useState('');
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [seconds, setSeconds] = React.useState(5);
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [subErrorMsg, setSubErrorMsg] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [timerResult, setTimerResult] = React.useState('');
  const DisplayFun = display => {
    /*const myTimeout = setTimeout(messageFun,10000);

function messageFun() {
var msg = null;
msg = message;
console.log("message"+msg);
return msg;
}*/

    /*setDisplay(true);
const delayPromise = new Promise(r => setTimeout(r, 2000)).then(() => {
setDisplay(false); 
props.navigation.navigate('Welcome'); 
console.log("i came here"); 
} )*/

    setDisplay(false);
    new Promise(r => setTimeout(r, 5000)).then(() => {
      setDisplay(true);
      //props.navigation.navigate('BlankCopyScreen');
      console.log('i came here');
    });
  };

  const startTimer = () => {
    const intervalId = setInterval(() => {
      if (seconds) {
        setSeconds(prev =>
          prev > 0 ? prev - 1 : (setSeconds(0), clearInterval(intervalId))
        );
      }
    }, 1000);

    return seconds;
  };

  const validateSubject = sub => {
    var errorMessage = null;
    if (!sub.trim()) {
      errorMessage = 'Subject is required';
    }
    return errorMessage;
  };

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
        errorMessage = 'Invalid email address';
      }
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
      msg: 'Your Feedback Successfully Submitted',
    };

    return scheme[msg];
  };

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
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
          {transalate(Variables, 'Feedback')}
        </Text>
      </View>
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            borderRadius: 21,
            marginTop: 16,
            overflow: 'hidden',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
            width: '100%',
          },
          dimensions.width
        )}
      >
        <>
          {!feedBackMsg?.length ? null : (
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {seconds}
            </Text>
          )}
        </>
        {/* s1 */}
        <View
          {...GlobalStyles.ViewStyles(theme)['user name'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['user name'].style,
              {
                height: 50,
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
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
                  setName(newTextInputValue);
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
              value={Name}
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
        {/* s1 */}
        <View
          {...GlobalStyles.ViewStyles(theme)['user name'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['user name'].style,
              {
                height: 50,
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              }
            ),
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Medium']}
            name={'Entypo/email'}
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
                  setEmail(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              editable={true}
              placeholder={transalate(Variables, 'Email').toString()}
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
              value={Email}
            />
          </View>
        </View>
        {/* Email Error message */}
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
          {emailErrorMsg}
        </Text>
        {/* s1 */}
        <View
          {...GlobalStyles.ViewStyles(theme)['user name'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['user name'].style,
              {
                height: 50,
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              }
            ),
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Medium']}
            name={'MaterialIcons/feedback'}
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
                  setSuggestion(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              editable={true}
              placeholder={transalate(Variables, 'Subject').toString()}
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
              value={Suggestion}
            />
          </View>
        </View>
        {/* Subject Error Mgs */}
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
          {transalate(Variables, subErrorMsg)}
        </Text>
        {/* Feedback View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.viewBG,
              borderRadius: 12,
              marginTop: 25,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <TextInput
            autoCorrect={true}
            changeTextDelay={500}
            multiline={true}
            numberOfLines={4}
            onChangeText={newTextAreaValue => {
              try {
                setResponse(newTextAreaValue);
              } catch (err) {
                console.error(err);
              }
            }}
            textAlignVertical={'top'}
            webShowOutline={true}
            placeholder={transalate(
              Variables,
              'Please leave your feedback here...'
            )}
            placeholderTextColor={theme.colors['Medium']}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors.divider,
                borderLeftWidth: 1,
                borderRadius: 8,
                borderRightWidth: 1,
                borderTopWidth: 1,
                fontFamily: 'Roboto_400Regular',
                height: 100,
                paddingBottom: 16,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
            value={Response}
          />
        </View>
        {/* Button Solid */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                const scnoErrorMsg = validateScno(Name);
                const emailErrorMsg = validateEmail(Email);
                const subErrorMsg = validateSubject(Suggestion);
                setScnoErrorMsg(scnoErrorMsg);
                setEmailErrorMsg(emailErrorMsg);
                setSubErrorMsg(subErrorMsg);
                if (scnoErrorMsg?.length) {
                  return;
                }
                if (emailErrorMsg?.length) {
                  return;
                }
                if (subErrorMsg?.length) {
                  return;
                }
                setSeconds('');
                const feedbackvalues = (
                  await CISAPPApi.feedbackPOST(Constants, {
                    email: Email,
                    name: Name,
                    response: Response,
                    suggestion: Suggestion,
                  })
                )?.json;
                console.log(feedbackvalues);
                const messageResult =
                  feedbackvalues && feedbackvalues[0].data[0].msg;
                setFeedBackMsg(messageResult);
                navigation.navigate('FeedbackGuestSuccessScreen', {
                  feedbackMessage: messageResult,
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
              marginTop: 30,
              paddingLeft: 30,
              paddingRight: 30,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={`${transalate(Variables, 'Send Feedback')}`}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(FeedbackGuestScreen);
