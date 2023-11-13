import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";

const DATA = [
  {
    title: "Frutas",
    data: ["Maça", "Banana", "Laranja"],
  },
  {
    title: "Legumes",
    data: ["Cenoura", "Beterraba", "Rabanete"],
  },

  {
    title: "Carne",
    data: ["Frango", "Peixe", "Carne bovina", "Carne suína"],
  },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item}</Text>
  </View>
);

const renderSectionHeader = ({ section: { title } }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.item}>{title}</Text>
  </View>
);
export default function Section() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  sectionHeader: {
    backgroundColor: "gray",
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 46,
  },
});
