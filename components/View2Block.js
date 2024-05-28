import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { NumberInput, TextInput, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const View2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { alignItems: 'stretch', flex: 1, paddingLeft: 10, paddingRight: 10 },
        dimensions.width
      )}
    >
      <NumberInput
        changeTextDelay={500}
        webShowOutline={true}
        {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
        editable={true}
        placeholder={'Enter amount'}
        placeholderTextColor={theme.colors['Medium']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
            { fontFamily: 'Roboto_400Regular' }
          ),
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(View2Block);
