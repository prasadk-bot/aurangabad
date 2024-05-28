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
import * as WebBrowser from 'expo-web-browser';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const DownloadsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [applePayValue, setApplePayValue] = React.useState(false);
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [debitCard1, setDebitCard1] = React.useState(false);
  const [debitCardFlowCompleted, setDebitCardFlowCompleted] =
    React.useState(false);
  const [downloadLink, setDownloadLink] = React.useState({});
  const [googlePayValue, setGooglePayValue] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [payPalValue, setPayPalValue] = React.useState(false);
  const [stepperValue, setStepperValue] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [ticketTypeA, setTicketTypeA] = React.useState(true);

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
          {transalate(Variables, 'Downloads')}
        </Text>
      </View>
      {/* Content Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            justifyContent: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 40,
          },
          dimensions.width
        )}
      >
        <CISAPPApi.FetchDownloadPOST>
          {({ loading, error, data, refetchDownload }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                data={fetchData?.[0]?.data}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ?? listData?.uuid ?? index.toString()
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'JIBsUs2z'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* sort op */}
                      <View
                        {...GlobalStyles.ViewStyles(theme)['sort op'].props}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ViewStyles(theme)['sort op'].style,
                          dimensions.width
                        )}
                      >
                        <Touchable>
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-start',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingBottom: 12,
                                paddingTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon size={24} name={'FontAwesome/file-text-o'} />
                            <View
                              style={StyleSheet.applyWidth(
                                { flex: 1, paddingLeft: 16 },
                                dimensions.width
                              )}
                            >
                              {/* Title */}
                              <Text
                                accessible={true}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Roboto_700Bold',
                                    fontSize: 14,
                                    lineHeight: 21,
                                    paddingTop: 5,
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.name}
                              </Text>
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
                                      const valuezeNHx6gn =
                                        listData?.attachment;
                                      setDownloadLink(valuezeNHx6gn);
                                      const attachment = valuezeNHx6gn;
                                      console.log(attachment);
                                      await WebBrowser.openBrowserAsync(
                                        `${listData?.attachment}`
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
                                  name={'SimpleLineIcons/arrow-down-circle'}
                                />
                              </Touchable>
                            </View>
                          </View>
                        </Touchable>
                      </View>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </CISAPPApi.FetchDownloadPOST>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(DownloadsScreen);
