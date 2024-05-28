import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  Picker,
  ScreenContainer,
  StarRating,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Text, View } from 'react-native';

const FeedbackScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [Email, setEmail] = React.useState('');
  const [Response, setResponse] = React.useState('');
  const [Suggestion, setSuggestion] = React.useState('');
  const [emailErrorMsg, setEmailErrorMsg] = React.useState('');
  const [feedbackMsg, setFeedbackMsg] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [serviceno, setServiceno] = React.useState('');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [subErrorMsg, setSubErrorMsg] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
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

  const manageAccountFun = ManageAccountDetails => {
    return ManageAccountDetails.map(team => {
      return { label: team.new_added_account, value: team.new_added_account };
    });
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
      errorMessage = 'Please enter service connection number';
    }
    return errorMessage;
  };

  const buildConsumerString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
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
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            accno: Constants['name'],
          })
        )?.json;
        console.log(consumerDetailsJson);
        buildConsumerString(Constants['name']);
        const prepaidFlag = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.prepaidFlag;
        setPrepaidFlag(prepaidFlag);
        const ManageAccountDetails = (
          await CISAPPApi.manageAccountsPOST(Constants, {
            accountNumber: Constants['name'],
          })
        )?.json;
        console.log(ManageAccountDetails);
        const result = setGlobalVariableValue({
          key: 'manageaccount_picker',
          value: manageAccountFun(
            ManageAccountDetails && ManageAccountDetails[0].data[0].data
          ),
        });
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

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
          {'Feedback'}
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
        {/* Service connection details */}
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
                const pickerValue = newPickerValue;
                try {
                  const consumerDetailsJson = (
                    await CISAPPApi.consumerDetailsPOST(Constants, {})
                  )?.json;
                  console.log(consumerDetailsJson);
                  buildConsumerString(newPickerValue);
                  const prepaidFlag = (
                    consumerDetailsJson && consumerDetailsJson[0]
                  )?.data?.prepaidFlag;
                  console.log(prepaidFlag);
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
            defaultValue={Constants['name']}
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
          />
        </View>
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
              placeholder={'Email'}
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
              placeholder={'Subject'}
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
          {subErrorMsg}
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
            placeholder={'Please leave your feedback here...'}
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
                const scnoErrorMsg = validateScno(serviceno);
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
                const feedbackvalues = (
                  await CISAPPApi.feedbackPOST(Constants, {
                    email: Email,
                    name: serviceno,
                    response: Response,
                    suggestion: Suggestion,
                  })
                )?.json;
                console.log(feedbackvalues);
                const messageResult =
                  feedbackvalues && feedbackvalues[0].data[0].msg;
                console.log(messageResult);
                setFeedbackMsg(messageResult);
                navigation.navigate('FeedbackSuccessScreen', {
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
          title={'Send Feedback'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(FeedbackScreen);
