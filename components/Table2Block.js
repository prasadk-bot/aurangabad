import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Table2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignContent: 'stretch',
          backgroundColor: 'rgb(255, 255, 255)',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingTop: 8,
        },
        dimensions.width
      )}
    >
      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              borderBottomWidth: 1,
              borderColor: theme.colors['Community_Divider'],
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          <Icon size={24} name={'Foundation/page-export-pdf'} />
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
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 14,
                  lineHeight: 20,
                },
                dimensions.width
              )}
            >
              {'Advance  Paid: ₹1.230.00\n10:05:23 '}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'flex-end', width: 40 },
              dimensions.width
            )}
          >
            <Icon size={24} name={'SimpleLineIcons/arrow-down-circle'} />
          </View>
        </View>
      </Touchable>

      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              borderBottomWidth: 1,
              borderColor: theme.colors['Community_Divider'],
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 2,
            },
            dimensions.width
          )}
        >
          <Icon size={24} name={'Foundation/page-export-pdf'} />
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
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 14,
                  lineHeight: 20,
                },
                dimensions.width
              )}
            >
              {'Against due amount Paid: ₹1.230.00\n12:05:23 '}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'flex-end', width: 40 },
              dimensions.width
            )}
          >
            <Icon size={24} name={'SimpleLineIcons/arrow-down-circle'} />
          </View>
        </View>
      </Touchable>

      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              borderBottomWidth: 1,
              borderColor: theme.colors['Community_Divider'],
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 2,
            },
            dimensions.width
          )}
        >
          <Icon size={24} name={'Foundation/page-export-pdf'} />
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
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 14,
                  lineHeight: 20,
                },
                dimensions.width
              )}
            >
              {'Advance  Paid: ₹1.230.00\n10:05:23 '}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'flex-end', width: 40 },
              dimensions.width
            )}
          >
            <Icon size={24} name={'SimpleLineIcons/arrow-down-circle'} />
          </View>
        </View>
      </Touchable>

      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              borderColor: theme.colors['Community_Divider'],
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 2,
            },
            dimensions.width
          )}
        >
          <Icon size={24} name={'Foundation/page-export-pdf'} />
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
                  fontFamily: 'Roboto_400Regular',
                  fontSize: 14,
                  lineHeight: 20,
                },
                dimensions.width
              )}
            >
              {'Advance  Paid: ₹1.230.00\n10:05:23 '}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'flex-end', width: 40 },
              dimensions.width
            )}
          >
            <Icon size={24} name={'SimpleLineIcons/arrow-down-circle'} />
          </View>
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(Table2Block);
