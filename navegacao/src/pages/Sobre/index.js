import { View, Text, StyleSheet, Button } from "react-native";

const Sobre = () => {
  return (
    <View style={styles.container}>
      <Text>Tela do Sobre</Text>
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

export default Sobre;
