import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { AccordionGroup, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const AccordionBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom #ffffff'],
          borderBottomWidth: 1,
          borderColor: theme.colors['Divider'],
          borderLeftWidth: 1,
          borderRadius: 20,
          borderRightWidth: 1,
          borderTopWidth: 1,
          marginBottom: 18,
          marginTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 10,
        },
        dimensions.width
      )}
    >
      <AccordionGroup
        caretSize={24}
        iconSize={24}
        expanded={true}
        label={'What is Streamo?'}
        style={StyleSheet.applyWidth(
          {
            color: theme.colors['Strong'],
            fontFamily: 'Inter_600SemiBold',
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
              paddingTop: 10,
            },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_400Regular',
                lineHeight: 20,
                paddingBottom: 10,
              },
              dimensions.width
            )}
          >
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          </Text>
        </View>
      </AccordionGroup>
    </View>
  );
};

export default withTheme(AccordionBlock);
