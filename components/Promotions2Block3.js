import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Swiper, SwiperItem, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const Promotions2Block3 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Promotions'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['Promotions'].style, {
          paddingTop: 10,
        }),
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
            height: 120,
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
          {/* banner */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['banner'].props}
            source={Images.Banner}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['banner'].style,
                { height: 120 }
              ),
              dimensions.width
            )}
          />
        </SwiperItem>

        <SwiperItem>
          {/* banner */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['banner 2'].props}
            source={Images.Banner}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['banner 2'].style,
                { height: 120 }
              ),
              dimensions.width
            )}
          />
        </SwiperItem>

        <SwiperItem>
          {/* banner */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['banner 3'].props}
            source={Images.Banner}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['banner 3'].style,
                { height: 120 }
              ),
              dimensions.width
            )}
          />
        </SwiperItem>
      </Swiper>
    </View>
  );
};

export default withTheme(Promotions2Block3);
