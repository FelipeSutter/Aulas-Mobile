import { View, Text } from "react-native";
import { useEffect, useState } from "react";

const Saudacao = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    // pega a hora baseado no utc do local;
    const hora = new Date().getUTCHours;

    const res = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

    setResponse(res);
  }, []);

  return (
    <View>
      <Text>{response}</Text>
    </View>
  );
};

export default Saudacao;
