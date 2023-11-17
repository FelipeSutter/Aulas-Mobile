import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import api from "../../../services/api";
import MostrarCep from "../MostrarCep";

const Cep = () => {
  const [cep, setCep] = useState();
  const [info, setInfo] = useState([]);

  const buscarCep = async () => {
    try {
      if (!cep) {
        alert("Coloque um cep válido.");
      } else {
        const { data } = await api.get(`${cep}/json`);
        if (data.erro) {
          alert("Cep não encontrado. Verifique e tente novamente.");
        } else {
          setInfo([...info, data]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const mostrarInfos = async () => {
    await buscarCep();
  };

  const limparInfos = () => {
    setInfo("");
  };

  /* TODO: Quero fazer uma função que quando ativada renderize na tela os elementos do cep
    criei o MostrarCep pra isso, mas não deu certo.
  */

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o seu cep: </Text>
        <TextInput
          style={styles.input}
          placeholder="Ex. 21665390"
          value={cep}
          onChangeText={(txt) => setCep(txt)}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "red" }]}
          onPress={mostrarInfos}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {info.length > 0 && (
        <>
          {/* {info.map((item, index) => (
            <MostrarCep key={index} item={item} fn={() => limparInfos()} />
          ))} */}

          <FlatList
            renderItem={MostrarCep}
            data={info}
            keyExtractor={(p) => p.siafi}
          ></FlatList>
        </>
      )}

      {/* {info && (
        <MostrarCep key={info.cep} item={info} fn={() => limparInfos()} />
      )} */}
    </SafeAreaView>
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
