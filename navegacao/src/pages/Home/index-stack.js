import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const navegaSobre = () => {
    navigation.navigate("Sobre", { nome: "Felipe", email: "Felipe@gmail.com" });
  };

  return (
    <View style={styles.container}>
      <Text>Tela do Home</Text>
      <Button title="Ir para Sobre" onPress={navegaSobre}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
