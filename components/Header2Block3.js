import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Header2Block3 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 12,
          paddingLeft: 16,
          paddingRight: 16,
        },
        dimensions.width
      )}
    >
      {/* Back btn */}
      <Touchable
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 44,
              justifyContent: 'center',
              width: 44,
            },
            dimensions.width
          )}
        >
          <Icon size={24} name={'AntDesign/arrowleft'} />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'].style,
              dimensions.width
            )}
          >
            {'Exit'}
          </Text>
        </View>
      </Touchable>
      {/* View bill and make payment */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors.strong,
            fontFamily: 'Roboto_700Bold',
            fontSize: 18,
            marginLeft: 10,
          },
          dimensions.width
        )}
      >
        {'Bill Pay'}
      </Text>
    </View>
  );
};

export default withTheme(Header2Block3);
