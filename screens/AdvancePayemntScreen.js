import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const AdvancePayemntScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [addAmount1, setAddAmount1] = React.useState(100);
  const [addAmount2, setAddAmount2] = React.useState(250);
  const [addAmountt3, setAddAmountt3] = React.useState(450);
  const [amount1, setAmount1] = React.useState(100);
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [radioButtonGroup2Value, setRadioButtonGroup2Value] =
    React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [rechargeAmount, setRechargeAmount] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [updatedAmount, setUpdatedAmount] = React.useState('');
  const amountDisplayFun = amount => {
    console.log('amount' + amount);
    if (amount != null) {
      setrechargeAmount(amount);
    }
  };

  const advanceAmountFun = (buttonValue, amountInput, updatedAmountValue) => {
    console.log('Amount' + amountInput);
    let updatedValue = 0;
    if (updatedAmountValue == 0) {
      updatedValue = amountInput + buttonValue + updatedAmountValue;
    } else {
      updatedValue = buttonValue + updatedAmountValue;
    }
    console.log('updatedValue' + updatedValue);

    return updatedValue;
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
          {transalate(Variables, 'Advance Payment Now')}
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
          { marginTop: 40, paddingBottom: 20, paddingTop: 20 },
          dimensions.width
        )}
      >
        {/* Payment summary */}
        <View>
          {/* Enter details */}
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
            {/* Service connection number */}
            <View
              {...GlobalStyles.ViewStyles(theme)['category'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['category'].style,
                  { marginTop: 20 }
                ),
                dimensions.width
              )}
            >
              {/* Service1 */}
              <View
                {...GlobalStyles.ViewStyles(theme)['uname'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['uname'].style,
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 16,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 57,
                      paddingLeft: 20,
                      paddingRight: 20,
                      width: '100%',
                    }
                  ),
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors['Medium']}
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
                    defaultValue={props.route?.params?.serviceConNo ?? ''}
                    editable={true}
                    placeholder={transalate(
                      Variables,
                      'Service connection No'
                    ).toString()}
                    placeholderTextColor={theme.colors['Medium']}
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
            </View>

            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  opacity: 1,
                  width: '100%',
                },
                dimensions.width
              )}
            >
              {/* Amount */}
              <View
                {...GlobalStyles.ViewStyles(theme)['uname'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['uname'].style,
                    {
                      borderBottomWidth: 1,
                      borderColor: theme.colors['Divider'],
                      borderLeftWidth: 1,
                      borderRadius: 16,
                      borderRightWidth: 1,
                      borderTopWidth: 1,
                      height: 57,
                      paddingLeft: 20,
                      paddingRight: 20,
                    }
                  ),
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors['Medium']}
                  name={'FontAwesome/rupee'}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingLeft: 10, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <NumberInput
                    changeTextDelay={500}
                    onChangeText={newNumberInputValue => {
                      try {
                        setUpdatedAmount(newNumberInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    webShowOutline={true}
                    {...GlobalStyles.NumberInputStyles(theme)['Number Input']
                      .props}
                    editable={true}
                    placeholder={'Amount'}
                    placeholderTextColor={theme.colors['Medium']}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.NumberInputStyles(theme)['Number Input']
                          .style,
                        { fontFamily: 'Roboto_400Regular' }
                      ),
                      dimensions.width
                    )}
                    value={updatedAmount}
                  />
                </View>
              </View>
              {/* Mobile */}
              <View
                {...GlobalStyles.ViewStyles(theme)['uname'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ViewStyles(theme)['uname'].style,
                    { marginTop: 20 }
                  ),
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <Button
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setAddAmount1(100);
                        const amountResult = advanceAmountFun(
                          addAmount1,
                          updatedAmount,
                          updatedAmount
                        );
                        console.log(amountResult);
                        setUpdatedAmount(amountResult);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'+₹100'}
                  />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <Button
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setAddAmount2(250);
                        const amountResult = advanceAmountFun(
                          addAmount2,
                          updatedAmount,
                          updatedAmount
                        );
                        console.log(amountResult);
                        setUpdatedAmount(amountResult);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'+₹250'}
                  />
                </View>

                <View
                  style={StyleSheet.applyWidth(
                    { flex: 1, paddingRight: 10 },
                    dimensions.width
                  )}
                >
                  <Button
                    iconPosition={'left'}
                    onPress={() => {
                      try {
                        setAddAmountt3(450);
                        const amountResult = advanceAmountFun(
                          addAmountt3,
                          updatedAmount,
                          updatedAmount
                        );
                        console.log(amountResult);
                        setUpdatedAmount(amountResult);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                        {
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          paddingTop: 8,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'+₹450'}
                  />
                </View>
              </View>
            </View>
            {/* Section Header */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Section Header'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Section Header'].style,
                dimensions.width
              )}
            >
              {/* Heading */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_500Medium',
                    fontSize: 14,
                  },
                  dimensions.width
                )}
              >
                {transalate(Variables, 'Select Payment Method')}
              </Text>
            </View>
            {/* Payment Methods */}
            <View
              {...GlobalStyles.ViewStyles(theme)['Payment Methods 2'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['Payment Methods 2'].style,
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 12, overflow: 'hidden' },
                  dimensions.width
                )}
              >
                <RadioButtonGroup
                  onValueChange={newRadioButtonGroupValue => {
                    const radioButtonGroupValue = newRadioButtonGroupValue;
                    try {
                      setRadioButtonGroupValue(radioButtonGroupValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={radioButtonGroupValue}
                >
                  {/* Payment Methods */}
                  <CISAPPApi.FetchPaymentGatewayPOST>
                    {({ loading, error, data, refetchPaymentGateway }) => {
                      const paymentMethodsData = data?.json;
                      if (loading) {
                        return <ActivityIndicator />;
                      }

                      if (error || data?.status < 200 || data?.status >= 300) {
                        return <ActivityIndicator />;
                      }

                      return (
                        <FlashList
                          data={
                            paymentMethodsData && paymentMethodsData[0].data
                          }
                          estimatedItemSize={50}
                          horizontal={false}
                          inverted={false}
                          keyExtractor={(flashListData, index) =>
                            flashListData?.id ??
                            flashListData?.uuid ??
                            index.toString()
                          }
                          listKey={'lDXzGzXS'}
                          numColumns={1}
                          onEndReachedThreshold={0.5}
                          renderItem={({ item, index }) => {
                            const flashListData = item;
                            return (
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    height: 64,
                                    justifyContent: 'space-between',
                                    paddingBottom: 10,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    paddingTop: 10,
                                  },
                                  dimensions.width
                                )}
                              >
                                <Image
                                  resizeMode={'cover'}
                                  source={{
                                    uri: `${flashListData?.attachment}`,
                                  }}
                                  style={StyleSheet.applyWidth(
                                    { height: 18, width: 60 },
                                    dimensions.width
                                  )}
                                />
                                <View
                                  style={StyleSheet.applyWidth(
                                    { flex: 1 },
                                    dimensions.width
                                  )}
                                >
                                  <RadioButtonRow
                                    color={theme.colors.primary}
                                    unselectedColor={theme.colors.primary}
                                    label={flashListData?.name}
                                    style={StyleSheet.applyWidth(
                                      { fontFamily: 'Inter_500Medium' },
                                      dimensions.width
                                    )}
                                    value={flashListData?.name}
                                  />
                                </View>
                              </View>
                            );
                          }}
                          showsHorizontalScrollIndicator={true}
                          showsVerticalScrollIndicator={true}
                          contentContainerStyle={StyleSheet.applyWidth(
                            {
                              borderRadius: 12,
                              overflow: 'hidden',
                              paddingBottom: 10,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        />
                      );
                    }}
                  </CISAPPApi.FetchPaymentGatewayPOST>
                </RadioButtonGroup>
              </View>
            </View>
          </View>
        </View>
        {/* Pay */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('AdvancePayemntConfirmationScreen', {
                serviceConnectionNo: props.route?.params?.serviceConNo ?? '',
                Name: props.route?.params?.Name ?? '',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['GetFit Orange'],
              borderRadius: 14,
              fontFamily: 'Roboto_400Regular',
              fontSize: 16,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 35,
            },
            dimensions.width
          )}
          title={`${transalate(Variables, 'Make Payment')}`}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(AdvancePayemntScreen);
