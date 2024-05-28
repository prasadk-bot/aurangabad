import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
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
  Swiper,
  SwiperItem,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const WelcomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [pickerValue, setPickerValue] = React.useState('');
  const [showNav, setShowNav] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'column-reverse' },
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
                      navigation.navigate('WelcomeScreen');
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
                          color: theme.colors.strong,
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
                {/* Quick Pay */}
                <Touchable
                  onPress={() => {
                    try {
                      setShowNav(false);
                      /* hidden 'Open Browser' action */
                      navigation.navigate('QuickPayScreen');
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
                        'MaterialCommunityIcons/contactless-payment-circle-outline'
                      }
                    />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Quick Pay')}
                    </Text>
                  </View>
                </Touchable>
                {/* Check Ticket Status */}
                <Touchable
                  onPress={() => {
                    try {
                      setShowNav(false);
                      navigation.navigate('CheckTicketStatusforGuestScreen');
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
                    <Icon size={24} name={'MaterialIcons/work-outline'} />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          fontSize: 16,
                          marginLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {transalate(Variables, 'Check Ticket Status')}
                    </Text>
                  </View>
                </Touchable>
                {/* Downloads */}
                <Touchable
                  onPress={() => {
                    try {
                      navigation.navigate('DownloadGuestScreen');
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
                          color: theme.colors.strong,
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
                      navigation.navigate('FAQGuestScreen');
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
                          color: theme.colors.strong,
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
                      navigation.navigate('FeedbackGuestScreen');
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
                          color: theme.colors.strong,
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
                      navigation.navigate('ContactUsGuestScreen');
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
                          color: theme.colors.strong,
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
                      navigation.navigate('EnergyTipsGuestScreen');
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
                          color: theme.colors.strong,
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
                          color: theme.colors.strong,
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
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'space-around',
            paddingBottom: 60,
            paddingTop: 30,
          },
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
              marginTop: 12,
              paddingLeft: 20,
              paddingRight: 20,
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
            size={30}
            status={showNav}
            uncheckedColor={theme.colors['Custom Color_22']}
            uncheckedIcon={'Feather/menu'}
          />
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
                setPickerValue(newPickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            selectedIconColor={theme.colors.strong}
            selectedIconName={'Feather/check'}
            selectedIconSize={20}
            dropDownBorderColor={theme.colors['Peoplebit_White']}
            dropDownBorderRadius={0}
            dropDownBorderWidth={0}
            options={[
              { label: 'English', value: 'en' },
              { label: 'Hindi', value: 'hi' },
            ]}
            placeholder={''}
            style={StyleSheet.applyWidth(
              { backgroundColor: theme.colors['White'] },
              dimensions.width
            )}
            type={'underline'}
            value={pickerValue}
          />
        </View>
        {/* Body */}
        <View
          style={StyleSheet.applyWidth(
            { justifyContent: 'space-around' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', marginBottom: 50, marginTop: -20 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['banner 3'].props}
              source={Images.Nashik}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['banner 3'].style,
                  { height: 76, width: 234 }
                ),
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', marginTop: 10 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Roboto_700Bold', fontSize: 16 }
                  ),
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Utility Self Service')}
              </Text>
            </View>
          </View>
          {/* Home buttons */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Home buttons'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Home buttons'].style,
                { marginBottom: 50 }
              ),
              dimensions.width
            )}
          >
            {/* Button Solid login sign up */}
            <Button
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigate('LoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 14,
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 16,
                  marginBottom: 30,
                },
                dimensions.width
              )}
              title={`${transalate(Variables, 'Login')}`}
              type={'solid'}
            >
              {'Sign up'}
            </Button>
            {/* Button Solid Quick Pay */}
            <Button
              iconPosition={'left'}
              onPress={() => {
                try {
                  /* hidden 'Open Browser' action */
                  navigation.navigate('QuickPayScreen');
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
                  marginBottom: 10,
                },
                dimensions.width
              )}
              title={`${transalate(Variables, 'Quick Pay')}`}
              type={'solid'}
            >
              {'Sign up'}
            </Button>
          </View>
          {/* Promotions 2 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['Promotions'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['Promotions'].style,
                { marginBottom: 50, paddingLeft: 16, paddingRight: 16 }
              ),
              dimensions.width
            )}
          >
            <CISAPPApi.FetchBANNERSPOST>
              {({ loading, error, data, refetchBANNERS }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <Swiper
                    data={fetchData && fetchData[0].data}
                    dotActiveColor={theme.colors.primary}
                    dotColor={theme.colors.light}
                    dotsTouchable={true}
                    keyExtractor={(swiperData, index) =>
                      swiperData?.id ?? swiperData?.uuid ?? index.toString()
                    }
                    listKey={'9xUsQTNo'}
                    loop={false}
                    minDistanceForAction={0.2}
                    minDistanceToCapture={5}
                    renderItem={({ item, index }) => {
                      const swiperData = item;
                      return (
                        <>
                          <>
                            {!swiperData ? null : (
                              <SwiperItem
                                style={StyleSheet.applyWidth(
                                  {
                                    alignSelf: 'stretch',
                                    height: 108,
                                    width: '100%',
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* banner */}
                                <Image
                                  resizeMode={'cover'}
                                  {...GlobalStyles.ImageStyles(theme)['banner']
                                    .props}
                                  source={{ uri: `${swiperData?.attachment}` }}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.ImageStyles(theme)['banner']
                                        .style,
                                      {
                                        borderRadius: 8,
                                        height: 108,
                                        width: '100%',
                                      }
                                    ),
                                    dimensions.width
                                  )}
                                />
                              </SwiperItem>
                            )}
                          </>
                        </>
                      );
                    }}
                    timeout={0}
                    vertical={false}
                    {...GlobalStyles.SwiperStyles(theme)['Swiper'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.SwiperStyles(theme)['Swiper'].style,
                        {
                          alignSelf: 'auto',
                          backgroundColor: 'rgb(255, 255, 255)',
                          borderColor: 'rgb(222, 221, 221)',
                          height: 108,
                          position: 'relative',
                        }
                      ),
                      dimensions.width
                    )}
                  />
                );
              }}
            </CISAPPApi.FetchBANNERSPOST>
          </View>
        </View>
        {/* Bottom line */}
        <View
          {...GlobalStyles.ViewStyles(theme)['bottom'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ViewStyles(theme)['bottom'].style, {
              alignItems: 'flex-end',
              borderColor: theme.colors['Custom #d8d8d8'],
              borderTopWidth: 1,
              justifyContent: 'center',
              paddingBottom: 30,
              paddingTop: 20,
            }),
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(0,0,0)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
              }),
              dimensions.width
            )}
          >
            {transalate(Variables, 'Powered by Fluentgrid')}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
