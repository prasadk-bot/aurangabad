import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Tabs1Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Tabs'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['Tabs'].style,
        dimensions.width
      )}
    >
      {/* tab1 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* Dashboard */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 3,
                  borderColor: theme.colors['Custom Color'],
                  height: 25,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                  },
                  dimensions.width
                )}
              >
                {'Chart'}
              </Text>
            </View>
          </Touchable>
          {/* unselected */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors['Light'],
                  height: 25,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Light'],
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                  },
                  dimensions.width
                )}
              >
                {'Chart'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
      {/* tab2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          dimensions.width
        )}
      >
        {/* Content */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          {/* selected */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 3,
                  borderColor: theme.colors['Custom Color'],
                  height: 25,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                  },
                  dimensions.width
                )}
              >
                {'Table'}
              </Text>
            </View>
          </Touchable>
          {/* unselected */}
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderColor: theme.colors['Light'],
                  height: 25,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Light'],
                    fontFamily: 'Roboto_400Regular',
                    fontSize: 14,
                  },
                  dimensions.width
                )}
              >
                {'Table'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
    </View>
  );
};

export default withTheme(Tabs1Block);
