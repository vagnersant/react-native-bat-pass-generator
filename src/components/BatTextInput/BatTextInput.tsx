import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
  password: string
}


export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput
        style={styles.input}
        placeholder="pass"
        placeholderTextColor="#000"
        multiline={true}
        value={props.password}
    />
  );
}