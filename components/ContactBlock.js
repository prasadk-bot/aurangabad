import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Touchable, withTheme } from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { Image, ScrollView, Text, View } from 'react-native';

const ContactBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScrollView
      bounces={true}
      horizontal={false}
      keyboardShouldPersistTaps={'never'}
      nestedScrollEnabled={false}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={StyleSheet.applyWidth(
        { paddingLeft: 24, paddingRight: 24 },
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
            {'Customer Service'}
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
            source={Images.HelpWA}
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
            {'WhatsApp'}
          </Text>
        </View>
      </Touchable>
      {/* Website */}
      <Touchable
        onPress={() => {
          const handler = async () => {
            try {
              await WebBrowser.openBrowserAsync('https://draftbit.com/');
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
            {'Website'}
          </Text>
        </View>
      </Touchable>
      {/* Facebook */}
      <Touchable
        onPress={() => {
          const handler = async () => {
            try {
              await WebBrowser.openBrowserAsync(
                'https://www.facebook.com/draftbit/'
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
              await WebBrowser.openBrowserAsync('https://twitter.com/draftbit');
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
      {/* Instagram */}
      <Touchable
        onPress={() => {
          const handler = async () => {
            try {
              await WebBrowser.openBrowserAsync(
                'https://www.instagram.com/draftbit/'
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
  );
};

export default withTheme(ContactBlock);
