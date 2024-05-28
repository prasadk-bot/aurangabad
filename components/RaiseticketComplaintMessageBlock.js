import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text } from 'react-native';

const RaiseticketComplaintMessageBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Text
      accessible={true}
      {...GlobalStyles.TextStyles(theme)['Text'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
          alignSelf: 'center',
          color: theme.colors['Custom Color_9'],
          fontFamily: 'Roboto_400Regular',
          textAlign: 'center',
        }),
        dimensions.width
      )}
    >
      {null}
    </Text>
  );
};

export default withTheme(RaiseticketComplaintMessageBlock);
