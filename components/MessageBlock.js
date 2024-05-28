import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const MessageBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom Color_6'],
          borderRadius: 4,
          flexDirection: 'row',
          height: 40,
          paddingLeft: 10,
        },
        dimensions.width
      )}
    >
      <Icon
        color={theme.colors['Primary']}
        name={'Ionicons/ios-information-circle-outline'}
        size={20}
      />
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_300Light',
            fontSize: 12,
            marginLeft: 10,
          },
          dimensions.width
        )}
      >
        {'By default the main profile will be selected'}
      </Text>
    </View>
  );
};

export default withTheme(MessageBlock);
