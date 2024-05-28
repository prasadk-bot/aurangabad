import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Details2Block7 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Details'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['Details'].style, {
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
        }),
        dimensions.width
      )}
    >
      {/* Month */}
      <View
        style={StyleSheet.applyWidth(
          { borderRightWidth: 1, flex: 1 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { height: 40, justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                fontFamily: 'Roboto_400Regular',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {null}
            {' - '}
            {null}
          </Text>
        </View>
      </View>
      {/* Units */}
      <View
        style={StyleSheet.applyWidth(
          { borderRightWidth: 1, flex: 1 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { height: 40, justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                fontFamily: 'Roboto_400Regular',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {null}
          </Text>
        </View>
      </View>
      {/* Cost */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <View
          style={StyleSheet.applyWidth(
            { height: 40, justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                fontFamily: 'Roboto_400Regular',
                fontSize: 14,
                textAlign: 'center',
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'₹'}
            {null}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(Details2Block7);
