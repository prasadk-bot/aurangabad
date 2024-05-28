import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Pr1Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignContent: 'space-between',
          alignItems: 'stretch',
          alignSelf: 'stretch',
          paddingBottom: 8,
          paddingTop: 8,
        },
        dimensions.width
      )}
    >
      {/* card */}
      <View
        {...GlobalStyles.ViewStyles(theme)['card'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'].style, {
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(199, 198, 198)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 8,
            paddingLeft: 8,
            paddingRight: 8,
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
              alignSelf: 'flex-start',
              color: theme.colors.strong,
              fontFamily: 'Roboto_500Medium',
              fontSize: 14,
              textAlign: 'left',
            },
            dimensions.width
          )}
        >
          {'Name'}
        </Text>
        {/* cname */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              alignSelf: 'flex-start',
              color: theme.colors.strong,
              fontFamily: 'Roboto_500Medium',
              fontSize: 14,
              opacity: 1,
              textAlign: 'auto',
            },
            dimensions.width
          )}
        >
          {'Kumar Gulla'}
        </Text>
      </View>
      {/* card */}
      <View
        {...GlobalStyles.ViewStyles(theme)['card'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'].style, {
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(199, 198, 198)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 8,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 8,
          }),
          dimensions.width
        )}
      >
        {/* Service connection no */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              alignSelf: 'flex-start',
              color: theme.colors.strong,
              fontFamily: 'Roboto_500Medium',
              fontSize: 14,
              textAlign: 'left',
            },
            dimensions.width
          )}
        >
          {'Service connection no'}
        </Text>

        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              alignSelf: 'flex-start',
              color: theme.colors.strong,
              fontFamily: 'Roboto_500Medium',
              fontSize: 14,
              opacity: 1,
              textAlign: 'right',
            },
            dimensions.width
          )}
        >
          {'1234567899876'}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(Pr1Block);
