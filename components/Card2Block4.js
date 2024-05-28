import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { RadioButton, RadioButtonGroup, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Card2Block4 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['radio buttons'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['radio buttons'].style,
        dimensions.width
      )}
    >
      <RadioButtonGroup
        style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
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
              value={'Service request'}
            />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_400Regular',
                  paddingLeft: 8,
                },
                dimensions.width
              )}
            >
              {'PG1'}
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
                {
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_400Regular',
                  paddingLeft: 8,
                },
                dimensions.width
              )}
            >
              {'PG2'}
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
                {
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_400Regular',
                  paddingLeft: 8,
                },
                dimensions.width
              )}
            >
              {'PG3'}
            </Text>
          </View>
        </View>
      </RadioButtonGroup>
    </View>
  );
};

export default withTheme(Card2Block4);
