import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const BViewsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { marginLeft: 16, marginRight: 16, marginTop: -120 },
        dimensions.width
      )}
    >
      {/* Button Solid login sign up */}
      <Button
        iconPosition={'left'}
        style={StyleSheet.applyWidth({ marginBottom: 8 }, dimensions.width)}
        title={'Login'}
        type={'solid'}
      >
        {'Sign up'}
      </Button>
      {/* Button Solid Quick Pay */}
      <Button
        iconPosition={'left'}
        style={StyleSheet.applyWidth({ marginBottom: 8 }, dimensions.width)}
        title={'Quick Pay'}
        type={'solid'}
      >
        {'Sign up'}
      </Button>
    </View>
  );
};

export default withTheme(BViewsBlock);
