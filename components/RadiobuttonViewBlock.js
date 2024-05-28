import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { RadioButtonGroup, RadioButtonRow, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const RadiobuttonViewBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['View11'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['View11'].style, {
          flexDirection: 'column',
          width: '100%',
        }),
        dimensions.width
      )}
    >
      <RadioButtonGroup
        onValueChange={newRadioButtonGroupValue => {
          try {
            console.log(newRadioButtonGroupValue);
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}
      >
        <RadioButtonRow
          color={theme.colors.primary}
          unselectedColor={theme.colors.primary}
          direction={'row'}
          label={'7Days'}
          style={StyleSheet.applyWidth(
            { fontFamily: 'Roboto_400Regular', fontSize: 14 },
            dimensions.width
          )}
          value={7}
        />
        <RadioButtonRow
          color={theme.colors.primary}
          unselectedColor={theme.colors.primary}
          direction={'row'}
          label={'15Days'}
          style={StyleSheet.applyWidth(
            { fontFamily: 'Roboto_400Regular', fontSize: 14 },
            dimensions.width
          )}
          value={15}
        />
        <RadioButtonRow
          color={theme.colors.primary}
          unselectedColor={theme.colors.primary}
          direction={'row'}
          label={'30Days'}
          style={StyleSheet.applyWidth(
            { fontFamily: 'Roboto_400Regular', fontSize: 12 },
            dimensions.width
          )}
          value={30}
        />
      </RadioButtonGroup>
    </View>
  );
};

export default withTheme(RadiobuttonViewBlock);
