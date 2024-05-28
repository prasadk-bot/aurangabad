import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, TextInput, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const Service1Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['uname'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['uname'].style,
        dimensions.width
      )}
    >
      <Icon
        size={24}
        color={theme.colors['Custom Color_20']}
        name={'FontAwesome/rupee'}
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
          placeholder={'Enter amount'}
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

export default withTheme(Service1Block);
