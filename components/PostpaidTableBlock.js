import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const PostpaidTableBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Details'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['Details'].style, {
          backgroundColor: 'rgb(211, 211, 211)',
          borderBottomWidth: 1,
          borderColor: theme.colors['White'],
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderTopWidth: 1,
          flex: 0,
        }),
        dimensions.width
      )}
    >
      {/* Bill Month */}
      <View
        style={StyleSheet.applyWidth(
          { borderColor: theme.colors['White'], borderRightWidth: 1, flex: 1 },
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
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_700Bold',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Bill Month'}
          </Text>
        </View>
      </View>
      {/* Bill Amount */}
      <View
        style={StyleSheet.applyWidth(
          { borderColor: theme.colors['White'], borderRightWidth: 1, flex: 1 },
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
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_700Bold',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Bill Amount'}
          </Text>
        </View>
      </View>
      {/* Download */}
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
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_700Bold',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Download'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(PostpaidTableBlock);
