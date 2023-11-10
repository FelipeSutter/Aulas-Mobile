import { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Botao from "./components/Botao";
import Saudacao from "./components/Saudacao";
import Flex from "./components/Flex";
import HeaderEx from "./components/HeaderExercicio";
import Scroll from "./components/Scroll";
import Flat from "./components/Flat";
import Caixa from "./components/Caixa";

export default function App() {
  const [color, setColor] = useState(false);

  const mudarCor = () => {
    setColor(true);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "whitesmoke",
    },
  });

  return (
    <>
      {/* // <View style={{ flex: 1, backgroundColor: "black" }}>
    //   <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
    //     <Text>Olá, Seja bem-vindo!</Text>
    //   </View>
    //   <View style={styles.container}>
    //     <Text>Olá, Seja bem-vindo!</Text>
    //   </View>
    //   <View style={{ flex: 2, backgroundColor: color ? "red" : "blue" }}>
    //     <Text>Olá, Seja bem-vindo!</Text>
    //     <Button title="Clique aqui!" onPress={mudarCor}></Button>
    //   </View>
    // </View> */}

      {/* <Botao /> */}
      {/* <Saudacao /> */}
      {/* <Flex /> */}
      {/* <HeaderEx /> */}
      {/* <Scroll /> */}
      {/* <Flat /> */}
      <Caixa />
    </>
  );
}
