import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const BotemTab1Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['botem tab'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['botem tab'].style, {
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          width: '100%',
        }),
        dimensions.width
      )}
    >
      {/* Home */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('DashboardScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        activeOpacity={0.8}
        disabledOpacity={0.8}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 50,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Community_Dark_UI']}
            name={'Entypo/home'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(0,0,0)',
                fontFamily: 'Roboto_400Regular',
              }),
              dimensions.width
            )}
          >
            {'Home'}
          </Text>
        </View>
      </Touchable>
      {/* Usage */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('UsageScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        activeOpacity={0.8}
        disabledOpacity={0.8}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 50,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Community_Light_Black']}
            name={'FontAwesome/bar-chart-o'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Roboto_400Regular',
              }),
              dimensions.width
            )}
          >
            {'Usage'}
          </Text>
        </View>
      </Touchable>
      {/* Billing */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('BillingScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        activeOpacity={0.8}
        disabledOpacity={0.8}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 50,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Community_Light_Black']}
            name={'Entypo/text-document-inverted'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Roboto_400Regular',
              }),
              dimensions.width
            )}
          >
            {'Billing'}
          </Text>
        </View>
      </Touchable>
      {/* Payments */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('PaymentsScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        activeOpacity={0.8}
        disabledOpacity={0.8}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 65,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Community_Light_Black']}
            name={'MaterialIcons/payments'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Roboto_400Regular',
              }),
              dimensions.width
            )}
          >
            {'Payments'}
          </Text>
        </View>
      </Touchable>
      {/* Support */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('CheckTicketStatusScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        activeOpacity={0.8}
        disabledOpacity={0.8}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 48,
              justifyContent: 'center',
              width: 55,
            },
            dimensions.width
          )}
        >
          <Icon
            size={24}
            color={theme.colors['Community_Light_Black']}
            name={'MaterialIcons/support-agent'}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Roboto_400Regular',
              }),
              dimensions.width
            )}
          >
            {'Support'}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(BotemTab1Block);
