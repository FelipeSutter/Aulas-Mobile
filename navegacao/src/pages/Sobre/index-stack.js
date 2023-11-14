import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Sobre = ({ route }) => {
  const navigation = useNavigation();

  const navegaContato = () => {
    navigation.navigate("Contato", { telefone: "4002-8922" });
  };

  const voltar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Tela do Sobre</Text>
      {/* o ? serve para renderizar mesmo que a propriedade seja nula, para não travar toda a aplicação  */}
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button title="Ir para Contato" onPress={navegaContato}></Button>
      <Text>Exemplo Retorno</Text>
      <Button title="Voltar" onPress={voltar}></Button>
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
