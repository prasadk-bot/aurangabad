import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Checkbox, Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const DrawerContentBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors.primary,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 72,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flex: 1, flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Icon color={theme.colors.surface} name={'Feather/home'} size={26} />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.surface,
                flex: 1,
                fontFamily: 'System',
                fontSize: 20,
                fontWeight: '600',
                marginLeft: 6,
              },
              dimensions.width
            )}
          >
            {'Home'}
          </Text>
        </View>
        <Checkbox
          checkedIcon={'Feather/x'}
          color={theme.colors.surface}
          size={32}
          uncheckedColor={theme.colors.surface}
          uncheckedIcon={'Feather/menu'}
        />
      </View>
      {/* Body */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        {/* REPLACE ME */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              borderBottomWidth: 1,
              borderColor: theme.colors.light,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderStyle: 'dashed',
              borderTopWidth: 1,
              flex: 1,
              justifyContent: 'center',
              marginBottom: 24,
              marginLeft: 24,
              marginRight: 24,
              marginTop: 24,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'System',
                fontSize: 24,
                fontWeight: '700',
              },
              dimensions.width
            )}
          >
            {'YOUR CONTENT HERE'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(DrawerContentBlock);
