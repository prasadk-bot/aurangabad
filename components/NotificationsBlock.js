import React from 'react';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const NotificationsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <DraftbitExampleApi.FetchDoctorsListGET count={6}>
      {({ loading, error, data, refetchDoctorsList }) => {
        const fetchData = data?.json;
        if (loading) {
          return <ActivityIndicator />;
        }

        if (error || data?.status < 200 || data?.status >= 300) {
          return <ActivityIndicator />;
        }

        return (
          <FlashList
            data={fetchData}
            estimatedItemSize={50}
            horizontal={false}
            inverted={false}
            keyExtractor={(flashListData, index) =>
              flashListData?.id ?? flashListData?.uuid ?? index.toString()
            }
            listKey={'pdF9tiaE'}
            numColumns={1}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }) => {
              const flashListData = item;
              return (
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors['Custom #ffffff'],
                      borderRadius: 12,
                      flexDirection: 'row',
                      marginBottom: 20,
                      marginLeft: 20,
                      marginRight: 20,
                      paddingBottom: 20,
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop: 20,
                    },
                    dimensions.width
                  )}
                >
                  <Image
                    resizeMode={'cover'}
                    source={{ uri: 'https://picsum.photos/64' }}
                    style={StyleSheet.applyWidth(
                      { borderRadius: 8, height: 64, width: 64 },
                      dimensions.width
                    )}
                  />
                  <View
                    style={StyleSheet.applyWidth(
                      { flex: 1, marginLeft: 20 },
                      dimensions.width
                    )}
                  >
                    {/* Title */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_500Medium',
                          fontSize: 16,
                        },
                        dimensions.width
                      )}
                    >
                      {'Hello Thomas, you have an appointment today'}
                    </Text>
                    {/* type  */}
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Inter_300Light',
                          fontSize: 12,
                          marginTop: 4,
                          opacity: 0.6,
                        },
                        dimensions.width
                      )}
                    >
                      {'Announcement • Monday, 4:19 PM'}
                    </Text>
                  </View>
                </View>
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
    </DraftbitExampleApi.FetchDoctorsListGET>
  );
};

export default withTheme(NotificationsBlock);
