import { View, Text } from "react-native";
import React from "react";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components/native";

const App = () => {
  const coresTamanho = {
    bg: "#191a24",
    color: "yellow",
    tamanho: 50,
  };

  return (
    <ThemeProvider theme={coresTamanho}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
