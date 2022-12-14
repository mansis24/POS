import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SW, SH, SF, ShadowStyles } from '@/theme';
import { COLORS } from '@/theme';
import { Fonts } from '@/assets';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { Col } from 'react-native-table-component';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  displayFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tablerightSectionBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.65,
    paddingRight: Platform.OS === 'ios' ? 40 : 0,
  },
  tableHeaderSetting:
  {paddingHorizontal: moderateScale(15),
   paddingVertical: verticalScale(10)},
  tableDataLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  tableHeaderRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.65,
    paddingRight: Platform.OS === 'ios' ? 40 : 0,
  },
  tableHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth * 0.25,
  },
  headerMainView: {
    width: windowWidth - 10,
    paddingHorizontal: SW(16),
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingVertical: SH(25),
    flexDirection: 'row',
  },
  textInputStyle: {
    width: SW(45),
    marginLeft: 10,
    fontFamily: Fonts.Italic,
    fontSize: SF(15),
  },
  truckStyle: {
    width: SH(32),
    height: SH(32),
    resizeMode: 'contain',
  },
  deliveryView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryText: {
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.solid_grey,
    fontSize: SF(20),
    paddingLeft: SW(4),
  },
  searchView: {
    borderWidth: 1,
    width: SW(65),
    height: SH(43),
    borderRadius: 20,
    borderColor: COLORS.row_grey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchImage: {
    width: SH(24),
    height: SH(24),
    resizeMode: 'contain',
    left: 3,
  },
  totalProductCon: {
    backgroundColor: COLORS.white,
    width: Platform.OS === 'android'? SH(632) : SH(600),
    height: SH(432),
    resizeMode: 'contain',
    ...ShadowStyles.shadow2,
    borderRadius: 10,
    paddingHorizontal: moderateScale(10),
    marginHorizontal: moderateScale(10),

    marginVertical: verticalScale(10),
  },
  rightlight: {
    width: SH(36),
    height: SH(36),
    resizeMode: 'contain',
  },
  darkBlackText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: SF(24),
  },
  productMap: {
    width: SH(602),
    height: SH(234),
    resizeMode: 'contain',
  },
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  backButtonCon: {
    backgroundColor: COLORS.textInputBackground,
    borderRadius: 3,
    width: windowWidth * 0.08,
    alignItems: 'center',
    flexDirection: 'row',
  },
  backButtonArrow: {
    width: SW(12),
    height: SW(8),
    resizeMode: 'contain',
    tintColor: COLORS.dark_grey,
  },
  backTextStyle: {
    color: COLORS.dark_grey,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    paddingVertical: verticalScale(5),
    // paddingHorizontal:moderateScale(5)
  },
  totalProductBodyCon: {
    // borderWidth:1,
    flex: 1,
    alignSelf: 'center',
    width: windowWidth * 0.9,
  },
  totalProductDetailCon: {
    backgroundColor: COLORS.textInputBackground,
    borderRadius: 10,
    height: SH(426),
    paddingHorizontal: moderateScale(10),
  },

  //   totalProductDetail css start

  trancationHeading: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.solid_grey,
    fontSize: SF(24),
  },
  byDayCon: {
    backgroundColor: COLORS.primary,
    borderRadius: 3,
    marginHorizontal: moderateScale(3),
  },
  byDayConLight: {
    // backgroundColor:COLORS.textInputBackground,
    borderRadius: 3,
    marginHorizontal: moderateScale(3),
  },
  todayText: {
    color: COLORS.white,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    paddingHorizontal: moderateScale(8),
    paddingVertical: verticalScale(2),
  },
  todayTextLight: {
    color: COLORS.darkGray,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    paddingHorizontal: moderateScale(8),
    paddingVertical: verticalScale(2),
  },
  productGraphcon: {
    // borderWidth:1,
    height: SH(218),
  },
  productGraphchildcon: {
    // borderWidth:1,
    height: SH(218),
    width: windowWidth * 0.43,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    // paddingHorizontal:moderateScale(10)
  },
  newAddedcon: {
    borderRightWidth: 1,
    borderColor: COLORS.solidGrey,
    height: SH(190),
    width: windowWidth * 0.23,
    paddingHorizontal: moderateScale(15),
  },
  addedhr: {
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    marginVertical: verticalScale(3),
  },
  newAddText: {
    fontFamily: Fonts.Regular,
    color: COLORS.bluish_green,
    fontSize: SF(16),
  },
  newAddTextBold: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.bluish_green,
    fontSize: SF(16),
  },
  productDetails: {
    fontFamily: Fonts.MaisonBold,
    color: COLORS.black,
    fontSize: SF(18),
  },
  totalActiveProductCon: {
    height: SH(190),
    width: windowWidth * 0.2,
    // paddingHorizontal:moderateScale(15),
    // borderWidth:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeProduct: {
    width: SH(130),
    height: SH(130),
    resizeMode: 'contain',
  },
  activeProductText: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.black,
    fontSize: SF(15),
  },
  categoryCon: {
    width: SH(270),
    height: SH(94),
    // borderWidth:1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: moderateScale(15),
    marginVertical: moderateScale(8),
  },
  categoryChildCon: {
    width: SH(160),
    height: SH(94),
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    // borderRadius:15,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
  },
  categoryChildPercent: {
    width: SH(110),
    height: SH(94),
    borderBottomEndRadius: 15,
    borderTopEndRadius: 15,
    // borderRadius:15,
    backgroundColor: COLORS.blue_shade,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catPercent: {
    width: SH(50),
    height: SH(30),
    resizeMode: 'contain',
  },
  percentText: {
    fontFamily: Fonts.Regular,
    color: COLORS.primary,
    fontSize: SF(12),
  },
  categoryText: {
    fontFamily: Fonts.Regular,
    color: COLORS.dark_grey,
    fontSize: SF(14),
  },
  categoryCount: {
    fontFamily: Fonts.MaisonBold,
    color: COLORS.solid_grey,
    fontSize: SF(32),
  },
  productCategorychildcon: {
    // borderWidth:1,
    height: SH(245),
    width: windowWidth * 0.45,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    // paddingHorizontal:moderateScale(10)
  },

  //   totalProductDetail css end

  //   productCategory css start
  categoryHeader: {
    fontFamily: Fonts.MaisonBold,
    color: COLORS.black,
    fontSize: SF(18),
    paddingHorizontal: moderateScale(12),
  },
  orderTypeCon: {
    height: SH(63),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(8),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.solidGrey,
  },
  dropDownIcon: {
    width: SW(4),
    height: SW(4),
    resizeMode: 'contain',
    tintColor: COLORS.solidGrey,
  },

  dropdown: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    zIndex: Platform.OS === 'ios' ? 100 : 0,
  },
  containerStyle: {
    width: SW(45),
    height: SH(35),
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.solidGrey,
  },
  listItemLabelStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  labelStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.black,
  },
  labelStyleWeekly: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    fontFamily: Fonts.SemiBold,
  },
  selectedItemLabelStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  dropDownContainerStyle: {
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    borderRadius: 7,
    ...ShadowStyles.shadow,
    backgroundColor: COLORS.white,
    top: Platform.OS === 'android' ? 30 : 15,
    zIndex: Platform.OS === 'ios' ? 100 : 1,
  },
  placeholderStyle: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.gerySkies,
  },
  placeholderStyleWeekly: {
    fontSize: SF(12),
    fontFamily: Fonts.SemiBold,
    color: COLORS.solid_grey,
  },
  jbrTypeCon: {
    backgroundColor: COLORS.textInputBackground,
    height: SH(63),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(8),
    borderBottomWidth: 1,
    borderColor: COLORS.solidGrey,
  },
  dropDownIconPagination: {
    width: SW(4),
    height: SW(4),
    resizeMode: 'contain',
    tintColor: COLORS.darkGreen,
  },
  containerStylePagination: {
    width: SW(20),
    height: SH(35),
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.solidGrey,
    backgroundColor: COLORS.white,
    color: COLORS.solidGrey,
  },
  placeholderStylePagination: {
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    color: COLORS.black,
  },
  unionCon: {
    backgroundColor: COLORS.washGrey,
    height: SH(40),
    justifyContent: 'center',
    borderRadius: 4,
  },
  jbrListCon: {
    borderBottomWidth: 1,
    borderColor: COLORS.solidGrey,
  },
  unionConWhite: {
    backgroundColor: COLORS.white,
    height: SH(40),
    justifyContent: 'center',
    borderRadius: 4,
  },
  unionStyle: {
    width: SW(5),
    height: SW(5),
    resizeMode: 'contain',
    paddingHorizontal: moderateScale(12),
  },
  paginationCount: {
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
    color: COLORS.black,
    paddingHorizontal: moderateScale(12),
  },
  tableDataHeaderCon: {
    height: SH(50),
    backgroundColor: COLORS.textInputBackground,
    textAlign: 'center',
    // borderWidth: 0,
    // borderColor: 'transparent',
    paddingHorizontal: moderateScale(20),
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.MaisonBold,
    color: COLORS.solid_grey,
    fontSize: SF(13),
    textAlign: 'center',
    letterSpacing: -1,
  },
  tableDataCon: {
    height: SH(55),
    borderBottomWidth: 1,
    borderColor: COLORS.solidGrey,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  usertableRowText: {
    fontFamily: Fonts.Regular,
    color: COLORS.solid_grey,
    fontSize: SF(12),
    // textAlign: 'center',
  },
  allienpic: {
    width: SH(42),
    height: SH(42),
    resizeMode: 'contain',
  },

  //   productCategory css start
  modalMainView: {
    backgroundColor: COLORS.white,
    width: SH(926),
    height: SH(665),
    borderRadius: 15,
    alignSelf: 'center',
    // justifyContent: 'center',
    paddingHorizontal: moderateScale(15),
  },
  editButtonCon: {
    width: SH(97),
    height: SH(36),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 7,
    backgroundColor: COLORS.textInputBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pencil: {
    width: SH(24),
    height: SH(24),
    resizeMode: 'contain',
  },
  edit: {
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
    paddingHorizontal: moderateScale(4),
  },
  marboloText: {
    fontSize: SF(32),
    fontFamily: Fonts.MaisonBold,
    color: COLORS.solid_grey,
  },
  marboloRed: {
    width: SH(354),
    height: SH(200),
    resizeMode: 'contain',
  },
  descriptionCon: {
    width: SH(492),
    height: SH(200),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    borderStyle: 'dashed',
    paddingHorizontal: moderateScale(10),
  },
  description: {
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
    color: COLORS.dark_grey,
  },
  sellingPriceConblue: {
    width: SH(200),
    height: SH(98),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderStyle: 'dashed',
    justifyContent: 'center',
    paddingLeft: moderateScale(8),
    marginHorizontal: moderateScale(5),
  },
  sellingPriceCongrey: {
    borderColor: COLORS.solidGrey,
  },
  sellingCount: {
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
    color: COLORS.dark_grey,
  },
  contentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  saveButtonCon: {
    width: SH(65),
    height: SH(36),
    backgroundColor: COLORS.primary,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
  },
  sellingPriceInput: {
    width: SH(168),
    height: SH(32),
    backgroundColor: COLORS.solidGrey,
    // borderRadius:7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(3),
    fontFamily: Fonts.SemiBold,
    paddingLeft: moderateScale(38),
  },
  sellingPlaceholder: {
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
    color: COLORS.white,
  },
  //   productCategory css send

  //   invoive css start
  invoiveIdHeaderCon: {
    height: SH(55),
    borderBottomWidth: 1,
    borderColor: COLORS.solidGrey,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(8),
  },
  crossButtonStyle: {
    width: SH(24),
    height: SH(24),
    resizeMode: 'contain',
  },
  printButtonCon: {
    width: SH(110),
    height: SH(36),
    borderRadius: 24,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(15),
  },
  invoiceIdText: {
    fontSize: SF(20),
    fontFamily: Fonts.Regular,
    color: COLORS.dark_grey,
    paddingHorizontal: moderateScale(5),
  },
  leftBackStyle: {
    width: SH(34),
    height: SH(34),
    resizeMode: 'contain',
  },
  addressText: {
    fontSize: SF(16),
    fontFamily: Fonts.Regular,
    color: COLORS.dark_grey,
  },
  trackIdCon: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    width: SH(240),
    height: SH(82),
    borderColor: COLORS.solidGrey,
    paddingHorizontal: moderateScale(8),
    justifyContent: 'center',
  },
  trackIdText: {
    fontSize: SF(18),
    fontFamily: Fonts.MaisonBold,
    color: COLORS.darkGray,
  },
  tableContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    paddingHorizontal: moderateScale(10),
  },
  textInputStyleInvoice: {
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    height: SH(274),
    width: windowWidth * 0.38,
    borderRadius: 10,
    backgroundColor: COLORS.textInputBackground,
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    textAlignVertical: 'top',
    paddingHorizontal: moderateScale(10),
  },
  noteContainer: {
    borderWidth: 1,
    // backgroundColor:COLORS.,
    borderColor: COLORS.solidGrey,
    height: SH(274),
    width: windowWidth * 0.35,
    borderRadius: 10,
    backgroundColor: COLORS.textInputBackground,
  },
  noteContainer2: {
    height: SH(325),
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    width: windowWidth * 0.35,
    borderRadius: 10,
    backgroundColor: COLORS.textInputBackground,
  },
  tablesubTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    // borderBottomWidth:1,
    // borderColor:COLORS.solidGrey,
    // paddingVertical:verticalScale(7)
  },
  tablesubTotalLabel: {
    color: COLORS.solid_grey,
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
  },
  tablesubDarkLabel: {
    color: COLORS.solid_grey,
    fontSize: SF(18),
    // fontFamily: Fonts.MaisonBold,
    fontFamily: Fonts.Regular,
  },
  subtotalHr: {
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    marginVertical:
      Platform.OS === 'android' ? moderateScale(9) : moderateScale(7),
  },
  tablesubTotalText: {
    color: COLORS.solid_grey,
    fontSize: SF(14),
    fontFamily: Fonts.MaisonRegular,
  },
  paidContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 3,
    marginHorizontal: moderateScale(5),
  },
  paidText: {
    color: COLORS.white,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    paddingHorizontal: moderateScale(6),
    paddingVertical: verticalScale(1),
  },
  shippingDetail: {
    color: COLORS.solid_grey,
    fontFamily: Fonts.MaisonBold,
    fontSize: SF(18),
  },
  trackingCon: {
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    borderRadius: 10,
    height: SH(102),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(8),
  },
  willis: {
    resizeMode: 'contain',
    width: SH(72),
    height: SH(72),
  },
  willisName: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
  },
  trackingNumber: {
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  deliverBtnCon: {
    backgroundColor: COLORS.bluish_green,
    flexDirection: 'row',
    height: SH(36),
    // width:SW(40),
    alignItems: 'center',
    borderRadius: 6,
    textAlign: 'center',
  },
  deliverBtnCon: {
    backgroundColor: COLORS.bluish_green,
    flexDirection: 'row',
    height: SH(36),
    // width:SW(40),
    alignItems: 'center',
    borderRadius: 6,
    textAlign: 'center',
  },
  trackingBtnCon: {
    backgroundColor: COLORS.primary,
  },
  deliverTextCon: {
    paddingHorizontal: moderateScale(10),
    flexDirection: 'row',
  },
  dateTableSetting: {
    // justifyContent:'center',
  },
  orderNoStyle: {
    fontSize: SF(20),
    color: COLORS.dark_grey,
    fontFamily: Fonts.Regular,
    paddingHorizontal: moderateScale(7),
  },
  deliveredText: {
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    paddingHorizontal: moderateScale(1),
  },
  deliveryCheck: {
    resizeMode: 'contain',
    width: SW(6),
    height: SW(6),
  },

  //   invoive css end

  // productOrder modal css start
  completeBtnCon: {
    width: SH(96),
    height: SH(25),
    backgroundColor: COLORS.primary,
    borderRadius: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginHorizontal: moderateScale(5),
  },
  completeText: {
    color: COLORS.white,
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
  },
  orderSideCon: {
    // borderWidth: 1,
    width: SH(459),
    height: SH(665),
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderTopEndRadius: 15,
    borderBottomEndRadius: 15,
    ...ShadowStyles.shadow,
  },
  walletItem: {
    color: COLORS.darkGray,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    paddingHorizontal: moderateScale(5),
  },
  itmybdaystyle: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
    paddingHorizontal: moderateScale(5),
  },
  listOfItem: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(24),
  },
  walletItem: {
    color: COLORS.darkGray,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    paddingHorizontal: moderateScale(5),
  },
  rewardPointStyle: {
    color: COLORS.primary,
    fontFamily: Fonts.Regular,
    fontSize: SF(18),
  },
  jbrListCon: {
    borderBottomWidth: 1,
    borderColor: COLORS.solidGrey,
  },
  ashtonStyle: {
    width: SW(12),
    height: SW(12),
    resizeMode: 'contain',
  },
  jfrText: {
    fontSize: SF(18),
    color: COLORS.primary,
    fontFamily: Fonts.Regular,
  },
  boxText: {
    fontSize: SF(11),
    color: COLORS.darkGray,
    fontFamily: Fonts.Italic,
  },
  onexstyle: {
    color: COLORS.dark_grey,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(18),
  },
  onlyxstyle: {
    color: COLORS.dark_grey,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
  },
  moreActText: {
    color: COLORS.solid_grey,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(16),
  },
  paymenttdone: {
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    fontSize: SF(24),
    alignSelf: 'center',
  },
  paymentTipsCon: {
    borderRadius: 5,
    backgroundColor: COLORS.orderStatusBackground,
    // width:SH(403),
    height: SH(107),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    // alignItems:'center'
  },
  paymentTipsText: {
    color: COLORS.black,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
  },
  paymentPay: {
    color: COLORS.primary,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(32),
  },
  via: {
    color: COLORS.black,
    fontFamily: Fonts.Italic,
    fontSize: SF(14),
    alignSelf: 'center',
  },
  customerCon: {
    borderWidth: 1,
    height: SH(342),
    borderRadius: 5,
    borderColor: COLORS.washGrey,
  },
  customerAddreCon: {
    borderWidth: 1,
    height: SH(300),
    borderRadius: 5,
    borderColor: COLORS.washGrey,
  },
  jbrCustomer: {
    width: SW(15),
    height: SW(15),
    resizeMode: 'contain',
  },
  cusAddText: {
    fontSize: SF(16),
    fontFamily: Fonts.Regular,
    color: COLORS.solid_grey,
  },
  walletIdCon: {
    height: SH(75),
    borderTopWidth: 1,
    borderColor: COLORS.washGrey,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.solidGrey,
  },
  walletIdLabel: {
    fontSize: SF(16),
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.solid_grey,
  },
  walletId: {
    fontSize: SF(16),
    fontFamily: Fonts.Regular,
    color: COLORS.primary,
  },
  customer: {
    fontSize: SF(18),
    fontFamily: Fonts.MaisonRegular,
    color: COLORS.primary,
    paddingHorizontal: moderateScale(10),
  },
  bottomContainer: {
    borderTopWidth: 1,
    height: SH(350),
    borderColor: COLORS.row_grey,
  },
  bottomSubCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
  },
  smalldarkText: {
    fontSize: SF(14),
    fontFamily: Fonts.MaisonBold,
    color: COLORS.solid_grey,
  },
  smallLightText: {
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGray,
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: SW(107),
    alignSelf: 'center',
    borderRadius: 5,
    paddingVertical: verticalScale(9),
    // marginVertical:verticalScale(10)
  },
  checkoutText: {
    color: COLORS.white,
    fontSize: SF(16),
    fontFamily: Fonts.SemiBold,
  },
  checkArrow: {
    width: SW(10),
    height: SW(4),
    resizeMode: 'contain',
    paddingHorizontal: moderateScale(6),
  },
  hr: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.row_grey,
  },
  flatListHeightTrue: { height: SH(580), width: SH(860) },
  flatListHeightFalse: { height: SH(580) },
  // productOrder modal css end

  // TOTAL RENEVUE CSS START
  revenueGraph: {
    width: SH(1254),
    height: SH(234),
    resizeMode: 'contain',
  },
  colorFrame: {
    width: SH(228),
    height: SH(16),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  totalOrderMap: {
    width: SH(570),
    height: SH(225),
    resizeMode: 'contain',
  },

  trancationHeading: {
    fontFamily: Fonts.MaisonBold,
    color: COLORS.black,
    fontSize: SF(18),
  },
  totalTranStyle: {
    fontFamily: Fonts.MaisonBold,
    color: COLORS.primary,
    fontSize: SF(18),
  },
  allTypeCon: {
    backgroundColor: COLORS.textInputBackground,
    // borderRadius: 10,
    // height: SH(63),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(12),
  },
  allJbrCon: {
    borderWidth: 1,
    height: SH(42),
    // width: SW(30),
    borderRadius: 7,
    borderColor: COLORS.solidGrey,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: moderateScale(4),
  },
  allJbrConBluish: {
    borderColor: COLORS.primary,
  },
  allJbrText: {
    fontFamily: Fonts.Regular,
    color: COLORS.dark_grey,
    fontSize: SF(14),
    paddingHorizontal: moderateScale(7),
  },
  allJbrTextbluish: {
    fontFamily: Fonts.SemiBold,
    color: COLORS.primary,
  },
  orderTypeCon: {
    height: SH(63),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(12),
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: COLORS.solidGrey,
  },
  datePickerCon: {
    borderWidth: 1,
    height: SH(35),
    width: SW(45),
    borderRadius: 7,
    borderColor: COLORS.solidGrey,
    alignItems: 'center',
    paddingHorizontal: moderateScale(7),
    flexDirection: 'row',
  },
  calendarStyle: {
    width: SW(5),
    height: SW(5),
    resizeMode: 'contain',
  },
  datePlaceholder: {
    fontFamily: Fonts.Regular,
    color: COLORS.gerySkies,
    fontSize: SF(12),
    paddingHorizontal: moderateScale(5),
  },
  revenueText: {
    fontFamily: Fonts.MaisonBold,
    color: COLORS.solid_grey,
    fontSize: SF(13),
    textAlign: 'center',
    letterSpacing: -1,
    // paddingHorizontal:moderateScale(40)
  },
  revenueDataText: {
    fontFamily: Fonts.Regular,
    color: COLORS.solid_grey,
    fontSize: SF(12),
    paddingHorizontal: moderateScale(3),
  },
  codeLogo:{
    width: SH(18),
    height: SH(22),
    resizeMode: 'contain',
    tintColor:COLORS.primary
  },
  revenueDataTextLight: {
    fontFamily: Fonts.Regular,
    color: COLORS.gerySkies,
    fontSize: SF(10),
  },
  clay: {
    width: SH(24),
    height: SH(24),
    resizeMode: 'contain',
  },
  dateTableSetting: {
    width: SH(185),
    justifyContent: 'center',
  },
  dateTableSettingFirst: {
    width: SH(40),
    justifyContent: 'center',
  },
  dateTablealignStart: {
    width: SH(185),
    justifyContent: 'flex-start',
  },
  completeBtnCon2: {
    width: SH(92),
    height: SH(24),
    backgroundColor: COLORS.bluish_green,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtnCon2: {
    width: SH(81),
    height: SH(24),
    backgroundColor: COLORS.red,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownIconSale: {
    width: SH(9),
    height: SH(13),
    resizeMode: 'contain',
    marginHorizontal: moderateScale(7),
  },
  tableDropDownCon: {
    width: SH(150),
    // height: SH(120),
    // borderWidth: 1,
    position: 'absolute',
    top: 25,
    right: 0,
    borderRadius: 10,
    ...ShadowStyles.shadow,
    backgroundColor:COLORS.white,
  },
  checkedCheckboxSquare:{
    width: SH(18),
    height: SH(18),
    resizeMode: 'contain',
  },
  allCon:{
    // borderWidth:1,
    paddingHorizontal:moderateScale(10),
    paddingVertical:verticalScale(4)
  },
  allText:{
    fontFamily: Fonts.Regular,
    color: COLORS.solid_grey,
    fontSize: SF(12),
    paddingHorizontal:moderateScale(5),
  },

  // payment done css start
  numpadContainer: {
    width: SW(235),
    height: windowHeight,
    backgroundColor: COLORS.white,
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: moderateScale(10),
  },
  listOfItems: {
    color: COLORS.black,
    fontFamily: Fonts.SemiBold,
    fontSize: SF(24)
  },
  walletItem: {
    color: COLORS.darkGray,
    fontFamily: Fonts.Regular,
    fontSize: SF(14),
    paddingHorizontal: moderateScale(5)
  },
   customerAddreCons: {
    borderWidth:1,
    height: SH(300),
    borderRadius:5,
    borderColor:COLORS.washGrey,
  },
  numpadContainer2false: {
    width: SH(880),
    height: windowHeight,
    backgroundColor: COLORS.white,
    paddingHorizontal:moderateScale(10)
  },
  numpadContainer2true: {
    width: SH(1350),
    height: windowHeight,
    backgroundColor: COLORS.white,
    paddingHorizontal:moderateScale(10)
  },



    // payment done css end
     // order shipping css start
  onlinedeliveryCon:{
    borderBottomWidth:1,
    borderColor:COLORS.solidGrey,
    paddingVertical:verticalScale(5)
  },
  onlinedeliveryBody:{
      // borderWidth:1,
      width:windowWidth * 0.80,
      alignSelf:'center',
  },
  completedButton: {
    width: SW(30),
    height: SH(30),
    borderRadius: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.bluish_green,
  },
  completedText: {
    fontFamily: Fonts.Regular,
    fontSize: SF(12),
    textAlign: 'center',
    color: COLORS.white,
  },
  onlinedeliveryBody:{
    // borderWidth:1,
    width:windowWidth * 0.80,
    alignSelf:'center',
},buyerCon:{
  borderWidth:1,
  borderColor:COLORS.solidGrey,
  borderRadius:10,
  width:windowWidth * 0.48,
  height:SH(170),
  paddingHorizontal:moderateScale(8)
},
invoiceCon:{
  borderWidth:1,
  borderColor:COLORS.solidGrey,
  borderRadius:10,
  width:windowWidth * 0.30,
  height:SH(170),
  paddingHorizontal:moderateScale(8)
},
angelaAddress:{
  color: COLORS.darkGray,
  fontSize: SF(14),
  fontFamily: Fonts.Regular,
},
angela:{
  color: COLORS.solid_grey,
  fontSize: SF(20),
  fontFamily: Fonts.Regular,
},
angelaPic:{
  Width:SW(10),
  height:SW(10),
  resizeMode:'contain',
  marginRight:-20,
  marginLeft:-35
},
buyer:{
  color: COLORS.dark_grey,
  fontSize: SF(18),
  fontFamily: Fonts.MaisonRegular,
},
invoiceId:{
  color: COLORS.brown,
  fontSize: SF(14),
  fontFamily: Fonts.Regular,
},
deliveryDate:{
  color: COLORS.sucx,
  fontSize: SF(14),
  fontFamily: Fonts.Regular,
},
invoiceDetail:{
  color: COLORS.solid_grey,
  fontSize: SF(16),
  fontFamily: Fonts.Italic,
},
pointConOrder:{
  backgroundColor:COLORS.primary,
  borderBottomLeftRadius:20,
  position:'absolute',
  top:-1,
  right:-1
},
pointTextOrder:{
  color: COLORS.solid_green,
  fontSize: SF(12),
  fontFamily: Fonts.Regular,
  paddingHorizontal:moderateScale(18),
  paddingVertical:verticalScale(3)
  // paddingHorizontal
},
// tableContainer:{
//   // borderWidth:1,
//   backgroundColor:COLORS.white,
//   ...ShadowStyles.shadow2,
//   // borderTopLeftRadius:12,
//   // borderTopRightRadius:12
//   borderRadius:12
// },
// tableheader:{
//   backgroundColor:COLORS.textInputBackground,
//   borderTopEndRadius:10,
//   borderTopLeftRadius:10,
//   borderColor:'transparent'

// },

tableLabel:{
  color: COLORS.dark_grey,
  fontSize: SF(14),
  fontFamily: Fonts.MaisonBold,
  // paddingHorizontal:moderateScale(40)
},
rowText:{
  color: COLORS.dark_grey,
  fontSize: SF(14),
  fontFamily: Fonts.Regular,
},
ashtonClass:{
  Width:SW(10),
  height:SW(10),
  resizeMode:'contain',
},
tableSetting:{
   width:SW(200),
    // marginLeft:-150,
     marginRight:170
},
noteContainer:{
  borderWidth:1,
  // backgroundColor:COLORS.,
  borderColor:COLORS.solidGrey,
  height:SH(274),
  width:windowWidth * 0.38,
  borderRadius:10,
  backgroundColor:COLORS.textInputBackground
},
tablesubTotal:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  paddingHorizontal:moderateScale(20),
  // borderBottomWidth:1,
  // borderColor:COLORS.solidGrey,
  // paddingVertical:verticalScale(7)
},
tablesubTotalLabel:{
  color: COLORS.solid_grey,
  fontSize: SF(14),
  fontFamily: Fonts.Regular,
},
tablesubTotalText:{
  color: COLORS.solid_grey,
  fontSize: SF(14),
  fontFamily: Fonts.MaisonRegular,
},
paidContainer:{
  backgroundColor:COLORS.primary,
  borderRadius:3,
  marginHorizontal:moderateScale(5)
},
paidText:{
  color: COLORS.white,
  fontSize: SF(12),
  fontFamily: Fonts.Regular,
  paddingHorizontal:moderateScale(6),
  paddingVertical:verticalScale(1)
},
subtotalHr:{
  borderWidth:1,
  borderColor:COLORS.solidGrey,
  marginVertical:Platform.OS === 'android' ? moderateScale(9) : moderateScale(7)
},
textInputcompleteNote:{
  borderWidth:1,
  borderColor:COLORS.solidGrey,
  height:SH(274),
  width:windowWidth * 0.38,
  borderRadius:10,
  backgroundColor:COLORS.textInputBackground,
  color:COLORS.black,
  fontFamily:Fonts.Regular,
  fontSize:SF(14),
  textAlignVertical:'top',
  paddingHorizontal:moderateScale(10)
},
noteplaceholderStyle:{
  color:COLORS.black,
  fontFamily:Fonts.Regular,
  fontSize:SF(14),
},
shippingDetail:{
  color:COLORS.solid_grey,
  fontFamily:Fonts.MaisonRegular,
  fontSize:SF(18),
},
trackingCon:{
  borderWidth:1,
  borderColor:COLORS.solidGrey,
  borderRadius:10,
  height:SH(102),
  justifyContent:'center',
  paddingHorizontal:moderateScale(8)
},
willis:{
  resizeMode:'contain',
  width:SW(25),
  height:SW(25)
},
willisName:{
  color:COLORS.black,
  fontFamily:Fonts.SemiBold,
  fontSize:SF(16),
},
trackingNumber:{
  color:COLORS.black,
  fontFamily:Fonts.Regular,
  fontSize:SF(12),
},
deliverBtnCon:{
  backgroundColor:COLORS.bluish_green,
  flexDirection:'row',
  height:SH(36),
  // width:SW(40),
  alignItems:'center',
  borderRadius:6,
  textAlign:'center'
},
trackingBtnCon:{
  backgroundColor:COLORS.orange,
},
deliveryCheck:{
  resizeMode:'contain',
  width:SW(6),
  height:SW(6),
},
deliveredText:{
  color:COLORS.white,
  fontFamily:Fonts.Regular,
  fontSize:SF(14),
  paddingHorizontal:moderateScale(1)
},
deliverTextCon:{
  paddingHorizontal:moderateScale(10),
  flexDirection:'row'
},
// dateTableSetting:{
//   // justifyContent:'center',
// },
orderNoStyle: {
  fontSize: SF(20),
  color: COLORS.dark_grey,
  fontFamily: Fonts.Regular,
  paddingHorizontal: moderateScale(7),
},
asthonLogo:{
  resizeMode:'contain',
  width:SH(36),
  height:SH(36),
},
  // order shipping css end

  // tracking number css start
  trackingNoBody:{
    borderWidth:1,
    borderColor:COLORS.solidGrey,
    borderRadius:10,
    width:windowWidth * 0.92,
    alignSelf:'center',
    height:windowHeight * 0.79,
    paddingHorizontal:moderateScale(10)
  },
  mapContainer:{
    // borderWidth:2,
    width:windowWidth * 0.44,
    // height:windowHeight * 0.80,
    borderRadius:10
  },
  costoContainer:{
    borderWidth:1,
    width:windowWidth * 0.44,
    height:SH(140),
    borderRadius:10,
    borderColor:COLORS.solidGrey,
  },
  trackingAngela:{
    Width:SH(60),
    height:SH(60),
    resizeMode:'contain',
  },
  costoHr:{
    borderWidth: 1,
    borderColor: COLORS.solidGrey,
    width:windowWidth * 0.34,
    marginVertical:verticalScale(5)
  },
  costoName:{
    fontSize: SF(24),
    color: COLORS.solid_grey,
    fontFamily: Fonts.MaisonBold,
  },
  costoAdd:{
    fontSize: SF(14),
    color: COLORS.darkGray,
    fontFamily: Fonts.Regular,
    paddingHorizontal:moderateScale(5)
  },
  costoPayCon:{
    borderEndWidth:1,
    borderColor:COLORS.solidGrey,
    width:SW(50),
    justifyContent:'center',
  },
  ciagrtext:{
    fontSize: SF(16),
    color: COLORS.solid_grey,
    fontFamily: Fonts.Regular,
    paddingHorizontal:moderateScale(4)
  },
  ticketImage:{
    width: SW(8),
    height: SW(8),
    resizeMode: 'contain',
  },
  detailText:{
    color:COLORS.primary,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
    paddingHorizontal:moderateScale(10)
  },
  dropRight:{
    width: SW(6),
    height: SW(6),
    resizeMode: 'contain',
  },
  mapStyle:{
    width: SW(163),
    height: SH(1070),
    resizeMode: 'cover',
    borderRadius:15,
  },
  orderStatus:{
    color:COLORS.solid_grey,
    fontSize: SF(15),
    fontFamily: Fonts.SemiBold,
  },
  movingArrow:{
    width: SW(8),
    height: SW(16),
    resizeMode: 'cover',
    marginTop:10,
    marginBottom:4
  },
  verifyTextLight:{
    color:COLORS.gerySkies,
    fontSize: SF(12),
    fontFamily: Fonts.SemiBold,
  },
  waitMinuteLight:{
    color:COLORS.gerySkies,
    fontSize: SF(12),
    fontFamily: Fonts.Regular,
  },
  carriarCon:{
    borderWidth:1,
    borderColor:COLORS.solidGrey,
    borderRadius:10,
    paddingHorizontal:moderateScale(10),
    height:SH(102)
  },
  tracking2Angela:{
    width: SH(36),
    height: SH(36),
    resizeMode: 'contain',
  },
  gredoName:{
    color:COLORS.black,
    fontSize: SF(18),
    fontFamily: Fonts.SemiBold,
    paddingHorizontal:moderateScale(5)
  },
  contactButton:{
    height:SH(36),
    backgroundColor:COLORS.textInputBackground,
    borderRadius:24,
    justifyContent:'center'
  },
  contactStyle:{
    width: SH(24),
    height: SH(24),
    resizeMode: 'contain',
  },
  contactText:{
    color:COLORS.solid_grey,
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
    paddingLeft:moderateScale(5)
  },
  Phonelight:{
    width: SH(16),
    height: SH(16),
    resizeMode: 'contain',
  },
  mapBorder:{
    borderWidth:2,
    width: SW(164),
    height: SH(1074),
    borderRadius:18,
    borderColor:COLORS.solidGrey
  },
  buyerTableSettingFirst:{
    width:SH(10),
    justifyContent:'center',
  },
  buyerTableSettingSecond:{
    width:SH(150),
    // justifyContent:'center',
    marginLeft:-120
  },
  buyerSerial:{
    width:SH(20),
    // justifyContent:'center',
  }
   // tracking number css 

  // TOTAL RENEVUE CSS END
});
