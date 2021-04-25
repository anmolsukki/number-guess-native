import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, Image } from 'react-native';
import Card from '../Components/Card';
import Input from '../Components/Input';
import NumberContainer from '../Components/NumberContainer';
import Colors from '../Constants/Color';

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
      </Card>
    );
  }

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
                <Button title="Confirm" color={Colors.primary} onPress={() => confirmInputHandler()} />
              </View>
            </View>
          </View>
        </Card>
        {confirmedOutput}
        <View>
          <Image
            source={{
              uri: 'https://filmfare.wwmindia.com/content/2020/sep/sajidkhan11599800351.jpg',
            }}
            resizeMode="cover"
            style={styles.imageContainer}
            fadeDuration={3000}
          />
        </View>
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
    fontFamily: 'OpenSans-Bold',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    fontFamily: 'OpenSans-Bold',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  btnStyle: {
    width: 100,
  },
  inputStyle: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 30,
    width: 300,
    height: 350,
    borderRadius: 10,
  },
});

export default StartGameScreen;
