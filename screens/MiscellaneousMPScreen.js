import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const MiscellaneousMPScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [availableBalance, setAvailableBalance] = React.useState('');
  const [chargelist, setChargelist] = React.useState({});
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [consumerName, setConsumerName] = React.useState('');
  const [consumerScNo, setConsumerScNo] = React.useState('');
  const [meterNumber, setMeterNumber] = React.useState('');
  const [prepaidFlag, setPrepaidFlag] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [scnoErrorMsg, setScnoErrorMsg] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('Dashboard');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [viewbilldetails, setViewbilldetails] = React.useState({});
  const validateScno = scNo => {
    var errorMessage = null;
    if (!scNo.trim()) {
      errorMessage = 'Miscellaneous Reference No is required';
    }
    return errorMessage;
  };

  const buildString = Scno => {
    console.log(`billing/rest/getBillDataWss/${Scno}`);
    return `billing/rest/getBillDataWss/${Scno}`;
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
                navigation.goBack();
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
          {transalate(Variables, 'Miscellaneous Payment')}
        </Text>
      </View>

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
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['banner 3'].props}
            source={Images.ViewBillBase}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['banner 3'].style,
                { height: 151, width: '50%' }
              ),
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                fontFamily: 'Roboto_400Regular',
                marginTop: 5,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {transalate(
              Variables,
              'Please enter your Miscellaneous Reference No: provided in Acknowledgement'
            )}
            {'\n'}
          </Text>
        </View>
        {/* MiscellaneousText */}
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
          {null}
        </Text>
        {/* Enter custmoer service number */}
        <View
          {...GlobalStyles.ViewStyles(theme)['user name'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ViewStyles(theme)['user name'].style,
              { height: 50, marginTop: 20, paddingLeft: 20, paddingRight: 20 }
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
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              editable={true}
              placeholder={transalate(
                Variables,
                'Enter Miscellaneous Reference No'
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
              value={textInputValue}
            />
          </View>
        </View>
        {/* Service connection error message */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Error'],
              fontFamily: 'Roboto_400Regular',
              textAlign: 'left',
            }),
            dimensions.width
          )}
        >
          {transalate(Variables, scnoErrorMsg)}
        </Text>
        {/* Send OTP  Submit */}
        <Button
          iconPosition={'left'}
          onPress={() => {
            const handler = async () => {
              try {
                const scnoErrorMsg = validateScno(textInputValue);
                setScnoErrorMsg(scnoErrorMsg);
                if (scnoErrorMsg?.length) {
                  return;
                }
                const Viewbilldetailsjson = (
                  await CISAPPApi.misllenaceDetailsPOST(Constants, {
                    refRegNo: textInputValue,
                  })
                )?.json;

                const valueUPtFTNdr =
                  Viewbilldetailsjson &&
                  Viewbilldetailsjson[0].data.customMiscDemandVO;
                setViewbilldetails(valueUPtFTNdr);
                const Viewbilldetailslog = valueUPtFTNdr;
                console.log(Viewbilldetailslog);

                const valueiq44B4kw =
                  Viewbilldetailsjson &&
                  Viewbilldetailsjson[0].data.customMiscDemandVO.chargeList[0];
                setChargelist(valueiq44B4kw);
                const chargelistt = valueiq44B4kw;
                console.log(chargelistt);
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            {
              borderRadius: 14,
              fontFamily: 'Roboto_400Regular',
              fontSize: 16,
              marginTop: 30,
              width: '100%',
            },
            dimensions.width
          )}
          title={`${transalate(Variables, 'View Details')}`}
        />
      </View>
      {/* Details fetaching */}
      <>
        {!viewbilldetails?.name ? null : (
          <View>
            {/* card */}
            <View
              {...GlobalStyles.ViewStyles(theme)['card'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['card'].style,
                  {
                    backgroundColor: theme.colors['Background'],
                    borderColor: 'rgb(199, 198, 198)',
                    borderRadius: 8,
                    borderWidth: 1,
                    marginLeft: 20,
                    marginRight: 20,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingTop: 10,
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
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_700Bold',
                    fontSize: 16,
                  },
                  dimensions.width
                )}
              >
                {(() => {
                  const e = viewbilldetails?.name;
                  console.log(e);
                  return e;
                })()}
              </Text>
              {/* Sub title */}
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.strong,
                    fontFamily: 'Roboto_700Bold',
                    fontSize: 12,
                    marginTop: 5,
                    opacity: 0.83,
                  },
                  dimensions.width
                )}
              >
                {viewbilldetails?.refRegNo}
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
                    borderRadius: 8,
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 25,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingTop: 10,
                  }
                ),
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  { alignSelf: 'auto' },
                  dimensions.width
                )}
              >
                {/* Amount due */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_700Bold',
                      fontSize: 16,
                      opacity: 0.64,
                    },
                    dimensions.width
                  )}
                >
                  {transalate(Variables, 'Total Amount')}
                </Text>
                {/* Amount  */}
                <Text
                  accessible={true}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.strong,
                      fontFamily: 'Roboto_700Bold',
                      fontSize: 16,
                      opacity: 0.96,
                    },
                    dimensions.width
                  )}
                >
                  {viewbilldetails?.totalAmt}
                </Text>
              </View>
              {/* Pay Now */}
              <Button
                iconPosition={'left'}
                onPress={() => {
                  try {
                    navigation.navigate('MakePaymentMisPScreen', {
                      RequestName: viewbilldetails?.reqName,
                      ParentCatoryName: viewbilldetails?.parentCatName,
                      Office: viewbilldetails?.office,
                      RefRegisteredNo: viewbilldetails?.refRegNo,
                      Scno: viewbilldetails?.scno,
                      Name: viewbilldetails?.name,
                      officeId: viewbilldetails?.officeId,
                      SubCatname: viewbilldetails?.subCatName,
                      NetPaybleAmount: viewbilldetails?.totalAmt,
                      Amount: chargelist?.amount,
                      AppRegName: chargelist?.chargeName,
                      Address: viewbilldetails?.address,
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
                    height: 36,
                    marginTop: 10,
                    textAlign: 'center',
                    width: '45%',
                  },
                  dimensions.width
                )}
                title={`${transalate(Variables, 'Pay Now')}`}
              />
            </View>
          </View>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(MiscellaneousMPScreen);
