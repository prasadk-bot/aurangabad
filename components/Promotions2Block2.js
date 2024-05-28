import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Swiper, SwiperItem, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Promotions2Block2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'stretch',
          paddingBottom: 10,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 10,
        },
        dimensions.width
      )}
    >
      <Swiper
        dotActiveColor={theme.colors.primary}
        dotColor={theme.colors.light}
        dotsTouchable={true}
        loop={false}
        minDistanceForAction={0.2}
        minDistanceToCapture={5}
        timeout={0}
        vertical={false}
        {...GlobalStyles.SwiperStyles(theme)['Swiper'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.SwiperStyles(theme)['Swiper'].style, {
            alignSelf: 'auto',
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(222, 221, 221)',
            borderRadius: 5,
            borderWidth: 1,
            height: 108,
            position: 'relative',
          }),
          dimensions.width
        )}
      >
        <SwiperItem
          style={StyleSheet.applyWidth(
            { alignSelf: 'stretch' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                fontFamily: 'Roboto_700Bold',
                fontSize: 18,
                paddingBottom: 2,
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 8,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'This is a promotion of important information and offers'}
          </Text>
        </SwiperItem>

        <SwiperItem>
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                fontFamily: 'Roboto_700Bold',
                fontSize: 18,
                paddingBottom: 2,
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 8,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'This is a promotion of important information and offers 2'}
          </Text>
        </SwiperItem>

        <SwiperItem>
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                fontFamily: 'Roboto_700Bold',
                fontSize: 18,
                paddingBottom: 2,
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 8,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'This is a promotion of important information and offers 3'}
          </Text>
        </SwiperItem>
      </Swiper>
    </View>
  );
};

export default withTheme(Promotions2Block2);
