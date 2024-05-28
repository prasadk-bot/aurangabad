import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const AmblockBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      {/* card */}
      <View
        {...GlobalStyles.ViewStyles(theme)['card'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'].style, {
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(199, 198, 198)',
            borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 8,
            paddingTop: 8,
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
              opacity: 0.79,
            },
            dimensions.width
          )}
        >
          {'Account balance  ₹250'}
        </Text>
      </View>
      {/* card */}
      <View
        {...GlobalStyles.ViewStyles(theme)['card'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'].style, {
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(199, 198, 198)',
            borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
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
                opacity: 0.64,
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
                opacity: 0.96,
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
                fontFamily: 'Roboto_300Light',
                fontSize: 12,
                marginTop: 5,
                opacity: 0.5,
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
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['GetFit Orange'],
              borderRadius: 8,
              fontFamily: 'Roboto_400Regular',
              height: 36,
              marginTop: 20,
              textAlign: 'center',
              width: '45%',
            },
            dimensions.width
          )}
          title={'Pay Now'}
        />
      </View>
    </View>
  );
};

export default withTheme(AmblockBlock);
