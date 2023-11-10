import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const Flat = () => {
  const alunos = [
    { matricula: "123", nome: "Ana" },
    { matricula: "125", nome: "Sergio" },
    { matricula: "1212", nome: "Carlos" },
    { matricula: "1235", nome: "Jorge" },
    { matricula: "1238", nome: "João" },
    { matricula: "1239", nome: "Maria" },
    { matricula: "1240", nome: "Joaquim" },
    { matricula: "1241", nome: "Joaquim" },
    { matricula: "1242", nome: "Joaquim" },
    { matricula: "1243", nome: "Joaquim" },
  ];

  const aluno = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={aluno}
        data={alunos}
        keyExtractor={(aluno) => aluno.matricula}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },

  item: {
    backgroundColor: "whitesmoke",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default Flat;
