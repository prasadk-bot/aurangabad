import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const PrepaidCardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['card'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'].style, {
          alignItems: 'center',
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(199, 198, 198)',
          borderRadius: 8,
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 15,
          marginTop: 5,
          paddingBottom: 10,
          paddingLeft: 20,
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
        {'Available balance  ₹'}
        {null}
      </Text>
      {/* Recharge Now */}
      <Button
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('RechargeScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 14,
            fontFamily: 'Roboto_400Regular',
            fontSize: 16,
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

export default withTheme(PrepaidCardBlock);
