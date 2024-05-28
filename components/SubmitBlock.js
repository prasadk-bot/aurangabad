import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';

const SubmitBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Button
      iconPosition={'left'}
      style={StyleSheet.applyWidth(
        {
          fontFamily: 'Roboto_400Regular',
          marginTop: 30,
          paddingLeft: 30,
          paddingRight: 30,
          textAlign: 'center',
        },
        dimensions.width
      )}
      title={'Submit'}
    />
  );
};

export default withTheme(SubmitBlock);
