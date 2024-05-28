import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Checkbox, Icon, TextInput, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const PasswordIcon2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['password'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['password'].style,
        dimensions.width
      )}
    >
      <Icon
        size={24}
        color={theme.colors['Custom Color_20']}
        name={'FontAwesome/lock'}
      />
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingLeft: 10, paddingRight: 10 },
          dimensions.width
        )}
      >
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={true}
          changeTextDelay={500}
          webShowOutline={true}
          editable={true}
          maxLength={12}
          placeholder={'Old password'}
          placeholderTextColor={theme.colors['Custom Color_20']}
          secureTextEntry={false}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 8,
              fontFamily: 'Roboto_400Regular',
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
        />
      </View>
      <Checkbox
        onPress={newCheckboxValue => {
          const checkboxValue = newCheckboxValue;
          try {
            setCheckboxValue(checkboxValue);
          } catch (err) {
            console.error(err);
          }
        }}
        checkedIcon={'Ionicons/eye'}
        status={checkboxValue}
        uncheckedIcon={'Ionicons/eye'}
      />
    </View>
  );
};

export default withTheme(PasswordIcon2Block);
