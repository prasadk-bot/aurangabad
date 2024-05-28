import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native';

const ManageAccountScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [managead, setManagead] = React.useState({});
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [serviceConNo, setServiceConNo] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);
  const [visibleHindi, setVisibleHindi] = React.useState(false);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const madetails = (
          await CISAPPApi.manageAccountsPOST(Constants, {
            accountNumber: Constants['name'],
          })
        )?.json;
        console.log(madetails);

        const valueA7PzobTX = madetails && madetails[0].data[0].data;
        setManagead(valueA7PzobTX);
        const result = valueA7PzobTX;
        console.log(result);
        const serviceConNo = (madetails && madetails[0].data[0].data)
          ?.new_added_account;
        console.log(serviceConNo);
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
        { flex: 1, flexDirection: 'column', justifyContent: 'flex-start' },
        dimensions.width
      )}
    >
      {/* headerp */}
      <View
        {...GlobalStyles.ViewStyles(theme)['headerp 2'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['headerp 2'].style,
            { alignContent: 'flex-end', height: 50, marginTop: 45 }
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
          {transalate(Variables, 'Manage Account')}
        </Text>
      </View>
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            flex: 1,
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignSelf: 'flex-end',
              flexDirection: 'row',
              marginBottom: 20,
              marginTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          {/* update */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('UpdatePhoneandEmailScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ marginRight: 20 }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Primary'],
                  borderRadius: 100,
                  flexDirection: 'row',
                  paddingLeft: 10,
                },
                dimensions.width
              )}
            >
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
                {transalate(Variables, 'Account Summary')}
              </Text>
            </View>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ManageregFlowTwoScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              color={theme.colors['App Green']}
              name={'Ionicons/md-add-circle-outline'}
              size={30}
            />
          </Touchable>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_21'],
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 20,
              marginRight: 20,
              paddingBottom: 4,
            },
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
                fontSize: 15,
              },
              dimensions.width
            )}
          >
            {transalate(Variables, 'Primary Account Number')}
            {': '}
            {Constants['name']}
          </Text>
        </View>
        <FlatList
          data={managead}
          horizontal={false}
          inverted={false}
          keyExtractor={(listData, index) =>
            listData?.id ?? listData?.uuid ?? index.toString()
          }
          keyboardShouldPersistTaps={'never'}
          listKey={'ImsqetwR'}
          nestedScrollEnabled={false}
          numColumns={1}
          onEndReachedThreshold={0.5}
          renderItem={({ item, index }) => {
            const listData = item;
            return (
              <>
                {/* amblock */}
                <View>
                  {/* Service Connection */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['profile'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['profile'].style,
                        {
                          alignItems: 'stretch',
                          flexDirection: 'column',
                          paddingBottom: 4,
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {/* Follow */}
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        },
                        dimensions.width
                      )}
                    >
                      {/* Game */}
                      <Text
                        accessible={true}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Community_Highlight_Blue'],
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 13,
                            marginTop: 5,
                          },
                          dimensions.width
                        )}
                      >
                        {transalate(Variables, 'Name')}
                        {': '}
                        {listData?.customer_name}
                      </Text>

                      <Touchable
                        onPress={() => {
                          try {
                            const valuem3Swoh2B = listData?.new_added_account;
                            setServiceConNo(valuem3Swoh2B);
                            const serviceconnectionNo = valuem3Swoh2B;
                            navigation.navigate(
                              'DeleteServiceConnectionScreen',
                              { serviceConnectionNo: serviceconnectionNo }
                            );
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          { marginLeft: 8 },
                          dimensions.width
                        )}
                      >
                        <>
                          {!(
                            listData?.new_added_account !== Constants['name']
                          ) ? null : (
                            <Icon
                              color={theme.colors['Error']}
                              name={'Feather/minus-circle'}
                              size={27}
                              style={StyleSheet.applyWidth(
                                { marginTop: 2 },
                                dimensions.width
                              )}
                            />
                          )}
                        </>
                      </Touchable>
                    </View>
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        borderBottomWidth: 1,
                        borderColor: theme.colors['Custom #dbdbdb'],
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        paddingBottom: 4,
                        paddingTop: 4,
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
                          { fontFamily: 'Roboto_400Regular', fontSize: 13 }
                        ),
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Account number')}
                      {': '}
                      {listData?.new_added_account}
                    </Text>
                  </View>
                </View>
              </>
            );
          }}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={StyleSheet.applyWidth(
            { paddingLeft: 20, paddingRight: 20 },
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
            {
              alignItems: 'stretch',
              paddingBottom: 10,
              paddingLeft: 20,
              paddingRight: 20,
            }
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
              {null}
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

export default withTheme(ManageAccountScreen);
