import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import * as GlobalVariables from './config/GlobalVariableContext';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

import AddTicketProcessGuestScreen from './screens/AddTicketProcessGuestScreen';
import AdvancePayemntConfirmationScreen from './screens/AdvancePayemntConfirmationScreen';
import AdvancePayemntScreen from './screens/AdvancePayemntScreen';
import BillingScreen from './screens/BillingScreen';
import CardsScreen from './screens/CardsScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import ChangePasswordSuccessGuestScreen from './screens/ChangePasswordSuccessGuestScreen';
import ChangePasswordSuccessScreen from './screens/ChangePasswordSuccessScreen';
import CheckTicketStatusScreen from './screens/CheckTicketStatusScreen';
import CheckTicketStatusforGuestScreen from './screens/CheckTicketStatusforGuestScreen';
import ConfirmOTPAddNewServiceConnectionScreen from './screens/ConfirmOTPAddNewServiceConnectionScreen';
import ConfirmOTPAddTicketprocessScreen from './screens/ConfirmOTPAddTicketprocessScreen';
import ConfirmOTPEmailUpdateScreen from './screens/ConfirmOTPEmailUpdateScreen';
import ConfirmOTPForgotpasswordScreen from './screens/ConfirmOTPForgotpasswordScreen';
import ConfirmOTPLoginScreen from './screens/ConfirmOTPLoginScreen';
import ConfirmOTPPhonenumberupdateScreen from './screens/ConfirmOTPPhonenumberupdateScreen';
import ContactUsGuestScreen from './screens/ContactUsGuestScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import DashboardScreen from './screens/DashboardScreen';
import DeleteServiceConnectionScreen from './screens/DeleteServiceConnectionScreen';
import DownloadGuestScreen from './screens/DownloadGuestScreen';
import DownloadsScreen from './screens/DownloadsScreen';
import EmailChnagedSuccessScreen from './screens/EmailChnagedSuccessScreen';
import EnergyTipsGuestScreen from './screens/EnergyTipsGuestScreen';
import EnergyTipsScreen from './screens/EnergyTipsScreen';
import FAQGuestScreen from './screens/FAQGuestScreen';
import FAQScreen from './screens/FAQScreen';
import FeedbackGuestScreen from './screens/FeedbackGuestScreen';
import FeedbackGuestSuccessScreen from './screens/FeedbackGuestSuccessScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import FeedbackSuccessScreen from './screens/FeedbackSuccessScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import LoadQualityScreen from './screens/LoadQualityScreen';
import LoginOTPScreen from './screens/LoginOTPScreen';
import LoginScreen from './screens/LoginScreen';
import MakePaymentGuestScreen from './screens/MakePaymentGuestScreen';
import MakePaymentMisPScreen from './screens/MakePaymentMisPScreen';
import MakePaymentScreen from './screens/MakePaymentScreen';
import ManageAccountScreen from './screens/ManageAccountScreen';
import ManageregFlowTwoScreen from './screens/ManageregFlowTwoScreen';
import ManageregFlowTwoyyScreen from './screens/ManageregFlowTwoyyScreen';
import MiscellaneousMPScreen from './screens/MiscellaneousMPScreen';
import MiscellaneousPaymentScreen from './screens/MiscellaneousPaymentScreen';
import ModelScreen from './screens/ModelScreen';
import NSCRegistrationGuestScreen from './screens/NSCRegistrationGuestScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OutageScheduleScreen from './screens/OutageScheduleScreen';
import PaymentConfirmationGuestScreen from './screens/PaymentConfirmationGuestScreen';
import PaymentConfirmationScreen from './screens/PaymentConfirmationScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import PhoneNumberSuccessScreen from './screens/PhoneNumberSuccessScreen';
import PresentReadingScreen from './screens/PresentReadingScreen';
import PrivacyPolicyGuestScreen from './screens/PrivacyPolicyGuestScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import ProfileOptionsScreen from './screens/ProfileOptionsScreen';
import QAScreen from './screens/QAScreen';
import QuickPayScreen from './screens/QuickPayScreen';
import RaiseTicketGuestScreen from './screens/RaiseTicketGuestScreen';
import RaiseTicketGuestSuccessScreen from './screens/RaiseTicketGuestSuccessScreen';
import RaiseTicketScreen from './screens/RaiseTicketScreen';
import RaiseTicketSuccessScreen from './screens/RaiseTicketSuccessScreen';
import ReceiptGuestScreen from './screens/ReceiptGuestScreen';
import ReceiptScreen from './screens/ReceiptScreen';
import RechargeConfirmationGuestScreen from './screens/RechargeConfirmationGuestScreen';
import RechargeConfirmationScreen from './screens/RechargeConfirmationScreen';
import RechargeGuestScreen from './screens/RechargeGuestScreen';
import RechargeScreen from './screens/RechargeScreen';
import RegFlowOneScreen from './screens/RegFlowOneScreen';
import RegisterScreen from './screens/RegisterScreen';
import RegisterSuccessScreen from './screens/RegisterSuccessScreen';
import RegistrationOTPSubmitScreen from './screens/RegistrationOTPSubmitScreen';
import RemarksGuestSuccessScreen from './screens/RemarksGuestSuccessScreen';
import RemarksSuccessScreen from './screens/RemarksSuccessScreen';
import ServiceConnectionDetailsScreen from './screens/ServiceConnectionDetailsScreen';
import ServiceRequestScreen from './screens/ServiceRequestScreen';
import UpdateEmailScreen from './screens/UpdateEmailScreen';
import UpdateNewPasswordScreen from './screens/UpdateNewPasswordScreen';
import UpdatePhoneandEmailScreen from './screens/UpdatePhoneandEmailScreen';
import UpdatePhonenumberScreen from './screens/UpdatePhonenumberScreen';
import UsageScreen from './screens/UsageScreen';
import ViewBillGuestScreen from './screens/ViewBillGuestScreen';
import ViewBillScreen from './screens/ViewBillScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

export default function RootAppNavigator() {
  const Constants = GlobalVariables.useValues();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FBFCFD',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={({ navigation }) => ({
          cardOverlayEnabled: false,
          cardStyle: { backgroundColor: theme.colors['Custom #5f5a53'] },
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerMode: 'none',
          headerShown: false,
          headerTitleStyle: theme.typography.custom14,
        })}
      >
        <Stack.Screen
          name="UpdatePhonenumberScreen"
          component={UpdatePhonenumberScreen}
          options={({ navigation }) => ({
            title: 'Update Phone number',
          })}
        />
        <Stack.Screen
          name="BillingScreen"
          component={BillingScreen}
          options={({ navigation }) => ({
            title: 'Billing',
          })}
        />
        <Stack.Screen
          name="PaymentsScreen"
          component={PaymentsScreen}
          options={({ navigation }) => ({
            title: 'Payments',
          })}
        />
        <Stack.Screen
          name="ProfileOptionsScreen"
          component={ProfileOptionsScreen}
          options={({ navigation }) => ({
            title: 'Profile Options',
          })}
        />
        <Stack.Screen
          name="CheckTicketStatusScreen"
          component={CheckTicketStatusScreen}
          options={({ navigation }) => ({
            title: 'Check Ticket Status',
          })}
        />
        <Stack.Screen
          name="NSCRegistrationGuestScreen"
          component={NSCRegistrationGuestScreen}
          options={({ navigation }) => ({
            title: 'NSC Registration Guest',
          })}
        />
        <Stack.Screen
          name="UsageScreen"
          component={UsageScreen}
          options={({ navigation }) => ({
            title: 'Usage',
          })}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={({ navigation }) => ({
            title: 'Dashboard',
          })}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation }) => ({
            title: 'Login',
          })}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={({ navigation }) => ({
            title: 'Welcome',
          })}
        />
        <Stack.Screen
          name="RechargeGuestScreen"
          component={RechargeGuestScreen}
          options={({ navigation }) => ({
            title: 'Recharge Guest',
          })}
        />
        <Stack.Screen
          name="ConfirmOTPLoginScreen"
          component={ConfirmOTPLoginScreen}
          options={({ navigation }) => ({
            title: 'Confirm OTP Login',
          })}
        />
        <Stack.Screen
          name="RegistrationOTPSubmitScreen"
          component={RegistrationOTPSubmitScreen}
          options={({ navigation }) => ({
            title: 'Registration OTP Submit',
          })}
        />
        <Stack.Screen
          name="ConfirmOTPAddTicketprocessScreen"
          component={ConfirmOTPAddTicketprocessScreen}
          options={({ navigation }) => ({
            title: 'Confirm OTP  Add Ticket process',
          })}
        />
        <Stack.Screen
          name="ConfirmOTPAddNewServiceConnectionScreen"
          component={ConfirmOTPAddNewServiceConnectionScreen}
          options={({ navigation }) => ({
            title: 'Confirm OTP  Add New Service Connection',
          })}
        />
        <Stack.Screen
          name="AdvancePayemntScreen"
          component={AdvancePayemntScreen}
          options={({ navigation }) => ({
            title: 'Advance Payemnt',
          })}
        />
        <Stack.Screen
          name="ConfirmOTPForgotpasswordScreen"
          component={ConfirmOTPForgotpasswordScreen}
          options={({ navigation }) => ({
            title: 'Confirm OTP  Forgot password',
          })}
        />
        <Stack.Screen
          name="RechargeScreen"
          component={RechargeScreen}
          options={({ navigation }) => ({
            title: 'Recharge',
          })}
        />
        <Stack.Screen
          name="MiscellaneousPaymentScreen"
          component={MiscellaneousPaymentScreen}
          options={({ navigation }) => ({
            title: 'Miscellaneous  Payment',
          })}
        />
        <Stack.Screen
          name="UpdatePhoneandEmailScreen"
          component={UpdatePhoneandEmailScreen}
          options={({ navigation }) => ({
            title: 'Update Phone and Email',
          })}
        />
        <Stack.Screen
          name="QuickPayScreen"
          component={QuickPayScreen}
          options={({ navigation }) => ({
            title: 'Quick Pay',
          })}
        />
        <Stack.Screen
          name="MakePaymentMisPScreen"
          component={MakePaymentMisPScreen}
          options={({ navigation }) => ({
            title: 'Make Payment MisP',
          })}
        />
        <Stack.Screen
          name="MakePaymentScreen"
          component={MakePaymentScreen}
          options={({ navigation }) => ({
            title: 'Make Payment',
          })}
        />
        <Stack.Screen
          name="MakePaymentGuestScreen"
          component={MakePaymentGuestScreen}
          options={({ navigation }) => ({
            title: 'Make Payment Guest',
          })}
        />
        <Stack.Screen
          name="ConfirmOTPEmailUpdateScreen"
          component={ConfirmOTPEmailUpdateScreen}
          options={({ navigation }) => ({
            title: 'Confirm OTP Email Update',
          })}
        />
        <Stack.Screen
          name="ServiceRequestScreen"
          component={ServiceRequestScreen}
          options={({ navigation }) => ({
            title: 'Service request',
          })}
        />
        <Stack.Screen
          name="ConfirmOTPPhonenumberupdateScreen"
          component={ConfirmOTPPhonenumberupdateScreen}
          options={({ navigation }) => ({
            title: 'Confirm OTP Phone number update',
          })}
        />
        <Stack.Screen
          name="RaiseTicketGuestScreen"
          component={RaiseTicketGuestScreen}
          options={({ navigation }) => ({
            title: 'Raise Ticket Guest',
          })}
        />
        <Stack.Screen
          name="RegFlowOneScreen"
          component={RegFlowOneScreen}
          options={({ navigation }) => ({
            title: 'RegFlowOne',
          })}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={({ navigation }) => ({
            title: 'Register',
          })}
        />
        <Stack.Screen
          name="LoginOTPScreen"
          component={LoginOTPScreen}
          options={({ navigation }) => ({
            title: 'Login OTP',
          })}
        />
        <Stack.Screen
          name="FeedbackGuestScreen"
          component={FeedbackGuestScreen}
          options={({ navigation }) => ({
            title: 'Feedback Guest',
          })}
        />
        <Stack.Screen
          name="AddTicketProcessGuestScreen"
          component={AddTicketProcessGuestScreen}
          options={({ navigation }) => ({
            title: 'Add Ticket Process Guest',
          })}
        />
        <Stack.Screen
          name="ManageregFlowTwoyyScreen"
          component={ManageregFlowTwoyyScreen}
          options={({ navigation }) => ({
            title: 'ManageregFlowTwoyy',
          })}
        />
        <Stack.Screen
          name="DeleteServiceConnectionScreen"
          component={DeleteServiceConnectionScreen}
          options={({ navigation }) => ({
            title: 'Delete Service Connection',
          })}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={({ navigation }) => ({
            title: 'Change Password',
          })}
        />
        <Stack.Screen
          name="UpdateNewPasswordScreen"
          component={UpdateNewPasswordScreen}
          options={({ navigation }) => ({
            title: 'Update New Password',
          })}
        />
        <Stack.Screen
          name="ManageregFlowTwoScreen"
          component={ManageregFlowTwoScreen}
          options={({ navigation }) => ({
            title: 'ManageregFlowTwo',
          })}
        />
        <Stack.Screen
          name="ForgotpasswordScreen"
          component={ForgotpasswordScreen}
          options={({ navigation }) => ({
            title: 'Forgot password',
          })}
        />
        <Stack.Screen
          name="RaiseTicketScreen"
          component={RaiseTicketScreen}
          options={({ navigation }) => ({
            title: 'Raise Ticket',
          })}
        />
        <Stack.Screen
          name="UpdateEmailScreen"
          component={UpdateEmailScreen}
          options={({ navigation }) => ({
            title: 'Update Email',
          })}
        />
        <Stack.Screen
          name="ViewBillScreen"
          component={ViewBillScreen}
          options={({ navigation }) => ({
            title: 'View Bill ',
          })}
        />
        <Stack.Screen
          name="LoadQualityScreen"
          component={LoadQualityScreen}
          options={({ navigation }) => ({
            title: 'Load & Quality',
          })}
        />
        <Stack.Screen
          name="MiscellaneousMPScreen"
          component={MiscellaneousMPScreen}
          options={({ navigation }) => ({
            title: 'Miscellaneous  MP',
          })}
        />
        <Stack.Screen
          name="PresentReadingScreen"
          component={PresentReadingScreen}
          options={({ navigation }) => ({
            title: 'Present Reading',
          })}
        />
        <Stack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={({ navigation }) => ({
            title: 'Feedback',
          })}
        />
        <Stack.Screen
          name="CheckTicketStatusforGuestScreen"
          component={CheckTicketStatusforGuestScreen}
          options={({ navigation }) => ({
            title: 'Check Ticket Status for Guest',
          })}
        />
        <Stack.Screen
          name="ServiceConnectionDetailsScreen"
          component={ServiceConnectionDetailsScreen}
          options={({ navigation }) => ({
            title: 'Service Connection Details',
          })}
        />
        <Stack.Screen
          name="CardsScreen"
          component={CardsScreen}
          options={({ navigation }) => ({
            title: 'Cards',
          })}
        />
        <Stack.Screen
          name="ManageAccountScreen"
          component={ManageAccountScreen}
          options={({ navigation }) => ({
            title: 'Manage Account',
          })}
        />
        <Stack.Screen
          name="DownloadsScreen"
          component={DownloadsScreen}
          options={({ navigation }) => ({
            title: 'Downloads',
          })}
        />
        <Stack.Screen
          name="DownloadGuestScreen"
          component={DownloadGuestScreen}
          options={({ navigation }) => ({
            title: 'Download Guest',
          })}
        />
        <Stack.Screen
          name="OutageScheduleScreen"
          component={OutageScheduleScreen}
          options={({ navigation }) => ({
            title: 'Outage Schedule',
          })}
        />
        <Stack.Screen
          name="ViewBillGuestScreen"
          component={ViewBillGuestScreen}
          options={({ navigation }) => ({
            title: 'View Bill Guest',
          })}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={({ navigation }) => ({
            title: 'Notifications',
          })}
        />
        <Stack.Screen
          name="EnergyTipsGuestScreen"
          component={EnergyTipsGuestScreen}
          options={({ navigation }) => ({
            title: 'Energy Tips Guest',
          })}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
          options={({ navigation }) => ({
            title: 'Privacy Policy',
          })}
        />
        <Stack.Screen
          name="PrivacyPolicyGuestScreen"
          component={PrivacyPolicyGuestScreen}
          options={({ navigation }) => ({
            title: 'Privacy  Policy Guest',
          })}
        />
        <Stack.Screen
          name="ModelScreen"
          component={ModelScreen}
          options={({ navigation }) => ({
            title: 'Model',
          })}
        />
        <Stack.Screen
          name="ContactUsGuestScreen"
          component={ContactUsGuestScreen}
          options={({ navigation }) => ({
            title: 'Contact Us Guest',
          })}
        />
        <Stack.Screen
          name="ContactUsScreen"
          component={ContactUsScreen}
          options={({ navigation }) => ({
            title: 'Contact Us',
          })}
        />
        <Stack.Screen
          name="EnergyTipsScreen"
          component={EnergyTipsScreen}
          options={({ navigation }) => ({
            title: 'Energy Tips',
          })}
        />
        <Stack.Screen
          name="FAQGuestScreen"
          component={FAQGuestScreen}
          options={({ navigation }) => ({
            title: 'FAQ Guest',
          })}
        />
        <Stack.Screen
          name="FAQScreen"
          component={FAQScreen}
          options={({ navigation }) => ({
            title: 'FAQ',
          })}
        />
        <Stack.Screen
          name="PhoneNumberSuccessScreen"
          component={PhoneNumberSuccessScreen}
          options={({ navigation }) => ({
            title: 'Phone number Success ',
          })}
        />
        <Stack.Screen
          name="EmailChnagedSuccessScreen"
          component={EmailChnagedSuccessScreen}
          options={({ navigation }) => ({
            title: 'Email chnaged  Success ',
          })}
        />
        <Stack.Screen
          name="RaiseTicketSuccessScreen"
          component={RaiseTicketSuccessScreen}
          options={({ navigation }) => ({
            title: 'Raise Ticket Success',
          })}
        />
        <Stack.Screen
          name="RaiseTicketGuestSuccessScreen"
          component={RaiseTicketGuestSuccessScreen}
          options={({ navigation }) => ({
            title: 'Raise Ticket Guest Success',
          })}
        />
        <Stack.Screen
          name="AdvancePayemntConfirmationScreen"
          component={AdvancePayemntConfirmationScreen}
          options={({ navigation }) => ({
            title: 'Advance Payemnt Confirmation',
          })}
        />
        <Stack.Screen
          name="FeedbackSuccessScreen"
          component={FeedbackSuccessScreen}
          options={({ navigation }) => ({
            title: 'Feedback Success',
          })}
        />
        <Stack.Screen
          name="RechargeConfirmationScreen"
          component={RechargeConfirmationScreen}
          options={({ navigation }) => ({
            title: 'Recharge Confirmation ',
          })}
        />
        <Stack.Screen
          name="PaymentConfirmationGuestScreen"
          component={PaymentConfirmationGuestScreen}
          options={({ navigation }) => ({
            title: 'Payment Confirmation Guest',
          })}
        />
        <Stack.Screen
          name="PaymentConfirmationScreen"
          component={PaymentConfirmationScreen}
          options={({ navigation }) => ({
            title: 'Payment Confirmation',
          })}
        />
        <Stack.Screen
          name="RechargeConfirmationGuestScreen"
          component={RechargeConfirmationGuestScreen}
          options={({ navigation }) => ({
            title: 'Recharge Confirmation  Guest',
          })}
        />
        <Stack.Screen
          name="ReceiptScreen"
          component={ReceiptScreen}
          options={({ navigation }) => ({
            title: 'Receipt',
          })}
        />
        <Stack.Screen
          name="FeedbackGuestSuccessScreen"
          component={FeedbackGuestSuccessScreen}
          options={({ navigation }) => ({
            title: 'Feedback Guest Success',
          })}
        />
        <Stack.Screen
          name="ReceiptGuestScreen"
          component={ReceiptGuestScreen}
          options={({ navigation }) => ({
            title: 'Receipt Guest',
          })}
        />
        <Stack.Screen
          name="RemarksGuestSuccessScreen"
          component={RemarksGuestSuccessScreen}
          options={({ navigation }) => ({
            title: 'Remarks Guest Success',
          })}
        />
        <Stack.Screen
          name="QAScreen"
          component={QAScreen}
          options={({ navigation }) => ({
            title: 'QA',
          })}
        />
        <Stack.Screen
          name="ChangePasswordSuccessGuestScreen"
          component={ChangePasswordSuccessGuestScreen}
          options={({ navigation }) => ({
            title: 'Change Password Success Guest',
          })}
        />
        <Stack.Screen
          name="RemarksSuccessScreen"
          component={RemarksSuccessScreen}
          options={({ navigation }) => ({
            title: 'Remarks Success',
          })}
        />
        <Stack.Screen
          name="RegisterSuccessScreen"
          component={RegisterSuccessScreen}
          options={({ navigation }) => ({
            title: 'Register Success',
          })}
        />
        <Stack.Screen
          name="ChangePasswordSuccessScreen"
          component={ChangePasswordSuccessScreen}
          options={({ navigation }) => ({
            title: 'Change Password Success',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
