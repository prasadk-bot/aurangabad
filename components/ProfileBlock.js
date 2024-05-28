import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Circle, Touchable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const ProfileBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: theme.colors['Light'],
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 14,
          paddingTop: 14,
        },
        dimensions.width
      )}
    >
      <View>
        <Circle bgColor={theme.colors.light} size={60}>
          <Image
            resizeMode={'cover'}
            source={Images.User}
            style={StyleSheet.applyWidth(
              { height: 60, width: 60 },
              dimensions.width
            )}
          />
        </Circle>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flex: 1, marginLeft: 16 },
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
          {'InAdventure'}
        </Text>
        {/* Game */}
        <Text
          accessible={true}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_300Light',
              marginTop: 5,
            },
            dimensions.width
          )}
        >
          {'Overwatch 2'}
        </Text>
      </View>
      {/* Follow */}
      <View>
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: theme.colors['Custom Color'],
                borderRadius: 100,
                height: 32,
                justifyContent: 'center',
                width: 73,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors['Custom #ffffff'],
                  fontFamily: 'Inter_400Regular',
                },
                dimensions.width
              )}
            >
              {'Follow'}
            </Text>
          </View>
        </Touchable>
      </View>
    </View>
  );
};

export default withTheme(ProfileBlock);
