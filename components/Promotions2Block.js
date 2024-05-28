import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Swiper, SwiperItem, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const Promotions2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['Promotions'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['Promotions'].style, {
          marginBottom: 50,
        }),
        dimensions.width
      )}
    >
      <CISAPPApi.FetchBANNERSPOST>
        {({ loading, error, data, refetchBANNERS }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <Swiper
              data={fetchData && fetchData[0].data}
              dotActiveColor={theme.colors.primary}
              dotColor={theme.colors.light}
              dotsTouchable={true}
              keyExtractor={(swiperData, index) =>
                swiperData?.id ?? swiperData?.uuid ?? index.toString()
              }
              listKey={'Ag86HQLP'}
              loop={false}
              minDistanceForAction={0.2}
              minDistanceToCapture={5}
              renderItem={({ item, index }) => {
                const swiperData = item;
                return (
                  <>
                    <>
                      {!swiperData ? null : (
                        <SwiperItem
                          style={StyleSheet.applyWidth(
                            {
                              alignSelf: 'stretch',
                              height: 108,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* banner */}
                          <Image
                            resizeMode={'cover'}
                            {...GlobalStyles.ImageStyles(theme)['banner'].props}
                            source={{ uri: `${swiperData?.attachment}` }}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ImageStyles(theme)['banner'].style,
                                { borderRadius: 8, height: 108 }
                              ),
                              dimensions.width
                            )}
                          />
                        </SwiperItem>
                      )}
                    </>
                  </>
                );
              }}
              timeout={0}
              vertical={false}
              {...GlobalStyles.SwiperStyles(theme)['Swiper'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.SwiperStyles(theme)['Swiper'].style,
                  {
                    alignSelf: 'auto',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(222, 221, 221)',
                    borderRadius: 5,
                    borderWidth: 1,
                    height: 108,
                    position: 'relative',
                  }
                ),
                dimensions.width
              )}
            />
          );
        }}
      </CISAPPApi.FetchBANNERSPOST>
    </View>
  );
};

export default withTheme(Promotions2Block);
