import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/Components/Header';
import StartGameScreen from './src/Screen/StartGameScreen';

class App extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Header title={'Guess A Number'} />
        <StartGameScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
