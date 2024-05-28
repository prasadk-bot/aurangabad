import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, Icon, TextInput, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const ViewbilldetailsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignContent: 'flex-start',
          alignItems: 'stretch',
          alignSelf: 'stretch',
          flexWrap: 'nowrap',
          justifyContent: 'space-around',
          paddingBottom: 20,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 20,
        },
        dimensions.width
      )}
    >
      {/* Enter custmoer service number */}
      <View
        {...GlobalStyles.ViewStyles(theme)['user name'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ViewStyles(theme)['user name'].style,
            { marginTop: 20 }
          ),
          dimensions.width
        )}
      >
        <Icon
          size={24}
          color={theme.colors['Custom Color_20']}
          name={'MaterialIcons/house'}
        />
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, paddingLeft: 10, paddingRight: 10 },
            dimensions.width
          )}
        >
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            webShowOutline={true}
            editable={true}
            placeholder={'Enter service connection number'}
            placeholderTextColor={theme.colors['Custom Color_20']}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 8,
                fontFamily: 'Roboto_400Regular',
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
          />
        </View>
      </View>
      {/* Send OTP  Submit */}
      <Button
        iconPosition={'left'}
        onPress={() => {
          const handler = async () => {
            try {
              const Viewbilldetailsjson = (
                await CISAPPApi.viewBillDetailsPOST(Constants, {})
              )?.json;
              console.log();
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
        style={StyleSheet.applyWidth(
          {
            fontFamily: 'Roboto_400Regular',
            fontSize: 14,
            marginTop: 30,
            width: '100%',
          },
          dimensions.width
        )}
        title={'View Details'}
      />
    </View>
  );
};

export default withTheme(ViewbilldetailsBlock);
