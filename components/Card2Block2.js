import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Card2Block2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['card'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'].style, {
          borderColor: theme.colors['Community_Border'],
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 30,
        }),
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth({ alignSelf: 'auto' }, dimensions.width)}
      >
        {/* Amount due */}
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
          {'Amount due'}
        </Text>
        {/* Amount  */}
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
          {'₹250'}
        </Text>
        {/* Sub title */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Roboto_400Regular',
              fontSize: 12,
              marginTop: 5,
              opacity: 1,
            },
            dimensions.width
          )}
        >
          {'Due Date: 12-06-2023'}
        </Text>
      </View>
      {/* Pay Now */}
      <Button
        iconPosition={'left'}
        onPress={() => {
          try {
            navigation.navigate('ViewBillScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['GetFit Orange'],
            borderRadius: 8,
            fontFamily: 'Roboto_400Regular',
            height: 36,
            marginTop: 5,
            textAlign: 'center',
            width: '23%',
          },
          dimensions.width
        )}
        title={'View'}
      />
      {/* Pay Now */}
      <Button
        iconPosition={'left'}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['GetFit Orange'],
            borderRadius: 8,
            fontFamily: 'Roboto_400Regular',
            height: 36,
            marginTop: 5,
            textAlign: 'center',
            width: '30%',
          },
          dimensions.width
        )}
        title={'Pay Now'}
      />
    </View>
  );
};

export default withTheme(Card2Block2);
