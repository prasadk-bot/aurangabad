import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const SortOpBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { flex: 1, marginLeft: 20, marginRight: 20, marginTop: 40 },
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
            fontSize: 17,
            paddingBottom: 15,
          },
          dimensions.width
        )}
      >
        {'Sort'}
      </Text>

      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <Icon size={24} name={'AntDesign/staro'} />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 16 },
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
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Recommended For You'}
            </Text>
            {/* Title */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 14,
                  lineHeight: 21,
                  paddingTop: 5,
                },
                dimensions.width
              )}
            >
              {'Show the most relevants channel based on your history'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: 40 },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Custom Color']}
              name={'AntDesign/check'}
            />
          </View>
        </View>
      </Touchable>

      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <Icon size={24} name={'SimpleLineIcons/arrow-down-circle'} />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 16 },
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
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Viewers (High to Low)'}
            </Text>
            {/* Title */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 14,
                  lineHeight: 21,
                  paddingTop: 5,
                },
                dimensions.width
              )}
            >
              {'Show channels based on the most highest number of viewers'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: 40 },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Custom Color']}
              name={'AntDesign/check'}
            />
          </View>
        </View>
      </Touchable>

      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <Icon size={24} name={'SimpleLineIcons/arrow-up-circle'} />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 16 },
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
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Viewers (Low to High)'}
            </Text>
            {/* Title */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 14,
                  lineHeight: 21,
                  paddingTop: 5,
                },
                dimensions.width
              )}
            >
              {'Show channels based on the most lowest number of viewers'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: 40 },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Custom Color']}
              name={'AntDesign/check'}
            />
          </View>
        </View>
      </Touchable>

      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 12,
              paddingTop: 12,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            name={'MaterialCommunityIcons/clock-time-four-outline'}
          />
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, paddingLeft: 16 },
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
                  fontSize: 17,
                },
                dimensions.width
              )}
            >
              {'Recently Started'}
            </Text>
            {/* Title */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'Inter_300Light',
                  fontSize: 14,
                  lineHeight: 21,
                  paddingTop: 5,
                },
                dimensions.width
              )}
            >
              {'Show channels based on how recently they went live'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', width: 40 },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Custom Color']}
              name={'AntDesign/check'}
            />
          </View>
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(SortOpBlock);
