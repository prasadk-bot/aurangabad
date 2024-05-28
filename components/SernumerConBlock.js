import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, TextInput, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const SernumerConBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['BG Gray'],
          borderBottomWidth: 1,
          borderColor: theme.colors['Divider'],
          borderLeftWidth: 1,
          borderRadius: 16,
          borderRightWidth: 1,
          borderTopWidth: 1,
          flexDirection: 'row',
          height: 50,
          justifyContent: 'space-between',
          marginTop: 30,
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
          width: '100%',
        },
        dimensions.width
      )}
    >
      <Icon
        size={24}
        color={theme.colors['Custom Color_20']}
        name={'MaterialIcons/house'}
      />
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingLeft: 10, paddingRight: 10 },
          dimensions.width
        )}
      >
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          webShowOutline={true}
          editable={true}
          placeholder={'Enter service connection number'}
          placeholderTextColor={theme.colors['Custom Color_20']}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 8,
              fontFamily: 'Roboto_400Regular',
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
        />
      </View>
    </View>
  );
};

export default withTheme(SernumerConBlock);
