import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const TextStyles = theme =>
  StyleSheet.create({ Text: { style: {}, props: {} } });

export const ViewStyles = theme =>
  StyleSheet.create({
    Announcements: {
      style: { alignItems: 'stretch', paddingLeft: 16, paddingRight: 16 },
      props: {},
    },
    Dashboard: { style: { flex: 1 }, props: {} },
    Details: {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      props: {},
    },
    Header: {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 48,
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'Header 2': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 48,
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'Header 3': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'Home buttons': { style: { marginLeft: 16, marginRight: 16 }, props: {} },
    'Name and address': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 20,
        paddingTop: 20,
      },
      props: {},
    },
    'Navi-App': {
      style: { flexDirection: 'row', paddingLeft: 16, paddingRight: 16 },
      props: {},
    },
    'Payment Methods': { style: { flexDirection: 'column' }, props: {} },
    'Payment Methods 2': { style: { flexDirection: 'column' }, props: {} },
    Promotions: { style: { alignItems: 'stretch' }, props: {} },
    'Section Header': {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        marginTop: 20,
      },
      props: {},
    },
    Table: {
      style: {
        backgroundColor: 'rgb(211, 211, 211)',
        borderBottomWidth: 1,
        borderColor: 'rgb(211, 211, 211)',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      props: {},
    },
    'Table 2': {
      style: {
        backgroundColor: 'rgb(211, 211, 211)',
        borderBottomWidth: 1,
        borderColor: 'rgb(211, 211, 211)',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      props: {},
    },
    'Table 3': {
      style: {
        backgroundColor: 'rgb(211, 211, 211)',
        borderBottomWidth: 1,
        borderColor: 'rgb(211, 211, 211)',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      props: {},
    },
    Tabs: {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      props: {},
    },
    VIEW: { style: { alignItems: 'center' }, props: {} },
    View: {
      style: {
        alignItems: 'stretch',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
      },
      props: {},
    },
    View11: {
      style: { flexDirection: 'row', justifyContent: 'flex-start', opacity: 1 },
      props: {},
    },
    accordion: { style: { borderColor: theme.colors['Divider'] }, props: {} },
    'b-views': {
      style: { marginLeft: 16, marginRight: 16, marginTop: -120 },
      props: {},
    },
    'botem tab': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['Custom #ffffff'],
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
      },
      props: {},
    },
    bottom: {
      style: { flexDirection: 'row', justifyContent: 'space-between' },
      props: {},
    },
    card: { style: { paddingRight: 20 }, props: {} },
    'card 2': {
      style: {
        backgroundColor: theme.colors['Background'],
        borderRadius: 12,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      },
      props: {},
    },
    category: {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      props: {},
    },
    charts: {
      style: { flex: 1, paddingLeft: 20, paddingRight: 20 },
      props: {},
    },
    'consumer no': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['BG Gray'],
        borderBottomWidth: 1,
        borderColor: theme.colors['Divider'],
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
      },
      props: {},
    },
    'drawer content': { style: { flex: 1 }, props: {} },
    'drawer content 2': { style: { flex: 1 }, props: {} },
    'fef hed': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 48,
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    footer: { style: { flexGrow: 0, flexShrink: 0 }, props: {} },
    headerp: {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'headerp 2': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'headerp 3': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'headerp 4': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'headerp 5': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 12,
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'map view': {
      style: {
        alignItems: 'flex-start',
        borderRadius: 0,
        height: 280,
        justifyContent: 'center',
        overflow: 'hidden',
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        width: '100%',
      },
      props: {},
    },
    'nav-checkbox': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      props: {},
    },
    password: {
      style: {
        alignContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'auto',
        backgroundColor: theme.colors['BG Gray'],
        borderBottomWidth: 1,
        borderColor: theme.colors['Divider'],
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
      },
      props: {},
    },
    'postpaid view': { style: { alignItems: 'stretch' }, props: {} },
    'postpaid view 2': { style: { alignItems: 'stretch' }, props: {} },
    'postpaid view 3': { style: { alignItems: 'stretch' }, props: {} },
    pr1: {
      style: {
        alignContent: 'space-between',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        paddingBottom: 8,
        paddingTop: 8,
      },
      props: {},
    },
    preferences: {
      style: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        opacity: 1,
        width: '100%',
      },
      props: {},
    },
    'preferences 2': {
      style: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 8,
        opacity: 1,
        width: '100%',
      },
      props: {},
    },
    'privacy text': { style: { marginTop: 50 }, props: {} },
    profile: {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 14,
        paddingTop: 14,
      },
      props: {},
    },
    'radio buttons': { style: {}, props: {} },
    'search and Add': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
    'section header': {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: 25,
        paddingLeft: 20,
        paddingRight: 20,
      },
      props: {},
    },
    'section header 2': {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
      },
      props: {},
    },
    'sernumer con': {
      style: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: theme.colors['Divider'],
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingTop: 20,
      },
      props: {},
    },
    sh: {
      style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        marginTop: 25,
        paddingLeft: 20,
        paddingRight: 20,
      },
      props: {},
    },
    'sort op': { style: { flex: 1 }, props: {} },
    'tab view': {
      style: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        width: '100%',
      },
      props: {},
    },
    'table 2': {
      style: {
        alignContent: 'stretch',
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 8,
      },
      props: {},
    },
    tabs: {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      props: {},
    },
    'tabs 2': {
      style: { alignItems: 'center', flexDirection: 'row', marginTop: 35 },
      props: {},
    },
    uname: {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      props: {},
    },
    'user name': {
      style: {
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: theme.colors['Divider'],
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      props: {},
    },
    'user name 2': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['BG Gray'],
        borderBottomWidth: 1,
        borderColor: theme.colors['Divider'],
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        opacity: 1,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
      },
      props: {},
    },
    'user name 3': {
      style: {
        alignItems: 'center',
        backgroundColor: theme.colors['BG Gray'],
        borderBottomWidth: 1,
        borderColor: theme.colors['Divider'],
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        opacity: 1,
        paddingLeft: 20,
        paddingRight: 20,
        width: '100%',
      },
      props: {},
    },
    'view-n': {
      style: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
        paddingTop: 12,
      },
      props: {},
    },
    viewbilldetails: {
      style: {
        alignContent: 'flex-start',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
      },
      props: {},
    },
  });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { style: { height: 1 }, props: {} } });

export const SwiperStyles = theme =>
  StyleSheet.create({ Swiper: { style: { height: 300 }, props: {} } });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      style: {
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      style: {
        borderRadius: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const LinkStyles = theme =>
  StyleSheet.create({
    Link: { style: { color: theme.colors.primary }, props: {} },
  });

export const SurfaceStyles = theme =>
  StyleSheet.create({
    Drawer: {
      style: {
        backgroundColor: theme.colors.surface,
        position: 'absolute',
        top: 0,
        zIndex: 5,
      },
      props: {},
    },
    'drawer nav': {
      style: {
        backgroundColor: theme.colors.surface,
        flex: 2,
        height: '100%',
        position: 'absolute',
        top: 0,
        width: '80%',
        zIndex: 5,
      },
      props: {},
    },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
    banner: { style: { height: 140 }, props: {} },
    'banner 2': { style: { borderRadius: 20, height: 140 }, props: {} },
    'banner 3': { style: { borderRadius: 20 }, props: {} },
  });

export const AccordionGroupStyles = theme =>
  StyleSheet.create({ Accordion: { style: { fontSize: 16 }, props: {} } });

export const FetchStyles = theme =>
  StyleSheet.create({
    Content: { style: { minHeight: 40 }, props: {} },
    notifications: { style: { minHeight: 40 }, props: {} },
    table: { style: { minHeight: 40 }, props: {} },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    'B-login and signup': { style: { marginBottom: 8 }, props: {} },
    Submit: {
      style: {
        fontFamily: 'Roboto_400Regular',
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
        textAlign: 'center',
      },
      props: {},
    },
    'Submit 2': {
      style: { fontFamily: 'Roboto_400Regular', textAlign: 'center' },
      props: {},
    },
  });

export const ScrollViewStyles = theme =>
  StyleSheet.create({
    contact: { style: { paddingLeft: 24, paddingRight: 24 }, props: {} },
  });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { style: { flex: 1 }, props: {} } });

export const RadioButtonGroupStyles = theme =>
  StyleSheet.create({
    'AmountCard Radio Button Group': { style: { marginTop: 10 }, props: {} },
  });

export const PinInputStyles = theme =>
  StyleSheet.create({
    'Pin Input': {
      style: {
        alignItems: 'center',
        borderColor: theme.colors.medium,
        borderRadius: 5,
        borderWidth: 1,
        color: theme.colors.strong,
        flex: 1,
        fontSize: 25,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
        maxHeight: 70,
        maxWidth: 70,
        padding: 5,
      },
      props: {},
    },
  });

export const WebViewStyles = theme =>
  StyleSheet.create({ 'Web View': { style: { flex: 1 }, props: {} } });

export const BottomSheetStyles = theme =>
  StyleSheet.create({
    'Bottom Sheet': {
      style: {
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
      },
      props: {},
    },
  });
