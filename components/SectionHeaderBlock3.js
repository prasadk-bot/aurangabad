import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const SectionHeaderBlock3 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['section header 2'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ViewStyles(theme)['section header 2'].style,
          { justifyContent: 'center', paddingBottom: 12 }
        ),
        dimensions.width
      )}
    >
      {/* Heading */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            alignSelf: 'center',
            color: theme.colors['ShopAppBlue'],
            fontFamily: 'Roboto_400Regular',
            fontSize: 16,
            textAlign: 'center',
          },
          dimensions.width
        )}
      >
        {'Billing History'}
      </Text>
    </View>
  );
};

export default withTheme(SectionHeaderBlock3);
