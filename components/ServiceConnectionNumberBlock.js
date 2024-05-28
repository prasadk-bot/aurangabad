import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, TextInput, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const ServiceConnectionNumberBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['category'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['category'].style, {
          marginTop: 15,
        }),
        dimensions.width
      )}
    >
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={true}
        changeTextDelay={500}
        webShowOutline={true}
        placeholder={'Language Preference:'}
        placeholderTextColor={theme.colors.textPlaceholder}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.strongInverse,
            borderBottomWidth: 1,
            borderColor: theme.colors.viewBG,
            borderLeftWidth: 1,
            borderRadius: 12,
            borderRightWidth: 1,
            borderTopWidth: 1,
            color: theme.colors.strong,
            fontFamily: 'Roboto_400Regular',
            height: 50,
            paddingLeft: 16,
            width: '100%',
          },
          dimensions.width
        )}
      />
      <Touchable>
        <Icon
          size={24}
          color={theme.colors.textPlaceholder}
          name={'Entypo/chevron-down'}
          style={StyleSheet.applyWidth({ marginLeft: -35 }, dimensions.width)}
        />
      </Touchable>
    </View>
  );
};

export default withTheme(ServiceConnectionNumberBlock);
