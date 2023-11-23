import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Message from "./components/Message";
import Animated, {
  BounceIn,
  BounceOut,
  FadeIn,
  StretchOutY,
} from "react-native-reanimated";

export default function App() {
  const [show, setshow] = useState(false);

  return (
    <Animated.View
      style={styles.container}
      entering={BounceIn.delay(1000)}
      exiting={StretchOutY.duration(1000)}
    >
      {show && <Message />}
      <Button
        title={show ? "Fechar Mensagem" : "Exibir Mensagem"}
        onPress={() => setshow((prevState) => !prevState)}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
});
