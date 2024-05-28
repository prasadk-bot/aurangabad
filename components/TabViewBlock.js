import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Circle, Icon, Surface, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const TabViewBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { paddingLeft: 16, paddingRight: 16, paddingTop: 16, width: '100%' },
        dimensions.width
      )}
    >
      {/* Top Tabs */}
      <View
        style={StyleSheet.applyWidth(
          {
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingLeft: 20,
            paddingRight: 20,
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Tab1 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          {/* Active */}
          <Touchable>
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.tripItBlue,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'favorite tours'}
            </Text>

            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.tripItBlue,
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: -8,
                  textAlign: 'center',
                  textDecorationColor: theme.colors.tripItBlue,
                  textDecorationLine: 'underline',
                },
                dimensions.width
              )}
            >
              {'                         '}
            </Text>
          </Touchable>
          {/* Inactive */}
          <Touchable>
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'favorite tours'}
            </Text>
          </Touchable>
        </View>
        {/* Tab2 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          {/* Active */}
          <Touchable>
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.tripItBlue,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'favorite Blogs'}
            </Text>

            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.tripItBlue,
                  fontFamily: 'System',
                  fontSize: 14,
                  fontWeight: '600',
                  marginTop: -8,
                  textAlign: 'center',
                  textDecorationColor: theme.colors.tripItBlue,
                  textDecorationLine: 'underline',
                },
                dimensions.width
              )}
            >
              {'                         '}
            </Text>
          </Touchable>
          {/* Inactive */}
          <Touchable>
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.medium,
                  fontFamily: 'Inter_400Regular',
                  fontSize: 16,
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'favorite blogs'}
            </Text>
          </Touchable>
        </View>
      </View>
      {/* Tours List */}
      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={false}
        style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        contentContainerStyle={StyleSheet.applyWidth(
          { flexDirection: 'row', marginTop: 16 },
          dimensions.width
        )}
      >
        <DraftbitApi.FetchPostsGET limit={6}>
          {({ loading, error, data, refetchPosts }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                data={fetchData}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ?? listData?.uuid ?? index.toString()
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'paPEaaO5'}
                nestedScrollEnabled={false}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Record */}
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginLeft: 16, marginTop: 16, width: '45%' },
                          dimensions.width
                        )}
                      >
                        <Surface
                          elevation={3}
                          style={StyleSheet.applyWidth(
                            {
                              borderColor: theme.colors.viewBG,
                              borderLeftWidth: 1,
                              borderRadius: 12,
                              borderRightWidth: 1,
                              marginBottom: 12,
                              minHeight: 40,
                            },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-start',
                                flex: 1,
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                width: '100%',
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  borderRadius: 12,
                                  overflow: 'hidden',
                                  width: '100%',
                                },
                                dimensions.width
                              )}
                            >
                              <ImageBackground
                                resizeMode={'cover'}
                                source={{
                                  uri: 'https://picsum.photos/180/220',
                                }}
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'flex-start',
                                    height: 130,
                                    justifyContent: 'space-between',
                                    width: '100%',
                                  },
                                  dimensions.width
                                )}
                              >
                                <Surface
                                  elevation={0}
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderRadius: 12,
                                      height: 24,
                                      justifyContent: 'center',
                                      marginTop: 10,
                                      position: 'absolute',
                                      right: 10,
                                      top: 0,
                                      width: 24,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Circle
                                    bgColor={theme.colors.custom_rgb255_255_255}
                                    size={20}
                                  >
                                    <Icon
                                      color={theme.colors.custom_rgb255_0_0}
                                      name={'AntDesign/heart'}
                                      size={12}
                                    />
                                  </Circle>
                                </Surface>
                                {/* Details */}
                                <View
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'flex-start',
                                      backgroundColor:
                                        theme.colors.custom_rgba0_0_0_03,
                                      bottom: 0,
                                      flex: 1,
                                      justifyContent: 'center',
                                      paddingBottom: 4,
                                      paddingLeft: 16,
                                      paddingTop: 4,
                                      position: 'absolute',
                                      width: '100%',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {/* Name */}
                                  <Text
                                    accessible={true}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color:
                                          theme.colors.custom_rgb255_255_255,
                                        fontFamily: 'Inter_500Medium',
                                        fontSize: 13,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Halong Bay'}
                                  </Text>
                                  {/* Price */}
                                  <Text
                                    accessible={true}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color:
                                          theme.colors.custom_rgb255_255_255,
                                        fontFamily: 'Inter_500Medium',
                                        fontSize: 11,
                                        marginTop: 2,
                                        textTransform: 'capitalize',
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'From $300'}
                                  </Text>
                                </View>
                              </ImageBackground>
                            </View>
                          </View>
                        </Surface>
                      </Touchable>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                numColumns={2}
                style={StyleSheet.applyWidth(
                  { width: '100%' },
                  dimensions.width
                )}
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
              />
            );
          }}
        </DraftbitApi.FetchPostsGET>
      </ScrollView>
      {/* Blogs List */}
      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={false}
        style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        contentContainerStyle={StyleSheet.applyWidth(
          { flexDirection: 'row', marginTop: 16 },
          dimensions.width
        )}
      >
        <DraftbitApi.FetchPostsGET limit={6}>
          {({ loading, error, data, refetchPosts }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                data={fetchData}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ?? listData?.uuid ?? index.toString()
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'FyRvboXy'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Record */}
                      <Touchable
                        style={StyleSheet.applyWidth(
                          { marginTop: 16, width: '100%' },
                          dimensions.width
                        )}
                      >
                        <Surface
                          elevation={3}
                          style={StyleSheet.applyWidth(
                            {
                              borderColor: theme.colors.viewBG,
                              borderLeftWidth: 1,
                              borderRadius: 12,
                              borderRightWidth: 1,
                              marginBottom: 12,
                              minHeight: 40,
                            },
                            dimensions.width
                          )}
                        >
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'flex-start',
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                overflow: 'hidden',
                                paddingRight: 10,
                                width: '100%',
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                { borderRadius: 12, overflow: 'hidden' },
                                dimensions.width
                              )}
                            >
                              <Image
                                resizeMode={'cover'}
                                source={{
                                  uri: 'https://picsum.photos/180/220',
                                }}
                                style={StyleSheet.applyWidth(
                                  { height: 100, width: 100 },
                                  dimensions.width
                                )}
                              />
                            </View>
                            {/* Details */}
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'flex-start',
                                  flex: 1,
                                  paddingBottom: 9,
                                  paddingLeft: 16,
                                  paddingRight: 8,
                                  paddingTop: 9,
                                },
                                dimensions.width
                              )}
                            >
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'flex-start',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                  },
                                  dimensions.width
                                )}
                              >
                                <View
                                  style={StyleSheet.applyWidth(
                                    { justifyContent: 'space-between' },
                                    dimensions.width
                                  )}
                                >
                                  {/* Name */}
                                  <Text
                                    accessible={true}
                                    style={StyleSheet.applyWidth(
                                      {
                                        color: theme.colors.strong,
                                        fontFamily: 'Inter_500Medium',
                                        fontSize: 14,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    {'Halong Bay'}
                                  </Text>

                                  <View
                                    style={StyleSheet.applyWidth(
                                      {
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        marginTop: 4,
                                      },
                                      dimensions.width
                                    )}
                                  >
                                    <Icon
                                      color={theme.colors.textPlaceholder}
                                      name={'Feather/map-pin'}
                                      size={10}
                                    />
                                    {/* Country */}
                                    <Text
                                      accessible={true}
                                      style={StyleSheet.applyWidth(
                                        {
                                          color: theme.colors.textPlaceholder,
                                          fontFamily: 'Inter_400Regular',
                                          fontSize: 12,
                                          paddingLeft: 6,
                                          textTransform: 'capitalize',
                                        },
                                        dimensions.width
                                      )}
                                    >
                                      {'vietnam'}
                                    </Text>
                                  </View>
                                </View>

                                <Surface
                                  elevation={0}
                                  style={StyleSheet.applyWidth(
                                    {
                                      alignItems: 'center',
                                      borderRadius: 12,
                                      height: 24,
                                      justifyContent: 'center',
                                      minHeight: 24,
                                      width: 24,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  <Circle
                                    bgColor={theme.colors.custom_rgb255_255_255}
                                    size={20}
                                  >
                                    <Icon
                                      color={theme.colors.custom_rgb255_0_0}
                                      name={'AntDesign/heart'}
                                      size={12}
                                    />
                                  </Circle>
                                </Surface>
                              </View>
                              {/* Description */}
                              <Text
                                accessible={true}
                                numberOfLines={3}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_300Light',
                                    fontSize: 11,
                                    lineHeight: 14,
                                    marginTop: 4,
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {
                                  'Halong Bay is a UNESCO World Heritage Site that covers some 150,000 hectares. It is located on the Gulf of Tonkin in the north eastern province of Quang Ninh.'
                                }
                              </Text>
                            </View>
                          </View>
                        </Surface>
                      </Touchable>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                style={StyleSheet.applyWidth(
                  { width: '100%' },
                  dimensions.width
                )}
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
              />
            );
          }}
        </DraftbitApi.FetchPostsGET>
      </ScrollView>
    </View>
  );
};

export default withTheme(TabViewBlock);
