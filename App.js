import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/Components/Header';
import StartGameScreen from './src/Screen/StartGameScreen';
import GameScreen from './src/Screen/GameScreen';
import GameOverScreen from './src/Screen/GameOverScreen';

class App extends React.Component {
  state = {
    userNumber: null,
    guessRound: 0,
  };

  startGameHandler = (selectedNumber) => {
    this.setState({ userNumber: selectedNumber, guessRound: 0 });
  };

  gameOverHandler = (numOfRounds) => {
    this.setState({ numOfRounds });
  };

  configureNewGameHandler = () => {
    this.setState({ guessRound: 0, userNumber: null });
  };

  render() {
    let content = <StartGameScreen onStartGame={this.startGameHandler} />;
    if (this.state.userNumber && this.state.guessRound <= 0) {
      content = <GameScreen userChoice={this.state.userNumber} onGameOver={this.gameOverHandler} />;
    } else if (this.state.guessRound > 0) {
      content = <GameOverScreen roundsNumber={this.state.guessRound} userNumber={this.state.userNumber} onRestart={this.configureNewGameHandler} />;
    }

    return (
      <View style={styles.screen}>
        <Header title={'Guess A Number'} />
        {content}
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
