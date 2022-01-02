import React from "react";

import { Container, Amount, Title } from "./styles";

interface Props {
  title: string;
  color: string;
  amount: string;
}

export const HistoryCard = ({ title, color, amount }: Props) => (
  <Container color={color}>
    <Title>{title}</Title>
    <Amount>{amount}</Amount>
  </Container>
);
