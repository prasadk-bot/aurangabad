import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const ShBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 15,
          marginTop: 25,
          paddingLeft: 20,
          paddingRight: 20,
        },
        dimensions.width
      )}
    >
      {/* Heading */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['ShopAppBlue'],
            fontFamily: 'Roboto_500Medium',
            fontSize: 16,
          },
          dimensions.width
        )}
      >
        {'Payment Summary'}
      </Text>
    </View>
  );
};

export default withTheme(ShBlock);
