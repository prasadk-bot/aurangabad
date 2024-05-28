import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { FlatList, Text, View } from 'react-native';

const ListBlock2 = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <FlatList
      data={[]}
      horizontal={false}
      inverted={false}
      keyExtractor={(postpaidListData, index) =>
        postpaidListData?.id ?? postpaidListData?.uuid ?? index.toString()
      }
      keyboardShouldPersistTaps={'never'}
      listKey={'aMtGkPeE'}
      nestedScrollEnabled={false}
      numColumns={1}
      onEndReachedThreshold={0.5}
      renderItem={({ item, index }) => {
        const postpaidListData = item;
        return (
          <>
            {/* Details */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: theme.colors['Custom Color_21'],
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10,
                },
                dimensions.width
              )}
            >
              {/* Bill Month */}
              <View>
                {/* date */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { fontFamily: 'Roboto_400Regular', fontSize: 16 }
                    ),
                    dimensions.width
                  )}
                >
                  {postpaidListData?.BillMonth}
                  {' - '}
                  {postpaidListData?.BillYear}
                </Text>
              </View>
              {/* Units */}
              <View>
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { fontFamily: 'Roboto_700Bold', fontSize: 18 }
                    ),
                    dimensions.width
                  )}
                >
                  {postpaidListData?.BillUnits}
                </Text>
              </View>
              {/* Cost */}
              <View>
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      { fontFamily: 'Roboto_700Bold', fontSize: 18 }
                    ),
                    dimensions.width
                  )}
                >
                  {'₹'}
                  {postpaidListData?.BillAmount}
                </Text>
              </View>
            </View>
          </>
        );
      }}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
    />
  );
};

export default withTheme(ListBlock2);
