import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Button,
  Icon,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const ViewBillScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [radioButtonGroup2Value, setRadioButtonGroup2Value] =
    React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const convertMonthNoToMonthNumber = monthNo => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];
    const monthName = monthNames[monthNo - 1];
    console.log(monthName);
    return monthName;
  };

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 12,
            paddingLeft: 16,
            paddingRight: 16,
          },
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 44,
                justifyContent: 'center',
                width: 44,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </View>
        </Touchable>
        {/* View bill and make payment */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 10,
            },
            dimensions.width
          )}
        >
          {transalate(Variables, 'View Bill')}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { paddingBottom: 20, paddingTop: 20 },
          dimensions.width
        )}
      >
        {/* Payment summary */}
        <View>
          {/* pr1 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['pr1'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ViewStyles(theme)['pr1'].style, {
                marginLeft: 20,
                marginRight: 20,
                paddingBottom: 3,
                paddingTop: 3,
              }),
              dimensions.width
            )}
          >
            {/* card */}
            <View
              {...GlobalStyles.ViewStyles(theme)['card'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['card'].style,
                  {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(199, 198, 198)',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  }
                ),
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
                {props.route?.params?.Name ?? ''}
              </Text>
            </View>
            {/* card */}
            <View
              {...GlobalStyles.ViewStyles(theme)['card'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['card'].style,
                  {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(199, 198, 198)',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 8,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 8,
                  }
                ),
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
          {/* pr2 */}
          <View
            {...GlobalStyles.ViewStyles(theme)['accordion'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ViewStyles(theme)['accordion'].style,
                {
                  marginLeft: 20,
                  marginRight: 20,
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
              label={transalate(Variables, 'Bill details')}
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
                    opacity: 0.8,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Bill month */}
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
                  {transalate(Variables, 'Bill month')}
                </Text>
                {/* Bill date */}
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
                  {convertMonthNoToMonthNumber(
                    props.route?.params?.BillMonth ?? ''
                  )}
                  {' - '}
                  {props.route?.params?.billYear ?? ''}
                </Text>
              </View>
              {/* view */}
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
                {/* Bill date */}
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
                  {transalate(Variables, 'Bill date')}
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
                  {props.route?.params?.BillDame ?? ''}
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
                {/* Bill number */}
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
                  {transalate(Variables, 'Bill number')}
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
                  {props.route?.params?.BillNo ?? ''}
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
                {/* Due Date */}
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
                  {transalate(Variables, 'Due date')}
                </Text>
                {/* last date */}
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
                  {props.route?.params?.BillDueDate ?? ''}
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
                {/* Bill amount */}
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
                  {transalate(Variables, 'Bill Amount')}
                </Text>
                {/* amount */}
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
                  {'₹'}
                  {props.route?.params?.BillAmount ?? ''}
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
                {/* Arrears */}
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
                  {transalate(Variables, 'Arrears')}
                </Text>
                {/* amount */}
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
                  {'₹'}
                  {props.route?.params?.Arrear ?? ''}
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
                {/* Rebate amount */}
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
                  {transalate(Variables, 'Rebate amount')}
                </Text>
                {/* amount */}
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
                  {'₹'}
                  {props.route?.params?.RebateGiven ?? ''}
                </Text>
              </View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    borderColor: theme.colors['Divider'],
                    borderTopWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    opacity: 1,
                    width: '100%',
                  },
                  dimensions.width
                )}
              >
                {/* Net payable amount */}
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
                  {transalate(Variables, 'Net payable amount')}
                </Text>
                {/* amount */}
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
                  {'₹'}
                  {props.route?.params?.ledgerAmt ?? ''}
                </Text>
              </View>
            </AccordionGroup>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ViewBillScreen);
