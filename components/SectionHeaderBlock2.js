import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const SectionHeaderBlock2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 12,
          marginTop: 20,
        },
        dimensions.width
      )}
    >
      {/* Heading */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Roboto_500Medium',
            fontSize: 14,
          },
          dimensions.width
        )}
      >
        {'Select Payment Method'}
      </Text>
    </View>
  );
};

export default withTheme(SectionHeaderBlock2);
