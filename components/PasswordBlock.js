import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, TextInput, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const PasswordBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignContent: 'flex-start',
          alignItems: 'center',
          alignSelf: 'auto',
          backgroundColor: theme.colors['BG Gray'],
          borderBottomWidth: 1,
          borderColor: theme.colors['Divider'],
          borderLeftWidth: 1,
          borderRadius: 16,
          borderRightWidth: 1,
          borderTopWidth: 1,
          flexDirection: 'row',
          height: 60,
          justifyContent: 'space-between',
          marginTop: -250,
          paddingLeft: 20,
          paddingRight: 20,
          width: '100%',
        },
        dimensions.width
      )}
    >
      <Icon
        size={24}
        color={theme.colors['Custom Color_20']}
        name={'FontAwesome/lock'}
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
          placeholder={'Password'}
          placeholderTextColor={theme.colors['Custom Color_20']}
          secureTextEntry={true}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 8,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
        />
      </View>
      <Icon
        size={24}
        color={theme.colors['Custom Color_20']}
        name={'Ionicons/md-eye-off'}
      />
    </View>
  );
};

export default withTheme(PasswordBlock);
