import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";

const Message = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="notifications" color="red" size={20} />
      <Text style={styles.title}>Message</Text>
    </View>
  );
};

export default Message;
