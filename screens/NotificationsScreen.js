import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openShareUtil from '../utils/openShare';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Checkbox,
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const NotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [ShowNav, setShowNav] = React.useState(false);
  const [hiddenHindi, setHiddenHindi] = React.useState(true);
  const [notifications, setNotifications] = React.useState({});
  const [selectedTab, setSelectedTab] = React.useState('dashboard');
  const [visibleHindi, setVisibleHindi] = React.useState(false);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { flex: 1, flexDirection: 'row' },
        dimensions.width
      )}
    >
      {/* Content */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-around', marginTop: 12 },
          dimensions.width
        )}
      >
        {/* headerr */}
        <View
          {...GlobalStyles.ViewStyles(theme)['fef hed'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['fef hed'].style,
              { marginTop: 33 }
            ),
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
            {transalate(Variables, 'Notifications')}
          </Text>
        </View>

        <ScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={StyleSheet.applyWidth(
            { marginTop: 20 },
            dimensions.width
          )}
        >
          {/* notifications */}
          <CISAPPApi.FetchNotificationsPOST>
            {({ loading, error, data, refetchNotifications }) => {
              const notificationsData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlatList
                  data={notificationsData?.[0]?.data}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(listData, index) =>
                    listData?.id ?? listData?.uuid ?? index.toString()
                  }
                  keyboardShouldPersistTaps={'never'}
                  listKey={'vYwz0Ysj'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <>
                        {/* view-n */}
                        <View
                          {...GlobalStyles.ViewStyles(theme)['view-n'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.ViewStyles(theme)['view-n'].style,
                              { paddingLeft: 8, paddingRight: 8 }
                            ),
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                flex: 1,
                                marginLeft: 20,
                                paddingLeft: 10,
                                paddingRight: 10,
                              },
                              dimensions.width
                            )}
                          >
                            <AccordionGroup
                              caretSize={24}
                              expanded={false}
                              iconSize={24}
                              {...GlobalStyles.AccordionGroupStyles(theme)[
                                'Accordion'
                              ].props}
                              caretColor={theme.colors['Strong']}
                              closedColor={theme.colors['Strong']}
                              label={listData?.title}
                              openColor={theme.colors['Strong']}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.AccordionGroupStyles(theme)[
                                  'Accordion'
                                ].style,
                                dimensions.width
                              )}
                            >
                              {/* Title */}
                              <Text
                                accessible={true}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Roboto_300Light',
                                    fontSize: 14,
                                    lineHeight: 21,
                                    paddingTop: 5,
                                    textAlign: 'justify',
                                    whiteSpace: 'pre-line',
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.description}
                              </Text>
                            </AccordionGroup>
                          </View>

                          <View
                            style={StyleSheet.applyWidth(
                              { alignItems: 'center', width: 40 },
                              dimensions.width
                            )}
                          >
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    console.log();
                                    await openShareUtil(
                                      `${listData?.attachment}`
                                    );
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            ></Touchable>
                          </View>
                        </View>
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                />
              );
            }}
          </CISAPPApi.FetchNotificationsPOST>
        </ScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NotificationsScreen);
