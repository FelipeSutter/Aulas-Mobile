import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MostrarCep = ({ item, fn }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.bairro}</Text>
      <Text style={styles.text}>{item.cep}</Text>
      <Text style={styles.text}>{item.localidade}</Text>
      <Text style={styles.text}>{item.logradouro}</Text>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoText} onPress={fn}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
    padding: 20,
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#104245",
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
});

export default MostrarCep;
