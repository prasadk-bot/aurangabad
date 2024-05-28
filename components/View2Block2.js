import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const View2Block2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['VIEW'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['VIEW'].style, {
          marginTop: 10,
        }),
        dimensions.width
      )}
    >
      <Image
        resizeMode={'cover'}
        {...GlobalStyles.ImageStyles(theme)['banner 3'].props}
        source={Images.JBNL}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ImageStyles(theme)['banner 3'].style,
            { height: 110, width: 110 }
          ),
          dimensions.width
        )}
      />
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', marginTop: 10 },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
            }),
            dimensions.width
          )}
        >
          {'Jharkhand Bijli Vitran Nigam Limited'}
        </Text>

        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Roboto_400Regular',
              fontSize: 16,
              marginTop: 10,
            }),
            dimensions.width
          )}
        >
          {'Consumer Mobile App'}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(View2Block2);
