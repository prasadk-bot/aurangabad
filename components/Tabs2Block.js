import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Tabs2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          marginLeft: 20,
          marginRight: 20,
          marginTop: 35,
        },
        dimensions.width
      )}
    >
      {/* FAQ */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        {/* selected */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 3,
                borderColor: theme.colors['Custom Color'],
                height: 41,
                justifyContent: 'center',
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
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'FAQ'}
            </Text>
          </View>
        </Touchable>
        {/* unselected */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Custom Color_20'],
                height: 41,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_20'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'FAQ'}
            </Text>
          </View>
        </Touchable>
      </View>
      {/* Contact us */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        {/* selected */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 3,
                borderColor: theme.colors['Custom Color'],
                height: 41,
                justifyContent: 'center',
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
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Contact us'}
            </Text>
          </View>
        </Touchable>
        {/* unselected */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: theme.colors['Custom Color_20'],
                height: 41,
                justifyContent: 'center',
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom Color_20'],
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Contact us'}
            </Text>
          </View>
        </Touchable>
      </View>
    </View>
  );
};

export default withTheme(Tabs2Block);
