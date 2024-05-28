import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const ContactUsGuestScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [SelectedTab, setSelectedTab] = React.useState('faq');
  const [selectedtag, setSelectedtag] = React.useState('General');
  const [tags, setTags] = React.useState([
    'General',
    'Account',
    'Service',
    'Payment',
  ]);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
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
          {transalate(Variables, 'Contact Us')}
        </Text>
      </View>
      {/* Contact us */}
      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { marginTop: 50, paddingLeft: 24, paddingRight: 24 },
          dimensions.width
        )}
      >
        {/* Customer Service */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 72,
                paddingLeft: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.HelpCS}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  marginLeft: 12,
                },
                dimensions.width
              )}
            >
              {'1800-212-3435, 1800-233-3435'}
            </Text>
          </View>
        </Touchable>
        {/* Whatsapp */}
        <Touchable
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 72,
                paddingLeft: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Download}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  marginLeft: 12,
                },
                dimensions.width
              )}
            >
              {'customercare@mahadiscom.inm'}
            </Text>
          </View>
        </Touchable>
        {/* Website */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await WebBrowser.openBrowserAsync('https://mahadiscom.in');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 72,
                paddingLeft: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.HelpWeb}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  marginLeft: 12,
                },
                dimensions.width
              )}
            >
              {'mahadiscom.in'}
            </Text>
          </View>
        </Touchable>
        {/* Facebook */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await WebBrowser.openBrowserAsync(
                  'https://www.facebook.com/MSEDCL/'
                );
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 72,
                paddingLeft: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.HelpFB}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  marginLeft: 12,
                },
                dimensions.width
              )}
            >
              {'Facebook'}
            </Text>
          </View>
        </Touchable>
        {/* Twitter */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await WebBrowser.openBrowserAsync('https://x.com/MSEDCL');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 72,
                paddingLeft: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.HelpTwtr}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  marginLeft: 12,
                },
                dimensions.width
              )}
            >
              {'Twitter'}
            </Text>
          </View>
        </Touchable>
        {/* Youtube */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await WebBrowser.openBrowserAsync(
                  'https://youtube.com/mahavitaranofficial'
                );
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 72,
                paddingLeft: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.Yt}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  marginLeft: 12,
                },
                dimensions.width
              )}
            >
              {'Youtube'}
            </Text>
          </View>
        </Touchable>
        {/* Instagram */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await WebBrowser.openBrowserAsync(
                  'https://www.instagram.com/msedclofficial'
                );
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth({ marginBottom: 18 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom #ffffff'],
                borderBottomWidth: 1,
                borderColor: theme.colors['Divider'],
                borderLeftWidth: 1,
                borderRadius: 20,
                borderRightWidth: 1,
                borderTopWidth: 1,
                flexDirection: 'row',
                height: 72,
                paddingLeft: 24,
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={Images.HelpIG}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  marginLeft: 12,
                },
                dimensions.width
              )}
            >
              {'Instagram'}
            </Text>
          </View>
        </Touchable>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ContactUsGuestScreen);
