import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const TableBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgb(211, 211, 211)',
          borderBottomWidth: 1,
          borderColor: 'rgb(211, 211, 211)',
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderTopWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        },
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
              backgroundColor: theme.colors['ViewBG'],
              height: 40,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_700Bold',
                textAlign: 'center',
                textTransform: 'capitalize',
              }),
              dimensions.width
            )}
          >
            {'Bill month'}
          </Text>
        </View>
      </View>
      {/* Units */}
      <View
        style={StyleSheet.applyWidth(
          { borderColor: theme.colors['White'], borderRightWidth: 1, flex: 1 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['ViewBG'],
              height: 40,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_700Bold',
                textAlign: 'center',
                textTransform: 'capitalize',
              }),
              dimensions.width
            )}
          >
            {'Units(Kvah)'}
          </Text>
        </View>
      </View>
      {/* Amount */}
      <View
        style={StyleSheet.applyWidth(
          { borderColor: theme.colors['White'], flex: 1 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['ViewBG'],
              height: 40,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_700Bold',
                textAlign: 'center',
                textTransform: 'capitalize',
              }),
              dimensions.width
            )}
          >
            {'Bill Amount'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(TableBlock);
