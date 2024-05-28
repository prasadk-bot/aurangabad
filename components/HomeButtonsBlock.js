import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

const HomeButtonsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.applyWidth(
        { marginLeft: 16, marginRight: 16 },
        dimensions.width
      )}
    >
      {/* Button Solid login sign up */}
      <Button
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('LoginScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          { fontFamily: 'Roboto_400Regular', marginBottom: 30 },
          dimensions.width
        )}
        title={'Login'}
        type={'solid'}
      >
        {'Sign up'}
      </Button>
      {/* Button Solid Quick Pay */}
      <Button
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('QuickPayScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['GetFit Orange'],
            fontFamily: 'Roboto_400Regular',
            marginBottom: 30,
          },
          dimensions.width
        )}
        title={'Quick Pay'}
        type={'solid'}
      >
        {'Sign up'}
      </Button>
    </View>
  );
};

export default withTheme(HomeButtonsBlock);
