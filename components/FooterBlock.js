import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const FooterBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { flexGrow: 0, flexShrink: 0 },
        dimensions.width
      )}
    >
      <Touchable>
        {/* Button Frame */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignSelf: 'auto',
              backgroundColor: theme.colors['Community_Highlight_Blue'],
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 0,
              justifyContent: 'center',
              marginLeft: 12,
              marginRight: 6,
            },
            dimensions.width
          )}
        >
          {/* Button Label */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                color: theme.colors.internalWhite,
                fontFamily: 'Roboto_400Regular',
                fontSize: 14,
                lineHeight: 18,
                paddingBottom: 12,
                paddingLeft: 6,
                paddingRight: 6,
                paddingTop: 12,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Download All'}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(FooterBlock);
