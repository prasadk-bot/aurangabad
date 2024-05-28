import React from 'react';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { CircleImage, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Details2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        },
        dimensions.width
      )}
    >
      {/* Name */}
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, marginTop: 16 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.viewBG,
              height: 40,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 14,
                paddingLeft: 16,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'name'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 40,
              marginBottom: 10,
              marginTop: 10,
              paddingBottom: 5,
              paddingLeft: 16,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <CircleImage size={24} source={Images.User} />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                paddingLeft: 8,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'riead'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 40,
              marginBottom: 10,
              paddingBottom: 5,
              paddingLeft: 16,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <CircleImage size={24} source={Images.User} />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                paddingLeft: 8,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'brandon'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 40,
              marginBottom: 10,
              paddingBottom: 5,
              paddingLeft: 16,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <CircleImage size={24} source={Images.User} />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                paddingLeft: 8,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'jeremy'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 40,
              marginBottom: 10,
              paddingBottom: 5,
              paddingLeft: 16,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <CircleImage size={24} source={Images.User} />
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                paddingLeft: 8,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'leonard'}
          </Text>
        </View>
      </View>
      {/* Quantity */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 16, width: '33%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors.viewBG,
              height: 40,
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 14,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Quantity'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 40,
              justifyContent: 'center',
              marginBottom: 10,
              marginTop: 10,
              paddingBottom: 5,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'25'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 40,
              justifyContent: 'center',
              marginBottom: 10,
              paddingBottom: 5,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'135'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 40,
              justifyContent: 'center',
              marginBottom: 10,
              paddingBottom: 5,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'360'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              height: 40,
              justifyContent: 'center',
              marginBottom: 10,
              paddingBottom: 5,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'50'}
          </Text>
        </View>
      </View>
      {/* Amount */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 16, width: '33%' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              backgroundColor: theme.colors.viewBG,
              height: 40,
              justifyContent: 'center',
              paddingRight: 25,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 14,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'Amount'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              height: 40,
              justifyContent: 'center',
              marginBottom: 10,
              marginTop: 10,
              paddingBottom: 5,
              paddingRight: 25,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'50'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              height: 40,
              justifyContent: 'center',
              marginBottom: 10,
              paddingBottom: 5,
              paddingRight: 25,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'155'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              height: 40,
              justifyContent: 'center',
              marginBottom: 10,
              paddingBottom: 5,
              paddingRight: 25,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'1203'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              height: 40,
              justifyContent: 'center',
              marginBottom: 10,
              paddingBottom: 5,
              paddingRight: 25,
              paddingTop: 5,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontSize: 15,
                textTransform: 'capitalize',
              },
              dimensions.width
            )}
          >
            {'120'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(Details2Block);
