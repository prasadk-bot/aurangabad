import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View } from 'react-native';

const ModelScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', marginTop: '50%' },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              setIsModalVisible(true);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Roboto_400Regular',
                fontSize: 20,
              }),
              dimensions.width
            )}
          >
            {'Our Service Area'}
          </Text>
        </Touchable>
      </View>

      <Modal
        animationType={'slide'}
        presentationStyle={'pageSheet'}
        transparent={false}
        visible={isModalVisible}
      >
        <View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth({ paddingLeft: 20 }, dimensions.width)}
          >
            <Touchable
              onPress={() => {
                try {
                  setIsModalVisible(false);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon size={24} name={'AntDesign/closecircleo'} />
            </Touchable>
          </View>

          <View
            style={StyleSheet.applyWidth({ marginTop: 30 }, dimensions.width)}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    fontFamily: 'Roboto_700Bold',
                    fontSize: 20,
                    paddingLeft: 20,
                  }
                ),
                dimensions.width
              )}
            >
              {'Our Service Area'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'center',
                    fontFamily: 'Roboto_400Regular',
                    marginTop: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }
                ),
                dimensions.width
              )}
            >
              {
                'We are dedicated to serving you with highest quality, \nmost efficient and most relable power supply in this districts mention below.'
              }
            </Text>
            {/* Text 3 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { alignSelf: 'flex-start', marginTop: 10, paddingLeft: 20 }
                ),
                dimensions.width
              )}
            >
              {'Samastipur'}
            </Text>
            {/* Text 4 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { alignSelf: 'flex-start', marginTop: 10, paddingLeft: 20 }
                ),
                dimensions.width
              )}
            >
              {'Vaishali'}
            </Text>
            {/* Text 5 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { alignSelf: 'flex-start', marginTop: 10, paddingLeft: 20 }
                ),
                dimensions.width
              )}
            >
              {'Siwan'}
            </Text>
            {/* Text 6 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { alignSelf: 'flex-start', marginTop: 10, paddingLeft: 20 }
                ),
                dimensions.width
              )}
            >
              {'Gopaiganj'}
            </Text>
            {/* Text 7 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { alignSelf: 'flex-start', marginTop: 10, paddingLeft: 20 }
                ),
                dimensions.width
              )}
            >
              {'Saran (Chapra)'}
            </Text>
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(ModelScreen);
