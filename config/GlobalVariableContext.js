import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeviceVariables = {
  exi_acc: 'some exi_acc',
  LANGUAGE: 'en',
  new_acc: 'some new_acc',
  OTP_ACK_NUMBER: {},
  OTP_SERVICE_NUMBER: 'some OTP_SERVICE_NUMBER',
  passac: 'Account number',
  __env__: 'Development',
};
export const AppVariables = {
  accountno: '',
  'BD CateogryPicker': '',
  category: '',
  connectedLoad: '',
  consumerNo: '',
  consumerScNo: '',
  contractedLoad: '',
  data: '',
  email: '',
  emailValue: '',
  en: {
    OK: 'OK',
    FAQ: 'FAQ',
    UPI: 'UPI',
    Date: 'Date',
    Edit: 'Edit',
    Exit: 'Exit',
    Home: 'Home',
    Name: 'Name',
    View: 'View',
    '7Days': '7Days',
    Chart: 'Chart',
    Close: 'Close',
    Daily: 'Daily',
    Email: 'Email',
    Login: 'Login',
    Print: 'Print',
    Table: 'Table',
    Usage: 'Usage',
    '15Days': '15Days',
    '30Days': '30Days',
    Amount: 'Amount',
    Logout: 'Logout',
    Mobile: 'Mobile',
    Office: 'Office',
    Online: 'Online',
    Search: 'Search',
    Submit: 'Submit',
    Address: 'Address',
    Arrears: 'Arrears',
    Billing: 'Billing',
    Current: 'Current',
    Monthly: 'Monthly',
    'Paid on': 'Paid on',
    'Pay Now': 'Pay Now',
    Prepaid: 'Prepaid',
    Remarks: 'Remarks',
    Subject: 'Subject',
    Support: 'Support',
    Voltage: 'Voltage',
    'Bill Day': 'Bill Day',
    Category: 'Category',
    Continue: 'Continue',
    Division: 'Division',
    'Due date': 'Due date',
    Feedback: 'Feedback',
    Password: 'Password',
    Payments: 'Payments',
    Postpaid: 'Postpaid',
    Recharge: 'Recharge',
    Register: 'Register',
    'Bill date': 'Bill date',
    Complaint: 'Complaint',
    Downloads: 'Downloads',
    'New Email': 'New Email',
    'Old Email': 'Old Email',
    'Quick Pay': 'Quick Pay',
    'User name': 'User name',
    'View Bill': 'View Bill',
    'Account No': 'Account No',
    'Amount due': 'Amount due',
    'Bill Month': 'Bill Month',
    'Bill month': 'Bill month',
    'Contact Us': 'Contact Us',
    'My Details': 'My Details',
    'Resend OTP': 'Resend OTP',
    'Units(Kwh)': 'Units(Kwh)',
    'All Tickets': 'All Tickets',
    'Amount paid': 'Amount paid',
    'Bill Amount': 'Bill Amount',
    'Bill number': 'Bill number',
    'Charge List': 'Charge List',
    'Confirm OTP': 'Confirm OTP',
    Description: 'Description',
    'Energy Tips': 'Energy Tips',
    'Back to Home': 'Back to Home',
    'Bill Payment': 'Bill Payment',
    'Bill details': 'Bill details',
    'Load Pattern': 'Load Pattern',
    'Make Payment': 'Make Payment',
    'New password': 'New password',
    'Old password': 'Old password',
    'Open Tickets': 'Open Tickets',
    'Payment mode': 'Payment mode',
    'Payment type': 'Payment type',
    'Power Factor': 'Power Factor',
    'Raise Ticket': 'Raise Ticket',
    'Recharge Now': 'Recharge Now',
    'Request Name': 'Request Name',
    'Request Type': 'Request Type',
    'Total Amount': 'Total Amount',
    'Update Email': 'Update Email',
    'Utility Name': 'Utility Name',
    'View Details': 'View Details',
    'View Receipt': 'View Receipt',
    'Enter details': 'Enter details',
    'Invalid email': 'Invalid email',
    'Ledger Amount': 'Ledger Amount',
    Notifications: 'Notifications',
    'Power Quality': 'Power Quality',
    'Rebate amount': 'Rebate amount',
    'Send Feedback': 'Send Feedback',
    'Account Number': 'Account Number',
    'Complaint Type': 'Complaint Type',
    'Confirm Delete': 'Confirm Delete',
    'Load & Quality': 'Load & Quality',
    'Load Reduction': 'Load Reduction',
    'Login with OTP': 'Login with OTP',
    'Manage Account': 'Manage Account',
    'New Connection': 'New Connection',
    'Privacy Policy': 'Privacy Policy',
    'Request Nature': 'Request Nature',
    'Transaction ID': 'Transaction ID',
    'Account Summary': 'Account Summary',
    'Billing History': 'Billing History',
    'Change password': 'Change password',
    'Consumer number': 'Consumer number',
    'Contracted load': 'Contracted load',
    'Current Reading': 'Current Reading',
    'Forgot password': 'Forgot password',
    'Last updated on': 'Last updated on',
    'Otp is required': 'Otp is required',
    'Payment History': 'Payment History',
    'Payment Receipt': 'Payment Receipt',
    'Payment details': 'Payment details',
    'Raise Complaint': 'Raise Complaint',
    'Recharge Amount': 'Recharge Amount',
    'Select Language': 'Select Language',
    'Service Request': 'Service Request',
    "Today's Reading": "Today's Reading",
    'Update Password': 'Update Password',
    'Voltage Reading': 'Voltage Reading',
    'Available Amount': 'Available Amount',
    'Complaint Nature': 'Complaint Nature',
    'Confirm password': 'Confirm password',
    'Forgot password?': 'Forgot password?',
    'Load Enhancement': 'Load Enhancement',
    'Load and Quality': 'Load and Quality',
    'NSC Registration': 'NSC Registration',
    'Recharge History': 'Recharge History',
    'Available balance': 'Available balance',
    'Email is required': 'Email is required',
    'Enter Consumer No': 'Enter Consumer No',
    'New Mobile Number': 'New Mobile Number',
    'Old Mobile Number': 'Old Mobile Number',
    'Sub Category Name': 'Sub Category Name',
    'Amount is required': 'Amount is required',
    'Net payable amount': 'Net payable amount',
    'Add Account Process': 'Add Account Process',
    'Advance Payment Now': 'Advance Payment Now',
    'Check Ticket Status': 'Check Ticket Status',
    'Consumer Mobile App': 'Consumer Mobile App',
    'Ref Registration No': 'Ref Registration No',
    'Subject is required': 'Subject is required',
    'Update Phone Number': 'Update Phone Number',
    'Parent Category Name': 'Parent Category Name',
    'Password is required': 'Password is required',
    'Recharge successful.': 'Recharge successful.',
    'Registration Process': 'Registration Process',
    'Username is required': 'Username is required',
    'Utility Self Service': 'Utility Self Service',
    'Login to Your Account': 'Login to Your Account',
    'Miscellaneous Payment': 'Miscellaneous Payment',
    'New Email is required': 'New Email is required',
    'Old Email is required': 'Old Email is required',
    'Powered by Fluentgrid': 'Powered by Fluentgrid',
    'Select Payment Method': 'Select Payment Method',
    'Service connection No': 'Service connection No',
    'Add Service Connection': 'Add Service Connection',
    'New Application Status': 'New Application Status',
    'New Connection Request': 'New Connection Request',
    'Primary Account Number': 'Primary Account Number',
    'Remarks does not exist': 'Remarks does not exist',
    'Account/Consumer number': 'Account/Consumer number',
    'Registration Successful': 'Registration Successful',
    'Show My Present Reading': 'Show My Present Reading',
    'Bihar Vidyut Smart Meter': 'Bihar Vidyut Smart Meter',
    'Bill payment successful.': 'Bill payment successful.',
    'Confirm OTP Raise Ticket': 'Confirm OTP Raise Ticket',
    'Don’t have an account?': 'Don’t have an account?',
    'Enter Service Connection': 'Enter Service Connection',
    'Permanent receipt number': 'Permanent receipt number',
    'View Application Payment': 'View Application Payment',
    'Delete Service Connection': 'Delete Service Connection',
    'Mobile number is required': 'Mobile number is required',
    'Please enter old password': 'Please enter old password',
    'Service connection number': 'Service connection number',
    'Email Changed Successfully': 'Email Changed Successfully',
    'Advanced payment successful.': 'Advanced payment successful.',
    'Confirm password is required': 'Confirm password is required',
    'Enter 10 digit mobile number': 'Enter 10 digit mobile number',
    'Password Changed Successfully': 'Password Changed Successfully',
    'Incorrect OTP. Please try again': 'Incorrect OTP. Please try again',
    'Enter Miscellaneous Reference No': 'Enter Miscellaneous Reference No',
    'Phone Number Changed Successfully': 'Phone Number Changed Successfully',
    'Please leave your feedback here...': 'Please leave your feedback here...',
    'Account / consumer number is required':
      'Account / consumer number is required',
    'Invalid mobile number(ex: 987XXXX789)':
      'Invalid mobile number(ex: 987XXXX789)',
    'Service connection number is required':
      'Service connection number is required',
    'Please enter service connection number':
      'Please enter service connection number',
    'Select the account number and continue':
      'Select the account number and continue',
    'Old Email And New Email should not be same':
      'Old Email And New Email should not be same',
    'Password and Confirm Password do not match':
      'Password and Confirm Password do not match',
    'Password and Confirm Password did not match':
      'Password and Confirm Password did not match',
    'Utility defined privacy policy to be updated':
      'Utility defined privacy policy to be updated',
    'Old Phone Number and New Phone Number not same':
      'Old Phone Number and New Phone Number not same',
    'Check the OTP sent to your registered phone number':
      'Check the OTP sent to your registered phone number',
    'Check the OTP sent to your registered Email Address':
      'Check the OTP sent to your registered Email Address',
    'Selected/EnteredAccount/SC Number Permanently Closed':
      'Selected/EnteredAccount/SC Number Permanently Closed',
    'Selected/EnteredAccount/SC Number Permanently Disconnected':
      'Selected/EnteredAccount/SC Number Permanently Disconnected',
    'Check the OTP sent to your registered phone number and email address':
      'Check the OTP sent to your registered phone number and email address',
    'Please enter your 12 digits Account No: provided in bill to View/Pay bill':
      'Please enter your 12 digits Account No: provided in bill to View/Pay bill',
    'Please enter your Miscellaneous Reference No: provided in Acknowledgement':
      'Please enter your Miscellaneous Reference No: provided in Acknowledgement',
    'Password must be at least characters one upper case one lower case, one digit, one special character.':
      'Password must be at least characters one upper case one lower case, one digit, one special character.',
  },
  ERROR_MESSAGE: '',
  hi: {
    OK: 'ठीक है',
    FAQ: 'सामान्य प्रश्न',
    UPI: 'है मैं',
    Date: 'तारीख',
    Edit: 'संपादन करना',
    Exit: 'बाहर निकलना',
    Home: 'घर',
    Name: 'नाम',
    View: 'देखना',
    '7Days': '7 दिन',
    Chart: 'चार्ट',
    Close: 'बंद करना',
    Daily: 'दैनिक',
    Email: 'ईमेल',
    Login: 'लॉग इन करें',
    Print: 'छाप',
    Table: 'मेज़',
    Usage: 'प्रयोग',
    '15Days': '15दिन',
    '30Days': '30दिन',
    Amount: 'मात्रा',
    Logout: 'लॉग आउट',
    Mobile: 'गतिमान',
    Office: 'कार्यालय',
    Online: 'ऑनलाइन',
    Search: 'खोज',
    Submit: 'जमा करना',
    Address: 'पता',
    Arrears: 'बकाया राशि',
    Billing: 'बिलिंग',
    Current: 'मौजूदा',
    Monthly: 'महीने के',
    'Paid on': 'भुगतान करना',
    'Pay Now': 'अब भुगतान करें',
    Prepaid: 'प्रीपेड',
    Remarks: 'टिप्पणी',
    Subject: 'विषय',
    Support: 'सहायता',
    Voltage: 'वोल्टेज',
    'Bill Day': 'बिल दिवस',
    Category: 'वर्ग',
    Continue: 'जारी रखना',
    Division: 'विभाजन',
    'Due date': 'नियत तारीख',
    Feedback: 'प्रतिक्रिया',
    Password: 'पासवर्ड',
    Payments: 'भुगतान',
    Postpaid: 'पोस्टपेड',
    Recharge: 'फिर से दाम लगाना',
    Register: 'पंजीकरण करवाना',
    'Bill date': 'बिल की तिथि',
    Complaint: 'शिकायत',
    Downloads: 'डाउनलोड',
    'New Email': 'नया ईमेल',
    'Old Email': 'पुराना ईमेल',
    'Quick Pay': 'त्वरित भुगतान',
    'User name': 'उपयोगकर्ता नाम',
    'View Bill': 'बिल देखें',
    'Account No': 'खाता नंबर',
    'Amount due': 'देय राशि',
    'Bill Month': 'बिल महीना',
    'Bill month': 'बिल महीना',
    'Contact Us': 'संपर्क करें',
    'My Details': 'मेरे विवरण',
    'Resend OTP': 'ओटीपी पुनः भेजें',
    'Units(Kwh)': 'इकाइयाँ(किलोवाट)',
    'All Tickets': 'सभी टिकट',
    'Amount paid': 'राशि का भुगतान',
    'Bill Amount': 'बिल राशि',
    'Bill number': 'बिल संख्या',
    'Charge List': 'आरोप सूची',
    'Confirm OTP': 'ओटीपी की पुष्टि करें',
    Description: 'विवरण',
    'Energy Tips': 'ऊर्जा युक्तियाँ',
    'Back to Home': 'घर वापिस जा रहा हूँ',
    'Bill Payment': 'बिल भुगतान',
    'Bill details': 'बिल विवरण',
    'Load Pattern': 'लोड पैटर्न',
    'Make Payment': 'भुगतान करें',
    'New password': 'नया पासवर्ड',
    'Old password': 'पुराना पासवर्ड',
    'Open Tickets': 'टिकट खोलें',
    'Payment mode': 'भुगतान का प्रकार',
    'Payment type': 'भुगतान प्रकार',
    'Power Factor': 'ऊर्जा घटक',
    'Raise Ticket': 'टिकट उठाओ',
    'Recharge Now': 'अभी रिचार्ज करें',
    'Request Name': 'नाम का अनुरोध करें',
    'Request Type': 'अनुरोध का प्रकार',
    'Total Amount': 'कुल राशि',
    'Update Email': 'ईमेल अपडेट करें',
    'Utility Name': 'उपयोगिता नाम',
    'View Details': 'विवरण देखें',
    'View Receipt': 'रसीद देखें',
    'Enter details': 'विवरण दर्ज करें',
    'Invalid email': 'अमान्य ईमेल',
    'Ledger Amount': 'बहीखाता राशि',
    Notifications: 'सूचनाएं',
    'Power Quality': 'बिजली की गुणवत्ता',
    'Rebate amount': 'छूट राशि',
    'Send Feedback': 'प्रतिक्रिया भेजें',
    'Account Number': 'खाता संख्या',
    'Complaint Type': 'शिकायत प्रकार',
    'Confirm Delete': 'हटाने की पुष्टि करें',
    'Load & Quality': 'लोड और गुणवत्ता',
    'Load Reduction': 'भार में कमी',
    'Login with OTP': 'ओटीपी से लॉगइन करें',
    'Manage Account': 'खाते का प्रबंधन करें',
    'New Connection': 'नया कनेक्शन',
    'Privacy Policy': 'गोपनीयता नीति',
    'Request Nature': 'प्रकृति से अनुरोध करें',
    'Transaction ID': 'लेन-देन आईडी',
    'Account Summary': 'खाते की सारांश',
    'Billing History': 'बिलिंग इतिहास',
    'Change password': 'पासवर्ड बदलें',
    'Consumer number': 'उपभोक्ता संख्या',
    'Contracted load': 'अनुबंधित भार',
    'Current Reading': 'वर्तमान वाचन',
    'Forgot password': 'पासवर्ड भूल गए',
    'Last updated on': 'अंतिम बार अद्यतन किया गया',
    'Otp is required': 'ओटीपी आवश्यक है',
    'Payment History': 'भुगतान इतिहास',
    'Payment Receipt': 'भुगतान रसीद',
    'Payment details': 'भुगतान विवरण',
    'Raise Complaint': 'शिकायत उठाएँ',
    'Recharge Amount': 'पुनर्भरण राशि',
    'Select Language': 'भाषा चुने',
    'Service Request': 'सेवा अनुरोध',
    "Today's Reading": 'आज का पाठ',
    'Update Password': 'पासवर्ड अपडेट करें',
    'Voltage Reading': 'वोल्टेज पढ़ना',
    'Available Amount': 'उपलब्ध राशि',
    'Complaint Nature': 'शिकायत का स्वभाव',
    'Confirm password': 'पासवर्ड की पुष्टि कीजिये',
    'Forgot password?': 'पासवर्ड भूल गए?',
    'Load Enhancement': 'भार वृद्धि',
    'Load and Quality': 'भार और गुणवत्ता',
    'NSC Registration': 'एनएससी पंजीकरण',
    'Recharge History': 'पुनर्भरण इतिहास',
    'Available balance': 'उपलब्ध शेष राशि',
    'Email is required': 'ईमेल की जरूरत है',
    'Enter Consumer No': 'उपभोक्ता संख्या दर्ज करें',
    'New Mobile Number': 'नया मोबाइल नंबर',
    'Old Mobile Number': 'पुराना मोबाइल नंबर',
    'Sub Category Name': 'उप श्रेणी का नाम',
    'Amount is required': 'राशि आवश्यक है',
    'Net payable amount': 'शुद्ध देय राशि',
    'Add Account Process': 'खाता प्रक्रिया जोड़ें',
    'Advance Payment Now': 'अभी अग्रिम भुगतान',
    'Check Ticket Status': 'टिकट की स्थिति जांचें',
    'Consumer Mobile App': 'उपभोक्ता मोबाइल ऐप',
    'Ref Registration No': 'संदर्भ पंजीकरण संख्या',
    'Subject is required': 'विषय आवश्यक है',
    'Update Phone Number': 'फ़ोन नंबर अपडेट करें',
    'Parent Category Name': 'मूल श्रेणी का नाम',
    'Password is required': 'पासवर्ड की आवश्यकता है',
    'Recharge successful.': 'रिचार्ज सफल.',
    'Registration Process': 'पंजीकरण की प्रक्रिया',
    'Username is required': 'उपयोगकर्ता नाम आवश्यक है',
    'Utility Self Service': 'उपयोगिता स्वयं सेवा',
    'Login to Your Account': 'अपने अकाउंट में लॉग इन करें',
    'Miscellaneous Payment': 'विविध भुगतान',
    'New Email is required': 'नया ईमेल आवश्यक है',
    'Old Email is required': 'पुराना ईमेल आवश्यक है',
    'Powered by Fluentgrid': 'फ्लुएंटग्रिड द्वारा संचालित',
    'Select Payment Method': 'भुगतान का तरीका चुनें',
    'Service connection No': 'सेवा कनेक्शन नं',
    'Add Service Connection': 'सेवा कनेक्शन जोड़ें',
    'New Application Status': 'नई आवेदन स्थिति',
    'New Connection Request': 'नया कनेक्शन अनुरोध',
    'Primary Account Number': 'प्राथमिक खाता संख्या',
    'Remarks does not exist': 'टिप्पणियाँ मौजूद नहीं है',
    'Account/Consumer number': 'खाता/उपभोक्ता संख्या',
    'Registration Successful': 'सफल पंजीकरण',
    'Show My Present Reading': 'मेरा वर्तमान पाठ दिखाएँ',
    'Bihar Vidyut Smart Meter': 'बिहार विद्युत स्मार्ट मीटर',
    'Bill payment successful.': 'बिल भुगतान सफल.',
    'Confirm OTP Raise Ticket': 'ओटीपी की पुष्टि करें टिकट बढ़ाएं',
    'Don’t have an account?': 'कोई खाता नहीं है?',
    'Enter Service Connection': 'सेवा कनेक्शन दर्ज करें',
    'Permanent receipt number': 'स्थायी रसीद संख्या',
    'View Application Payment': 'आवेदन भुगतान देखें',
    'Delete Service Connection': 'सेवा कनेक्शन हटाएँ',
    'Mobile number is required': 'मोबाइल नंबर आवश्यक है',
    'Please enter old password': 'कृपया पुराना पासवर्ड दर्ज करें',
    'Service connection number': 'सेवा कनेक्शन संख्या',
    'Email Changed Successfully': 'ईमेल सफलतापूर्वक बदला गया',
    'Advanced payment successful.': 'उन्नत भुगतान सफल.',
    'Confirm password is required': 'पुष्टि पासवर्ड आवश्यक है',
    'Enter 10 digit mobile number': '10 अंकीय मोबाइल नंबर दर्ज करें',
    'Password Changed Successfully': 'पासवर्ड सफलतापूर्वक बदला गया',
    'Incorrect OTP. Please try again': 'ग़लत ओटीपी. कृपया पुन: प्रयास करें',
    'Enter Miscellaneous Reference No': 'विविध संदर्भ संख्या दर्ज करें',
    'Phone Number Changed Successfully': 'फ़ोन नंबर सफलतापूर्वक बदला गया',
    'Please leave your feedback here...':
      'कृपया अपनी प्रतिक्रिया यहां छोड़ें...',
    'Account / consumer number is required': 'खाता/उपभोक्ता संख्या आवश्यक है',
    'Invalid mobile number(ex: 987XXXX789)':
      'अमान्य मोबाइल नंबर (उदा: 987XXXX789)',
    'Service connection number is required': 'सेवा कनेक्शन संख्या आवश्यक है',
    'Please enter service connection number':
      'कृपया सेवा कनेक्शन नंबर दर्ज करें',
    'Select the account number and continue': 'खाता संख्या चुनें और जारी रखें',
    'Old Email And New Email should not be same':
      'पुराना ईमेल और नया ईमेल एक जैसा नहीं होना चाहिए',
    'Password and Confirm Password do not match':
      'पासवर्ड और कन्फर्म पासवर्ड मेल नहीं खाते',
    'Password and Confirm Password did not match':
      'पासवर्ड और कन्फर्म पासवर्ड मेल नहीं खा रहे',
    'Utility defined privacy policy to be updated':
      'उपयोगिता परिभाषित गोपनीयता नीति को अद्यतन किया जाएगा',
    'Old Phone Number and New Phone Number not same':
      'पुराना फ़ोन नंबर और नया फ़ोन नंबर एक समान नहीं',
    'Check the OTP sent to your registered phone number':
      'अपने पंजीकृत फोन नंबर पर भेजे गए ओटीपी की जांच करें',
    'Check the OTP sent to your registered Email Address':
      'अपने पंजीकृत ईमेल पते पर भेजे गए ओटीपी की जांच करें',
    'Selected/EnteredAccount/SC Number Permanently Closed':
      'चयनित/प्रविष्ट खाता/एससी नंबर स्थायी रूप से बंद',
    'Selected/EnteredAccount/SC Number Permanently Disconnected':
      'चयनित/प्रविष्ट खाता/एससी नंबर स्थायी रूप से डिस्कनेक्ट हो गया',
    'Check the OTP sent to your registered phone number and email address':
      'अपने पंजीकृत फोन नंबर और ईमेल पते पर भेजे गए ओटीपी की जांच करें',
    'Please enter your 12 digits Account No: provided in bill to View/Pay bill':
      'कृपया बिल देखने/भुगतान करने के लिए बिल में दिया गया अपना 12 अंकों का खाता नंबर दर्ज करें',
    'Please enter your Miscellaneous Reference No: provided in Acknowledgement':
      'कृपया पावती में दिया गया अपना विविध संदर्भ क्रमांक दर्ज करें',
    'Password must be at least characters one upper case one lower case, one digit, one special character.':
      'पासवर्ड में कम से कम अक्षर, एक अपर केस, एक लोअर केस, एक अंक, एक विशेष अक्षर होना चाहिए।',
  },
  loadType: '',
  manageaccount_picker: '',
  mobileNumber: '',
  name: '',
  password1: '',
  payemntfinalurl: '',
  phonenumbercon: '',
  picker_option1: '',
  picker_option2: '',
  serviceconnectionNoMan: '',
  serviceConNo: '',
  serviceno: '',
  sub_category: '',
  sub_category2: '',
  uploadpic: '',
  userId: '',
  Viewbilldetailsjson: '',
};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();
const keySuffix = '';

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key + keySuffix, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const keys = Object.keys(DeviceVariables);
    const entries = await AsyncStorage.multiGet(
      keySuffix ? keys.map(k => k + keySuffix) : keys
    );

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key_, value]) => {
      // Keys only have the suffix appended in storage; strip the key
      // after they are retrieved
      const key = keySuffix ? key_.replace(keySuffix, '') : key_;
      return [key, value ? tryParseJson(value) : DeviceVariables[key]];
    });

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        if (
          payload?.__env__ &&
          DeviceVariables.__env__ &&
          payload.__env__ !== DeviceVariables.__env__
        ) {
          console.log(
            `Publication Environment changed from ${payload.__env__} to ${DeviceVariables.__env__}. Refreshing variables`
          );
          dispatch({
            type: 'LOAD_FROM_ASYNC_STORAGE',
            payload: DeviceVariables,
          });
        } else {
          dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
        }
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
