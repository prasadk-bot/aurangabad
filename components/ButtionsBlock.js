import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const ButtionsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          marginBottom: 20,
          marginTop: 20,
          width: '100%',
        },
        dimensions.width
      )}
    >
      {/* Download print */}
      <Button
        iconPosition={'left'}
        activeOpacity={0.8}
        disabledOpacity={0.8}
        style={StyleSheet.applyWidth(
          { fontFamily: 'Roboto_400Regular', textAlign: 'center' },
          dimensions.width
        )}
        title={'Print'}
      />
      {/* Cancel */}
      <Button
        iconPosition={'left'}
        activeOpacity={0.8}
        disabledOpacity={0.8}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Error'],
            borderColor: 'rgb(215, 213, 213)',
            borderWidth: 1,
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Roboto_400Regular',
            marginTop: 20,
            textAlign: 'center',
          },
          dimensions.width
        )}
        title={'Close'}
      />
    </View>
  );
};

export default withTheme(ButtionsBlock);
