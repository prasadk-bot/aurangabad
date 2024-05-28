import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const RemarksBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <View>
      <Touchable
        onPress={() => {
          const handler = async () => {
            try {
              const getTicketstatusJson = (
                await CISAPPApi.getticketstatusPOST(Constants, {})
              )?.json;
              navigation.navigate('RemarksGuestSuccessScreen');
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'].style,
            dimensions.width
          )}
        >
          {'Remarks'}
        </Text>
      </Touchable>
    </View>
  );
};

export default withTheme(RemarksBlock);
