import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";

const Contato = ({ route }) => {
  const navigation = useNavigation();

  const handleHome = () => {
    // volta para a página que está no início da pilha.
    navigation.dispatch(StackActions.popToTop());
  };

  return (
    <View style={styles.container}>
      <Text>Tela de Contato</Text>
      <Text>{route.params?.telefone}</Text>
      <Button title="Voltar p/ home" onPress={handleHome}></Button>
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

export default Contato;
