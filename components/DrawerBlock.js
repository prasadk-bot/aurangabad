import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Circle,
  CircleImage,
  Icon,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const DrawerBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Surface
      elevation={0}
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors.surface,
          flex: 2,
          height: '100%',
          position: 'absolute',
          top: 0,
          width: '80%',
          zIndex: 5,
        },
        dimensions.width
      )}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.strong,
            paddingBottom: 24,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 72,
          },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row' },
            dimensions.width
          )}
        >
          <Circle bgColor={theme.colors.surface} size={64}>
            <CircleImage
              size={60}
              source={{
                uri: 'https://global-uploads.webflow.com/5e740d74e6787687577e9b38/61eb13cf6bbef833d45c5560_avatar%20(5).png',
              }}
            />
          </Circle>

          <View
            style={StyleSheet.applyWidth(
              { flex: 1, marginLeft: 12 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.surface,
                  fontFamily: 'System',
                  fontSize: 18,
                  fontWeight: '400',
                },
                dimensions.width
              )}
            >
              {'Dave Sebek'}
            </Text>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 4 },
                dimensions.width
              )}
            >
              <Circle bgColor={theme.colors.error} size={8} />
              <Text
                accessible={true}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.error,
                    fontFamily: 'System',
                    fontWeight: '400',
                    marginLeft: 4,
                  },
                  dimensions.width
                )}
              >
                {'Away'}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flex: 1, paddingBottom: 16, paddingTop: 16 },
          dimensions.width
        )}
      >
        {/* Home */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: 12,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 12,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/home'} />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'System',
                  fontSize: 18,
                  fontWeight: '400',
                  marginLeft: 8,
                },
                dimensions.width
              )}
            >
              {'Home'}
            </Text>
          </View>
        </Touchable>
        {/* Projects */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: 12,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 12,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/grid'} />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'System',
                  fontSize: 18,
                  fontWeight: '400',
                  marginLeft: 8,
                },
                dimensions.width
              )}
            >
              {'Projects'}
            </Text>
          </View>
        </Touchable>
        {/* Messages */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: 12,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 12,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/message-square'} />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'System',
                  fontSize: 18,
                  fontWeight: '400',
                  marginLeft: 8,
                },
                dimensions.width
              )}
            >
              {'Messages'}
            </Text>
          </View>
        </Touchable>
        {/* Profile */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: 12,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 12,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/user'} />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'System',
                  fontSize: 18,
                  fontWeight: '400',
                  marginLeft: 8,
                },
                dimensions.width
              )}
            >
              {'Profile'}
            </Text>
          </View>
        </Touchable>
        {/* Logout */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: 12,
                paddingLeft: 24,
                paddingRight: 24,
                paddingTop: 12,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'Feather/log-out'} />
            <Text
              accessible={true}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.strong,
                  fontFamily: 'System',
                  fontSize: 18,
                  fontWeight: '400',
                  marginLeft: 8,
                },
                dimensions.width
              )}
            >
              {'Sign out'}
            </Text>
          </View>
        </Touchable>
      </View>
    </Surface>
  );
};

export default withTheme(DrawerBlock);
