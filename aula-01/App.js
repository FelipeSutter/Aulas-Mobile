import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
        <Text>Olá, Seja bem-vinda</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Text>Olá, Seja bem-vinda</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "lightblue" }}>
        <Text>Olá, Seja bem-vinda</Text>
      </View>
    </View>
  );
}
