import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { RadioButton, RadioButtonGroup, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const RadioButtonsBlock2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { marginBottom: 10, marginTop: 10 },
        dimensions.width
      )}
    >
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Inter_400Regular',
            paddingLeft: 8,
          },
          dimensions.width
        )}
      >
        {'Select the Contact type'}
      </Text>

      <RadioButtonGroup
        style={StyleSheet.applyWidth({ marginTop: 25 }, dimensions.width)}
      >
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', paddingLeft: 8 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row' },
              dimensions.width
            )}
          >
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={theme.colors.secondary}
              unselectedColor={theme.colors['Light']}
              value={'customer'}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, paddingLeft: 8 },
                dimensions.width
              )}
            >
              {'Customer'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginLeft: 16 },
              dimensions.width
            )}
          >
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={theme.colors.secondary}
              unselectedColor={theme.colors['Light']}
              value={'vendor'}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                { color: theme.colors.strong, paddingLeft: 8 },
                dimensions.width
              )}
            >
              {'Vendor'}
            </Text>
          </View>
        </View>
      </RadioButtonGroup>
    </View>
  );
};

export default withTheme(RadioButtonsBlock2);
