import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Image } from 'react-native';

const BannerBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Image
      resizeMode={'cover'}
      source={Images.Banner}
      style={StyleSheet.applyWidth(
        { borderRadius: 20, height: 140 },
        dimensions.width
      )}
    />
  );
};

export default withTheme(BannerBlock);
