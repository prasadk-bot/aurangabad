import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Card2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Background'],
          borderRadius: 12,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          paddingBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
        },
        dimensions.width
      )}
    >
      {/* Title */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_500Medium',
            fontSize: 18,
          },
          dimensions.width
        )}
      >
        {'Let’s Make an appointment'}
      </Text>
      {/* Sub title */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_300Light',
            fontSize: 12,
            marginTop: 5,
            opacity: 0.5,
          },
          dimensions.width
        )}
      >
        {'Choose your best specialist doctor'}
      </Text>
      {/* Choose Doctor */}
      <Button
        iconPosition={'left'}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            fontFamily: 'Inter_400Regular',
            height: 36,
            marginTop: 20,
            textAlign: 'center',
            width: '45%',
          },
          dimensions.width
        )}
        title={'Choose Doctor '}
      />
    </View>
  );
};

export default withTheme(Card2Block);
