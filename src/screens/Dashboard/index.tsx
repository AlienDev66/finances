import React from "react";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";
import HighlightCard from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "13/04/2020",
    },

    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: { name: "Alimentação", icon: "coffee" },
      date: "10/04/2020",
    },

    {
      id: "3",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: { name: "Vendas", icon: "shopping-bag" },
      date: "13/04/2020",
    },

    {
      id: "4",
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$ 59,00",
      category: { name: "Alimentação", icon: "dollar-sign" },
      date: "10/04/2020",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/AlienDev66.png" }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entrada"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtrator={(item: DataListProps) => item.id}
          renderItem={({ item }: { item: DataListProps }) => (
            <TransactionCard data={item} />
          )}
        />
      </Transactions>
    </Container>
  );
}

export default Dashboard;
