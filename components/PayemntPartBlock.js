import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const PayemntPartBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['card'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'].style, {
          alignItems: 'center',
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(199, 198, 198)',
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
          paddingBottom: 10,
          paddingTop: 10,
        }),
        dimensions.width
      )}
    >
      {/* Name */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Roboto_400Regular',
            fontSize: 14,
            opacity: 1,
          },
          dimensions.width
        )}
      >
        {'Account balance  ₹250 '}
        {null}
      </Text>
      {/* Recharge Now */}
      <Button
        iconPosition={'left'}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            fontFamily: 'Roboto_400Regular',
            height: 36,
            textAlign: 'center',
            width: '45%',
          },
          dimensions.width
        )}
        title={'Recharge Now'}
      />
    </View>
  );
};

export default withTheme(PayemntPartBlock);
