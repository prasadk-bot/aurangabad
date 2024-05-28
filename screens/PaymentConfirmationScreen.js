import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const PaymentConfirmationScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors['Primary'], justifyContent: 'center' },
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
          source={Images.PaymentSuccess}
          style={StyleSheet.applyWidth(
            { height: 100, position: 'absolute', top: -50, width: 100 },
            dimensions.width
          )}
        />
        {/* Messages */}
        <View>
          {/* Title */}
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
            {transalate(Variables, 'Bill payment successful.')}
          </Text>
        </View>
        {/* Consumer details  */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginBottom: 50, marginTop: 50 },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'center'}
            source={Images.Uitilitycislogo}
            style={StyleSheet.applyWidth(
              {
                borderColor: 'rgb(217, 211, 211)',
                borderRadius: 12,
                borderWidth: 1,
                height: 76,
                marginBottom: 12,
                width: 76,
              },
              dimensions.width
            )}
          />
          {/* Name */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_500Medium',
                fontSize: 14,
                lineHeight: 25,
                opacity: 0.95,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {props.route?.params?.name ?? ''}
          </Text>
          {/* Service number */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_400Regular',
                lineHeight: 18,
                marginTop: 2,
                opacity: 0.6,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {props.route?.params?.Scno ?? ''}
          </Text>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          {/* Back to Home */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('DashboardScreen');
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
            title={`${transalate(Variables, 'Back to Home')}`}
          />
          {/* View receipt */}
          <Button
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('ReceiptScreen', {
                  Scno: props.route?.params?.Scno ?? '',
                  name: props.route?.params?.name ?? '',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            activeOpacity={0.8}
            disabledOpacity={0.8}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.primary,
                borderRadius: 14,
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                marginTop: 30,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={`${transalate(Variables, 'View Receipt')}`}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PaymentConfirmationScreen);
