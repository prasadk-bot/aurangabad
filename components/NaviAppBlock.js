import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const NaviAppBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          flexDirection: 'row',
          marginBottom: -20,
          marginTop: -20,
          paddingLeft: 16,
          paddingRight: 16,
        },
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
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.Uitilitycislogo}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 30, width: 120 }
              ),
              dimensions.width
            )}
          />
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
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              textAlign: 'center',
            }),
            dimensions.width
          )}
        >
          {'Utility Name'}
        </Text>
      </View>
      {/* Right Frame */}
      <View
        style={StyleSheet.applyWidth(
          { paddingBottom: 7, paddingTop: 10 },
          dimensions.width
        )}
      >
        {/* Flex Frame for Touchable */}
        <View>
          <Touchable>
            <Icon size={24} name={'FontAwesome/navicon'} />
          </Touchable>
        </View>
      </View>
    </View>
  );
};

export default withTheme(NaviAppBlock);
