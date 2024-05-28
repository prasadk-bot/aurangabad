import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  Icon,
  RadioButton,
  RadioButtonGroup,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const TitleBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
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
            {'Name'}
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
            {'Kumar Gulla'}
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
            {'Service connection no.'}
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
            {'1234567899876'}
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
          label={'Bill details'}
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
              {'Bill month'}
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
              {'Apr-2023'}
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
              {'Bill date'}
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
              {'12-05-2023'}
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
              {'Bill number'}
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
              {'345667899'}
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
              {'Due date'}
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
              {'20-05-2023'}
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
              {'Bill amount'}
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
              {'500.00'}
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
              {'Arrears'}
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
              {'100.00'}
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
              {'Rebate amount'}
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
              {'50.00'}
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
              {'Net payable amount'}
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
              {'₹550.00'}
            </Text>
          </View>
        </AccordionGroup>
      </View>
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
        <AccordionGroup
          caretSize={24}
          iconSize={24}
          expanded={true}
          label={'Enter details'}
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
                flexDirection: 'column',
                justifyContent: 'flex-start',
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
                GlobalStyles.ViewStyles(theme)['uname'].style,
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors['Custom Color_20']}
                name={'FontAwesome/rupee'}
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
                  editable={true}
                  placeholder={'Amount'}
                  placeholderTextColor={theme.colors['Custom Color_20']}
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
            {/* Mobile */}
            <View
              {...GlobalStyles.ViewStyles(theme)['uname'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['uname'].style,
                  { marginTop: 8 }
                ),
                dimensions.width
              )}
            >
              <>
                {!'+91' ? null : (
                  <Icon
                    size={24}
                    color={theme.colors['Custom Color_20']}
                    name={'Entypo/phone'}
                  />
                )}
              </>
              <TextInput
                autoCapitalize={'none'}
                autoCorrect={true}
                changeTextDelay={500}
                webShowOutline={true}
                disabled={true}
                editable={false}
                placeholder={'+91'}
                placeholderTextColor={theme.colors['Custom Color_20']}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    fontFamily: 'Roboto_400Regular',
                    paddingBottom: 8,
                    paddingLeft: 5,
                    paddingRight: 2,
                    paddingTop: 8,
                    width: '14%',
                  },
                  dimensions.width
                )}
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
                  editable={true}
                  placeholder={'1234567890'}
                  placeholderTextColor={theme.colors['Custom Color_20']}
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
            {/* Mail */}
            <View
              {...GlobalStyles.ViewStyles(theme)['uname'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ViewStyles(theme)['uname'].style,
                  { marginTop: 8 }
                ),
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors['Custom Color_20']}
                name={'MaterialCommunityIcons/email'}
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
                  editable={true}
                  placeholder={'abcdefgh@gmail.com'}
                  placeholderTextColor={theme.colors['Custom Color_20']}
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
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 8,
                opacity: 1,
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* rb */}
            <View
              {...GlobalStyles.ViewStyles(theme)['radio buttons'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ViewStyles(theme)['radio buttons'].style,
                dimensions.width
              )}
            >
              <RadioButtonGroup
                style={StyleSheet.applyWidth(
                  { marginTop: 10 },
                  dimensions.width
                )}
              >
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row', paddingLeft: 8 },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      { alignItems: 'center', flexDirection: 'row' },
                      dimensions.width
                    )}
                  >
                    <RadioButton
                      selectedIcon={'MaterialIcons/radio-button-checked'}
                      size={24}
                      unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                      color={theme.colors.secondary}
                      unselectedColor={theme.colors['Light']}
                      value={'Service request'}
                    />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          paddingLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'PG1'}
                    </Text>
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginLeft: 16,
                      },
                      dimensions.width
                    )}
                  >
                    <RadioButton
                      selectedIcon={'MaterialIcons/radio-button-checked'}
                      size={24}
                      unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                      color={theme.colors.secondary}
                      unselectedColor={theme.colors['Light']}
                      value={'vendor'}
                    />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          paddingLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'PG2'}
                    </Text>
                  </View>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginLeft: 16,
                      },
                      dimensions.width
                    )}
                  >
                    <RadioButton
                      selectedIcon={'MaterialIcons/radio-button-checked'}
                      size={24}
                      unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                      color={theme.colors.secondary}
                      unselectedColor={theme.colors['Light']}
                      value={'vendor'}
                    />
                    <Text
                      accessible={true}
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.strong,
                          fontFamily: 'Roboto_400Regular',
                          paddingLeft: 8,
                        },
                        dimensions.width
                      )}
                    >
                      {'PG3'}
                    </Text>
                  </View>
                </View>
              </RadioButtonGroup>
            </View>
          </View>
        </AccordionGroup>
      </View>
    </View>
  );
};

export default withTheme(TitleBlock);
