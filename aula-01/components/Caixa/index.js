import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  Button,
} from "react-native";

export default function Caixa() {
  const [inserido, setInserido] = useState("");
  const [array, setArray] = useState([]);

  const funcao = () => {
    setArray([...array, inserido]);
    setInserido(""); // Clear the input after inserting
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );

  const handleInputChange = (text) => {
    setInserido(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Insira seu texto aqui"
        style={styles.texto}
        value={inserido}
        onChangeText={handleInputChange}
      ></TextInput>
      <Button onPress={funcao} title="Inserir"></Button>

      <FlatList
        data={array}
        renderItem={renderItem}
        keyExtractor={(array, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: "center",
  },
  texto: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%",
  },
  item: {
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 8,
  },
});
