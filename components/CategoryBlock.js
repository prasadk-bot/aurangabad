import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, TextInput, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const CategoryBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
          marginTop: 10,
          width: '100%',
        },
        dimensions.width
      )}
    >
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={true}
        changeTextDelay={500}
        webShowOutline={true}
        placeholder={'Product Category*'}
        placeholderTextColor={theme.colors.textPlaceholder}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.strongInverse,
            borderBottomWidth: 1,
            borderColor: theme.colors.viewBG,
            borderLeftWidth: 1,
            borderRadius: 8,
            borderRightWidth: 1,
            borderTopWidth: 1,
            color: theme.colors.strong,
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

export default withTheme(CategoryBlock);
