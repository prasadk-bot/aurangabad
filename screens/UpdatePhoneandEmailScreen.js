import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Checkbox,
  Icon,
  Picker,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';

const UpdatePhoneandEmailScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ShowNav, setShowNav] = React.useState(false);
  const [consumerAddress, setConsumerAddress] = React.useState('');
  const [consumerDetails, setConsumerDetails] = React.useState({});
  const [consumerName, setConsumerName] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('dashboard');
  const [serviceConNo, setServiceConNo] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const buildConsumerString = Scno => {
    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  const manageAccountFun = ManageAccountDetails => {
    return ManageAccountDetails.map(team => {
      return { label: team.new_added_account, value: team.new_added_account };
    });
  };
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        setTextInputValue(Constants['name']);
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            accno: Constants['name'],
          })
        )?.json;
        console.log(consumerDetailsJson);
        buildConsumerString(Constants['name']);

        const valueX607A311 = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.name;
        setConsumerName(valueX607A311);
        const nameData = valueX607A311;
        const valueaOCNeUvH = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.address1;
        setConsumerAddress(valueaOCNeUvH);
        const consumerAddressData = valueaOCNeUvH;
        const mobileNoData = setGlobalVariableValue({
          key: 'phonenumbercon',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data?.mobile,
        });
        const emailData = setGlobalVariableValue({
          key: 'emailValue',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data?.emailId,
        });

        const valueKoXYJBqj = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.prepaidFlag;
        setPrepaidFlag(valueKoXYJBqj);
        const prepaidFlagData = valueKoXYJBqj;
        const loadType = setGlobalVariableValue({
          key: 'loadType',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data
            ?.loadType,
        });
        const connectedLoad = setGlobalVariableValue({
          key: 'connectedLoad',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data
            ?.connectedLoad,
        });
        const contractedLoad = setGlobalVariableValue({
          key: 'contractedLoad',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data
            ?.contractedLoad,
        });
        const category = setGlobalVariableValue({
          key: 'category',
          value: (consumerDetailsJson && consumerDetailsJson[0])?.data
            ?.category,
        });
        setServiceConNo(
          (consumerDetailsJson && consumerDetailsJson[0])?.data?.scno
        );
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
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'column' },
        dimensions.width
      )}
    >
      {/* headerp */}
      <View
        {...GlobalStyles.ViewStyles(theme)['headerp'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['headerp'].style, {
            height: 50,
            marginTop: 25,
          }),
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
          {transalate(Variables, 'Account Summary')}
        </Text>
      </View>
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'flex-start' },
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
                paddingBottom: 25,
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 15,
              },
              dimensions.width
            )}
          >
            {/* serviceconectionno */}
            <View
              {...GlobalStyles.ViewStyles(theme)['user name'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['user name'].style,
                  { paddingLeft: 20, paddingRight: 20, width: '100%' }
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
                    try {
                      setTextInputValue(newPickerValue);
                      const consumerDetailsJson = (
                        await CISAPPApi.consumerDetailsPOST(Constants, {
                          accno: newPickerValue,
                        })
                      )?.json;
                      console.log(consumerDetailsJson);

                      const value07gZbz3P = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.name;
                      setConsumerName(value07gZbz3P);
                      const nameData = value07gZbz3P;
                      const valueZJQlbHmC = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.address1;
                      setConsumerAddress(valueZJQlbHmC);
                      const consumerAddressData = valueZJQlbHmC;
                      const mobileNoData = setGlobalVariableValue({
                        key: 'phonenumbercon',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.mobile,
                      });
                      const emailData = setGlobalVariableValue({
                        key: 'emailValue',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.emailId,
                      });

                      const valuedMtm4bwO = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.prepaidFlag;
                      setPrepaidFlag(valuedMtm4bwO);
                      const prepaidFlagData = valuedMtm4bwO;
                      const loadType = setGlobalVariableValue({
                        key: 'loadType',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.loadType,
                      });
                      const connectedLoad = setGlobalVariableValue({
                        key: 'connectedLoad',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.connectedLoad,
                      });
                      const contractedLoad = setGlobalVariableValue({
                        key: 'contractedLoad',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.contractedLoad,
                      });
                      const category = setGlobalVariableValue({
                        key: 'category',
                        value: (consumerDetailsJson && consumerDetailsJson[0])
                          ?.data?.category,
                      });
                      setServiceConNo(
                        (consumerDetailsJson && consumerDetailsJson[0])?.data
                          ?.scno
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
                placeholder={'Select an option'}
                selectedIconColor={theme.colors.strong}
                selectedIconName={'Feather/check'}
                selectedIconSize={20}
                type={'solid'}
                iconColor={theme.colors['Medium']}
                options={Constants['manageaccount_picker']}
                placeholderTextColor={theme.colors['Medium']}
                rightIconName={'Feather/chevron-down'}
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Background'],
                    fontFamily: 'Roboto_400Regular',
                    width: '90%',
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
            </View>
            {/* Name */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
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
                {transalate(Variables, 'Name')}
                {': '}
                {consumerName}
              </Text>
            </View>
            {/* Service Connection No */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
                },
                dimensions.width
              )}
            >
              {/* Service connection no */}
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
                {transalate(Variables, 'Consumer number')}
                {': '}
                {serviceConNo}
              </Text>
            </View>
            {/* Address */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
                  paddingRight: 20,
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
                {transalate(Variables, 'Address')}
                {' : '}
                {consumerAddress}
              </Text>
            </View>
            {/* Mobile */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
            </View>
            {/* Email */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
            </View>
            {/* Contracted Load */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
                {transalate(Variables, 'Contracted load')}
                {': '}
                {Constants['contractedLoad']}
              </Text>
            </View>
            {/* Category */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingLeft: 20,
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
                {transalate(Variables, 'Category')}
                {': '}
                {Constants['category']}
              </Text>
            </View>
            {/* Account type */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  alignSelf: 'flex-start',
                  justifyContent: 'center',
                  marginLeft: -5,
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'flex-start', justifyContent: 'center' },
                  dimensions.width
                )}
              >
                {/* Postpaid */}
                <>
                  {!(prepaidFlag === 'N') ? null : (
                    <Button
                      iconPosition={'left'}
                      {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                          {
                            backgroundColor: theme.colors['Custom #ffffff'],
                            color: theme.colors['NFT_TIME_Primary_Black'],
                            marginLeft: -5,
                            paddingLeft: 30,
                            paddingRight: 30,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'Account type : Postpaid'}
                    />
                  )}
                </>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'flex-start', justifyContent: 'center' },
                  dimensions.width
                )}
              >
                {/* Prepaid */}
                <>
                  {!(prepaidFlag === 'Y') ? null : (
                    <Button
                      iconPosition={'left'}
                      {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                          {
                            backgroundColor: theme.colors['Custom #ffffff'],
                            color: theme.colors['NFT_TIME_Primary_Black'],
                            marginLeft: -5,
                            paddingLeft: 30,
                            paddingRight: 30,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'Account type: Prepaid'}
                    />
                  )}
                </>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* botem tab1 */}
      <View
        {...GlobalStyles.ViewStyles(theme)['botem tab'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['botem tab'].style,
            { paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }
          ),
          dimensions.width
        )}
      >
        {/* Home */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('DashboardScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 50,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Community_Light_Black']}
              name={'Entypo/home'}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Community_Light_Black'],
                    fontFamily: 'Roboto_400Regular',
                  }
                ),
                dimensions.width
              )}
            >
              {transalate(Variables, 'Home')}
            </Text>
          </View>
        </Touchable>
        {/* Usage */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('UsageScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 50,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Community_Light_Black']}
              name={'FontAwesome/bar-chart-o'}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Community_Light_Black'],
                    fontFamily: 'Roboto_400Regular',
                  }
                ),
                dimensions.width
              )}
            >
              {transalate(Variables, 'Usage')}
            </Text>
          </View>
        </Touchable>
        {/* Billing */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BillingScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 50,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Community_Light_Black']}
              name={'Entypo/text-document-inverted'}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Community_Light_Black'],
                    fontFamily: 'Roboto_400Regular',
                  }
                ),
                dimensions.width
              )}
            >
              {transalate(Variables, 'Billing')}
            </Text>
          </View>
        </Touchable>
        {/* Payments */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('PaymentsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          activeOpacity={0.8}
          disabledOpacity={0.8}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 48,
                justifyContent: 'center',
                width: 65,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Community_Light_Black']}
              name={'MaterialIcons/payments'}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Community_Light_Black'],
                    fontFamily: 'Roboto_400Regular',
                  }
                ),
                dimensions.width
              )}
            >
              {transalate(Variables, 'Payments')}
            </Text>
          </View>
        </Touchable>
        {/* Support */}
        <>
          {!(prepaidFlag === 'N') ? null : (
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('CheckTicketStatusScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              activeOpacity={0.8}
              disabled={false}
              disabledOpacity={0.8}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    height: 48,
                    justifyContent: 'center',
                    width: 55,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors['Community_Light_Black']}
                  name={'MaterialIcons/support-agent'}
                />
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: theme.colors['Community_Light_Black'],
                        fontFamily: 'Roboto_400Regular',
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Support')}
                </Text>
              </View>
            </Touchable>
          )}
        </>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(UpdatePhoneandEmailScreen);
