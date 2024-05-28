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
  DatePicker,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const ServiceConnectionDetailsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ERROR_MESSAGE, setERROR_MESSAGE] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [existAcct, setExistAcct] = React.useState('');
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [newAcct, setNewAcct] = React.useState('');
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);
  const [visibleHindi, setVisibleHindi] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const validateScno = scNo => {
    var errorMessage = null;
    if (!scNo.trim()) {
      errorMessage = 'Account / consumer number is required';
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
            {transalate(Variables, 'Add Service Connection')}
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
                { height: 50, paddingLeft: 20, paddingRight: 20 }
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
                    setGlobalVariableValue({
                      key: 'passac',
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
                value={Constants['passac']}
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
                  const scnoErrorMsg = validateScno(Constants['passac']);
                  setScnoErrorMsg(scnoErrorMsg);
                  if (scnoErrorMsg?.length) {
                    return;
                  }
                  const adsercondetresult = (
                    await CISAPPApi.addServiceConnectionAccountPOST(Constants, {
                      existAcct: (() => {
                        const e = Constants['name'];
                        console.log(e);
                        return e;
                      })(),
                      newAcct: Constants['passac'],
                    })
                  )?.json;
                  console.log(adsercondetresult);
                  const messagejson =
                    adsercondetresult?.[0].data?.error?.message;
                  setERROR_MESSAGE(messagejson);
                  const test = setGlobalVariableValue({
                    key: 'OTP_ACK_NUMBER',
                    value: (adsercondetresult && adsercondetresult[0])?.data[0]
                      ?.data?.id,
                  });
                  setGlobalVariableValue({
                    key: 'new_acc',
                    value: newAcct,
                  });
                  if (messagejson?.length) {
                    return;
                  }
                  navigation.navigate(
                    'ConfirmOTPAddNewServiceConnectionScreen',
                    { userenterscno: existAcct }
                  );
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
            title={`${transalate(Variables, 'Submit')}`}
          />
        </View>
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-around' },
            dimensions.width
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ServiceConnectionDetailsScreen);
