import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CISAPPApi from '../apis/CISAPPApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import transalate from '../global-functions/transalate';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  DatePicker,
  Icon,
  NumberInput,
  Picker,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { Image, ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ServiceRequestScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [BDcategoryupload, setBDcategoryupload] = React.useState('');
  const [BDcategoryupload2, setBDcategoryupload2] = React.useState('');
  const [BDcategoryupload3, setBDcategoryupload3] = React.useState('');
  const [BDnameupload, setBDnameupload] = React.useState('');
  const [BDnameupload1, setBDnameupload1] = React.useState('');
  const [BDnameupload2, setBDnameupload2] = React.useState('');
  const [BDnameupload3, setBDnameupload3] = React.useState('');
  const [BDownershipupload, setBDownershipupload] = React.useState('');
  const [BDownershipupload2, setBDownershipupload2] = React.useState('');
  const [BDownershipupload3, setBDownershipupload3] = React.useState('');
  const [Billstatus, setBillstatus] = React.useState('');
  const [comid, setComid] = React.useState('');
  const [consumerNo, setConsumerNo] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [datePickerValue2, setDatePickerValue2] = React.useState(new Date());
  const [disstop, setDisstop] = React.useState('');
  const [lab, setLab] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickerValue3, setPickerValue3] = React.useState('');
  const [pickerValue4, setPickerValue4] = React.useState('');
  const [pickerValue5, setPickerValue5] = React.useState('');
  const [raiseTicketCompMsg, setRaiseTicketCompMsg] = React.useState('');
  const [raiseTicketMsg, setRaiseTicketMsg] = React.useState('');
  const [requestDetails, setRequestDetails] = React.useState('');
  const [requestDetails1, setRequestDetails1] = React.useState('');
  const [requestnatureId, setRequestnatureId] = React.useState('');
  const [requestnatureId1, setRequestnatureId1] = React.useState('');
  const [saveid, setSaveid] = React.useState('');
  const [scNo, setScNo] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [secondpikcersv, setSecondpikcersv] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('faq');
  const [selectedTab1, setSelectedTab1] = React.useState('Table');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [sts, setSts] = React.useState('');
  const [subCatJson, setSubCatJson] = React.useState([]);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInput2Value, setTextInput2Value] = React.useState('');
  const [textInput2Value2, setTextInput2Value2] = React.useState('');
  const [textInput2Value3, setTextInput2Value3] = React.useState('');
  const [textInput3Value, setTextInput3Value] = React.useState('');
  const [textInput3Value2, setTextInput3Value2] = React.useState('');
  const [textInput4Value, setTextInput4Value] = React.useState('');
  const [textInput4Value2, setTextInput4Value2] = React.useState('');
  const [textInput5Value, setTextInput5Value] = React.useState('');
  const [textInput6Value, setTextInput6Value] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
  const [textInputValue4, setTextInputValue4] = React.useState('');
  const [textareacomplint, setTextareacomplint] = React.useState('');
  const [uploadpic, setUploadpic] = React.useState('');
  const [uploadpic1, setUploadpic1] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [numberInputValue, setNumberInputValue] = React.useState(undefined);
  const complaintCategory = comcat => {
    return comcat.map(team => {
      return { label: team.Type, value: team.id };
    });
  };

  const complaintSubCategoryOptions = subCategoryJson => {
    return subCategoryJson.map(team => {
      return { label: team.RequestNature, value: team.id };
    });
  };

  const buildSubCategory = categoryValue => {
    console.log(`csc/rest/RequestMWhr/${categoryValue}`);
    return `csc/rest/RequestMWhr/${categoryValue}`;
  };

  const subCategoryOptions = subCatFun => {
    return subCatFun.map(team => {
      return {
        label: team.RequestNature,
        statuss: team.AllReqUponDueFlag,
        value: team.id,
      };
    });
  };

  const stopSection = billingStatus => {
    var errorMessage = null;

    if (billingStatus == 'P' || billingStatus == 'D') {
      errorMessage = 'STOP';
    }

    return errorMessage;
  };

  const getLable = (valObject, id) => {
    for (let i = 0; i < valObject.length; i++) {
      if (valObject[i].value === id) {
        return valObject[i].label;
      }
    }
    return null;
  };

  const getSts = (valObject, id) => {
    for (let i = 0; i < valObject.length; i++) {
      if (valObject[i].value === id) {
        return valObject[i].statuss;
      }
    }
    return null;
  };

  const category = cat => {
    return cat.map(team => {
      return { label: team.Type, value: team.id };
    });
  };

  const subcategoryAPIAction = categoryId => {
    return 'csc/rest/RequestMWhr/' + categoryId + '/';

    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  };
  const isFocused = useIsFocused();
  React.useEffect(() => {
    const handler = async () => {
      try {
        if (!isFocused) {
          return;
        }
        const consumerDetailsJson = (
          await CISAPPApi.consumerDetailsPOST(Constants, {
            accno: Constants['name'],
          })
        )?.json;
        const billingsts = (consumerDetailsJson && consumerDetailsJson[0])?.data
          ?.billingStatus;
        setBillstatus(billingsts);
        const stop = stopSection(billingsts);
        setDisstop(stop);
        const cat = (await CISAPPApi.serviceRequestCategoryPOST(Constants))
          ?.json;
        console.log(cat);
        setGlobalVariableValue({
          key: 'picker_option1',
          value: (() => {
            const e = category(cat && cat[0].data.RequestTypeMJson);
            console.log(e);
            return e;
          })(),
        });
        const comcat = (await CISAPPApi.complaintCategoryPOST(Constants))?.json;
        console.log(comcat);
        setGlobalVariableValue({
          key: 'picker_option2',
          value: complaintCategory(comcat && comcat[0].data.RequestTypeMJson),
        });
      } catch (err) {
        console.error(err);
      }
    };
    handler();
  }, [isFocused]);

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      scrollable={true}
    >
      {/* Header */}
      <View
        {...GlobalStyles.ViewStyles(theme)['fef hed'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ViewStyles(theme)['fef hed'].style,
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
        {/* Screen Heading */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors['Strong'],
              fontFamily: 'Roboto_700Bold',
              fontSize: 18,
              marginLeft: 16,
            },
            dimensions.width
          )}
        >
          {transalate(Variables, 'Service Request')}
        </Text>
      </View>
      {/* View 2 */}
      <View
        style={StyleSheet.applyWidth(
          {
            marginLeft: 5,
            marginRight: 5,
            marginTop: 20,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Raiseticket Message */}
        <>
          {!(Billstatus === 'P') ? null : (
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'flex-start',
                    color: theme.colors['Error'],
                    fontFamily: 'Roboto_400Regular',
                    textAlign: 'center',
                  }
                ),
                dimensions.width
              )}
            >
              {
                '* You Are Not Allowed To Register Complaints As The Account Is Permanently Dismantled.'
              }
            </Text>
          )}
        </>
      </View>
      {/* faq */}
      <>
        {!(selectedTab === 'faq') ? null : (
          <KeyboardAwareScrollView
            enableAutomaticScroll={false}
            enableOnAndroid={false}
            enableResetScrollToCoords={false}
            keyboardShouldPersistTaps={'never'}
            showsVerticalScrollIndicator={true}
            viewIsInsideTabBar={false}
            contentContainerStyle={StyleSheet.applyWidth(
              { marginTop: 25 },
              dimensions.width
            )}
          >
            {/* FAQs */}
            <>
              {!(disstop !== 'STOP') ? null : (
                <ScrollView
                  bounces={true}
                  horizontal={false}
                  keyboardShouldPersistTaps={'never'}
                  nestedScrollEnabled={false}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  contentContainerStyle={StyleSheet.applyWidth(
                    { paddingLeft: 24, paddingRight: 24, paddingTop: 16 },
                    dimensions.width
                  )}
                >
                  {/* Service connection number */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['user name'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['user name'].style,
                        {
                          height: 50,
                          marginBottom: 10,
                          marginTop: 3,
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
                            setGlobalVariableValue({
                              key: 'name',
                              value: newTextInputValue,
                            });
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        webShowOutline={true}
                        editable={false}
                        placeholder={transalate(
                          Variables,
                          'Service connection number'
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
                        value={Constants['name']}
                      />
                    </View>
                  </View>
                  {/* category */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['category'].props}
                    style={StyleSheet.applyWidth(
                      GlobalStyles.ViewStyles(theme)['category'].style,
                      dimensions.width
                    )}
                  >
                    <Picker
                      autoDismissKeyboard={true}
                      dropDownBackgroundColor={theme.colors.background}
                      dropDownBorderColor={theme.colors.divider}
                      dropDownBorderRadius={8}
                      dropDownBorderWidth={1}
                      dropDownTextColor={theme.colors.strong}
                      iconSize={24}
                      leftIconMode={'inset'}
                      mode={'native'}
                      onValueChange={newPickerValue => {
                        const handler = async () => {
                          try {
                            setPickerValue(newPickerValue);
                            const subCategoryJson = (
                              await CISAPPApi.serviceRequestSubCategoryPOST(
                                Constants,
                                { action: buildSubCategory(newPickerValue) }
                              )
                            )?.json;
                            console.log(subCategoryJson);
                            buildSubCategory(newPickerValue);
                            subCategoryOptions(subCategoryJson);
                            const secondpikcersv = setGlobalVariableValue({
                              key: 'sub_category',
                              value: subCategoryOptions(
                                subCategoryJson &&
                                  subCategoryJson[0].data.RequestMWhereJson
                              ),
                            });
                            /* hidden 'Log to Console' action */
                            /* hidden 'Set Variable' action */
                            setSaveid('');
                          } catch (err) {
                            console.error(err);
                          }
                        };
                        handler();
                      }}
                      selectedIconColor={theme.colors.strong}
                      selectedIconName={'Feather/check'}
                      selectedIconSize={20}
                      type={'solid'}
                      iconColor={theme.colors['Medium']}
                      options={Constants['picker_option1']}
                      placeholder={'Request Nature'}
                      placeholderTextColor={theme.colors['Medium']}
                      rightIconName={'Entypo/chevron-down'}
                      style={StyleSheet.applyWidth(
                        { fontSize: 14, width: '100%' },
                        dimensions.width
                      )}
                      value={pickerValue}
                    />
                  </View>
                  {/* Sub category */}
                  <View
                    {...GlobalStyles.ViewStyles(theme)['category'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.ViewStyles(theme)['category'].style,
                        { marginTop: 10 }
                      ),
                      dimensions.width
                    )}
                  >
                    <Picker
                      autoDismissKeyboard={true}
                      dropDownBackgroundColor={theme.colors.background}
                      dropDownBorderColor={theme.colors.divider}
                      dropDownBorderRadius={8}
                      dropDownBorderWidth={1}
                      dropDownTextColor={theme.colors.strong}
                      iconSize={24}
                      leftIconMode={'inset'}
                      mode={'native'}
                      onValueChange={newPickerValue => {
                        try {
                          const valueLmh9uBiE = newPickerValue;
                          setSaveid(valueLmh9uBiE);
                          const si = valueLmh9uBiE;
                          console.log(si);
                          console.log(Constants['sub_category']);
                          const lll = getLable(Constants['sub_category'], si);
                          const lls = getSts(Constants['sub_category'], si);

                          const valueWnQEBv6y = lll;
                          setLab(valueWnQEBv6y);
                          const labb = valueWnQEBv6y;
                          const valueVFzAJ1eT = lls;
                          setSts(valueVFzAJ1eT);
                          const labbs = valueVFzAJ1eT;
                          console.log(lll);
                          console.log(labbs);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      selectedIconColor={theme.colors.strong}
                      selectedIconName={'Feather/check'}
                      selectedIconSize={20}
                      type={'solid'}
                      iconColor={theme.colors['Medium']}
                      options={Constants['sub_category']}
                      placeholder={'Request Type'}
                      placeholderTextColor={theme.colors['Medium']}
                      rightIconName={'Entypo/chevron-down'}
                      style={StyleSheet.applyWidth(
                        { fontSize: 14, width: '100%' },
                        dimensions.width
                      )}
                      value={saveid}
                    />
                  </View>
                  {/* B D Category change picker */}
                  <>
                    {!(lab === 'Category Change ') ? null : (
                      <View
                        {...GlobalStyles.ViewStyles(theme)['category'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ViewStyles(theme)['category'].style,
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        <Picker
                          autoDismissKeyboard={true}
                          dropDownBackgroundColor={theme.colors.background}
                          dropDownBorderColor={theme.colors.divider}
                          dropDownBorderRadius={8}
                          dropDownBorderWidth={1}
                          dropDownTextColor={theme.colors.strong}
                          iconSize={24}
                          leftIconMode={'inset'}
                          mode={'native'}
                          selectedIconColor={theme.colors.strong}
                          selectedIconName={'Feather/check'}
                          selectedIconSize={20}
                          type={'solid'}
                          iconColor={theme.colors['Medium']}
                          options={Constants['BD CateogryPicker']}
                          placeholder={'CS Rural-CS Rural'}
                          placeholderTextColor={theme.colors['Medium']}
                          rightIconName={'Entypo/chevron-down'}
                          style={StyleSheet.applyWidth(
                            { fontSize: 14, width: '100%' },
                            dimensions.width
                          )}
                        />
                      </View>
                    )}
                  </>
                  {/* B D bill revision */}
                  <>
                    {!(lab === 'Bill Revision') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <DatePicker
                          autoDismissKeyboard={true}
                          disabled={false}
                          hideLabel={false}
                          label={'Date'}
                          leftIconMode={'inset'}
                          mode={'date'}
                          onDateChange={newDatePickerValue => {
                            const date = newDatePickerValue;
                            try {
                              setDatePickerValue(newDatePickerValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          type={'solid'}
                          date={datePickerValue}
                          style={StyleSheet.applyWidth(
                            { fontFamily: 'Roboto_400Regular' },
                            dimensions.width
                          )}
                        />
                      </View>
                    )}
                  </>
                  {/* B D bill duplicate */}
                  <>
                    {!(lab === 'Duplicate Bill') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <DatePicker
                          autoDismissKeyboard={true}
                          disabled={false}
                          hideLabel={false}
                          label={'Date'}
                          leftIconMode={'inset'}
                          mode={'date'}
                          onDateChange={newDatePickerValue => {
                            const date = newDatePickerValue;
                            try {
                              setDatePickerValue2(newDatePickerValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          type={'solid'}
                          date={datePickerValue2}
                        />
                      </View>
                    )}
                  </>
                  {/* B D Address concetion */}
                  <>
                    {!(lab === 'Address Correction') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInputValue => {
                            const textInputValue = newTextInputValue;
                            try {
                              setTextInputValue2(newTextInputValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Address1'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                fontFamily: 'Roboto_400Regular',
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInputValue2}
                        />
                        {/* Text Input 2 */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInput2Value => {
                            const textInputValue = newTextInput2Value;
                            try {
                              setTextInput2Value(newTextInput2Value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Address2'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInput2Value}
                        />
                        {/* Text Input 3 */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInput3Value => {
                            const textInputValue = newTextInput3Value;
                            try {
                              setTextInput3Value(newTextInput3Value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Address3'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInput3Value}
                        />
                        <NumberInput
                          changeTextDelay={500}
                          onChangeText={newNumberInputValue => {
                            const numberInputValue = newNumberInputValue;
                            try {
                              setNumberInputValue2(newNumberInputValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.NumberInputStyles(theme)[
                            'Number Input'
                          ].props}
                          placeholder={'Mobile Number'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.NumberInputStyles(theme)[
                                'Number Input'
                              ].style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={numberInputValue2}
                        />
                        {/* Text Input 4 */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInput4Value => {
                            const textInputValue = newTextInput4Value;
                            try {
                              setTextInput4Value(newTextInput4Value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Email'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInput4Value}
                        />
                      </View>
                    )}
                  </>
                  {/* B D Name correction */}
                  <>
                    {!(lab === 'Name Correction') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInputValue => {
                            const textInputValue = newTextInputValue;
                            try {
                              setTextInputValue3(newTextInputValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Name'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInputValue3}
                        />
                        {/* Text Input 2 */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInput2Value => {
                            const textInputValue = newTextInput2Value;
                            try {
                              setTextInput2Value2(newTextInput2Value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Father Name'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInput2Value2}
                        />
                      </View>
                    )}
                  </>
                  {/* B D Ownership change  */}
                  <>
                    {!(lab === 'Ownership Change ') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInputValue => {
                            const textInputValue = newTextInputValue;
                            try {
                              setTextInputValue4(newTextInputValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Name'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                fontFamily: 'Roboto_400Regular',
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInputValue4}
                        />
                        {/* Text Input 2 */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInput2Value => {
                            const textInputValue = newTextInput2Value;
                            try {
                              setTextInput2Value3(newTextInput2Value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Father Name'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                fontFamily: 'Roboto_400Regular',
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInput2Value3}
                        />
                        {/* Text Input 3 */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInput3Value => {
                            const textInputValue = newTextInput3Value;
                            try {
                              setTextInput3Value2(newTextInput3Value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Address1'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                fontFamily: 'Roboto_400Regular',
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInput3Value2}
                        />
                        {/* Text Input 4 */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInput4Value => {
                            const textInputValue = newTextInput4Value;
                            try {
                              setTextInput4Value2(newTextInput4Value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Address2'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                fontFamily: 'Roboto_400Regular',
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInput4Value2}
                        />
                        {/* Text Input 5 */}
                        <TextInput
                          autoCapitalize={'none'}
                          autoCorrect={true}
                          changeTextDelay={500}
                          onChangeText={newTextInput5Value => {
                            const textInputValue = newTextInput5Value;
                            try {
                              setTextInput5Value(newTextInput5Value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          webShowOutline={true}
                          {...GlobalStyles.TextInputStyles(theme)['Text Input']
                            .props}
                          placeholder={'Address3'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextInputStyles(theme)['Text Input']
                                .style,
                              {
                                borderBottomWidth: 1,
                                borderColor: theme.colors['Divider'],
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderTopWidth: 1,
                                fontFamily: 'Roboto_400Regular',
                                height: 55,
                                marginTop: 10,
                              }
                            ),
                            dimensions.width
                          )}
                          value={textInput5Value}
                        />
                        <Picker
                          autoDismissKeyboard={true}
                          dropDownBackgroundColor={theme.colors.background}
                          dropDownBorderColor={theme.colors.divider}
                          dropDownBorderRadius={8}
                          dropDownBorderWidth={1}
                          dropDownTextColor={theme.colors.strong}
                          iconSize={24}
                          leftIconMode={'inset'}
                          mode={'native'}
                          onValueChange={newPickerValue => {
                            const pickerValue = newPickerValue;
                            try {
                              setPickerValue5(newPickerValue);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          selectedIconColor={theme.colors.strong}
                          selectedIconName={'Feather/check'}
                          selectedIconSize={20}
                          type={'solid'}
                          iconColor={theme.colors['Medium']}
                          placeholder={'Transfer Security Deposite'}
                          placeholderTextColor={theme.colors['Medium']}
                          rightIconName={'EvilIcons/chevron-down'}
                          style={StyleSheet.applyWidth(
                            { fontFamily: 'Roboto_400Regular', marginTop: 10 },
                            dimensions.width
                          )}
                          value={pickerValue5}
                        />
                      </View>
                    )}
                  </>
                  {/* Description */}
                  <View
                    style={StyleSheet.applyWidth(
                      { borderRadius: 12, marginTop: 25, width: '100%' },
                      dimensions.width
                    )}
                  >
                    <TextInput
                      autoCorrect={true}
                      changeTextDelay={500}
                      multiline={true}
                      numberOfLines={4}
                      onChangeText={newTextAreaValue => {
                        try {
                          setTextAreaValue(newTextAreaValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      textAlignVertical={'top'}
                      webShowOutline={true}
                      placeholder={transalate(Variables, 'Description')}
                      placeholderTextColor={theme.colors['Medium']}
                      style={StyleSheet.applyWidth(
                        {
                          borderBottomWidth: 1,
                          borderColor: theme.colors.divider,
                          borderLeftWidth: 1,
                          borderRadius: 8,
                          borderRightWidth: 1,
                          borderTopWidth: 1,
                          fontFamily: 'Roboto_400Regular',
                          height: 100,
                          paddingBottom: 16,
                          paddingLeft: 16,
                          paddingRight: 16,
                          paddingTop: 16,
                        },
                        dimensions.width
                      )}
                      value={textAreaValue}
                    />
                  </View>

                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: theme.colors['Error'],
                          fontFamily: 'Roboto_400Regular',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {null}
                  </Text>
                  {/* B D address documents details */}
                  <>
                    {!(lab === 'Address Correction') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Document Details'}
                          </Text>
                        </View>
                        {/* View 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Other Document'}
                          </Text>
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors['Error'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {
                              '(Please upload the document of the type .doc,.docx,.pdf,.png,.jpg,.jpeg and max size is 1 MB)'
                            }
                          </Text>
                        </View>
                        {/* Table */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgb(211, 211, 211)',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderTopWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 10,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Document sumbitted'}
                              </Text>
                            </View>
                          </View>
                          {/* Upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Upload'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Table */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Copy of Registered lease deed'}
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const img = await openImagePickerUtil({
                                      mediaTypes: 'All',
                                      allowsEditing: false,
                                      quality: 0.2,
                                      allowsMultipleSelection: false,
                                      permissionErrorMessage:
                                        'Sorry, we need media library permissions to make this work.',
                                      showAlertOnPermissionError: true,
                                    });

                                    setUploadpic(img);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${uploadpic}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        {/* Table 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {
                                'Municipal tax receipt or\nDemand notice or any \nother related document'
                              }
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const img1 = await openImagePickerUtil({
                                      mediaTypes: 'All',
                                      allowsEditing: false,
                                      quality: 0.2,
                                      allowsMultipleSelection: false,
                                      permissionErrorMessage:
                                        'Sorry, we need media library permissions to make this work.',
                                      showAlertOnPermissionError: true,
                                    });

                                    setUploadpic1(img1);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${uploadpic1}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                      </View>
                    )}
                  </>
                  {/* B D Name documents details   */}
                  <>
                    {!(lab === 'Name Correction') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Document Details'}
                          </Text>
                        </View>
                        {/* owenership view */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Ownership  Proof Document'}
                          </Text>
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors['Error'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {
                              '(Please upload the document of the type .doc,.docx,.pdf,.png,.jpg,.jpeg and max size is 1 MB)'
                            }
                          </Text>
                        </View>
                        {/* TableHeader */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgb(211, 211, 211)',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderTopWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 10,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Document sumbitted'}
                              </Text>
                            </View>
                          </View>
                          {/* Upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Upload'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Table */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'No objection Certificate'}
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDnameimg = await openImagePickerUtil(
                                      {
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      }
                                    );

                                    setBDnameupload(BDnameimg);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDnameupload}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        {/* id proof document view  */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'id  Proof Document'}
                          </Text>
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors['Error'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {
                              '(Please upload the document of the type .doc,.docx,.pdf,.png,.jpg,.jpeg and max size is 1 MB)'
                            }
                          </Text>
                        </View>
                        {/* TableHeader 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgb(211, 211, 211)',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderTopWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 10,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Document sumbitted'}
                              </Text>
                            </View>
                          </View>
                          {/* Upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Upload'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Table 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Driving License'}
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDnameimg1 =
                                      await openImagePickerUtil({
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      });

                                    setBDnameupload1(BDnameimg1);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDnameupload1}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        {/* Table 3 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Aadhaar card'}
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDnameimg2 =
                                      await openImagePickerUtil({
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      });

                                    setBDnameupload2(BDnameimg2);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDnameupload2}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        {/* other document view */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'id  Proof Document'}
                          </Text>
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors['Error'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {
                              '(Please upload the document of the type .doc,.docx,.pdf,.png,.jpg,.jpeg and max size is 1 MB)'
                            }
                          </Text>
                        </View>
                        {/* TableHeader 3 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgb(211, 211, 211)',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderTopWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 10,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Document sumbitted'}
                              </Text>
                            </View>
                          </View>
                          {/* Upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Upload'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Table */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {
                                'Municipal tax receipt or\nDemand notice or any \nother related document'
                              }
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDnameimg3 =
                                      await openImagePickerUtil({
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      });

                                    setBDnameupload3(BDnameimg3);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDnameupload3}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                      </View>
                    )}
                  </>
                  {/* B D Category change */}
                  <>
                    {!(lab === 'Category Change ') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Document Details'}
                          </Text>
                        </View>
                        {/* id proof document view  */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'id  Proof Document'}
                          </Text>
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors['Error'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {
                              '(Please upload the document of the type .doc,.docx,.pdf,.png,.jpg,.jpeg and max size is 1 MB)'
                            }
                          </Text>
                        </View>
                        {/* TableHeader 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgb(211, 211, 211)',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderTopWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 10,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Document sumbitted'}
                              </Text>
                            </View>
                          </View>
                          {/* Upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Upload'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Table  */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Driving License'}
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDcategorychangeimg =
                                      await openImagePickerUtil({
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      });

                                    setBDcategoryupload(BDcategorychangeimg);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDcategoryupload}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        {/* Table 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Aadhaar card'}
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDcategorychangeimg2 =
                                      await openImagePickerUtil({
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      });

                                    setBDcategoryupload2(BDcategorychangeimg2);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDcategoryupload2}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        {/* other document view */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'id  Proof Document'}
                          </Text>
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors['Error'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {
                              '(Please upload the document of the type .doc,.docx,.pdf,.png,.jpg,.jpeg and max size is 1 MB)'
                            }
                          </Text>
                        </View>
                        {/* TableHeader 3 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgb(211, 211, 211)',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderTopWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 10,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Document sumbitted'}
                              </Text>
                            </View>
                          </View>
                          {/* Upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Upload'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Table */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {
                                'Municipal tax receipt or\nDemand notice or any \nother related document'
                              }
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDcategorychangeimg3 =
                                      await openImagePickerUtil({
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      });

                                    setBDcategoryupload3(BDcategorychangeimg3);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDcategoryupload3}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                      </View>
                    )}
                  </>
                  {/* B D Ownership documents details  */}
                  <>
                    {!(lab === 'Ownership Change') ? null : (
                      <View
                        style={StyleSheet.applyWidth(
                          { marginTop: 10 },
                          dimensions.width
                        )}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Document Details'}
                          </Text>
                        </View>
                        {/* owenership view */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'Ownership  Proof Document'}
                          </Text>
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors['Error'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {
                              '(Please upload the document of the type .doc,.docx,.pdf,.png,.jpg,.jpeg and max size is 1 MB)'
                            }
                          </Text>
                        </View>
                        {/* TableHeader */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgb(211, 211, 211)',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderTopWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 10,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Document sumbitted'}
                              </Text>
                            </View>
                          </View>
                          {/* Upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Upload'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Table */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'No objection Certificate'}
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDownershipimg =
                                      await openImagePickerUtil({
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      });

                                    setBDownershipupload(BDownershipimg);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDownershipupload}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        {/* id proof document view  */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'id  Proof Document'}
                          </Text>
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors['Error'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {
                              '(Please upload the document of the type .doc,.docx,.pdf,.png,.jpg,.jpeg and max size is 1 MB)'
                            }
                          </Text>
                        </View>
                        {/* TableHeader 2 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgb(211, 211, 211)',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderTopWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 10,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Document sumbitted'}
                              </Text>
                            </View>
                          </View>
                          {/* Upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Upload'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Table 3 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {'Aadhaar card'}
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDownershipimg2 =
                                      await openImagePickerUtil({
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      });

                                    setBDownershipupload2(BDownershipimg2);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDownershipupload2}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                        {/* other document view */}
                        <View
                          style={StyleSheet.applyWidth(
                            { marginTop: 10 },
                            dimensions.width
                          )}
                        >
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                { fontFamily: 'Roboto_400Regular' }
                              ),
                              dimensions.width
                            )}
                          >
                            {'id  Proof Document'}
                          </Text>
                          {/* Text 2 */}
                          <Text
                            accessible={true}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  color: theme.colors['Error'],
                                  fontFamily: 'Roboto_400Regular',
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {
                              '(Please upload the document of the type .doc,.docx,.pdf,.png,.jpg,.jpeg and max size is 1 MB)'
                            }
                          </Text>
                        </View>
                        {/* TableHeader 3 */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              backgroundColor: 'rgb(211, 211, 211)',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              borderLeftWidth: 1,
                              borderRightWidth: 1,
                              borderTopLeftRadius: 5,
                              borderTopRightRadius: 5,
                              borderTopWidth: 1,
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              marginTop: 10,
                              width: '100%',
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Document sumbitted'}
                              </Text>
                            </View>
                          </View>
                          {/* Upload */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: theme.colors['White'],
                                borderRightWidth: 1,
                                flex: 1,
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  backgroundColor: theme.colors['ViewBG'],
                                  height: 40,
                                  justifyContent: 'center',
                                },
                                dimensions.width
                              )}
                            >
                              <Text
                                accessible={true}
                                {...GlobalStyles.TextStyles(theme)['Text']
                                  .props}
                                style={StyleSheet.applyWidth(
                                  StyleSheet.compose(
                                    GlobalStyles.TextStyles(theme)['Text']
                                      .style,
                                    {
                                      color: 'rgb(42, 42, 42)',
                                      fontFamily: 'Roboto_700Bold',
                                      textAlign: 'center',
                                      textTransform: 'capitalize',
                                    }
                                  ),
                                  dimensions.width
                                )}
                              >
                                {'Upload'}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {/* Table */}
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderBottomWidth: 1,
                              borderColor: 'rgb(211, 211, 211)',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingBottom: 10,
                              paddingLeft: 20,
                              paddingRight: 20,
                              paddingTop: 10,
                            },
                            dimensions.width
                          )}
                        >
                          {/* Document */}
                          <View>
                            {/* text */}
                            <Text
                              accessible={true}
                              {...GlobalStyles.TextStyles(theme)['Text'].props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.TextStyles(theme)['Text'].style,
                                  {
                                    color: 'rgb(42, 42, 42)',
                                    fontFamily: 'Roboto_400Regular',
                                    fontSize: 16,
                                  }
                                ),
                                dimensions.width
                              )}
                            >
                              {
                                'Municipal tax receipt or\nDemand notice or any \nother related document'
                              }
                            </Text>
                          </View>
                          {/* Upload */}
                          <View>
                            <Touchable
                              onPress={() => {
                                const handler = async () => {
                                  try {
                                    const BDownershipimg3 =
                                      await openImagePickerUtil({
                                        mediaTypes: 'All',
                                        allowsEditing: false,
                                        quality: 0.2,
                                        allowsMultipleSelection: false,
                                        permissionErrorMessage:
                                          'Sorry, we need media library permissions to make this work.',
                                        showAlertOnPermissionError: true,
                                      });

                                    setBDownershipupload3(BDownershipimg3);
                                  } catch (err) {
                                    console.error(err);
                                  }
                                };
                                handler();
                              }}
                            >
                              <View>
                                <Icon
                                  size={24}
                                  color={theme.colors['Medium']}
                                  name={'MaterialCommunityIcons/upload'}
                                />
                              </View>
                            </Touchable>
                          </View>
                          {/* Upload view */}
                          <View>
                            <Image
                              resizeMode={'cover'}
                              {...GlobalStyles.ImageStyles(theme)['banner 3']
                                .props}
                              source={{ uri: `${BDownershipupload3}` }}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.ImageStyles(theme)['banner 3']
                                    .style,
                                  { height: 30, width: 30 }
                                ),
                                dimensions.width
                              )}
                            />
                          </View>
                        </View>
                      </View>
                    )}
                  </>
                  {/* Button Solid */}
                  <Button
                    iconPosition={'left'}
                    onPress={() => {
                      const handler = async () => {
                        try {
                          const servicerequestsave = (
                            await CISAPPApi.serviceRequestSavePOST(Constants, {
                              requestDetails: (() => {
                                const e = textAreaValue;
                                console.log(e);
                                return e;
                              })(),
                              requestnatureId: (() => {
                                const e = saveid;
                                console.log(e);
                                return e;
                              })(),
                              scNo: (() => {
                                const e = Constants['name'];
                                console.log(e);
                                return e;
                              })(),
                            })
                          )?.json;
                          console.log(servicerequestsave);
                          const raiseTicketMsg =
                            servicerequestsave &&
                            servicerequestsave[0].data.RequestMJson[0].message;
                          setRaiseTicketMsg(raiseTicketMsg);
                          console.log(raiseTicketMsg);
                          navigation.navigate('RaiseTicketSuccessScreen', {
                            raiseTicketMsg: raiseTicketMsg,
                          });
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
                        paddingLeft: 30,
                        paddingRight: 30,
                        textAlign: 'center',
                      },
                      dimensions.width
                    )}
                    title={`${transalate(Variables, 'Submit')}`}
                  />
                </ScrollView>
              )}
            </>
          </KeyboardAwareScrollView>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(ServiceRequestScreen);
