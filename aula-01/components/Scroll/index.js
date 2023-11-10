import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

const Scroll = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView horizontal style={styles.scroll}>
          <Text style={styles.container}>Exemplo-1</Text>
          <Text style={styles.container}>ScrollView</Text>
          <Text style={styles.container}>Exemplo-2</Text>
          <Text style={styles.container}>ScrollView</Text>
          <Text style={styles.container}>Exemplo-3</Text>
          <Text style={styles.container}>ScrollView</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white",
    fontSize: 20,
    padding: 20,
  },

  scroll: {
    backgroundColor: "gray",
    marginTop: 50,
    height: 110,
  },
});

export default Scroll;
