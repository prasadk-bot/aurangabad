import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Checkbox, Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const NavCheckboxBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
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
  );
};

export default withTheme(NavCheckboxBlock);
