import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Surface, TextInput, Touchable, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const SearchAndAddBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 16,
          width: '100%',
        },
        dimensions.width
      )}
    >
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <Surface
          elevation={3}
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors.surface,
              borderRadius: 12,
              flex: 1,
              flexDirection: 'row',
              height: 48,
              justifyContent: 'space-between',
              minHeight: 48,
              paddingRight: 16,
            },
            dimensions.width
          )}
        >
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            webShowOutline={true}
            placeholder={'Search for place'}
            placeholderTextColor={theme.colors.textPlaceholder}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 8,
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 15,
                height: 48,
                paddingBottom: 8,
                paddingLeft: 24,
                paddingRight: 8,
                paddingTop: 8,
                width: '90%',
              },
              dimensions.width
            )}
          />
          <Icon
            size={24}
            color={theme.colors.textPlaceholder}
            name={'Feather/search'}
          />
        </Surface>
      </View>

      <View style={StyleSheet.applyWidth({ marginLeft: 16 }, dimensions.width)}>
        <Touchable>
          <Icon name={'AntDesign/filter'} size={30} />
        </Touchable>
      </View>
    </View>
  );
};

export default withTheme(SearchAndAddBlock);
