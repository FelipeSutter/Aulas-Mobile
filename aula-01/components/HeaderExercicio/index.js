import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";

const HeaderEx = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.text}>Home</Text>
        <Text style={styles.text}>Contato</Text>
        <Text style={styles.text}>Sobre</Text>
      </View>
    </View>
  );
};

export default HeaderEx;
