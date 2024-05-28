import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const ChartsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { flex: 1, paddingLeft: 20, paddingRight: 20 },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flex: 1, paddingTop: 50, width: '100%' },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Dashboard}
          style={StyleSheet.applyWidth(
            { height: 210, width: 171 },
            dimensions.width
          )}
        />
        {/* You're Offline */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_700Bold',
              fontSize: 28,
              marginTop: 40,
            },
            dimensions.width
          )}
        >
          {'You’re Offline'}
        </Text>
        {/* GO LIVE */}
        <Button
          iconPosition={'left'}
          icon={'Ionicons/videocam'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.primary,
              borderRadius: 100,
              color: theme.colors['Custom #ffffff'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              height: 58,
              marginTop: 40,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'  GO LIVE'}
        />
        {/* Edit Stream Info */}
        <Button
          iconPosition={'left'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_18'],
              borderRadius: 100,
              color: theme.colors['Custom Color'],
              fontFamily: 'Inter_600SemiBold',
              fontSize: 15,
              height: 58,
              marginTop: 25,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'Edit Stream Info'}
        />
      </View>
    </View>
  );
};

export default withTheme(ChartsBlock);
