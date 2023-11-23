import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function App() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 3000,
        useNativeDriver: false,
      }),
    ]).start();

    // // para deixar a animação em loop
    // Animated.loop(
    //   // sequence = faz a animação em sequencia, nesse caso vai fazer a opacidade e dps as outras coisas
    //   Animated.sequence([
    //     Animated.timing(opacidadeAnimada, {
    //       toValue: 0.5,
    //       duration: 2000,
    //       useNativeDriver: false,
    //     }),
    //     // parallel = faz a animação junto, nesse caso anima a altura e largura ao mesmo tempo.
    //     Animated.parallel([
    //       Animated.timing(larAnimada, {
    //         toValue: 300,
    //         duration: 3000,
    //         useNativeDriver: false,
    //       }),
    //       Animated.timing(altAnimada, {
    //         toValue: 300,
    //         duration: 4000,
    //         useNativeDriver: false,
    //       }),
    //     ]),
    //   ])
    // ).start();
  }, []);

  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  let porcentagemLAltura = altAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ["5%", "100%"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: porcentagemLargura,
          height: porcentagemLAltura,
          backgroundColor: "blue",
          justifyContent: "center",
          opacity: opacidadeAnimada,
          borderRadius: 50,
        }}
      >
        <Text style={{ textAlign: "center", color: "#fff" }}>Loading.....</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
