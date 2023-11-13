import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState } from "react";

const List = () => {
  const [feed, setFeed] = useState([
    { _id_: 1, nome: "Mariana", idade: 50, email: "m@hotmail.com" },
    { _id_: 2, nome: "Maria", idade: 34, email: "ma@hotmail.com" },
    { _id_: 3, nome: "Jorge", idade: 14, email: "j@hotmail.com" },
    { _id_: 4, nome: "Ana", idade: 18, email: "a@hotmail.com" },
    { _id_: 5, nome: "Carla", idade: 19, email: "c@hotmail.com" },
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    pessoa: {
      backgroundColor: "#121212",
      height: 200,
      marginBottom: 15,
      alignItems: "center",
      justifyContent: "center",
    },
    texto: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  function Pessoa(props) {
    return (
      <View style={styles.pessoa}>
        <Text style={styles.texto}>{props.data.nome}</Text>
        <Text style={styles.texto}>{props.data.idade}</Text>
        <Text style={styles.texto}>{props.data.email}</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Pessoa data={item} />}
        keyExtractor={(item) => item._id_}
      ></FlatList>
    </View>
  );
};

export default List;
