import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';

const SelectAndContinueBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Button
      iconPosition={'left'}
      onPress={() => {
        try {
          navigation.goBack();
        } catch (err) {
          console.error(err);
        }
      }}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.primary,
          borderRadius: 12,
          fontFamily: 'Inter_500Medium',
          fontSize: 15,
          height: 52,
          marginBottom: 25,
          marginLeft: 20,
          marginRight: 20,
          textAlign: 'center',
        },
        dimensions.width
      )}
      title={'Select Profile'}
    />
  );
};

export default withTheme(SelectAndContinueBlock);
