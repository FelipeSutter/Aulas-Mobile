import styled from "styled-components/native";
import { View, Text } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
`;

export const Title = styled.Text`
  font-size: ${(props) => props.theme.tamanho};
  color: ${(props) => props.theme.color};
`;
