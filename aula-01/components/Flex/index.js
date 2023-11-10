import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  caixa: {
    width: 100,
    height: 100,
    backgroundColor: "#d9d9d9",
    margin: 10,
  },
});

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.caixa, { alignSelf: "flex-end" }]}></View>
      <View style={styles.caixa}></View>
      <View style={styles.caixa}></View>
      <View style={styles.caixa}></View>
    </View>
  );
};

export default Flex;
