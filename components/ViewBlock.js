import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Modal, Text, View } from 'react-native';

const ViewBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      <Modal
        transparent={false}
        animationType={'slide'}
        presentationStyle={'pageSheet'}
        visible={true}
      >
        <View>
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'].style,
              dimensions.width
            )}
          >
            {null}
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default withTheme(ViewBlock);
