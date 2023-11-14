import { View, Text, StyleSheet, Button } from "react-native";

const Contato = () => {
  return (
    <View style={styles.container}>
      <Text>Tela do Contato</Text>
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

export default Contato;
