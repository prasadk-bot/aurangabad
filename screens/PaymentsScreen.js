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
  AccordionGroup,
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

const PaymentsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [availableBalance, setAvailableBalance] = React.useState('');
  const [consumerName, setConsumerName] = React.useState('');
  const [consumerScNo, setConsumerScNo] = React.useState('');
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [meterNumber, setMeterNumber] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [serviceConNumber, setServiceConNumber] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [viewBillDetails, setViewBillDetails] = React.useState({});
  const [viewPaymentDetails, setViewPaymentDetails] = React.useState({});
  const [viewRechargeDetails, setViewRechargeDetails] = React.useState({});
  const [visibleHindi, setVisibleHindi] = React.useState(false);
  const converDateTimeToDate = dateTime => {
    const date = dateTime.split(' ');
    console.log('date' + date);

    const str = date[0];

    return str;
  };

  const convertTimestampToDate = timestamp => {
    const date = new Date(timestamp);
    console.log('timestamp' + timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = date.getDate();
    console.log('month' + month);
    console.log('year' + year);
    console.log('date' + day);
    //const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    const formattedDate = `${day < 10 ? '0' + day : day}-${
      month < 10 ? '0' + month : month
    }-${year}`;
    // Return the formatted date
    return formattedDate;
  };

  const paymentBuildString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(
      `billing/rest/getBillDataWsscollections/rest/PaymentDetailsTService/getPaymentDetails/${Scno}`
    );
    return `collections/rest/PaymentDetailsTService/getPaymentDetails/${Scno}`;
  };

  const rechargeHistoryBuildString = meterNo => {
    console.log(
      `/SPM/getAllSpmRechargeHistoryDetailsByMeterNumberOrAccountNo?meterNumberOrAccountNo=${meterNo}`
    );
    //return `/SPM/getAllSpmBillDetailsByAccountNoOrMeterNumber?accountNoOrMeterNumber=${meterNo}`

    return `/SPM/getAllSpmRechargeHistoryDetailsByMeterNumberOrAccountNo?meterNumberOrAccountNo=${meterNo}`;
  };

  const manageAccountFun = ManageAccountDetails => {
    return ManageAccountDetails.map(team => {
      return { label: team.new_added_account, value: team.new_added_account };
    });
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

  const buildConsumerString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      console.log('Screen ON_SCREEN_FOCUS Start');
      let error = null;
      try {
        if (!isFocused) {
          return;
        }
        console.log('Start ON_SCREEN_FOCUS:0 SET_VARIABLE');
        setTextInputValue(Constants['name']);
        console.log('Complete ON_SCREEN_FOCUS:0 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:1 FETCH_REQUEST');
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            accno: Constants['name'],
          })
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:1 FETCH_REQUEST', {
          consumerDetailsJson,
        });
        console.log('Start ON_SCREEN_FOCUS:2 CONSOLE_LOG');
        console.log(consumerDetailsJson);
        console.log('Complete ON_SCREEN_FOCUS:2 CONSOLE_LOG');
        console.log('Start ON_SCREEN_FOCUS:3 CUSTOM_FUNCTION');
        buildConsumerString(Constants['name']);
        console.log('Complete ON_SCREEN_FOCUS:3 CUSTOM_FUNCTION');
        console.log('Start ON_SCREEN_FOCUS:4 EXTRACT_KEY');
        const prepaidFlag = (consumerDetailsJson && consumerDetailsJson[0])
          ?.data?.prepaidFlag;
        console.log('Complete ON_SCREEN_FOCUS:4 EXTRACT_KEY', { prepaidFlag });
        console.log('Start ON_SCREEN_FOCUS:5 SET_VARIABLE');
        setPrepaidFlag(prepaidFlag);
        console.log('Complete ON_SCREEN_FOCUS:5 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:6 EXTRACT_KEY');
        const meterNo = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.meterNumber;
        console.log('Complete ON_SCREEN_FOCUS:6 EXTRACT_KEY', { meterNo });
        console.log('Start ON_SCREEN_FOCUS:7 SET_VARIABLE');
        setMeterNumber(meterNo);
        console.log('Complete ON_SCREEN_FOCUS:7 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:8 EXTRACT_KEY');
        const Scno = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.scno;
        console.log('Complete ON_SCREEN_FOCUS:8 EXTRACT_KEY', { Scno });
        console.log('Start ON_SCREEN_FOCUS:9 SET_VARIABLE');
        setConsumerScNo(Scno);
        console.log('Complete ON_SCREEN_FOCUS:9 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:10 EXTRACT_KEY');
        const Name = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.name;
        console.log('Complete ON_SCREEN_FOCUS:10 EXTRACT_KEY', { Name });
        console.log('Start ON_SCREEN_FOCUS:11 SET_VARIABLE');
        setConsumerName(Name);
        console.log('Complete ON_SCREEN_FOCUS:11 SET_VARIABLE');
        const Billdetailsjson = await (async () => {
          console.log('Start ON_SCREEN_FOCUS:12 FETCH_REQUEST');
          if (prepaidFlag === 'N') {
            const __result = (
              await CISAPPApi.viewBillDetailsPOST(Constants, {
                action: buildString(Constants['name']),
              })
            )?.json;
            console.log('Complete ON_SCREEN_FOCUS:12 FETCH_REQUEST', {
              Billdetailsjson,
            });
            return __result;
          } else {
            console.log(
              'Skipped ON_SCREEN_FOCUS:12 FETCH_REQUEST: condition not met'
            );
          }
        })();
        console.log('Start ON_SCREEN_FOCUS:13 CONSOLE_LOG');
        console.log(Billdetailsjson);
        console.log('Complete ON_SCREEN_FOCUS:13 CONSOLE_LOG');
        console.log('Start ON_SCREEN_FOCUS:14 CUSTOM_FUNCTION');
        buildString(Constants['name']);
        console.log('Complete ON_SCREEN_FOCUS:14 CUSTOM_FUNCTION');
        console.log('Start ON_SCREEN_FOCUS:15 SET_VARIABLE');
        const valueZnBaydab =
          Billdetailsjson && Billdetailsjson[0].data.BillDataJson[0];
        setViewBillDetails(valueZnBaydab);
        const Billdetailslog = valueZnBaydab;
        console.log('Complete ON_SCREEN_FOCUS:15 SET_VARIABLE');
        const paymenthistoryjson = await (async () => {
          console.log('Start ON_SCREEN_FOCUS:16 FETCH_REQUEST');
          if (prepaidFlag === 'N') {
            const __result = (
              await CISAPPApi.paymentHistoryPOST(Constants, {
                action: paymentBuildString(Constants['name']),
              })
            )?.json;
            console.log('Complete ON_SCREEN_FOCUS:16 FETCH_REQUEST', {
              paymenthistoryjson,
            });
            return __result;
          } else {
            console.log(
              'Skipped ON_SCREEN_FOCUS:16 FETCH_REQUEST: condition not met'
            );
          }
        })();
        console.log('Start ON_SCREEN_FOCUS:17 CUSTOM_FUNCTION');
        paymentBuildString(Constants['name']);
        console.log('Complete ON_SCREEN_FOCUS:17 CUSTOM_FUNCTION');
        console.log('Start ON_SCREEN_FOCUS:18 SET_VARIABLE');
        const value9WzyhLlM = paymenthistoryjson && paymenthistoryjson[0].data;
        setViewPaymentDetails(value9WzyhLlM);
        const paymentdetailslog = value9WzyhLlM;
        console.log('Complete ON_SCREEN_FOCUS:18 SET_VARIABLE');
        const prepaidJson = await (async () => {
          console.log('Start ON_SCREEN_FOCUS:19 FETCH_REQUEST');
          if (prepaidFlag === 'Y') {
            const __result = (
              await CISAPPApi.prepaidApiPOST(Constants, { mtrno: meterNo })
            )?.json;
            console.log('Complete ON_SCREEN_FOCUS:19 FETCH_REQUEST', {
              prepaidJson,
            });
            return __result;
          } else {
            console.log(
              'Skipped ON_SCREEN_FOCUS:19 FETCH_REQUEST: condition not met'
            );
          }
        })();
        console.log('Start ON_SCREEN_FOCUS:20 CONSOLE_LOG');
        console.log(prepaidJson);
        console.log('Complete ON_SCREEN_FOCUS:20 CONSOLE_LOG');
        console.log('Start ON_SCREEN_FOCUS:21 EXTRACT_KEY');
        const availableBalance = (prepaidJson && prepaidJson[0])?.data[0]
          ?.avail_balance;
        console.log('Complete ON_SCREEN_FOCUS:21 EXTRACT_KEY', {
          availableBalance,
        });
        console.log('Start ON_SCREEN_FOCUS:22 CONSOLE_LOG');
        console.log(availableBalance);
        console.log('Complete ON_SCREEN_FOCUS:22 CONSOLE_LOG');
        console.log('Start ON_SCREEN_FOCUS:23 SET_VARIABLE');
        setAvailableBalance(availableBalance);
        console.log('Complete ON_SCREEN_FOCUS:23 SET_VARIABLE');
        const RechargeHistoryJson = await (async () => {
          console.log('Start ON_SCREEN_FOCUS:24 FETCH_REQUEST');
          if (prepaidFlag === 'Y') {
            const __result = (
              await CISAPPApi.rechargeHistoryDetailsPOST(Constants, {
                action: (() => {
                  const e = rechargeHistoryBuildString(meterNo);
                  console.log(e);
                  return e;
                })(),
              })
            )?.json;
            console.log('Complete ON_SCREEN_FOCUS:24 FETCH_REQUEST', {
              RechargeHistoryJson,
            });
            return __result;
          } else {
            console.log(
              'Skipped ON_SCREEN_FOCUS:24 FETCH_REQUEST: condition not met'
            );
          }
        })();
        console.log('Start ON_SCREEN_FOCUS:25 CUSTOM_FUNCTION');
        rechargeHistoryBuildString(meterNo);
        console.log('Complete ON_SCREEN_FOCUS:25 CUSTOM_FUNCTION');
        console.log('Start ON_SCREEN_FOCUS:26 CONSOLE_LOG');
        console.log(RechargeHistoryJson);
        console.log('Complete ON_SCREEN_FOCUS:26 CONSOLE_LOG');
        console.log('Start ON_SCREEN_FOCUS:27 EXTRACT_KEY');
        const rechargeData =
          RechargeHistoryJson && RechargeHistoryJson[0].data.data;
        console.log('Complete ON_SCREEN_FOCUS:27 EXTRACT_KEY', {
          rechargeData,
        });
        console.log('Start ON_SCREEN_FOCUS:28 SET_VARIABLE');
        setViewRechargeDetails(
          (() => {
            const e = rechargeData;
            console.log(e);
            return e;
          })()
        );
        console.log('Complete ON_SCREEN_FOCUS:28 SET_VARIABLE');
        console.log('Start ON_SCREEN_FOCUS:29 FETCH_REQUEST');
        const ManageAccountDetails = (
          await CISAPPApi.manageAccountsPOST(Constants, {
            accountNumber: Constants['name'],
          })
        )?.json;
        console.log('Complete ON_SCREEN_FOCUS:29 FETCH_REQUEST', {
          ManageAccountDetails,
        });
        console.log('Start ON_SCREEN_FOCUS:30 CONSOLE_LOG');
        console.log(ManageAccountDetails);
        console.log('Complete ON_SCREEN_FOCUS:30 CONSOLE_LOG');
        console.log('Start ON_SCREEN_FOCUS:31 SET_VARIABLE');
        const result = setGlobalVariableValue({
          key: 'manageaccount_picker',
          value: manageAccountFun(
            ManageAccountDetails && ManageAccountDetails[0].data[0].data
          ),
        });
        console.log('Complete ON_SCREEN_FOCUS:31 SET_VARIABLE', { result });
        console.log('Start ON_SCREEN_FOCUS:32 CONSOLE_LOG');
        console.log(result);
        console.log('Complete ON_SCREEN_FOCUS:32 CONSOLE_LOG');
        console.log('Start ON_SCREEN_FOCUS:33 SET_VARIABLE');
        setTextInputValue(Constants['name']);
        console.log('Complete ON_SCREEN_FOCUS:33 SET_VARIABLE');
      } catch (err) {
        console.error(err);
        error = err.message ?? err;
      }
      console.log(
        'Screen ON_SCREEN_FOCUS Complete',
        error ? { error } : 'no error'
      );
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
        {!showNav ? null : (
          <Surface
            elevation={0}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'center',
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
                      setShowNav(false);
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
                      setShowNav(false);
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
                      setShowNav(false);
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
                    const handler = async () => {
                      try {
                        /* hidden 'Navigate' action */
                        await WebBrowser.openBrowserAsync(
                          'https://www.nbpdcl.co.in/(S(g3qjoyao45b0aohgnjpnm1de))/frmPrivacyPolicy.aspx'
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
                    setShowNav(!showNav);
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
          status={showNav}
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
            {transalate(Variables, 'Payments')}
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
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'flex-start' },
          dimensions.width
        )}
      >
        <ScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          {/* amblock */}
          <View
            style={StyleSheet.applyWidth(
              {
                justifyContent: 'flex-start',
                paddingLeft: 20,
                paddingRight: 20,
              },
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
                      setPrepaidFlag(prepaidFlag);
                      const meterNo = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.meterNumber;
                      setMeterNumber(meterNo);
                      console.log(meterNo);
                      const Scno = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.scno;
                      setConsumerScNo(Scno);
                      const Name = (
                        consumerDetailsJson && consumerDetailsJson[0]
                      )?.data?.name;
                      setConsumerName(Name);
                      const Billdetailsjson = await (async () => {
                        if (prepaidFlag === 'N') {
                          return (
                            await CISAPPApi.viewBillDetailsPOST(Constants, {
                              action: buildString(newPickerValue),
                            })
                          )?.json;
                        }
                      })();
                      console.log(Billdetailsjson);
                      buildString(newPickerValue);

                      const valuewZXFVabU =
                        Billdetailsjson &&
                        Billdetailsjson[0].data.BillDataJson[0];
                      setViewBillDetails(valuewZXFVabU);
                      const Billdetailslog = valuewZXFVabU;
                      const paymenthistoryjson = (
                        await CISAPPApi.paymentHistoryPOST(Constants, {
                          action: paymentBuildString(newPickerValue),
                        })
                      )?.json;
                      paymentBuildString(newPickerValue);

                      const valueCJ0fjavE =
                        paymenthistoryjson && paymenthistoryjson[0].data;
                      setViewPaymentDetails(valueCJ0fjavE);
                      const paymentdetailslog = valueCJ0fjavE;
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
                      const RechargeHistoryJson = await (async () => {
                        if (prepaidFlag === 'Y') {
                          return (
                            await CISAPPApi.rechargeHistoryDetailsPOST(
                              Constants,
                              { action: rechargeHistoryBuildString(meterNo) }
                            )
                          )?.json;
                        }
                      })();
                      rechargeHistoryBuildString(meterNo);
                      console.log(RechargeHistoryJson);
                      const rechargeData =
                        RechargeHistoryJson && RechargeHistoryJson[0].data.data;
                      setViewRechargeDetails(rechargeData);
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
              {...GlobalStyles.ViewStyles(theme)['postpaid view'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['postpaid view'].style,
                  { marginBottom: 5, marginTop: 10 }
                ),
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
                        { fontFamily: 'Roboto_400Regular', textAlign: 'right' }
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
                        { fontFamily: 'Roboto_400Regular', textAlign: 'right' }
                      ),
                      dimensions.width
                    )}
                  >
                    {transalate(Variables, 'Postpaid')}
                  </Text>
                )}
              </>
            </View>
            {/* Postpaid Card */}
            <>
              {!(prepaidFlag === 'N') ? null : (
                <View
                  {...GlobalStyles.ViewStyles(theme)['card'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['card'].style,
                      {
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgb(199, 198, 198)',
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
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: theme.colors['Community_Divider'],
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
                  {/* Name */}
                  <Text
                    accessible={true}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.strong,
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 14,
                        opacity: 1,
                        paddingTop: 12,
                      },
                      dimensions.width
                    )}
                  >
                    {transalate(Variables, 'Available balance')}
                    {'  ₹'}
                    {availableBalance}
                  </Text>
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
                        backgroundColor: theme.colors.primary,
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
            {/* section header */}
            <>
              {!(prepaidFlag === 'N') ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 10,
                      paddingBottom: 12,
                      paddingLeft: 20,
                      paddingRight: 20,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          alignSelf: 'center',
                          color: theme.colors['ShopAppBlue'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {transalate(Variables, 'Payment History')}
                  </Text>
                </View>
              )}
            </>
            {/* postpaid */}
            <>
              {!(prepaidFlag === 'N') ? null : (
                <View
                  {...GlobalStyles.ViewStyles(theme)['accordion'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['accordion'].style,
                      {
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: theme.colors['Community_Border'],
                        paddingBottom: 12,
                        paddingTop: 12,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {/* Postpaid Table */}
                  <>
                    {!(prepaidFlag === 'N') ? null : (
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
                        {/* date */}
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
                              {transalate(Variables, 'Date')}
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
                  {/* List  */}
                  <FlatList
                    data={viewPaymentDetails}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(listData, index) =>
                      listData?.id ?? listData?.uuid ?? index.toString()
                    }
                    keyboardShouldPersistTaps={'never'}
                    listKey={'aQOa6UZq'}
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <>
                          {/* card */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 1,
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
                            <View>
                              {/* date */}
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {convertTimestampToDate(listData?.paymentDate)}
                              </Text>
                              {/* purpose */}
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.paymentMode}
                              </Text>
                            </View>
                            {/* View 2 */}
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
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'₹'}
                                {listData?.amountPaid}
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
                                        `https://nccmsedcl09-cpfghesuat.quantumtechnologiesltd.com/fgweb/web/json/plugin/com.fluentgrid.cp.plugin.DynamicServiceReportGenerator/service?name=BILL_PAYMENT_RECEIPT&prno=${(() => {
                                          const e = listData?.prno;
                                          console.log(e);
                                          return e;
                                        })()}&scno=${(() => {
                                          const e = Constants['name'];
                                          console.log(e);
                                          return e;
                                        })()}&billtype=B`
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
                        </>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                  />
                </View>
              )}
            </>
            {/* section header */}
            <>
              {!(prepaidFlag === 'Y') ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 10,
                      paddingBottom: 12,
                      paddingLeft: 20,
                      paddingRight: 20,
                    },
                    dimensions.width
                  )}
                >
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          alignSelf: 'center',
                          color: theme.colors['ShopAppBlue'],
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {transalate(Variables, 'Recharge History')}
                  </Text>
                </View>
              )}
            </>
            {/* Prepaid Table */}
            <>
              {!(prepaidFlag === 'Y') ? null : (
                <View
                  {...GlobalStyles.ViewStyles(theme)['Table 3'].props}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ViewStyles(theme)['Table 3'].style,
                    dimensions.width
                  )}
                >
                  {/* Date */}
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
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
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
                        {transalate(Variables, 'Date')}
                      </Text>
                    </View>
                  </View>
                  {/* Recharge Amount */}
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
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
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
                        {transalate(Variables, 'Recharge Amount')}
                      </Text>
                    </View>
                  </View>
                  {/* AvailableAmount */}
                  <View
                    style={StyleSheet.applyWidth(
                      { borderColor: theme.colors['White'], flex: 1 },
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
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
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
                        {transalate(Variables, 'Available Amount')}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </>
            {/* prepaid */}
            <>
              {!(prepaidFlag === 'Y') ? null : (
                <View
                  {...GlobalStyles.ViewStyles(theme)['accordion'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ViewStyles(theme)['accordion'].style,
                      {
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: theme.colors['Community_Border'],
                        paddingBottom: 12,
                        paddingTop: 12,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  <FlatList
                    data={viewRechargeDetails}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(listData, index) =>
                      listData?.id ?? listData?.uuid ?? index.toString()
                    }
                    keyboardShouldPersistTaps={'never'}
                    listKey={'LcnCxoPd'}
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <>
                          {/* card */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Custom Color_21'],
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
                            <View>
                              {/* date */}
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {converDateTimeToDate(listData?.requestTime)}
                              </Text>
                              {/* purpose */}
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {listData?.rechargeType}
                              </Text>
                            </View>
                            {/* View 2 */}
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
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'₹'}
                                {listData?.rechargeAmt}
                              </Text>
                            </View>
                            {/* View 3 */}
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
                                      fontFamily: 'Roboto_400Regular',
                                      fontSize: 16,
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'₹'}
                                {listData?.finalAmt}
                              </Text>
                            </View>
                          </View>
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
        </ScrollView>
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-around' },
            dimensions.width
          )}
        />
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
              color={theme.colors['Community_Dark_UI']}
              name={'MaterialIcons/payments'}
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

export default withTheme(PaymentsScreen);
