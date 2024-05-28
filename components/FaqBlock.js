import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Icon,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const FaqBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll={false}
      enableOnAndroid={false}
      enableResetScrollToCoords={false}
      keyboardShouldPersistTaps={'never'}
      showsVerticalScrollIndicator={true}
      viewIsInsideTabBar={false}
    >
      {/* FAQs */}
      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
          dimensions.width
        )}
      >
        <CISAPPApi.FetchFaqsPOST
          handlers={{
            onData: fetchData => {
              try {
                console.log(fetchData?.data);
              } catch (err) {
                console.error(err);
              }
            },
          }}
        >
          {({ loading, error, data, refetchFaqs }) => {
            const fetchData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlatList
                data={fetchData?.[0]?.data}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) =>
                  listData?.id ?? listData?.uuid ?? index.toString()
                }
                keyboardShouldPersistTaps={'never'}
                listKey={'X2jkA927'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors['Custom #ffffff'],
                          borderBottomWidth: 1,
                          borderColor: theme.colors['Divider'],
                          borderLeftWidth: 1,
                          borderRadius: 20,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          marginBottom: 18,
                          marginTop: 10,
                          paddingBottom: 10,
                          paddingLeft: 20,
                          paddingRight: 20,
                          paddingTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <AccordionGroup
                        caretSize={24}
                        iconSize={24}
                        expanded={true}
                        label={listData?.question}
                        style={StyleSheet.applyWidth(
                          {
                            color: theme.colors['Strong'],
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 16,
                            paddingBottom: 8,
                            paddingTop: 8,
                          },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              borderColor: theme.colors['Divider'],
                              borderTopWidth: 1,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_400Regular',
                                lineHeight: 20,
                                paddingBottom: 10,
                              },
                              dimensions.width
                            )}
                          >
                            {listData?.answer}
                          </Text>
                        </View>
                      </AccordionGroup>
                    </View>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
            );
          }}
        </CISAPPApi.FetchFaqsPOST>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default withTheme(FaqBlock);
