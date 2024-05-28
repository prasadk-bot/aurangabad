import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const UpdateBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Touchable>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Primary'],
            borderRadius: 100,
            flexDirection: 'row',
            paddingLeft: 10,
          },
          dimensions.width
        )}
      >
        <Icon
          color={theme.colors['Custom #ffffff']}
          name={'AntDesign/edit'}
          size={15}
        />
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Custom #ffffff'],
              fontFamily: 'Inter_500Medium',
              paddingBottom: 8,
              paddingLeft: 10,
              paddingRight: 15,
              paddingTop: 8,
            },
            dimensions.width
          )}
        >
          {'Edit'}
        </Text>
      </View>
    </Touchable>
  );
};

export default withTheme(UpdateBlock);
