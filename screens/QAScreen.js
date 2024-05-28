import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  ScreenContainer,
  Touchable,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const QAScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [availableBalance, setAvailableBalance] = React.useState('');
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [consumerName, setConsumerName] = React.useState('');
  const [consumerScNo, setConsumerScNo] = React.useState('');
  const [meterNumber, setMeterNumber] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [viewbilldetails, setViewbilldetails] = React.useState({});
  const buildString = Scno => {
    console.log(`billing/rest/getBillDataWss/${Scno}`);
    return `billing/rest/getBillDataWss/${Scno}`;
  };

  const validateScno = scNo => {
    var errorMessage = null;
    if (!scNo.trim()) {
      errorMessage = 'Service connection number is required';
    }
    return errorMessage;
  };

  const buildConsumerString = Scno => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    console.log(`billing/rest/AccountInfo/${Scno}`);
    return `billing/rest/AccountInfo/${Scno}`;
  };

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View
        {...GlobalStyles.ViewStyles(theme)['Header 2'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['Header 2'].style,
          dimensions.width
        )}
      >
        {/* Back Click */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 48,
            },
            dimensions.width
          )}
        >
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('WelcomeScreen');
                /* hidden 'Navigate Back' action */
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              color={theme.colors['Custom Color_2']}
              name={'Ionicons/arrow-back-sharp'}
            />
          </Touchable>
        </View>
        {/* heading */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 12,
              textAlign: 'center',
            },
            dimensions.width
          )}
        >
          {transalate(Variables, 'EXIT')}
        </Text>
      </View>
      <WebView
        allowFileAccessFromFileURLs={false}
        allowUniversalAccessFromFileURLs={false}
        cacheEnabled={true}
        incognito={false}
        javaScriptCanOpenWindowsAutomatically={false}
        javaScriptEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        startInLoadingState={false}
        {...GlobalStyles.WebViewStyles(theme)['Web View'].props}
        source={{
          uri: `https://nccprodcp.quantumtechnologiesltd.com/cportal/#/secure/recharge?accountNo=${
            props.route?.params?.val ?? null
          }`,
        }}
        style={StyleSheet.applyWidth(
          GlobalStyles.WebViewStyles(theme)['Web View'].style,
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(QAScreen);
