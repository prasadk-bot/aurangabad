import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const BottomBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
        },
        dimensions.width
      )}
    >
      {/* Home */}
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('DashboardScreen', {
              Name: null,
              name: Constants['name'],
            });
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
            navigation.navigate('UsageScreen', {
              name: Constants['name'],
              Name: null,
            });
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
            navigation.navigate('BillingScreen', {
              Name: null,
              name: Constants['name'],
            });
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
            navigation.navigate('PaymentsScreen', {
              name: Constants['name'],
              Name: null,
            });
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

export default withTheme(BottomBlock);
