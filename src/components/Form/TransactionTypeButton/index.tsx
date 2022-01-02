import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Icon, Title, Button } from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends RectButtonProps {
  title: string;
  type: "up" | "down";
  isActive: boolean;
}

export const TransactionTypeButton = ({
  title,
  type,
  isActive,
  ...rest
}: Props) => (
  <Container isActive={isActive} type={type}>
    <Button {...rest}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Button>
  </Container>
);
