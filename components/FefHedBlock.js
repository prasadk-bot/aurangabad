import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const FefHedBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          height: 48,
          marginTop: 12,
          paddingLeft: 16,
          paddingRight: 16,
        },
        dimensions.width
      )}
    >
      {/* Back Click */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            height: 48,
            justifyContent: 'center',
            width: 48,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            size={24}
            color={theme.colors['Custom Color_2']}
            name={'Ionicons/arrow-back-sharp'}
          />
        </Touchable>
      </View>
      {/* Screen Heading */}
      <Text
        accessible={true}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
            fontFamily: 'Inter_600SemiBold',
            fontSize: 20,
            marginLeft: 16,
          },
          dimensions.width
        )}
      >
        {'Help Center'}
      </Text>
    </View>
  );
};

export default withTheme(FefHedBlock);
