import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { TextInput, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const DesBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.viewBG,
          borderRadius: 12,
          marginTop: 25,
          width: '100%',
        },
        dimensions.width
      )}
    >
      <TextInput
        autoCorrect={true}
        changeTextDelay={500}
        multiline={true}
        numberOfLines={4}
        textAlignVertical={'top'}
        webShowOutline={true}
        placeholder={'Please leave your feedback here...'}
        placeholderTextColor={theme.colors.textPlaceholder}
        style={StyleSheet.applyWidth(
          {
            borderBottomWidth: 1,
            borderColor: theme.colors.divider,
            borderLeftWidth: 1,
            borderRadius: 8,
            borderRightWidth: 1,
            borderTopWidth: 1,
            fontFamily: 'Roboto_400Regular',
            height: 100,
            paddingBottom: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      />
    </View>
  );
};

export default withTheme(DesBlock);
