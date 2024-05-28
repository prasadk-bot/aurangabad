import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const PrivacyTextBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View style={StyleSheet.applyWidth({ marginTop: 50 }, dimensions.width)}>
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'Roboto_400Regular',
            fontSize: 18,
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Utility defined Privacy policy to be updated'}
      </Text>
    </View>
  );
};

export default withTheme(PrivacyTextBlock);
