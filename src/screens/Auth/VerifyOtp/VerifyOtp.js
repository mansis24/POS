import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Spacer, Button } from '@/components';
import { SH, COLORS } from '@/theme';
import { verifyIcon, crossButton } from '@/assets';
import { styles } from '@/screens/Auth/VerifyOtp/VerifyOtp.styles';
import Modal from 'react-native-modal';
import { navigate } from '@/navigation/NavigationRef';
import { NAVIGATION } from '@/constants';
import { strings } from '@/localization';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from 'react-native-confirmation-code-field';
import { color } from 'react-native-reanimated';
const CELL_COUNT = 5;

export function VerifyOtp() {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const verifyOtpHandler = () => {
    navigate(NAVIGATION.passcode);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.verifyContainer}>
          <Spacer space={SH(40)} />
          <Text style={styles.header}>{strings.verifyOtp.heading}</Text>
          <Spacer space={SH(6)} />
          <Text style={styles.subHeading}>{strings.verifyOtp.subHeading}</Text>
          <Spacer space={SH(20)} />
          <CodeField
            ref={ref}
            {...prop}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={[styles.alignSelfCenter]}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={styles.cellRoot}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <View style={{ flex: 1 }} />
          <Button
            onPress={verifyOtpHandler}
            title={strings.verifyOtp.button}
            textStyle={value ? styles.selectedText : styles.buttonText}
            style={value ? styles.submitButton : styles.button}
          />
          <Spacer space={SH(40)} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
