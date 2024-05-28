import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Tabs2Block2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
        },
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
                  height: 35,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'Dashboard'}
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
                  height: 35,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Light'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'Dashboard'}
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
                  height: 35,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Custom Color'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'Content'}
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
                  height: 35,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors['Light'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {'Content'}
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
    </View>
  );
};

export default withTheme(Tabs2Block2);
