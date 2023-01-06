
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { COLORS, SF, SH, ShadowStyles, SW, TextStyles } from '@/theme';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { checkbox, checkedCheckbox, Fonts } from '@/assets';
import { Spacer } from './Spacer';
import { strings } from '@/localization';

export function AddDiscountToCart({amountDis, setAmountDis, percentDis,setPercentDis, discountCode,setDiscountCode}){

  const [checkboxs, setCheckBoxs] = useState(true);

  
  return(
    <View style={styles.adddiscountCon}>
    <Spacer space={SH(12)} />
    <Text style={styles.discountHeader}>{strings.posSale.discount}</Text>
    <Spacer space={SH(12)} />
    <View
      style={
        amountDis
          ? styles.dicountInputWraper2
          : styles.dicountInputWraper
      }
    >
      <View style={styles.displayFlex}>
        <View style={styles.displayFlex}>
          {checkboxs ? (
            <TouchableOpacity
              onPress={() => setCheckBoxs(!checkboxs)}
            >
              <Image
                source={checkbox}
                style={styles.checkboxStyle}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setCheckBoxs(!checkboxs)}
            >
              <Image
                source={checkedCheckbox}
                style={styles.checkboxStyle}
              />
            </TouchableOpacity>
          )}
          <Text
            numberOfLines={1}
            style={
              amountDis ? styles.amountLabel2 : styles.amountLabel
            }
          >
            Amount Discount
          </Text>
        </View>
        <TextInput
          placeholder="$ 00.00"
          keyboardType = 'numeric'
          style={
            amountDis
              ? styles.amountDiscountInput2
              : styles.amountDiscountInput
          }
          value={amountDis}
          onChangeText={setAmountDis}
        />
      </View>
    </View>
    <Spacer space={SH(12)} />
    <View
      style={
        percentDis
          ? styles.dicountInputWraper2
          : styles.dicountInputWraper
      }
    >
      <View style={styles.displayFlex}>
        <View style={styles.displayFlex}>
          {checkboxs ? (
            <TouchableOpacity
              onPress={() => setCheckBoxs(!checkboxs)}
            >
              <Image
                source={checkbox}
                style={styles.checkboxStyle}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setCheckBoxs(!checkboxs)}
            >
              <Image
                source={checkedCheckbox}
                style={styles.checkboxStyle}
              />
            </TouchableOpacity>
          )}
          <Text
            numberOfLines={1}
            style={
              percentDis ? styles.amountLabel2 : styles.amountLabel
            }
          >
            Percentage Discount
          </Text>
        </View>
        <TextInput
          placeholder="$ 00.00"
          keyboardType = 'numeric'
          style={
            percentDis
              ? styles.amountDiscountInput2
              : styles.amountDiscountInput
          }
          value={percentDis}
          onChangeText={setPercentDis}
        />
      </View>
    </View>
    <Spacer space={SH(12)} />
    <View
      style={
        discountCode
          ? styles.dicountInputWraper2
          : styles.dicountInputWraper
      }
    >
      <View style={styles.displayFlex}>
        <View style={styles.displayFlex}>
          {checkboxs ? (
            <TouchableOpacity
              onPress={() => setCheckBoxs(!checkboxs)}
            >
              <Image
                source={checkbox}
                style={styles.checkboxStyle}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setCheckBoxs(!checkboxs)}
            >
              <Image
                source={checkedCheckbox}
                style={styles.checkboxStyle}
              />
            </TouchableOpacity>
          )}
          <Text
            numberOfLines={1}
            style={
              discountCode
                ? styles.amountLabel2
                : styles.amountLabel
            }
          >
            Discount Code
          </Text>
        </View>
        <TextInput
          placeholder="CODE"
          keyboardType = 'numeric'
          style={
            discountCode
              ? styles.amountDiscountInput2
              : styles.amountDiscountInput
          }
          value={discountCode}
          onChangeText={setDiscountCode}
        />
      </View>
    </View>
    <Spacer space={SH(12)} />
    <Text style={styles.discountTitle}>Discount Tittle</Text>
    <Spacer space={SH(12)} />
    <TextInput
      placeholder="Tittle"
      style={styles.discountTitleInput}
    />
    <Spacer space={SH(12)} />
  
  </View>
  )
}

const styles = StyleSheet.create({
  adddiscountCon: {
    backgroundColor: COLORS.textInputBackground,
    borderRadius: 7,
    paddingHorizontal: moderateScale(8),
  },
  discountHeader: {
    fontSize: SF(24),
    fontFamily: Fonts.Regular,
    color: COLORS.black,
  },
  dicountInputWraper: {
    backgroundColor: COLORS.white,
    height: SH(52),
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(7),
  },
  dicountInputWraper2: {
    backgroundColor: COLORS.light_blue,
    height: SH(52),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(7),
  },
  amountDiscountInput: {
    borderWidth: 1,
    height: SH(38),
    width: SW(40),
    borderRadius: 3,
    borderColor: COLORS.solidGrey,
    justifyContent: 'center',
    fontSize: SF(14),
    fontFamily: Fonts.Italic,
    paddingHorizontal: moderateScale(5),
  },
  amountDiscountInput2: {
    backgroundColor: COLORS.white,
    height: SH(38),
    width: SW(40),
    borderRadius: 3,
    borderColor: COLORS.solidGrey,
    color: COLORS.primary,
    justifyContent: 'center',
    fontSize: SF(14),
    fontFamily: Fonts.Italic,
    paddingHorizontal: moderateScale(5),
  },
  displayFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexAlign:{
    flexDirection: 'row',
     alignItems: 'center' 
  },
  checkboxStyle: {
    width: SW(5),
    height: SW(5),
    resizeMode: 'contain',
  },
  amountLabel: {
    fontSize: SF(14),
    fontFamily: Fonts.Regular,
    color: COLORS.darkGray,
    paddingHorizontal: moderateScale(5),
    width: SW(40),
  },
  amountLabel2: {
    fontSize: SF(14),
    fontFamily: Fonts.SemiBold,
    color: COLORS.solid_grey,
    paddingHorizontal: moderateVerticalScale(5),
    width: SW(40),
  },
  discountTitle: {
    fontSize: SF(16),
    fontFamily: Fonts.Regular,
    color: COLORS.dark_grey,
  },
  discountTitleInput: {
    backgroundColor: COLORS.white,
    height: SH(52),
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(7),
    fontFamily: Fonts.Italic,
    fontSize: SF(14),
  },

});