import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const BotemTabBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom #ffffff'],
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          flexDirection: 'row',
          height: 117,
          justifyContent: 'space-between',
          paddingBottom: 20,
          paddingLeft: 30,
          paddingRight: 30,
        },
        dimensions.width
      )}
    >
      {/* Home */}
      <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
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
          <Icon
            size={24}
            color={theme.colors['Primary']}
            name={'Entypo/home'}
          />
        </View>
      </Touchable>
      {/* History Transaction */}
      <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
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
          <Icon
            size={24}
            color={theme.colors['Medium']}
            name={'Ionicons/document-text-outline'}
          />
        </View>
      </Touchable>
      {/* Messages */}
      <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
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
          <Icon
            size={24}
            color={theme.colors['Medium']}
            name={'Ionicons/chatbox-outline'}
          />
        </View>
      </Touchable>
      {/* Profile */}
      <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
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
          <Icon
            size={24}
            color={theme.colors['Medium']}
            name={'AntDesign/user'}
          />
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(BotemTabBlock);
