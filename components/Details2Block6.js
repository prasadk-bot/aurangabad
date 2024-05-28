import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Details2Block6 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Details'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['Details'].style,
        dimensions.width
      )}
    >
      {/* Date */}
      <View
        style={StyleSheet.applyWidth(
          { borderRightWidth: 1, flex: 1 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.viewBG,
              height: 40,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Roboto_700Bold',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Date'}
          </Text>
        </View>
      </View>
      {/* Amount */}
      <View
        style={StyleSheet.applyWidth(
          { borderRightWidth: 1, flex: 1 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.viewBG,
              height: 40,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Roboto_700Bold',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Amount'}
          </Text>
        </View>
      </View>
      {/* Purpose */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.viewBG,
              height: 40,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Roboto_700Bold',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Purpose'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(Details2Block6);
