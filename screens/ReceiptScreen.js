import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Button,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const ReceiptScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgb(196, 189, 189)',
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
            borderColor: 'rgb(207, 204, 204)',
            borderRadius: 12,
            borderWidth: 1,
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 22,
          },
          dimensions.width
        )}
      >
        {/* Messages */}
        <View
          style={StyleSheet.applyWidth({ marginBottom: 20 }, dimensions.width)}
        >
          {/* Title */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['ShopAppBlue'],
                fontFamily: 'Roboto_500Medium',
                fontSize: 18,
                lineHeight: 25,
                opacity: 1,
                paddingBottom: 3,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {transalate(Variables, 'Payment Receipt')}
          </Text>
        </View>
        {/* Messages */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              alignSelf: 'stretch',
              borderBottomWidth: 1,
              borderColor: 'rgb(182, 179, 179)',
              borderStyle: 'dashed',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 3,
              paddingTop: 3,
            },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.Uitilitycislogo}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 40, width: 140 }
              ),
              dimensions.width
            )}
          />
          {/* Uitility name */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Strong'],
                fontFamily: 'Roboto_500Medium',
                lineHeight: 18,
                opacity: 0.96,
                paddingLeft: 25,
                paddingRight: 25,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {transalate(Variables, 'Utility Name')}
          </Text>
        </View>
        {/* amount-black */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignContent: 'space-between',
              alignItems: 'stretch',
              alignSelf: 'stretch',
              paddingBottom: 8,
              paddingTop: 8,
            },
            dimensions.width
          )}
        >
          {/* card */}
          <View
            {...GlobalStyles.ViewStyles(theme)['card'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'].style, {
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(199, 198, 198)',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
              }),
              dimensions.width
            )}
          >
            {/* Name */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-start',
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 14,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {transalate(Variables, 'Name')}
            </Text>
            {/* cname */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-start',
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 14,
                  opacity: 1,
                  textAlign: 'auto',
                },
                dimensions.width
              )}
            >
              {props.route?.params?.name ?? ''}
            </Text>
          </View>
          {/* card */}
          <View
            {...GlobalStyles.ViewStyles(theme)['card'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['card'].style, {
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(199, 198, 198)',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 8,
              }),
              dimensions.width
            )}
          >
            {/* Service connection no */}
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-start',
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 14,
                  textAlign: 'left',
                },
                dimensions.width
              )}
            >
              {transalate(Variables, 'Service connection number')}
            </Text>

            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  alignSelf: 'flex-start',
                  color: theme.colors.strong,
                  fontFamily: 'Roboto_500Medium',
                  fontSize: 14,
                  opacity: 1,
                  textAlign: 'right',
                },
                dimensions.width
              )}
            >
              {props.route?.params?.Scno ?? ''}
            </Text>
          </View>
        </View>
        {/* accordion */}
        <View
          {...GlobalStyles.ViewStyles(theme)['accordion'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['accordion'].style,
              {
                alignSelf: 'stretch',
                paddingBottom: 3,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 3,
              }
            ),
            dimensions.width
          )}
        >
          <AccordionGroup
            caretSize={24}
            iconSize={24}
            expanded={true}
            label={transalate(Variables, 'Payment details')}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'stretch',
                color: theme.colors['ShopAppBlue'],
                fontFamily: 'Roboto_500Medium',
                fontSize: 16,
                paddingBottom: 8,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Paid */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Amount paid')}
              </Text>
              {/* Bill amount */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'stretch',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'₹550.00'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  opacity: 0.8,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Paid on */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Paid on')}
              </Text>
              {/* Date */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'stretch',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {'12-05-2023 | 12:12 AM'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  opacity: 0.8,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Payment mode */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Payment mode')}
              </Text>
              {/* Date */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'stretch',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Online')}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  opacity: 0.8,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Payment type */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Payment type')}
              </Text>
              {/* UPI */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'stretch',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    lineHeight: 20,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'UPI')}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Permanent receipt number */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Permanent receipt number')}
                {'\nxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
              </Text>
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors['Divider'],
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Transaction ID */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    opacity: 0.8,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Transaction ID')}
                {'\nxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
              </Text>
            </View>
          </AccordionGroup>
        </View>
        {/* Actions */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              marginBottom: 20,
              marginTop: 20,
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Download print */}
          <Button
            iconPosition={'left'}
            activeOpacity={0.8}
            disabledOpacity={0.8}
            style={StyleSheet.applyWidth(
              {
                borderRadius: 14,
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={`${transalate(Variables, 'Print')}`}
          />
          {/* Cancel */}
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
                backgroundColor: theme.colors['Error'],
                borderColor: 'rgb(215, 213, 213)',
                borderRadius: 14,
                borderWidth: 1,
                color: 'rgb(255, 255, 255)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
                marginTop: 20,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={`${transalate(Variables, 'Close')}`}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ReceiptScreen);
