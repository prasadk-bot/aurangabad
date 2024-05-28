import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Surface, TextInput, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

const SdBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['search and Add'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ViewStyles(theme)['search and Add'].style,
          { marginTop: 30 }
        ),
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'center', marginLeft: 3, marginRight: 3 },
          dimensions.width
        )}
      >
        <Surface
          elevation={3}
          style={StyleSheet.applyWidth(
            {
              alignContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
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
            placeholder={'Mobile / SC No.'}
            placeholderTextColor={theme.colors.textPlaceholder}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 8,
                color: theme.colors.strong,
                fontFamily: 'Roboto_400Regular',
                fontSize: 15,
                height: 48,
                paddingBottom: 5,
                paddingLeft: 24,
                paddingRight: 8,
                paddingTop: 5,
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
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('RaiseTicketScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon name={'Ionicons/add-circle-outline'} size={30} />
        </Touchable>
      </View>
    </View>
  );
};

export default withTheme(SdBlock);
