import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { AccordionGroup, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const Pr2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      {...GlobalStyles.ViewStyles(theme)['accordion'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ViewStyles(theme)['accordion'].style, {
          alignSelf: 'stretch',
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
        label={'Payment details'}
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
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Paid */}
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
            {'Amount paid'}
          </Text>
          {/* Bill amount */}
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
          {/* Paid on */}
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
            {'Paid on'}
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
            {'12-05-2023 | 12:12 AM'}
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
          {/* Payment mode */}
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
            {'Payment mode'}
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
            {'Online'}
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
          {/* Payment type */}
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
            {'Payment type'}
          </Text>
          {/* UPI */}
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
            {'UPI'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors['Divider'],
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Permanent receipt number */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'flex-start',
                color: theme.colors.strong,
                fontFamily: 'Roboto_500Medium',
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Permanent receipt number\nxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
          </Text>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors['Divider'],
              borderTopWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* Transaction ID */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'flex-start',
                color: theme.colors.strong,
                fontFamily: 'Roboto_500Medium',
                opacity: 0.8,
              },
              dimensions.width
            )}
          >
            {'Transaction ID\nxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
          </Text>
        </View>
      </AccordionGroup>
    </View>
  );
};

export default withTheme(Pr2Block);
