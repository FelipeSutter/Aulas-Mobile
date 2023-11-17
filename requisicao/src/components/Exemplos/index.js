import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useMemo, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Exemplo = () => {
  const [input, setInput] = useState("");
  const [nome, setNome] = useState("");
  const inputRef = useRef();

  const gravarNome = async () => {
    // igual o localStorage, a diferença é que é assíncrono
    await AsyncStorage.setItem("@nome", input);
    setNome(input);
  };

  useEffect(() => {
    const loadData = async () => {
      await AsyncStorage.getItem("@nome").then((value) => {
        setNome(value);
      });
    };
    loadData();
  }, []);

  const letrasNomes = useMemo(() => {
    nome ? console.log(nome.length) : null;
    return nome.length;
  }, [nome]);

  const chamarInput = () => {
    inputRef.current.focus();
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(txt) => setInput(txt)}
          ref={inputRef}
        />

        <TouchableOpacity style={styles.botao} onPress={gravarNome}>
          <Text style={{ color: "white" }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={chamarInput}>
          <Text style={{ color: "white" }}>Chamar Input</Text>
        </TouchableOpacity>

        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.nome}>{letrasNomes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 350,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: "#222",
    color: "#FFF",
    height: 40,
    padding: 10,
    margin: 10,
    textAlign: "center",
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
  },
});

export default Exemplo;
