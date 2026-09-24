import { Button, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={{ backgroundColor: "green" }}>
      <TextInput style={{ backgroundColor: "red" }} placeholder="hello" />

      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGameScreen;
