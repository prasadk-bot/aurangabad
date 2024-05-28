import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const RegisterSuccessScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const processRegisterSuccessMessage = msg => {
    const scheme = {
      msg9: 'Registration Successful',
    };

    return scheme[msg];
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom #acacac'],
          justifyContent: 'center',
          opacity: 1,
        },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: theme.colors['Background'],
            borderRadius: 12,
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            opacity: 1,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 60,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={Images.Sucess}
          style={StyleSheet.applyWidth(
            { height: 100, position: 'absolute', top: -50, width: 100 },
            dimensions.width
          )}
        />
        {/* Messages */}
        <View>
          {/* Message */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_500Medium',
                fontSize: 16,
                lineHeight: 25,
                opacity: 0.95,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {processRegisterSuccessMessage(
              props.route?.params?.registerMsg ?? ''
            )}
          </Text>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* OK */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            activeOpacity={0.8}
            disabledOpacity={0.8}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors['White'],
                borderColor: 'rgb(215, 213, 213)',
                borderRadius: 14,
                borderWidth: 1,
                color: 'rgb(0,0,0)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={`${transalate(Variables, 'OK')}`}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RegisterSuccessScreen);
