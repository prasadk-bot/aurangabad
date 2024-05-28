import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const PostpaidViewBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { alignItems: 'stretch', marginTop: 10 },
        dimensions.width
      )}
    >
      {/* Prepaid */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'Roboto_400Regular',
            textAlign: 'right',
          }),
          dimensions.width
        )}
      >
        {'Prepaid'}
      </Text>
      {/* Postpaid */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            fontFamily: 'Roboto_400Regular',
            textAlign: 'right',
          }),
          dimensions.width
        )}
      >
        {'Postpaid'}
      </Text>
    </View>
  );
};

export default withTheme(PostpaidViewBlock);
