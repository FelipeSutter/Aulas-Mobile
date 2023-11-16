import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
} from "react-native";
import ActionModal from "../../components/ActionModal";

const Sobre = () => {
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>
      <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
        <Text style={{ color: "black" }}>Abrir</Text>
      </TouchableOpacity>
      <Modal visible={modal} transparent={true}>
        <ActionModal
          handleClose={() => setModal(false)}
          handleAjuda={() => alert("Clicou em Ajuda")}
          handleOutros={() => alert("Clicou em Outros")}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121318",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});

export default Sobre;
