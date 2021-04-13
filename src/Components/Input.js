import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.inputStyle, ...props.style }} />;
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
