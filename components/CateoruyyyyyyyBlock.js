import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const CateoruyyyyyyyBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [BDnameupload, setBDnameupload] = React.useState('');
  const [BDnameupload1, setBDnameupload1] = React.useState('');
  const [BDnameupload2, setBDnameupload2] = React.useState('');
  const [BDnameupload3, setBDnameupload3] = React.useState('');
  const [uploadpic, setUploadpic] = React.useState('');
  const category = cat => {
    return cat.map(team => {
      return { label: team.Type, value: team.id };
    });
  };

  const buildSubCategory = categoryValue => {
    console.log(`csc/rest/RequestMWhr/${categoryValue}`);
    return `csc/rest/RequestMWhr/${categoryValue}`;
  };

  const complaintSubCategoryOptions = subCategoryJson => {
    return subCategoryJson.map(team => {
      return { label: team.RequestNature, value: team.id };
    });
  };

  const complaintCategory = comcat => {
    return comcat.map(team => {
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

  const stopSection = billingStatus => {
    var errorMessage = null;

    if (billingStatus == 'P' || billingStatus == 'D') {
      errorMessage = 'STOP';
    }

    return errorMessage;
  };

  const subCategoryOptions = subCatFun => {
    return subCatFun.map(team => {
      return { label: team.RequestNature, value: team.id };
    });
  };

  return (
    <View style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}>
      <View style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}>
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
          {'Document Details'}
        </Text>
      </View>
      {/* owenership view */}
      <View style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}>
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
          {'Ownership  Proof Document'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Error'],
              fontFamily: 'Roboto_400Regular',
            }),
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
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
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
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
              }),
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
                  const BDnameimg = await openImagePickerUtil({
                    mediaTypes: 'All',
                    allowsEditing: false,
                    quality: 0.2,
                    allowsMultipleSelection: false,
                    permissionErrorMessage:
                      'Sorry, we need media library permissions to make this work.',
                    showAlertOnPermissionError: true,
                  });

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
            {...GlobalStyles.ImageStyles(theme)['banner 3'].props}
            source={{ uri: `${BDnameupload}` }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['banner 3'].style,
                { height: 30, width: 30 }
              ),
              dimensions.width
            )}
          />
        </View>
      </View>
      {/* id proof document view  */}
      <View style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}>
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
          {'id  Proof Document'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Error'],
              fontFamily: 'Roboto_400Regular',
            }),
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
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
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
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
              }),
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
                  const BDnameimg1 = await openImagePickerUtil({
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
            {...GlobalStyles.ImageStyles(theme)['banner 3'].props}
            source={{ uri: `${BDnameupload1}` }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['banner 3'].style,
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
              }),
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
                  const BDnameimg2 = await openImagePickerUtil({
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
            {...GlobalStyles.ImageStyles(theme)['banner 3'].props}
            source={{ uri: `${BDnameupload2}` }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['banner 3'].style,
                { height: 30, width: 30 }
              ),
              dimensions.width
            )}
          />
        </View>
      </View>
      {/* other document view */}
      <View style={StyleSheet.applyWidth({ marginTop: 10 }, dimensions.width)}>
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
          {'id  Proof Document'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Error'],
              fontFamily: 'Roboto_400Regular',
            }),
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
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
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
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(42, 42, 42)',
                fontFamily: 'Roboto_400Regular',
                fontSize: 16,
              }),
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
                  const BDnameimg3 = await openImagePickerUtil({
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
            {...GlobalStyles.ImageStyles(theme)['banner 3'].props}
            source={{ uri: `${BDnameupload3}` }}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['banner 3'].style,
                { height: 30, width: 30 }
              ),
              dimensions.width
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default withTheme(CateoruyyyyyyyBlock);
