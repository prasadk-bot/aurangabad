import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const HeaderpBlock = props => {
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
        {'View Bill '}
      </Text>
    </View>
  );
};

export default withTheme(HeaderpBlock);
