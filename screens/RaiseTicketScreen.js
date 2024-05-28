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
  Picker,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ScrollView, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RaiseTicketScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [Billstatus, setBillstatus] = React.useState('');
  const [comid, setComid] = React.useState('');
  const [consumerNo, setConsumerNo] = React.useState('');
  const [csubv, setCsubv] = React.useState('');
  const [disstop, setDisstop] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [pickerValue3, setPickerValue3] = React.useState('');
  const [pickerValue4, setPickerValue4] = React.useState('');
  const [raiseTicketCompMsg, setRaiseTicketCompMsg] = React.useState('');
  const [raiseTicketMsg, setRaiseTicketMsg] = React.useState('');
  const [requestDetails, setRequestDetails] = React.useState('');
  const [requestDetails1, setRequestDetails1] = React.useState('');
  const [requestnatureId, setRequestnatureId] = React.useState('');
  const [requestnatureId1, setRequestnatureId1] = React.useState('');
  const [saveid, setSaveid] = React.useState('');
  const [scNo, setScNo] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('contact');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [starRatingValue2, setStarRatingValue2] = React.useState(0);
  const [subCatJson, setSubCatJson] = React.useState([]);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textareacomplint, setTextareacomplint] = React.useState('');
  const complaintSubCategoryOptions = subCategoryJson => {
    return subCategoryJson.map(team => {
      return { label: team.RequestNature, value: team.id };
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

  const subCategoryOptions = subCatFun => {
    return subCatFun.map(team => {
      return { label: team.RequestNature, value: team.id };
    });
  };

  const category = cat => {
    return cat.map(team => {
      return { label: team.Type, value: team.id };
    });
  };

  const complaintCategory = comcat => {
    return comcat.map(team => {
      return { label: team.Type, value: team.id };
    });
  };

  const stopSection = billingStatus => {
    var errorMessage = null;

    if (billingStatus == 'P' || billingStatus == 'D') {
      errorMessage = 'STOP';
    }

    return errorMessage;
  };

  const buildSubCategory = categoryValue => {
    console.log(`csc/rest/RequestMWhr/${categoryValue}`);
    return `csc/rest/RequestMWhr/${categoryValue}`;
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
        console.log(billingsts);
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
          {transalate(Variables, 'Raise Complaint')}
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
        {/* Raiseticket Message 2 */}
        <>
          {!(Billstatus === 'D') ? null : (
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
                '* You Are Not Allowed To Register Complaints As The Account Is Permanently Disconnected.'
              }
            </Text>
          )}
        </>
      </View>
      {/* contact */}
      <>
        {!(disstop !== 'STOP') ? null : (
          <KeyboardAwareScrollView
            enableAutomaticScroll={false}
            enableOnAndroid={false}
            enableResetScrollToCoords={false}
            keyboardShouldPersistTaps={'never'}
            showsVerticalScrollIndicator={true}
            viewIsInsideTabBar={false}
            contentContainerStyle={StyleSheet.applyWidth(
              { paddingTop: 25 },
              dimensions.width
            )}
          >
            {/* contact */}
            <>
              {!(selectedTab === 'contact') ? null : (
                <View
                  style={StyleSheet.applyWidth(
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
                            setPickerValue3(newPickerValue);
                            const comsubcat = (
                              await CISAPPApi.complaintSubCategoryPOST(
                                Constants,
                                { action: buildSubCategory(newPickerValue) }
                              )
                            )?.json;
                            console.log(comsubcat);
                            buildSubCategory(newPickerValue);
                            complaintSubCategoryOptions(comsubcat);
                            setGlobalVariableValue({
                              key: 'sub_category2',
                              value: complaintSubCategoryOptions(
                                comsubcat && comsubcat[0].data.RequestMWhereJson
                              ),
                            });
                            setComid('');
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
                      options={Constants['picker_option2']}
                      placeholder={'Complaint Nature'}
                      placeholderTextColor={theme.colors['Medium']}
                      rightIconName={'Entypo/chevron-down'}
                      style={StyleSheet.applyWidth(
                        { width: '100%' },
                        dimensions.width
                      )}
                      value={pickerValue3}
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
                          setComid(newPickerValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      selectedIconColor={theme.colors.strong}
                      selectedIconName={'Feather/check'}
                      selectedIconSize={20}
                      type={'solid'}
                      iconColor={theme.colors['Medium']}
                      options={Constants['sub_category2']}
                      placeholder={'Complaint Type'}
                      placeholderTextColor={theme.colors['Medium']}
                      rightIconName={'Entypo/chevron-down'}
                      style={StyleSheet.applyWidth(
                        { width: '100%' },
                        dimensions.width
                      )}
                      value={comid}
                    />
                  </View>
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
                          setTextareacomplint(newTextAreaValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      textAlignVertical={'top'}
                      webShowOutline={true}
                      placeholder={transalate(Variables, 'Description')}
                      placeholderTextColor={theme.colors.textPlaceholder}
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
                      value={textareacomplint}
                    />
                  </View>
                  {/* Button Solid */}
                  <Button
                    iconPosition={'left'}
                    onPress={() => {
                      const handler = async () => {
                        try {
                          const complaintsave = (
                            await CISAPPApi.complaintSavePOST(Constants, {
                              consumerNo: Constants['name'],
                              requestDetails1: textareacomplint,
                              requestnatureId1: comid,
                            })
                          )?.json;
                          console.log(complaintsave);
                          const complaintMsg =
                            complaintsave &&
                            complaintsave[0].data.RequestMJson[0].message;
                          console.log(complaintMsg);
                          setRaiseTicketCompMsg(complaintMsg);
                          navigation.navigate('RaiseTicketSuccessScreen', {
                            raiseTicketMsg: complaintMsg,
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
                </View>
              )}
            </>
          </KeyboardAwareScrollView>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(RaiseTicketScreen);
