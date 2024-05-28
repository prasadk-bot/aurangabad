import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const NavdBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Navi-App'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['Navi-App'].style,
        dimensions.width
      )}
    >
      {/* Left Frame */}
      <View
        style={StyleSheet.applyWidth(
          { paddingBottom: 7, paddingTop: 7 },
          dimensions.width
        )}
      >
        <Touchable>
          <Icon size={24} name={'FontAwesome/navicon'} />
        </Touchable>
      </View>
      {/* Middle Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexGrow: 1,
            flexShrink: 0,
            marginLeft: 10,
            marginRight: 10,
            paddingBottom: 12,
            paddingLeft: 12,
            paddingRight: 12,
            paddingTop: 12,
          },
          dimensions.width
        )}
      ></View>
      {/* Right Frame for EN */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            paddingBottom: 7,
            paddingTop: 7,
          },
          dimensions.width
        )}
      >
        {/* Flex Frame for Touchable */}
        <View
          style={StyleSheet.applyWidth({ paddingRight: 8 }, dimensions.width)}
        >
          <Touchable>
            {/* EN */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {'EN'}
            </Text>
          </Touchable>
        </View>
      </View>
      {/* Right Frame */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            paddingBottom: 7,
            paddingRight: 8,
            paddingTop: 7,
          },
          dimensions.width
        )}
      >
        {/* Flex Frame for Touchable */}
        <View
          style={StyleSheet.applyWidth({ paddingRight: 8 }, dimensions.width)}
        >
          <Touchable>
            <Icon size={24} name={'Ionicons/notifications-sharp'} />
          </Touchable>
        </View>
      </View>
      {/* Right Frame for profile */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            paddingBottom: 7,
            paddingTop: 7,
          },
          dimensions.width
        )}
      >
        {/* Flex Frame for Touchable */}
        <View
          style={StyleSheet.applyWidth({ paddingRight: 5 }, dimensions.width)}
        >
          <Touchable>
            <Icon size={24} name={'Ionicons/ios-person'} />
          </Touchable>
        </View>
      </View>
    </View>
  );
};

export default withTheme(NavdBlock);
