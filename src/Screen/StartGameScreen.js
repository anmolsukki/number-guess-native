import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../Components/Card';
import Input from '../Components/Input';
import Colors from '../Constants/Color';

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.gameTitle}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <View style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <Input
              style={styles.inputStyle}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enteredValue}
            />
            <View style={styles.btnContainer}>
              <View style={styles.btnStyle}>
                <Button title="Reset" color={Colors.secondary} onPress={() => resetInputHandler()} />
              </View>
              <View style={styles.btnStyle}>
                <Button title="Confirm" color={Colors.primary} onPress={() => {}} />
              </View>
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  gameTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  btnStyle: {
    width: 100,
  },
  inputStyle: {
    width: 50,
    textAlign: 'center',
  },
});

export default StartGameScreen;
