import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Header2Block4 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['fef hed'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.ViewStyles(theme)['fef hed'].style,
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
            fontFamily: 'Roboto_700Bold',
            fontSize: 18,
            marginLeft: 16,
          },
          dimensions.width
        )}
      >
        {'Raise Ticket'}
      </Text>
    </View>
  );
};

export default withTheme(Header2Block4);
