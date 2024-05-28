import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { AccordionGroup, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const P2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['accordion'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['accordion'].style, {
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 3,
          paddingLeft: 8,
          paddingRight: 8,
          paddingTop: 3,
        }),
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
  );
};

export default withTheme(P2Block);
