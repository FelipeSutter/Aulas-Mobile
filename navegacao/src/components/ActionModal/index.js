import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ActionModal({
  handleClose,
  handleAjuda,
  handleOutros,
}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.title}>Testando Modal</Text> */}

      <TouchableOpacity
        style={{ flex: 1, zIndex: 9 }}
        onPress={handleClose}
      ></TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity style={styles.actionButton} onPress={handleAjuda}>
          <Text style={styles.actionText}>Ajuda</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.actionButton} onPress={handleOutros}>
          <Text style={styles.actionText}>Outros</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  actionButton: {
    zIndex: 99,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.28,
    shadowRadius: 4,
  },
  actionText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
