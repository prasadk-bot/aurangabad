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

const NSCRegistrationGuestScreen = props => {
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
          {transalate(Variables, 'New Connection')}
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
        {/* prepaid New Conncetion */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await WebBrowser.openBrowserAsync(
                  "https://nccmsedcl09-cpfghesuat.quantumtechnologiesltd.com/cportal/#/ltReg',showInRecents : true"
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
            <Icon
              size={24}
              color={theme.colors['Primary']}
              name={'FontAwesome/users'}
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
              {transalate(Variables, 'New Connection Request')}
            </Text>
          </View>
        </Touchable>
        {/* New Application Status */}
        <Touchable
          onPress={() => {
            const handler = async () => {
              try {
                await WebBrowser.openBrowserAsync(
                  'https://nccmsedcl09-cpfghesuat.quantumtechnologiesltd.com/cportal/#/registrationStatus'
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
            <Icon
              size={24}
              color={theme.colors['Primary']}
              name={'MaterialCommunityIcons/progress-check'}
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
              {transalate(Variables, 'New Application Status')}
            </Text>
          </View>
        </Touchable>
        {/* Website */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('MiscellaneousPaymentScreen');
            } catch (err) {
              console.error(err);
            }
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
            <Icon
              size={24}
              color={theme.colors['Primary']}
              name={'FontAwesome/rupee'}
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
              {transalate(Variables, 'View Application Payment')}
            </Text>
          </View>
        </Touchable>
        {/* Facebook */}
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('MiscellaneousMPScreen');
            } catch (err) {
              console.error(err);
            }
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
            <Icon
              size={24}
              color={theme.colors['Primary']}
              name={'MaterialIcons/payments'}
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
              {transalate(Variables, 'Miscellaneous Payment')}
            </Text>
          </View>
        </Touchable>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(NSCRegistrationGuestScreen);
