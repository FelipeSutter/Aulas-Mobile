import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import api from "../../../services/api";
import MostrarCep from "../MostrarCep";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cep = () => {
  const [cep, setCep] = useState();
  const [info, setInfo] = useState([]);

  const inputRef = useRef();

  const buscarCep = async () => {
    try {
      // se tiver vazio
      if (!cep) {
        alert("Campo está vazio. Verifique e tente novamente.");
        inputRef.current.focus();
      } else {
        // faz a requisição, mas se for um cep inválido entra na mensagem de erro
        const { data } = await api.get(`${cep}/json`);
        if (data.erro) {
          alert("Cep não encontrado. Verifique e tente novamente.");
          inputRef.current.focus();
        } else {
          // armazena as buscas em um array
          setInfo([...info, data]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  // mostra as informações
  const mostrarInfos = async () => {
    setCep("");
    await buscarCep();
  };

  //
  const limparInfos = (index) => {
    // o filter espera dois parâmetros, e esse segundo pega a posição exata do array, na hora do map coloca o index para indicar
    // a posicao do array. O primeiro parâmetro pode ser qualquer coisa.
    const arrayFiltrado = info.filter((_, i) => i !== index);
    setInfo(arrayFiltrado);

    setCep("");
    // inputRef.current.focus();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o seu cep: </Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 21665390"
          value={cep}
          onChangeText={(txt) => setCep(txt)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#204090" }]}
          onPress={mostrarInfos}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {info && (
        <>
          {info.map((item, index) => (
            <MostrarCep key={index} item={item} fn={() => limparInfos(index)} />
          ))}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
});

export default Cep;
