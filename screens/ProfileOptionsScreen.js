import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  Picker,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { Image, Text, View } from 'react-native';

const ProfileOptionsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ShowNav, setShowNav] = React.useState(false);
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [pickerValue, setPickerValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('dashboard');
  const [visibleHindi, setVisibleHindi] = React.useState(false);
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
        const mobileNoData = setGlobalVariableValue({
          key: 'phonenumbercon',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data?.mobile,
        });
        const emailData = setGlobalVariableValue({
          key: 'emailValue',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data?.emailId,
        });
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
        { flex: 1, flexDirection: 'column' },
        dimensions.width
      )}
    >
      {/* headerr */}
      <View
        {...GlobalStyles.ViewStyles(theme)['fef hed'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['fef hed'].style, {
            marginTop: 45,
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
          {transalate(Variables, 'My Details')}
        </Text>
      </View>
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'flex-start', marginTop: 12 },
          dimensions.width
        )}
      >
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          {/* amblock */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: theme.colors['Community_Heather_Gray'],
                borderRadius: 12,
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 30,
                paddingBottom: 25,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 15,
              },
              dimensions.width
            )}
          >
            {/* Service Connection No */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 10,
                  paddingRight: 10,
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'auto',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Account Number')}
                {' : '}
                {Constants['name']}
                {'\n'}
              </Text>
            </View>
            {/* Mobile */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingLeft: 10,
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'auto',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Mobile')}
                {' : '}
                {Constants['phonenumbercon']}
              </Text>
              {/* Edit */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('UpdatePhonenumberScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Primary'],
                      borderRadius: 100,
                      flexDirection: 'row',
                      paddingLeft: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom #ffffff']}
                    name={'AntDesign/edit'}
                    size={15}
                  />
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom #ffffff'],
                        fontFamily: 'Inter_500Medium',
                        paddingBottom: 8,
                        paddingLeft: 10,
                        paddingRight: 15,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {transalate(Variables, 'Edit')}
                  </Text>
                </View>
              </Touchable>
            </View>
            {/* Email */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingLeft: 10,
                },
                dimensions.width
              )}
            >
              {/* Name */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'auto',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Email')}
                {' : '}
                {Constants['emailValue']}
              </Text>
              {/* Edit */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('UpdateEmailScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Primary'],
                      borderRadius: 100,
                      flexDirection: 'row',
                      paddingLeft: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom #ffffff']}
                    name={'AntDesign/edit'}
                    size={15}
                  />
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom #ffffff'],
                        fontFamily: 'Inter_500Medium',
                        paddingBottom: 8,
                        paddingLeft: 10,
                        paddingRight: 15,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {transalate(Variables, 'Edit')}
                  </Text>
                </View>
              </Touchable>
            </View>
            {/* Change password */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingLeft: 10,
                },
                dimensions.width
              )}
            >
              {/* Change password */}
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('ChangePasswordScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Primary'],
                      borderRadius: 100,
                      flexDirection: 'row',
                      paddingLeft: 5,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={theme.colors['Custom #ffffff']}
                    name={'AntDesign/edit'}
                    size={15}
                  />
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors['Custom #ffffff'],
                        fontFamily: 'Inter_500Medium',
                        paddingBottom: 8,
                        paddingLeft: 10,
                        paddingRight: 15,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                  >
                    {transalate(Variables, 'Change password')}
                  </Text>
                </View>
              </Touchable>
            </View>
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
                const pickerValue = newPickerValue;
                try {
                  setGlobalVariableValue({
                    key: 'LANGUAGE',
                    value: newPickerValue,
                  });
                  setPickerValue(newPickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              selectedIconColor={theme.colors.strong}
              selectedIconName={'Feather/check'}
              selectedIconSize={20}
              type={'solid'}
              options={[
                { label: 'English', value: 'en' },
                { label: 'Hindi', value: 'hi' },
              ]}
              placeholder={'Select Language'}
              style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
              value={pickerValue}
            />
            {/* Logout */}
            <Button
              iconPosition={'left'}
              onPress={() => {
                try {
                  setGlobalVariableValue({
                    key: 'name',
                    value: '',
                  });
                  navigation.navigate('WelcomeScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                  { borderRadius: 14, fontSize: 16, marginTop: 20 }
                ),
                dimensions.width
              )}
              title={`${transalate(Variables, 'Logout')}`}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ProfileOptionsScreen);
