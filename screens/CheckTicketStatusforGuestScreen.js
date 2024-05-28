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
  Circle,
  Icon,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';

const CheckTicketStatusforGuestScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [checkticketRegisterNo, setCheckticketRegisterNo] = React.useState('');
  const [consId, setConsId] = React.useState('');
  const [consumerId, setConsumerId] = React.useState('');
  const [listExists, setListExists] = React.useState(true);
  const [listMissing, setListMissing] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [noContent, setNoContent] = React.useState(false);
  const [remarksCheckticketGuest, setRemarksCheckticketGuest] =
    React.useState('');
  const [remarksGuest, setRemarksGuest] = React.useState('');
  const [tableData, setTableData] = React.useState([]);
  const buildConsumerString = Scno => {
    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  const getticketdeatils = consId => {
    console.log(`${consId}`);
    return `${consId}`;
  };

  const getticketstatusGuestFun = regNo => {
    console.log(`csc/rest/RequestTWhr/${regNo}`);
    return `csc/rest/RequestTWhr/${regNo}`;
  };

  const checkticketColorChange = requestStatus => {
    let color = 'black';
    let textStatus = null;
    if (requestStatus === 'Rectified' || requestStatus === 'Verification') {
      textStatus = requestStatus;
      color = 'orange';
    } else if (
      requestStatus === 'Inspection Pending' ||
      requestStatus === 'Pending For Approval AAO' ||
      requestStatus === 'Pending'
    ) {
      textStatus = requestStatus;
      color = 'red';
    } else if (requestStatus === 'Closed') {
      textStatus = requestStatus;
      color = 'green';
    }
    return color;
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* header */}
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
          {transalate(Variables, 'Check Ticket Status')}
        </Text>
      </View>
      {/* Search and add */}
      <View
        {...GlobalStyles.ViewStyles(theme)['search and Add'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['search and Add'].style,
            { paddingBottom: 16, paddingTop: 16, width: '100%' }
          ),
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              flex: 1,
              justifyContent: 'center',
              marginLeft: 3,
              marginRight: 3,
            },
            dimensions.width
          )}
        >
          <Surface
            elevation={3}
            style={StyleSheet.applyWidth(
              {
                alignContent: 'center',
                alignItems: 'center',
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 16,
              },
              dimensions.width
            )}
          >
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                try {
                  setConsId(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={transalate(
                Variables,
                'Account/Consumer number'
              ).toString()}
              placeholderTextColor={theme.colors['Medium']}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 8,
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 15,
                  height: 48,
                  opacity: 0.5,
                  paddingBottom: 5,
                  paddingLeft: 24,
                  paddingRight: 8,
                  paddingTop: 5,
                  width: '90%',
                },
                dimensions.width
              )}
              value={consId}
            />
            <Touchable
              onPress={() => {
                const handler = async () => {
                  try {
                    const consumerDetailsJson = (
                      await CISAPPApi.consumerDetailsPOST(Constants, {
                        accno: consId,
                      })
                    )?.json;
                    buildConsumerString(consId);
                    const consumerId = (
                      consumerDetailsJson && consumerDetailsJson[0]
                    )?.data?.consumerId;
                    setConsumerId(consumerId);
                    const getticketdata = (
                      await CISAPPApi.getticketdeatilsPOST(Constants, {
                        consId: consumerId,
                      })
                    )?.json;
                    console.log(getticketdata);
                    setTableData(
                      (
                        (getticketdata && getticketdata[0])?.data &&
                        ((getticketdata && getticketdata[0])?.data)[0]
                      )?.data
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
                color={theme.colors['Medium']}
                name={'Feather/search'}
              />
            </Touchable>
          </Surface>
        </View>
      </View>
      {/* Second Navigation Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            paddingLeft: 12,
            paddingRight: 12,
          },
          dimensions.width
        )}
      >
        {/* Option 1 Frame */}
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
          {/* Flex Frame for Touchable */}
          <>
            {!menuTab1 ? null : (
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setMenuTab1(true);
                      setMenuTab2(false);
                      setMenuTab3(false);
                      setListMissing(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Button Frame True */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderColor: theme.colors['Primary'],
                        flexGrow: 0,
                        flexShrink: 0,
                        height: 25,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
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
                      {transalate(Variables, 'Open Tickets')}
                    </Text>
                  </View>
                </Touchable>
              </View>
            )}
          </>
          {/* Flex Frame for Touchable */}
          <>
            {menuTab1 ? null : (
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setMenuTab1(true);
                      setMenuTab2(false);
                      setMenuTab3(false);
                      setListMissing(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Button Frame False */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 2,
                        borderColor: theme.colors['Light'],
                        flexGrow: 0,
                        flexShrink: 0,
                        height: 25,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
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
                      {transalate(Variables, 'Open Tickets')}
                    </Text>
                  </View>
                </Touchable>
              </View>
            )}
          </>
        </View>
        {/* Option 2 Frame */}
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
          {/* Flex Frame for Touchable */}
          <>
            {!menuTab2 ? null : (
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setMenuTab1(false);
                      setMenuTab2(true);
                      setMenuTab3(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Button Frame True */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderColor: theme.colors['Primary'],
                        height: 25,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
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
                      {transalate(Variables, 'All Tickets')}
                    </Text>
                  </View>
                </Touchable>
              </View>
            )}
          </>
          {/* Flex Frame for Touchable */}
          <>
            {menuTab2 ? null : (
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                <Touchable
                  onPress={() => {
                    try {
                      setMenuTab1(false);
                      setMenuTab3(false);
                      setMenuTab2(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  {/* Button Frame False */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        borderBottomWidth: 2,
                        borderColor: theme.colors['Light'],
                        flexGrow: 0,
                        flexShrink: 0,
                        height: 25,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
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
                      {transalate(Variables, 'All Tickets')}
                    </Text>
                  </View>
                </Touchable>
              </View>
            )}
          </>
        </View>
      </View>
      {/* Scroll Content View */}
      <>
        {listMissing ? null : (
          <ScrollView
            bounces={true}
            horizontal={false}
            keyboardShouldPersistTaps={'never'}
            nestedScrollEnabled={false}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            style={StyleSheet.applyWidth({ flexGrow: 1 }, dimensions.width)}
            contentContainerStyle={StyleSheet.applyWidth(
              { flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* Content Frame Tab 1 */}
            <>
              {!menuTab1 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, flexGrow: 1, flexShrink: 0 },
                    dimensions.width
                  )}
                >
                  <FlatList
                    data={tableData}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(listData, index) =>
                      listData?.id ?? listData?.uuid ?? index.toString()
                    }
                    keyboardShouldPersistTaps={'never'}
                    listKey={'qTH4Z250'}
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <>
                          {/* List View Frame */}
                          <>
                            {!(
                              listData?.RequestStatus !== 'Rectified'
                            ) ? null : (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    flexGrow: 0,
                                    flexShrink: 0,
                                    paddingLeft: 12,
                                    paddingRight: 12,
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Flex Frame for Touchable */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      flexGrow: 0,
                                      flexShrink: 0,
                                      marginBottom: 12,
                                      marginTop: 12,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Touchable>
                                    {/* Record Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          borderBottomWidth: 2,
                                          borderColor:
                                            theme.colors.communityBorder,
                                          flexDirection: 'row',
                                          flexGrow: 0,
                                          flexShrink: 0,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* New Right Side */}
                                      <View
                                        style={StyleSheet.applyWidth(
                                          {
                                            flexGrow: 0,
                                            flexShrink: 1,
                                            paddingBottom: 12,
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                            paddingTop: 12,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {/* Second Row Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              flexGrow: 0,
                                              flexShrink: 1,
                                              paddingBottom: 6,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          <Text
                                            accessible={true}
                                            style={StyleSheet.applyWidth(
                                              {
                                                color: [
                                                  {
                                                    minWidth:
                                                      Breakpoints.Mobile,
                                                    value:
                                                      theme.colors[
                                                        'Community_Dark_UI'
                                                      ],
                                                  },
                                                  {
                                                    minWidth:
                                                      Breakpoints.Mobile,
                                                    value:
                                                      checkticketColorChange(
                                                        listData?.RequestStatus
                                                      ),
                                                  },
                                                ],
                                                fontFamily: 'Roboto_400Regular',
                                                fontSize: 12,
                                                lineHeight: 18,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.RegistrationDate}
                                            {'\n'}
                                            {listData?.RegistrationNo}
                                            {' | '}
                                            {listData?.type}
                                            {' | '}
                                            {listData?.RequestStatus}
                                          </Text>
                                        </View>
                                        {/* Text Frame */}
                                        <View
                                          style={StyleSheet.applyWidth(
                                            {
                                              flexGrow: 0,
                                              flexShrink: 0,
                                              marginTop: 6,
                                              maxWidth: 300,
                                              paddingBottom: 6,
                                            },
                                            dimensions.width
                                          )}
                                        >
                                          {/* Rubik Text Style 12/18 Regular */}
                                          <Text
                                            accessible={true}
                                            ellipsizeMode={'tail'}
                                            numberOfLines={3}
                                            style={StyleSheet.applyWidth(
                                              {
                                                color:
                                                  theme.colors[
                                                    'Community_Dark_UI'
                                                  ],
                                                flexGrow: 0,
                                                flexShrink: 0,
                                                fontFamily: 'Rubik_400Regular',
                                                fontSize: 12,
                                                lineHeight: 18,
                                                marginBottom: 6,
                                              },
                                              dimensions.width
                                            )}
                                          >
                                            {listData?.RequestNature}
                                          </Text>
                                        </View>
                                        {/* Remarks */}
                                        <View>
                                          <Touchable
                                            onPress={() => {
                                              const handler = async () => {
                                                try {
                                                  const valuevr4gfQhk =
                                                    listData?.RegistrationNo;
                                                  setCheckticketRegisterNo(
                                                    valuevr4gfQhk
                                                  );
                                                  const registerNo =
                                                    valuevr4gfQhk;
                                                  const getTicketstatusJson = (
                                                    await CISAPPApi.getticketstatusPOST(
                                                      Constants,
                                                      {
                                                        ticketNumber:
                                                          registerNo,
                                                      }
                                                    )
                                                  )?.json;
                                                  console.log(
                                                    getTicketstatusJson
                                                  );
                                                  const remarksGuest = (
                                                    getTicketstatusJson &&
                                                    getTicketstatusJson[0]
                                                      .data[0]
                                                  )?.data[0]?.Remarks;
                                                  console.log(remarksGuest);
                                                  setRemarksGuest(remarksGuest);
                                                  navigation.navigate(
                                                    'RemarksGuestSuccessScreen',
                                                    {
                                                      remarksGuestMsg:
                                                        remarksGuest,
                                                    }
                                                  );
                                                } catch (err) {
                                                  console.error(err);
                                                }
                                              };
                                              handler();
                                            }}
                                          >
                                            <Text
                                              accessible={true}
                                              {...GlobalStyles.TextStyles(
                                                theme
                                              )['Text'].props}
                                              style={StyleSheet.applyWidth(
                                                StyleSheet.compose(
                                                  GlobalStyles.TextStyles(
                                                    theme
                                                  )['Text'].style,
                                                  {
                                                    fontFamily:
                                                      'Roboto_400Regular',
                                                    textDecorationLine:
                                                      'underline',
                                                  }
                                                ),
                                                dimensions.width
                                              )}
                                            >
                                              {transalate(Variables, 'Remarks')}
                                            </Text>
                                          </Touchable>
                                        </View>
                                      </View>
                                    </View>
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
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                  />
                </View>
              )}
            </>
            {/* Content Frame Tab 2 */}
            <>
              {!menuTab2 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, flexGrow: 1, flexShrink: 0 },
                    dimensions.width
                  )}
                >
                  <FlatList
                    data={tableData}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(listData, index) =>
                      listData?.id ?? listData?.uuid ?? index.toString()
                    }
                    keyboardShouldPersistTaps={'never'}
                    listKey={'ZVbzbmfV'}
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <>
                          {/* List View Frame */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flexGrow: 0,
                                flexShrink: 0,
                                paddingLeft: 12,
                                paddingRight: 12,
                              },
                              dimensions.width
                            )}
                          >
                            {/* Flex Frame for Touchable */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  flexGrow: 0,
                                  flexShrink: 0,
                                  marginBottom: 12,
                                  marginTop: 12,
                                },
                                dimensions.width
                              )}
                            >
                              <Touchable>
                                {/* Record Frame */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      borderBottomWidth: 2,
                                      borderColor: theme.colors.communityBorder,
                                      flexDirection: 'row',
                                      flexGrow: 0,
                                      flexShrink: 0,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* New Right Side */}
                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        flexGrow: 0,
                                        flexShrink: 1,
                                        paddingBottom: 12,
                                        paddingLeft: 12,
                                        paddingRight: 12,
                                        paddingTop: 12,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {/* Second Row Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          flexGrow: 0,
                                          flexShrink: 1,
                                          paddingBottom: 6,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color: [
                                              {
                                                minWidth: Breakpoints.Mobile,
                                                value:
                                                  theme.colors[
                                                    'Community_Dark_UI'
                                                  ],
                                              },
                                              {
                                                minWidth: Breakpoints.Mobile,
                                                value: checkticketColorChange(
                                                  listData?.RequestStatus
                                                ),
                                              },
                                            ],
                                            fontFamily: 'Roboto_400Regular',
                                            fontSize: 13,
                                            lineHeight: 18,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.RegistrationDate}
                                        {'\n'}
                                        {listData?.RegistrationNo}
                                        {'| '}
                                        {listData?.type}
                                        {'| '}
                                        {listData?.RequestStatus}
                                      </Text>
                                    </View>
                                    {/* Text Frame */}
                                    <View
                                      style={StyleSheet.applyWidth(
                                        {
                                          flexGrow: 0,
                                          flexShrink: 0,
                                          marginTop: 6,
                                          maxWidth: 300,
                                          paddingBottom: 6,
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {/* Rubik Text Style 12/18 Regular */}
                                      <Text
                                        accessible={true}
                                        ellipsizeMode={'tail'}
                                        numberOfLines={3}
                                        style={StyleSheet.applyWidth(
                                          {
                                            color:
                                              theme.colors['Community_Dark_UI'],
                                            flexGrow: 0,
                                            flexShrink: 0,
                                            fontFamily: 'Rubik_400Regular',
                                            fontSize: 13,
                                            lineHeight: 18,
                                            marginBottom: 6,
                                          },
                                          dimensions.width
                                        )}
                                      >
                                        {listData?.RequestNature}
                                      </Text>
                                    </View>
                                    {/* Remarks */}
                                    <View>
                                      <Touchable
                                        onPress={() => {
                                          const handler = async () => {
                                            try {
                                              const valuenrt5CVLA =
                                                listData?.RegistrationNo;
                                              setCheckticketRegisterNo(
                                                valuenrt5CVLA
                                              );
                                              const registerNo = valuenrt5CVLA;
                                              const getTicketstatusJson = (
                                                await CISAPPApi.getticketstatusPOST(
                                                  Constants,
                                                  { ticketNumber: registerNo }
                                                )
                                              )?.json;
                                              console.log(getTicketstatusJson);
                                              const remarksGuest = (
                                                getTicketstatusJson &&
                                                getTicketstatusJson[0].data[0]
                                              )?.data[0]?.Remarks;
                                              console.log(remarksGuest);
                                              setRemarksGuest(remarksGuest);
                                              navigation.navigate(
                                                'RemarksGuestSuccessScreen',
                                                {
                                                  remarksGuestMsg: remarksGuest,
                                                }
                                              );
                                            } catch (err) {
                                              console.error(err);
                                            }
                                          };
                                          handler();
                                        }}
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
                                                fontFamily: 'Roboto_400Regular',
                                                textDecorationLine: 'underline',
                                              }
                                            ),
                                            dimensions.width
                                          )}
                                        >
                                          {transalate(Variables, 'Remarks')}
                                        </Text>
                                      </Touchable>
                                    </View>
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                          </View>
                        </>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={StyleSheet.applyWidth(
                      { flex: 1 },
                      dimensions.width
                    )}
                  />
                </View>
              )}
            </>
          </ScrollView>
        )}
      </>
      {/* No Content Frame */}
      <>
        {!listMissing ? null : (
          <View
            style={StyleSheet.applyWidth(
              { flexGrow: 1, flexShrink: 0 },
              dimensions.width
            )}
          >
            {/* System Notification Tab 2 */}
            <>
              {!menuTab2 ? null : (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      flex: 1,
                      flexShrink: 0,
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {/* Flex Frame for Icons */}
                  <View>
                    <Icon
                      color={theme.colors.communityIconFill}
                      name={'MaterialIcons/event-busy'}
                      size={48}
                    />
                  </View>
                  {/* Headline Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexShrink: 0,
                        justifyContent: 'center',
                        marginLeft: 24,
                        marginRight: 24,
                        marginTop: 24,
                      },
                      dimensions.width
                    )}
                  >
                    {/* Rubik Headline Style 18/24 Bold */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.communityIconFill,
                          fontFamily: 'Rubik_700Bold',
                          fontSize: 18,
                          lineHeight: 24,
                          textAlign: 'center',
                        },
                        dimensions.width
                      )}
                    >
                      {
                        'Your Tickets inbox is \ncurrently empty. \nNew Tickets will appear here.'
                      }
                    </Text>
                  </View>
                </View>
              )}
            </>
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(CheckTicketStatusforGuestScreen);
