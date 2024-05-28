import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const DownloadBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
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
                fontFamily: 'Roboto_500Medium',
                fontSize: 14,
              },
              dimensions.width
            )}
          >
            {'Document 1'}
          </Text>
          {/* Title */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Roboto_300Light',
                fontSize: 14,
                lineHeight: 21,
                paddingTop: 5,
              },
              dimensions.width
            )}
          >
            {'This document for service connection deatils '}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', width: 40 },
            dimensions.width
          )}
        >
          <Icon size={24} name={'SimpleLineIcons/arrow-down-circle'} />
        </View>
      </View>
    </Touchable>
  );
};

export default withTheme(DownloadBlock);
