import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = ({ title, onPress, ...rest }: Props) => (
  <Container {...rest} onPress={onPress}>
    <Title>{title}</Title>
  </Container>
);
