import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  Picker,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const CardsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [pickerValue, setPickerValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['White'],
            borderColor: theme.colors['White'],
            borderRadius: 8,
            borderWidth: 1,
            justifyContent: 'space-evenly',
            marginTop: '30%',
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Roboto_400Regular',
              paddingLeft: 5,
            }),
            dimensions.width
          )}
        >
          {'Welcome'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['NFT_Time_Green'],
              fontFamily: 'Roboto_400Regular',
              fontSize: 20,
              paddingLeft: 5,
            }),
            dimensions.width
          )}
        >
          {'Vasanth kumar'}
        </Text>
        <Picker
          autoDismissKeyboard={true}
          dropDownBackgroundColor={theme.colors.background}
          dropDownTextColor={theme.colors.strong}
          iconSize={24}
          mode={'native'}
          onValueChange={newPickerValue => {
            const pickerValue = newPickerValue;
            try {
              setPickerValue(newPickerValue);
            } catch (err) {
              console.error(err);
            }
          }}
          selectedIconColor={theme.colors.strong}
          selectedIconName={'Feather/check'}
          selectedIconSize={20}
          dropDownBorderColor={theme.colors['White']}
          dropDownBorderRadius={0}
          dropDownBorderWidth={0}
          leftIconMode={'inset'}
          options={[
            { label: '1101087405', value: '1101087405' },
            { label: '1101087406', value: '1101087406' },
          ]}
          placeholder={''}
          rightIconName={'Entypo/chevron-small-down'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['White'],
              fontFamily: 'Roboto_400Regular',
              width: '50%',
            },
            dimensions.width
          )}
          type={'underline'}
          value={pickerValue}
        />
      </View>
      {/* Current Balance Card */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['White'],
            borderColor: theme.colors['White'],
            borderRadius: 8,
            borderWidth: 1,
            justifyContent: 'space-evenly',
            marginTop: 20,
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['White'],
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
            dimensions.width
          )}
        >
          {/* Current Balance  */}
          <View>
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'Roboto_400Regular', fontSize: 14 }
                ),
                dimensions.width
              )}
            >
              {'Current Balance'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'Roboto_700Bold', fontSize: 20, marginTop: 20 }
                ),
                dimensions.width
              )}
            >
              {'₹61551.78'}
            </Text>
          </View>
          {/* Meter Connected */}
          <View>
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-between' },
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
                      color: theme.colors['Strong'],
                      fontFamily: 'Roboto_400Regular',
                      fontSize: 14,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Meter Connected'}
              </Text>

              <View>
                <Touchable>
                  <Icon
                    color={theme.colors['NFT_Time_Green']}
                    name={'Ionicons/ios-refresh'}
                    size={20}
                  />
                </Touchable>
              </View>
            </View>
            {/* Recharge */}
            <Button
              iconPosition={'left'}
              {...GlobalStyles.ButtonStyles(theme)['Submit 2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Submit 2'].style,
                  {
                    backgroundColor: theme.colors['NFT_Time_Green'],
                    borderRadius: 14,
                    height: 36,
                    marginTop: 10,
                  }
                ),
                dimensions.width
              )}
              title={'Recharge'}
            />
          </View>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', marginTop: 10 },
            dimensions.width
          )}
        >
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
            {'Last recharge of ₹ 5 on 2024-04-18'}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(CardsScreen);
