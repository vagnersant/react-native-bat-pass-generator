import React, { useState } from 'react';
import { Text, Pressable, View, TextInput } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import { generatePassword } from '../../services/GeneratePasswordService';
import { smsSender } from '../../services/SMSSender';

export function BatButton() {
  const [pass, setPass] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleGeneratePassword() {
    setPass(generatePassword(12));
  }

  async function handleCopyToClipboard() {
    await Clipboard.setStringAsync(pass);
  }

  async function handleSMSSender(phoneNumber: string) {
    await smsSender(phoneNumber, pass);
  }

  return (
    <>
      <BatTextInput password={pass} />

      <Pressable
        onPress={() => {
          handleCopyToClipboard();
          console.log("Password Copied");
        }}

        accessibilityLabel='COPY'

        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={styles.text}>COPY</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          handleGeneratePassword();
          console.log("Password Generated");
        }}

        accessibilityLabel='GENERATE PASSWORD'

        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={styles.text}>GENERATE PASSWORD</Text>
      </Pressable>

      <Pressable
        onPress={() => {
            handleSMSSender(phoneNumber)
          console.log("Send SMS feature not implemented yet");
        }}

        accessibilityLabel='SEND SMS'

        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedButton,
        ]}
      >
        <TextInput
          style={styles.text}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
        <Text style={styles.text}>SEND SMS</Text>
      </Pressable>
    </>
  );
}