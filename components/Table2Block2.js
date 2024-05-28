import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const Table2Block2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ExampleDataApi.FetchUsersGET limit={20}>
      {({ loading, error, data, refetchUsers }) => {
        const contentData = data?.json;
        if (loading) {
          return <ActivityIndicator />;
        }

        if (error || data?.status < 200 || data?.status >= 300) {
          return <ActivityIndicator />;
        }

        return (
          <FlashList
            data={contentData}
            estimatedItemSize={50}
            horizontal={false}
            inverted={false}
            keyExtractor={(flashListData, index) =>
              flashListData?.id ?? flashListData?.uuid ?? index.toString()
            }
            listKey={'NzTrKTnV'}
            numColumns={1}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }) => {
              const flashListData = item;
              return (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { marginBottom: 20, marginLeft: 20, marginRight: 20 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        height: 90,
                        justifyContent: 'space-between',
                      },
                      dimensions.width
                    )}
                  >
                    <Image
                      resizeMode={'cover'}
                      source={Images.Video}
                      style={StyleSheet.applyWidth(
                        { borderRadius: 16, height: 90, width: 160 },
                        dimensions.width
                      )}
                    />
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1, marginLeft: 16 },
                        dimensions.width
                      )}
                    >
                      {/* Name */}
                      <Text
                        accessible={true}
                        numberOfLines={2}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.strong,
                            fontFamily: 'Inter_600SemiBold',
                            fontSize: 16,
                          },
                          dimensions.width
                        )}
                      >
                        {'Overwatch 2 Gameplay'}
                      </Text>
                      {/* Views | Timestamp */}
                      <Text
                        accessible={true}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors.strong,
                            fontFamily: 'Inter_400Regular',
                            fontSize: 11,
                            marginBottom: 15,
                            marginTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        {'4.8M Views • 1 hour ago'}
                      </Text>
                    </View>
                    {/* 3 dots */}
                    <Touchable>
                      <Icon
                        size={24}
                        name={'MaterialCommunityIcons/dots-vertical'}
                      />
                    </Touchable>
                  </View>
                </Touchable>
              );
            }}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={StyleSheet.applyWidth(
              { flex: 1 },
              dimensions.width
            )}
          />
        );
      }}
    </ExampleDataApi.FetchUsersGET>
  );
};

export default withTheme(Table2Block2);
