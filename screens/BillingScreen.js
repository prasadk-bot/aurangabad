import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as BillingHistory from '../custom-files/BillingHistory';
import * as CustomCode from '../custom-files/CustomCode';
import * as CustomCodee from '../custom-files/CustomCodee';
import transalate from '../global-functions/transalate';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  Picker,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';

const BillingScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [ShowNav, setShowNav] = React.useState(false);
  const [availableBalance, setAvailableBalance] = React.useState('');
  const [billingHistoryScreen, setBillingHistoryScreen] = React.useState({});
  const [consumerName, setConsumerName] = React.useState('');
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [mainselectedTab, setMainselectedTab] =
    React.useState('Prepaid daily bill');
  const [manageAccount, setManageAccount] = React.useState({});
  const [meterNumber, setMeterNumber] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [prepaidBillingHistory, setPrepaidBillingHistory] = React.useState({});
  const [prepaidBillingHistoryy, setPrepaidBillingHistoryy] = React.useState(
    {}
  );
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('Dashboard');
  const [selectedTab2, setSelectedTab2] = React.useState('prepaidchart');
  const [selectedTab3, setSelectedTab3] = React.useState('prepaidchart1');
  const [serviceConNumber, setServiceConNumber] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [viewBillDetails, setViewBillDetails] = React.useState({});
  const [visibleHindi, setVisibleHindi] = React.useState(false);
  const buildConsumerString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  const manageAccountFun = ManageAccountDetails => {
    return ManageAccountDetails.map(team => {
      return { label: team.new_added_account, value: team.new_added_account };
    });
  };

  const convertDateTimeToDate = dateTime => {
    const date = dateTime.split(' ');
    console.log('date' + date);

    const str = date[0];

    return str;
  };

  const converDateTimeToDate = dateTime => {
    const date = dateTime.split(' ');
    console.log('date' + date);

    const str = date[0];

    return str;
  };

  const converDateTimeToDate2 = dateTime => {
    const date = dateTime.split(' ');
    console.log('date' + date);

    const str = date[0];

    return str;
  };

  const dailybillHistoryBuildString = meterNo => {
    //console.log(`/SPM/getAllSpmRechargeHistoryDetailsByMeterNumberOrAccountNo?meterNumberOrAccountNo=${meterNo}`)
    return `/SPM/getAllSpmBillDetailsByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`;

    //return `/SPM/getAllSpmRechargeHistoryDetailsByMeterNumberOrAccountNo?meterNumberOrAccountNo=${meterNo}`
  };

  const convertMonthNoToMonthName = monthNo => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthName = monthNames[monthNo - 1];
    console.log(monthName);
    return monthName;
  };

  const buildString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/getBillDataWss/${Scno}`);
    return `billing/rest/getBillDataWss/${Scno}`;
  };

  const buildBillingString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/getBillDataService/${Scno}`);
    return `billing/rest/getBillDataService/${Scno}`;
  };

  const prepaidBillingString = meterNo => {
    console.log(
      `/SPM/getAllSpmMonthlyBillDetailsTByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`
    );
    return `/SPM/getAllSpmMonthlyBillDetailsTByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`;
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
        const prepaidFlag = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.prepaidFlag;
        console.log(prepaidFlag);
        setPrepaidFlag(prepaidFlag);
        const meterNo = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.meterNumber;
        console.log(meterNo);
        setMeterNumber(meterNo);
        const Billdetailsjson = await (async () => {
          if (prepaidFlag === 'N') {
            return (
              await CISAPPApi.viewBillDetailsPOST(Constants, {
                action: buildString(Constants['name']),
              })
            )?.json;
          }
        })();
        buildString(Constants['name']);
        console.log(Billdetailsjson);

        const valueLoQRxAPp =
          Billdetailsjson && Billdetailsjson[0].data.BillDataJson[0];
        setViewBillDetails(valueLoQRxAPp);
        const Billdetailslog = valueLoQRxAPp;
        const BillingHistoryJson = await (async () => {
          if (prepaidFlag === 'N') {
            return (
              await CISAPPApi.billingHistoryPOST(Constants, {
                action: buildBillingString(Constants['name']),
              })
            )?.json;
          }
        })();
        buildBillingString(Constants['name']);
        console.log(BillingHistoryJson);

        const value1JFiYv5G =
          BillingHistoryJson && BillingHistoryJson[0].data.BillDataJson;
        setBillingHistoryScreen(value1JFiYv5G);
        const billHistory = value1JFiYv5G;
        const prepaidJson = await (async () => {
          if (prepaidFlag === 'Y') {
            return (
              await CISAPPApi.prepaidApiPOST(Constants, { mtrno: meterNo })
            )?.json;
          }
        })();
        console.log(prepaidJson);
        const availableBalance = (prepaidJson && prepaidJson[0])?.data[0]
          ?.avail_balance;
        console.log(availableBalance);
        setAvailableBalance(availableBalance);
        const prepaidBillingHistoryJson = await (async () => {
          if (prepaidFlag === 'Y') {
            return (
              await CISAPPApi.billingHistoryPrepaidPOST(Constants, {
                action: prepaidBillingString(meterNo),
              })
            )?.json;
          }
        })();
        prepaidBillingString(meterNo);
        const prepaidBillingHistoryResult =
          prepaidBillingHistoryJson && prepaidBillingHistoryJson[0].data.data;
        setPrepaidBillingHistory(prepaidBillingHistoryResult);
        console.log(prepaidBillingHistoryResult);
        const prepaidBillingHistoryJsonn = await (async () => {
          if (prepaidFlag === 'Y') {
            return (
              await CISAPPApi.rechargeHistoryPrepaidPOST(Constants, {
                action: dailybillHistoryBuildString(meterNo),
              })
            )?.json;
          }
        })();
        dailybillHistoryBuildString(meterNo);
        const prepaidBillingHistoryResultt =
          prepaidBillingHistoryJsonn && prepaidBillingHistoryJsonn[0].data.data;
        setPrepaidBillingHistoryy(prepaidBillingHistoryResultt);
        console.log(prepaidBillingHistoryResultt);
        const ManageAccountDetails = (
          await CISAPPApi.manageAccountsPOST(Constants, {
            accountNumber: Constants['name'],
          })
        )?.json;
        console.log(ManageAccountDetails);

        const valuePtLRpp6a =
          ManageAccountDetails && ManageAccountDetails[0].data[0].data;
        setManageAccount(valuePtLRpp6a);
        const result = valuePtLRpp6a;
        console.log(result);
        setTextInputValue(Constants['name']);
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
      {/* Drawer */}
      <>
        {!ShowNav ? null : (
          <Surface
            elevation={0}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: '"rgba(0, 0, 0, 0)"',
                flex: 2,
                flexDirection: 'row',
                height: '100%',
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: 5,
              },
              dimensions.width
            )}
          >
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Surface'],
                  paddingTop: 40,
                  width: '80%',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, paddingBottom: 16, paddingTop: 16 },
                  dimensions.width
                )}
              >
                {/* Home */}
                <Touchable
                  onPress={() => {
                    try {
                      undefined;
                      navigation.navigate('DashboardScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon size={24} name={'Feather/home'} />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Home')}
                    </Text>
                  </View>
                </Touchable>
                {/* Manage Account */}
                <Touchable
                  onPress={() => {
                    try {
                      undefined;
                      navigation.navigate('ManageAccountScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      size={24}
                      name={
                        'MaterialCommunityIcons/account-arrow-right-outline'
                      }
                    />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Manage Account')}
                    </Text>
                  </View>
                </Touchable>
                {/* Notifications */}
                <Touchable
                  onPress={() => {
                    try {
                      undefined;
                      navigation.navigate('NotificationsScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      size={24}
                      name={'Ionicons/ios-notifications-circle-outline'}
                    />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Notifications')}
                    </Text>
                  </View>
                </Touchable>
                {/* Load and Quality */}
                <>
                  {!(prepaidFlag === 'Y') ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('LoadQualityScreen');
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
                            paddingBottom: 12,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon size={24} name={'Feather/loader'} />
                        <Text
                          accessible={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Strong'],
                              fontFamily: 'Roboto_400Regular',
                              fontSize: 16,
                              marginLeft: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {transalate(Variables, 'Load & Quality')}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Load Enhancement */}
                <>
                  {!(prepaidFlag === 'N') ? null : (
                    <Touchable
                      onPress={() => {
                        const handler = async () => {
                          try {
                            /* hidden 'Navigate' action */
                            await WebBrowser.openBrowserAsync(
                              `https://nccmsedcl09-cpfghesuat.quantumtechnologiesltd.com/cportal/#/bltLec/${Constants['name']}`
                            );
                          } catch (err) {
                            console.error(err);
                          }
                        };
                        handler();
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingBottom: 12,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={24}
                          name={'MaterialCommunityIcons/alert-outline'}
                        />
                        <Text
                          accessible={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Strong'],
                              fontFamily: 'Roboto_400Regular',
                              fontSize: 16,
                              marginLeft: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {transalate(Variables, 'Load Enhancement')}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Load Reduction */}
                <>
                  {!(prepaidFlag === 'N') ? null : (
                    <Touchable
                      onPress={() => {
                        const handler = async () => {
                          try {
                            /* hidden 'Navigate' action */
                            await WebBrowser.openBrowserAsync(
                              `https://nccmsedcl09-cpfghesuat.quantumtechnologiesltd.com/cportal/#/bltLrc/${Constants['name']}`
                            );
                          } catch (err) {
                            console.error(err);
                          }
                        };
                        handler();
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingBottom: 12,
                            paddingLeft: 24,
                            paddingRight: 24,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          size={24}
                          name={'FontAwesome/exclamation-triangle'}
                        />
                        <Text
                          accessible={true}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors['Strong'],
                              fontFamily: 'Roboto_400Regular',
                              fontSize: 16,
                              marginLeft: 8,
                            },
                            dimensions.width
                          )}
                        >
                          {transalate(Variables, 'Load Reduction')}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Downloads */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('DownloadsScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon size={24} name={'Feather/download'} />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Downloads')}
                    </Text>
                  </View>
                </Touchable>
                {/* FAQ */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('FAQScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon size={24} name={'Feather/help-circle'} />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'FAQ')}
                    </Text>
                  </View>
                </Touchable>
                {/* Feedback */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('FeedbackScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon size={24} name={'MaterialIcons/feedback'} />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Feedback')}
                    </Text>
                  </View>
                </Touchable>
                {/* Contact Us */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('ContactUsScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon size={24} name={'Ionicons/md-help-buoy-outline'} />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Contact Us')}
                    </Text>
                  </View>
                </Touchable>
                {/* Energy Tips */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('EnergyTipsScreen');
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon size={24} name={'SimpleLineIcons/energy'} />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Energy Tips')}
                    </Text>
                  </View>
                </Touchable>
                {/* Privacy Policy */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('PrivacyPolicyScreen');
                      /* hidden 'Open Browser' action */
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
                        paddingBottom: 12,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon size={24} name={'MaterialCommunityIcons/security'} />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors['Strong'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Privacy Policy')}
                    </Text>
                  </View>
                </Touchable>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors['Background'],
                    marginTop: -20,
                    paddingBottom: 24,
                    paddingLeft: 24,
                    paddingRight: 24,
                  },
                  dimensions.width
                )}
              ></View>
            </View>

            <View
              style={StyleSheet.applyWidth(
                { backgroundColor: '"rgba(0, 0, 0, 0)"', flex: 1 },
                dimensions.width
              )}
            >
              <Touchable
                onPress={() => {
                  try {
                    setShowNav(!ShowNav);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  { height: '100%', width: '100%' },
                  dimensions.width
                )}
              />
            </View>
          </Surface>
        )}
      </>
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-around' },
          dimensions.width
        )}
      >
        {/* Header */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          <Checkbox
            onPress={newCheckboxValue => {
              try {
                setShowNav(newCheckboxValue);
              } catch (err) {
                console.error(err);
              }
            }}
            checkedIcon={'Feather/x'}
            color={theme.colors['Custom Color_22']}
            size={32}
            status={ShowNav}
            uncheckedColor={theme.colors['Custom Color_22']}
            uncheckedIcon={'Feather/menu'}
          />
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flex: 1, flexDirection: 'row' },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  flex: 1,
                  fontFamily: 'Roboto_700Bold',
                  fontSize: 18,
                  marginLeft: 6,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {transalate(Variables, 'Billing')}
            </Text>
            <Picker
              autoDismissKeyboard={true}
              dropDownBackgroundColor={theme.colors.background}
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
                  setPickerValue2(newPickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              selectedIconColor={theme.colors.strong}
              selectedIconName={'Feather/check'}
              selectedIconSize={20}
              dropDownBorderColor={theme.colors['White']}
              dropDownBorderRadius={0}
              dropDownBorderWidth={0}
              options={[
                { label: 'English', value: 'en' },
                { label: 'Hindi', value: 'hi' },
              ]}
              placeholder={''}
              style={StyleSheet.applyWidth(
                { backgroundColor: theme.colors['White'], width: '21%' },
                dimensions.width
              )}
              type={'underline'}
              value={pickerValue2}
            />
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('NotificationsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                size={24}
                color={theme.colors['Community_Light_Black']}
                name={'Ionicons/md-notifications-circle-outline'}
              />
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('ProfileOptionsScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                size={24}
                color={theme.colors['Community_Light_Black']}
                name={'Ionicons/person-circle-outline'}
              />
            </Touchable>
          </View>
        </View>

        <ScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          {/* Body */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, justifyContent: 'space-around' },
              dimensions.width
            )}
          >
            {/* amblock */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 20, paddingRight: 20 },
                dimensions.width
              )}
            >
              {/* Service connection number */}
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
                      try {
                        setTextInputValue(newPickerValue);
                        const consumerDetailsJson = (
                          await CISAPPApi.consumerDetailsPOST(Constants, {
                            accno: newPickerValue,
                          })
                        )?.json;
                        console.log(consumerDetailsJson);
                        buildConsumerString(newPickerValue);
                        const prepaidFlag = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.prepaidFlag;
                        console.log(prepaidFlag);
                        setPrepaidFlag(prepaidFlag);
                        const meterNo = (
                          consumerDetailsJson && consumerDetailsJson[0]
                        )?.data?.meterNumber;
                        console.log(meterNo);
                        const Billdetailsjson = await (async () => {
                          if (prepaidFlag === 'N') {
                            return (
                              await CISAPPApi.viewBillDetailsPOST(Constants, {
                                action: buildString(newPickerValue),
                              })
                            )?.json;
                          }
                        })();
                        setMeterNumber(meterNo);
                        buildString(newPickerValue);
                        console.log(Billdetailsjson);

                        const valueZjbkzzHm =
                          Billdetailsjson &&
                          Billdetailsjson[0].data.BillDataJson[0];
                        setViewBillDetails(valueZjbkzzHm);
                        const Billdetailslog = valueZjbkzzHm;
                        const BillingHistoryJson = (
                          await CISAPPApi.billingHistoryPOST(Constants, {
                            action: buildBillingString(newPickerValue),
                          })
                        )?.json;
                        buildBillingString(newPickerValue);
                        console.log(BillingHistoryJson);

                        const value1ea46MhS =
                          BillingHistoryJson &&
                          BillingHistoryJson[0].data.BillDataJson;
                        setBillingHistoryScreen(value1ea46MhS);
                        const billHistory = value1ea46MhS;
                        const prepaidJson = await (async () => {
                          if (prepaidFlag === 'Y') {
                            return (
                              await CISAPPApi.prepaidApiPOST(Constants, {
                                mtrno: meterNo,
                              })
                            )?.json;
                          }
                        })();
                        console.log(prepaidJson);
                        const availableBalance = (prepaidJson && prepaidJson[0])
                          ?.data[0]?.avail_balance;
                        console.log(availableBalance);
                        setAvailableBalance(availableBalance);
                        const prepaidBillingHistoryJson = await (async () => {
                          if (prepaidFlag === 'Y') {
                            return (
                              await CISAPPApi.billingHistoryPrepaidPOST(
                                Constants,
                                { action: prepaidBillingString(meterNo) }
                              )
                            )?.json;
                          }
                        })();
                        prepaidBillingString(meterNo);
                        console.log(prepaidBillingHistoryJson);
                        const prepaidBillingHistoryResult =
                          prepaidBillingHistoryJson &&
                          prepaidBillingHistoryJson[0].data.data;
                        setPrepaidBillingHistory(prepaidBillingHistoryResult);
                        console.log(prepaidBillingHistoryResult);
                        const prepaidBillingHistoryJsonn = await (async () => {
                          if (prepaidFlag === 'Y') {
                            return (
                              await CISAPPApi.rechargeHistoryPrepaidPOST(
                                Constants,
                                { action: dailybillHistoryBuildString(meterNo) }
                              )
                            )?.json;
                          }
                        })();
                        dailybillHistoryBuildString(meterNo);
                        const prepaidBillingHistoryResultt =
                          prepaidBillingHistoryResult &&
                          prepaidBillingHistoryResult[0].data.data;
                        setPrepaidBillingHistoryy(prepaidBillingHistoryResultt);
                        console.log(prepaidBillingHistoryResultt);
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
                  value={textInputValue}
                />
              </View>

              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'stretch', marginBottom: 5, marginTop: 10 },
                  dimensions.width
                )}
              >
                {/* Prepaid */}
                <>
                  {!(prepaidFlag === 'Y') ? null : (
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            fontFamily: 'Roboto_400Regular',
                            textAlign: 'right',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Prepaid')}
                    </Text>
                  )}
                </>
                {/* Postpaid */}
                <>
                  {!(prepaidFlag === 'N') ? null : (
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            fontFamily: 'Roboto_400Regular',
                            textAlign: 'right',
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Postpaid')}
                    </Text>
                  )}
                </>
              </View>
              {/* postpaid */}
              <>
                {!(prepaidFlag === 'N') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['card'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['card'].style,
                        {
                          borderColor: theme.colors['Community_Border'],
                          borderRadius: 8,
                          borderWidth: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 15,
                          marginTop: 5,
                          paddingBottom: 10,
                          paddingLeft: 20,
                          paddingTop: 10,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { alignSelf: 'auto' },
                        dimensions.width
                      )}
                    >
                      {/* Amount due */}
                      <Text
                        accessible={true}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.strong,
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 14,
                            opacity: 1,
                          },
                          dimensions.width
                        )}
                      >
                        {transalate(Variables, 'Amount due')}
                      </Text>
                      {/* Amount  */}
                      <Text
                        accessible={true}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.strong,
                            fontFamily: 'Roboto_700Bold',
                            fontSize: 14,
                            opacity: 1,
                          },
                          dimensions.width
                        )}
                      >
                        {'₹'}
                        {viewBillDetails?.LEDGERAMT}
                      </Text>
                      {/* Sub title */}
                      <Text
                        accessible={true}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.strong,
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 12,
                            marginTop: 5,
                            opacity: 1,
                          },
                          dimensions.width
                        )}
                      >
                        {transalate(Variables, 'Due date')}
                        {': '}
                        {viewBillDetails?.BillDueDate}
                      </Text>
                    </View>
                    {/* View */}
                    <Button
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          navigation.navigate('ViewBillScreen', {
                            ledgerAmt: viewBillDetails?.LEDGERAMT,
                            BillDame: viewBillDetails?.BillIssueDate,
                            BillMonth: viewBillDetails?.BillMonth,
                            Scno: viewBillDetails?.Scno,
                            Name: viewBillDetails?.Name,
                            RebateGiven: viewBillDetails?.RebateGiven,
                            Arrear: viewBillDetails?.Arrear,
                            BillAmount: viewBillDetails?.BillAmount,
                            BillDueDate: viewBillDetails?.BillDueDate,
                            BillNo: viewBillDetails?.BillNo,
                            billYear: viewBillDetails?.BillYear,
                            BillIssueDate: viewBillDetails?.BillIssueDate,
                            netcurrbill: viewBillDetails?.netcurrbill,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors['GetFit Orange'],
                          borderRadius: 14,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          height: 36,
                          marginTop: 5,
                          textAlign: 'center',
                          width: '23%',
                        },
                        dimensions.width
                      )}
                      title={`${transalate(Variables, 'View')}`}
                    />
                    {/* Pay Now */}
                    <Button
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          navigation.navigate('MakePaymentScreen', {
                            accno: viewBillDetails?.AccNo,
                            BillDame: viewBillDetails?.BillIssueDate,
                            ledgerAmt: viewBillDetails?.LEDGERAMT,
                            billYear: viewBillDetails?.BillYear,
                            Name: viewBillDetails?.Name,
                            Scno: viewBillDetails?.Scno,
                            BillMonth: viewBillDetails?.BillMonth,
                            BillNo: viewBillDetails?.BillNo,
                            BillDueDate: viewBillDetails?.BillDueDate,
                            BillAmount: viewBillDetails?.BillAmount,
                            Arrear: viewBillDetails?.Arrear,
                            RebateGiven: viewBillDetails?.RebateGiven,
                            netcurrbill: viewBillDetails?.netcurrbill,
                            BillIssueDate: viewBillDetails?.BillIssueDate,
                            Billid: viewBillDetails?.BillDetailsId,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors['GetFit Orange'],
                          borderRadius: 14,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          height: 36,
                          marginTop: 5,
                          textAlign: 'center',
                          width: '30%',
                        },
                        dimensions.width
                      )}
                      title={`${transalate(Variables, 'Pay Now')}`}
                    />
                  </View>
                )}
              </>
              {/* prepaid */}
              <>
                {!(prepaidFlag === 'Y') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['card'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['card'].style,
                        {
                          borderColor: theme.colors['Community_Border'],
                          borderRadius: 8,
                          borderWidth: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginBottom: 15,
                          marginTop: 5,
                          paddingBottom: 10,
                          paddingLeft: 20,
                          paddingTop: 10,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { alignSelf: 'auto' },
                        dimensions.width
                      )}
                    >
                      {/* Amount  */}
                      <Text
                        accessible={true}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.strong,
                            fontFamily: 'Roboto_700Bold',
                            fontSize: 14,
                            opacity: 1,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        {transalate(Variables, 'Available balance')}
                        {': ₹'}
                        {availableBalance}
                      </Text>
                    </View>
                    {/* Recharge Now */}
                    <Button
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          /* hidden 'Open Browser' action */
                          /* hidden 'Navigate' action */
                          navigation.navigate('RechargeScreen', {
                            serviceConNo: Constants['consumerScNo'],
                            Name: consumerName,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors['Primary'],
                          borderRadius: 14,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          height: 36,
                          textAlign: 'center',
                          width: '45%',
                        },
                        dimensions.width
                      )}
                      title={`${transalate(Variables, 'Recharge')}`}
                    />
                  </View>
                )}
              </>
              {/* Prepaid Section header */}
              <>
                {!(prepaidFlag === 'Y') ? null : (
                  <View
                    {...GlobalStyles.ViewStyles(theme)['section header 2']
                      .props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['section header 2']
                          .style,
                        { justifyContent: 'center', paddingBottom: 12 }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Heading */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          alignSelf: 'center',
                          color: theme.colors['ShopAppBlue'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Billing History')}
                    </Text>
                  </View>
                )}
              </>
              {/* Main Tabs */}
              <>
                {!(prepaidFlag === 'Y') ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 15,
                        paddingLeft: 12,
                        paddingRight: 12,
                      },
                      dimensions.width
                    )}
                  >
                    {/* chart */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          paddingBottom: 12,
                          paddingTop: 12,
                        },
                        dimensions.width
                      )}
                    >
                      {/* prepaidchart */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor:
                              theme.colors['Community_Icon_BG_Color'],
                            borderBottomLeftRadius: 64,
                            borderTopLeftRadius: 64,
                            flex: 1,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor:
                                theme.colors['Community_Icon_BG_Color'],
                              borderBottomLeftRadius: 64,
                              borderTopLeftRadius: 64,
                            },
                            dimensions.width
                          )}
                        >
                          {/* selected */}
                          <>
                            {!(
                              mainselectedTab === 'Prepaid daily bill'
                            ) ? null : (
                              <Touchable>
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      backgroundColor:
                                        theme.colors['Community_True_Option'],
                                      borderBottomWidth: 2,
                                      borderColor:
                                        theme.colors['Community_True_Option'],
                                      borderLeftWidth: 2,
                                      borderRadius: 64,
                                      borderRightWidth: 2,
                                      borderTopWidth: 2,
                                      paddingBottom: 9,
                                      paddingLeft: 9,
                                      paddingRight: 9,
                                      paddingTop: 9,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Text']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text']
                                          .style,
                                        {
                                          color:
                                            theme.colors[
                                              'Community_Icon_BG_Color'
                                            ],
                                          fontFamily: 'Roboto_400Regular',
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {transalate(Variables, 'Daily')}
                                  </Text>
                                </View>
                              </Touchable>
                            )}
                          </>
                        </View>
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor:
                                theme.colors['Community_Icon_BG_Color'],
                              borderBottomLeftRadius: 64,
                              borderTopLeftRadius: 64,
                            },
                            dimensions.width
                          )}
                        >
                          {/* unselected */}
                          <>
                            {!(
                              mainselectedTab !== 'Prepaid daily bill'
                            ) ? null : (
                              <Touchable
                                onPress={() => {
                                  try {
                                    setMainselectedTab('Prepaid daily bill');
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      backgroundColor:
                                        theme.colors['Community_Icon_BG_Color'],
                                      borderBottomWidth: 2,
                                      borderColor:
                                        theme.colors['Community_Icon_BG_Color'],
                                      borderLeftWidth: 2,
                                      borderRadius: 64,
                                      borderRightWidth: 2,
                                      borderTopWidth: 2,
                                      paddingBottom: 9,
                                      paddingLeft: 9,
                                      paddingRight: 9,
                                      paddingTop: 9,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Text']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text']
                                          .style,
                                        {
                                          color:
                                            theme.colors['Community_Dark_UI'],
                                          fontFamily: 'Roboto_400Regular',
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {transalate(Variables, 'Daily')}
                                  </Text>
                                </View>
                              </Touchable>
                            )}
                          </>
                        </View>
                      </View>
                    </View>
                    {/* table */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* prepaidtable */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            backgroundColor:
                              theme.colors['Community_Icon_BG_Color'],
                            flex: 1,
                          },
                          dimensions.width
                        )}
                      >
                        {/* selected */}
                        <>
                          {!(mainselectedTab === 'Prepaid View') ? null : (
                            <Touchable>
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    backgroundColor:
                                      theme.colors['Community_True_Option'],
                                    borderBottomWidth: 3,
                                    borderColor:
                                      theme.colors['Community_Dark_UI'],
                                    borderLeftWidth: 2,
                                    borderRadius: 64,
                                    borderRightWidth: 2,
                                    borderTopWidth: 2,
                                    paddingBottom: 9,
                                    paddingLeft: 9,
                                    paddingRight: 9,
                                    paddingTop: 9,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Text
                                  accessible={true}
                                  {...GlobalStyles.TextStyles(theme)['Text']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text']
                                        .style,
                                      {
                                        color:
                                          theme.colors[
                                            'Community_Icon_BG_Color'
                                          ],
                                        fontFamily: 'Roboto_400Regular',
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {transalate(Variables, 'Monthly')}
                                </Text>
                              </View>
                            </Touchable>
                          )}
                        </>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor:
                                theme.colors['Community_Icon_BG_Color'],
                              paddingBottom: 1,
                              paddingTop: 1,
                            },
                            dimensions.width
                          )}
                        >
                          {/* unselected */}
                          <>
                            {!(mainselectedTab !== 'Prepaid View') ? null : (
                              <Touchable
                                onPress={() => {
                                  try {
                                    setMainselectedTab('Prepaid View');
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      backgroundColor:
                                        theme.colors['Community_Icon_BG_Color'],
                                      borderBottomWidth: 2,
                                      borderColor:
                                        theme.colors['Community_Icon_BG_Color'],
                                      borderLeftWidth: 2,
                                      borderRadius: 64,
                                      borderRightWidth: 2,
                                      borderTopWidth: 2,
                                      paddingBottom: 9,
                                      paddingLeft: 9,
                                      paddingRight: 9,
                                      paddingTop: 9,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Text
                                    accessible={true}
                                    {...GlobalStyles.TextStyles(theme)['Text']
                                      .props}
                                    style={StyleSheet.applyWidth(
                                      StyleSheet.compose(
                                        GlobalStyles.TextStyles(theme)['Text']
                                          .style,
                                        {
                                          color:
                                            theme.colors['Community_Dark_UI'],
                                          fontFamily: 'Roboto_400Regular',
                                        }
                                      ),
                                      dimensions.width
                                    )}
                                  >
                                    {transalate(Variables, 'Monthly')}
                                  </Text>
                                </View>
                              </Touchable>
                            )}
                          </>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              </>
              {/* Prepaid daily bill */}
              <>
                {!(mainselectedTab === 'Prepaid daily bill') ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      { marginTop: 15 },
                      dimensions.width
                    )}
                  >
                    {/* prepaidtabs */}
                    <>
                      {!(prepaidFlag === 'Y') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            },
                            dimensions.width
                          )}
                        >
                          {/* chart */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* prepaidchart */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab3 === 'prepaidchart1') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Text'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ].style,
                                            {
                                              color:
                                                theme.colors['Custom Color'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Chart')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab3 !== 'prepaidchart1') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab3('prepaidchart1');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Text'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ].style,
                                            {
                                              color: theme.colors['Light'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Chart')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                          {/* table */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* prepaidtable */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab3 === 'prepaidtable1') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Text'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ].style,
                                            {
                                              color:
                                                theme.colors['Custom Color'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Table')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab3 !== 'prepaidtable1') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab3('prepaidtable1');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Text'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ].style,
                                            {
                                              color: theme.colors['Light'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Table')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* prepaidchart1 */}
                    <>
                      {!(selectedTab3 === 'prepaidchart1') ? null : (
                        <View
                          {...GlobalStyles.ViewStyles(theme)['Dashboard'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['Dashboard'].style,
                              { paddingRight: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          <>
                            {!prepaidBillingHistoryy?.length ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flex: 1,
                                    justifyContent: 'center',
                                    paddingRight: 10,
                                    width: '100%',
                                  },
                                  dimensions.width
                                )}
                              >
                                <>
                                  {!(prepaidFlag === 'Y') ? null : (
                                    <Utils.CustomCodeErrorBoundary>
                                      <CustomCodee.LineChartComponent1
                                        prepaidBillingHistoryy={
                                          prepaidBillingHistoryy
                                        }
                                      />
                                    </Utils.CustomCodeErrorBoundary>
                                  )}
                                </>
                              </View>
                            )}
                          </>
                        </View>
                      )}
                    </>
                    {/* prepaidtable1 */}
                    <>
                      {!(selectedTab3 === 'prepaidtable1') ? null : (
                        <View
                          {...GlobalStyles.ViewStyles(theme)['Details'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['Details'].style,
                              {
                                backgroundColor: 'rgb(211, 211, 211)',
                                borderBottomWidth: 1,
                                borderColor: theme.colors['White'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderTopWidth: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {/* Bill Month */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {transalate(Variables, 'Bill Day')}
                              </Text>
                            </View>
                          </View>
                          {/* Bill Amount */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {transalate(Variables, 'Bill Amount')}
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* PrepaidList */}
                    <FlatList
                      data={prepaidBillingHistoryy}
                      horizontal={false}
                      inverted={false}
                      keyExtractor={(prepaidListData, index) =>
                        prepaidListData?.id ??
                        prepaidListData?.uuid ??
                        index.toString()
                      }
                      keyboardShouldPersistTaps={'never'}
                      listKey={'UlyYWUY2'}
                      nestedScrollEnabled={false}
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      renderItem={({ item, index }) => {
                        const prepaidListData = item;
                        return (
                          <>
                            {/* prepaidtable1 */}
                            <>
                              {!(selectedTab3 === 'prepaidtable1') ? null : (
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderBottomWidth: 1,
                                      borderColor: 'rgb(211, 211, 211)',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      paddingBottom: 10,
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                      paddingTop: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Bill Month */}
                                  <View>
                                    {/* text */}
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)['Text']
                                        .props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)['Text']
                                            .style,
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {converDateTimeToDate2(
                                        prepaidListData?.blissueDt
                                      )}
                                    </Text>
                                  </View>
                                  {/* Bill Amount */}
                                  <View>
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)['Text']
                                        .props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)['Text']
                                            .style,
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {'₹'}
                                      {(() => {
                                        const e = prepaidListData?.totalChgD;
                                        console.log(e);
                                        return e;
                                      })()}
                                    </Text>
                                  </View>
                                </View>
                              )}
                            </>
                          </>
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                    />
                  </View>
                )}
              </>
              {/* Prepaid View */}
              <>
                {!(mainselectedTab === 'Prepaid View') ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      { marginTop: 15 },
                      dimensions.width
                    )}
                  >
                    {/* prepaidtabs */}
                    <>
                      {!(prepaidFlag === 'Y') ? null : (
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            },
                            dimensions.width
                          )}
                        >
                          {/* chart */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* prepaidchart */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab2 === 'prepaidchart') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Text'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ].style,
                                            {
                                              color:
                                                theme.colors['Custom Color'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Chart')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab2 !== 'prepaidchart') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab2('prepaidchart');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Text'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ].style,
                                            {
                                              color: theme.colors['Light'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Chart')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                          {/* table */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* prepaidtable */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab2 === 'prepaidtable') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Text'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ].style,
                                            {
                                              color:
                                                theme.colors['Custom Color'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Table')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab2 !== 'prepaidtable') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab2('prepaidtable');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        {...GlobalStyles.TextStyles(theme)[
                                          'Text'
                                        ].props}
                                        style={StyleSheet.applyWidth(
                                          StyleSheet.compose(
                                            GlobalStyles.TextStyles(theme)[
                                              'Text'
                                            ].style,
                                            {
                                              color: theme.colors['Light'],
                                              fontFamily: 'Roboto_400Regular',
                                            }
                                          ),
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Table')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* prepaidchart */}
                    <>
                      {!(selectedTab2 === 'prepaidchart') ? null : (
                        <View
                          {...GlobalStyles.ViewStyles(theme)['Dashboard'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['Dashboard'].style,
                              { paddingRight: 10 }
                            ),
                            dimensions.width
                          )}
                        >
                          <>
                            {!prepaidBillingHistory?.length ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flex: 1,
                                    justifyContent: 'center',
                                    paddingRight: 10,
                                    width: '100%',
                                  },
                                  dimensions.width
                                )}
                              >
                                <>
                                  {!(prepaidFlag === 'Y') ? null : (
                                    <Utils.CustomCodeErrorBoundary>
                                      <CustomCode.LineChartComponent1
                                        prepaidBillingHistory={
                                          prepaidBillingHistory
                                        }
                                      />
                                    </Utils.CustomCodeErrorBoundary>
                                  )}
                                </>
                              </View>
                            )}
                          </>
                        </View>
                      )}
                    </>
                    {/* prepaidtable */}
                    <>
                      {!(selectedTab2 === 'prepaidtable') ? null : (
                        <View
                          {...GlobalStyles.ViewStyles(theme)['Details'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['Details'].style,
                              {
                                backgroundColor: 'rgb(211, 211, 211)',
                                borderBottomWidth: 1,
                                borderColor: theme.colors['White'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderTopWidth: 1,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {/* Bill Month */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {transalate(Variables, 'Bill month')}
                              </Text>
                            </View>
                          </View>
                          {/* Bill Amount */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {transalate(Variables, 'Bill Amount')}
                              </Text>
                            </View>
                          </View>
                          {/* Download */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {transalate(Variables, 'Downloads')}
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* PrepaidList */}
                    <FlatList
                      data={prepaidBillingHistory}
                      horizontal={false}
                      inverted={false}
                      keyExtractor={(prepaidListData, index) =>
                        prepaidListData?.id ??
                        prepaidListData?.uuid ??
                        index.toString()
                      }
                      keyboardShouldPersistTaps={'never'}
                      listKey={'NAb2xXOf'}
                      nestedScrollEnabled={false}
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      renderItem={({ item, index }) => {
                        const prepaidListData = item;
                        return (
                          <>
                            {/* prepaidtable */}
                            <>
                              {!(selectedTab2 === 'prepaidtable') ? null : (
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderBottomWidth: 1,
                                      borderColor: 'rgb(211, 211, 211)',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      paddingBottom: 10,
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                      paddingTop: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Bill Month */}
                                  <View>
                                    {/* text */}
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)['Text']
                                        .props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)['Text']
                                            .style,
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {convertMonthNoToMonthName(
                                        prepaidListData?.billmonth
                                      )}
                                      {' - '}
                                      {prepaidListData?.billyear}
                                    </Text>
                                  </View>
                                  {/* Bill Amount */}
                                  <View>
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)['Text']
                                        .props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)['Text']
                                            .style,
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {'₹'}
                                      {(() => {
                                        const e = prepaidListData?.totalCharge;
                                        console.log(e);
                                        return e;
                                      })()}
                                    </Text>
                                  </View>
                                  {/* download */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Touchable
                                      onPress={() => {
                                        const handler = async () => {
                                          try {
                                            await WebBrowser.openBrowserAsync(
                                              `https://nccmsedcl09-cpfghesuat.quantumtechnologiesltd.com/fgweb/web/json/plugin/com.fluentgrid.cp.plugin.DynamicServiceReportGenerator/service?name=JBVNL_PREPAID_BILL&month=${(() => {
                                                const e =
                                                  prepaidListData?.billmonth;
                                                console.log(e);
                                                return e;
                                              })()}&year=${(() => {
                                                const e =
                                                  prepaidListData?.billyear;
                                                console.log(e);
                                                return e;
                                              })()}&accountno=${
                                                Constants['name']
                                              }`
                                            );
                                          } catch (err) {
                                            console.error(err);
                                          }
                                        };
                                        handler();
                                      }}
                                    >
                                      <Icon
                                        size={24}
                                        name={'Feather/arrow-down-circle'}
                                      />
                                    </Touchable>
                                  </View>
                                </View>
                              )}
                            </>
                          </>
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                    />
                  </View>
                )}
              </>
              {/* Postpaid View */}
              <>
                {!(prepaidFlag === 'N') ? null : (
                  <View>
                    {/* section header */}
                    <>
                      {!(prepaidFlag === 'N') ? null : (
                        <View
                          {...GlobalStyles.ViewStyles(theme)['section header 2']
                            .props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['section header 2']
                                .style,
                              { justifyContent: 'center', paddingBottom: 12 }
                            ),
                            dimensions.width
                          )}
                        >
                          {/* Heading */}
                          <>
                            {!transalate(
                              Variables,
                              'Billing History'
                            ) ? null : (
                              <Text
                                accessible={true}
                                style={StyleSheet.applyWidth(
                                  {
                                    alignSelf: 'center',
                                    color: theme.colors['ShopAppBlue'],
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                    textAlign: 'center',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'{[BillingHistory}}'}
                              </Text>
                            )}
                          </>
                        </View>
                      )}
                    </>
                    {/* Tabs */}
                    <>
                      {!(prepaidFlag === 'N') ? null : (
                        <View
                          {...GlobalStyles.ViewStyles(theme)['Tabs'].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ViewStyles(theme)['Tabs'].style,
                            dimensions.width
                          )}
                        >
                          {/* tab1 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* Dashboard */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab === 'Dashboard') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors['Custom Color'],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Chart')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab !== 'Dashboard') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab('Dashboard');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors['Light'],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Chart')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                          {/* tab2 */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              },
                              dimensions.width
                            )}
                          >
                            {/* Content */}
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1 },
                                dimensions.width
                              )}
                            >
                              {/* selected */}
                              <>
                                {!(selectedTab === 'content') ? null : (
                                  <Touchable>
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 3,
                                          borderColor:
                                            theme.colors['Custom Color'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors['Custom Color'],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Table')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              {/* unselected */}
                              <>
                                {!(selectedTab !== 'content') ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setSelectedTab('content');
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          alignItems: 'center',
                                          borderBottomWidth: 2,
                                          borderColor: theme.colors['Light'],
                                          height: 25,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: theme.colors['Light'],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 14,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {transalate(Variables, 'Table')}
                                      </Text>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* Dashboard */}
                    <>
                      {!(selectedTab === 'Dashboard') ? null : (
                        <View
                          {...GlobalStyles.ViewStyles(theme)['Dashboard'].props}
                          style={StyleSheet.applyWidth(
                            GlobalStyles.ViewStyles(theme)['Dashboard'].style,
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', flex: 1, width: '100%' },
                              dimensions.width
                            )}
                          >
                            {/* View 2 */}
                            <>
                              {!billingHistoryScreen?.length ? null : (
                                <View>
                                  <>
                                    {!(prepaidFlag === 'N') ? null : (
                                      <Utils.CustomCodeErrorBoundary>
                                        <BillingHistory.LineChartComponent1
                                          billingHistoryScreen={
                                            billingHistoryScreen
                                          }
                                        />
                                      </Utils.CustomCodeErrorBoundary>
                                    )}
                                  </>
                                </View>
                              )}
                            </>
                          </View>
                        </View>
                      )}
                    </>
                    {/* Details */}
                    <>
                      {!(selectedTab === 'content') ? null : (
                        <View
                          {...GlobalStyles.ViewStyles(theme)['Details'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['Details'].style,
                              {
                                backgroundColor: 'rgb(211, 211, 211)',
                                borderBottomWidth: 1,
                                borderColor: theme.colors['White'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderTopWidth: 1,
                                flex: 0,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {/* Bill Month */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors.viewBG,
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_700Bold',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {transalate(Variables, 'Bill Month')}
                              </Text>
                            </View>
                          </View>
                          {/* Bill Amount */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors.viewBG,
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_700Bold',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {transalate(Variables, 'Bill Amount')}
                              </Text>
                            </View>
                          </View>
                          {/* Download */}
                          <View
                            style={StyleSheet.applyWidth(
                              { flex: 1 },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors.viewBG,
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_700Bold',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {transalate(Variables, 'Downloads')}
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}
                    </>
                    {/* PostpaidList */}
                    <FlatList
                      data={billingHistoryScreen}
                      horizontal={false}
                      inverted={false}
                      keyExtractor={(postpaidListData, index) =>
                        postpaidListData?.id ??
                        postpaidListData?.uuid ??
                        index.toString()
                      }
                      keyboardShouldPersistTaps={'never'}
                      listKey={'gzwrR93r'}
                      nestedScrollEnabled={false}
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      renderItem={({ item, index }) => {
                        const postpaidListData = item;
                        return (
                          <>
                            {/* Details */}
                            <>
                              {!(selectedTab === 'content') ? null : (
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderBottomWidth: 1,
                                      borderColor: 'rgb(211, 211, 211)',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      paddingBottom: 10,
                                      paddingLeft: 20,
                                      paddingRight: 20,
                                      paddingTop: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Bill Month */}
                                  <View>
                                    {/* text */}
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)['Text']
                                        .props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)['Text']
                                            .style,
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {(() => {
                                        const e = convertMonthNoToMonthName(
                                          postpaidListData?.BillMonth
                                        );
                                        console.log(e);
                                        return e;
                                      })()}
                                      {' - '}
                                      {postpaidListData?.BillYear}
                                    </Text>
                                  </View>
                                  {/* Bill Amount */}
                                  <View>
                                    <Text
                                      accessible={true}
                                      {...GlobalStyles.TextStyles(theme)['Text']
                                        .props}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TextStyles(theme)['Text']
                                            .style,
                                          {
                                            color: 'rgb(42, 42, 42)',
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 16,
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      {'₹'}
                                      {postpaidListData?.BillAmount}
                                    </Text>
                                  </View>
                                  {/* download */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Touchable
                                      onPress={() => {
                                        const handler = async () => {
                                          try {
                                            await WebBrowser.openBrowserAsync(
                                              `https://nccmsedcl09-cpfghesuat.quantumtechnologiesltd.com/fgweb/web/json/plugin/com.fluentgrid.cp.plugin.DynamicServiceReportGenerator/service?name=POSTPAID_BILL&month=${postpaidListData?.BillMonth}&year=${postpaidListData?.BillYear}&scno=${Constants['name']}`
                                            );
                                          } catch (err) {
                                            console.error(err);
                                          }
                                        };
                                        handler();
                                      }}
                                    >
                                      <Icon
                                        size={24}
                                        name={'Feather/arrow-down-circle'}
                                      />
                                    </Touchable>
                                  </View>
                                </View>
                              )}
                            </>
                          </>
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                    />
                  </View>
                )}
              </>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* botem tab1 */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
          },
          dimensions.width
        )}
      >
        {/* Home */}
        <Touchable
          onPress={() => {
            try {
              setServiceConNumber(props.route?.params?.Name ?? '');
              navigation.navigate('DashboardScreen', {
                name: Constants['name'],
              });
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
              setServiceConNumber(props.route?.params?.Name ?? '');
              navigation.navigate('UsageScreen', { name: Constants['name'] });
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
              setServiceConNumber(props.route?.params?.Name ?? '');
              navigation.navigate('BillingScreen', { name: Constants['name'] });
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
              color={theme.colors['Community_Dark_UI']}
              name={'Entypo/text-document-inverted'}
            />
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Community_Dark_UI'],
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
              setServiceConNumber(props.route?.params?.Name ?? '');
              navigation.navigate('PaymentsScreen', {
                name: Constants['name'],
              });
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

export default withTheme(BillingScreen);
