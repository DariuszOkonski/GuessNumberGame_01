import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>

      <Text>GUESS</Text>

      <View>
        <Text>Higher or lower?</Text>

        <Text>+</Text>
        <Text>-</Text>
      </View>

      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    backgroundColor: "yellow",
    paddingTop: 100,
  },
});
