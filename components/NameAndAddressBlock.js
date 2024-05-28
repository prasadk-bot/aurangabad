import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const NameAndAddressBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          flexDirection: 'row',
          paddingBottom: 20,
          paddingTop: 20,
        },
        dimensions.width
      )}
    >
      <Touchable
        onPress={() => {
          const handler = async () => {
            try {
              await openImagePickerUtil({
                mediaTypes: 'All',
                allowsEditing: false,
                quality: 0.2,
                allowsMultipleSelection: false,
                permissionErrorMessage:
                  'Sorry, we need media library permissions to make this work.',
                showAlertOnPermissionError: true,
              });
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
      >
        <View>
          <Image
            resizeMode={'cover'}
            source={Images.User}
            style={StyleSheet.applyWidth(
              { height: 80, width: 80 },
              dimensions.width
            )}
          />
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 4,
                bottom: 0,
                height: 22,
                justifyContent: 'center',
                position: 'absolute',
                right: 0,
                width: 22,
              },
              dimensions.width
            )}
          >
            <Icon
              color={theme.colors['Custom #ffffff']}
              name={'MaterialIcons/edit'}
              size={12}
            />
          </View>
        </View>
      </Touchable>

      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingLeft: 16 },
          dimensions.width
        )}
      >
        {/* Name */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
            },
            dimensions.width
          )}
        >
          {'AndrewAinsley'}
        </Text>
        {/* Status */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_400Regular',
              fontSize: 14,
              marginTop: 5,
            },
            dimensions.width
          )}
        >
          {'Offline'}
        </Text>
      </View>
      {/* Edit */}
      <Touchable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color'],
              borderRadius: 100,
              flexDirection: 'row',
              paddingLeft: 15,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Custom #ffffff']}
            name={'AntDesign/edit'}
            size={15}
          />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors['Custom #ffffff'],
                fontFamily: 'Inter_500Medium',
                paddingBottom: 8,
                paddingLeft: 10,
                paddingRight: 15,
                paddingTop: 8,
              },
              dimensions.width
            )}
          >
            {'Edit'}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

export default withTheme(NameAndAddressBlock);
