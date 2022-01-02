import React, { useEffect, useState, useCallback } from "react";
import { ActivityIndicator } from "react-native";
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
  LogoutButton,
  LoadContainer,
} from "./styles";
import HighlightCard from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dataKey } from "../Register";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlighProps {
  amount: string;
  lastTransaction: string;
}

interface HighlightDataProps {
  entries: HighlighProps;
  expansive: HighlighProps;
  total: HighlighProps;
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightDataProps>(
    {} as HighlightDataProps
  );
  const theme = useTheme();

  function getLastTransactionData(
    collection: DataListProps[],
    type: "positive" | "negative"
  ) {
    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collection
          .filter((transaction) => transaction.type === type)
          .map((transaction) => new Date(transaction.date).getTime())
      )
    );

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      "pt-AO",
      { month: "long" }
    )}`;
  }
  async function loadTransactions() {
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormated: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-AO", {
          style: "currency",
          currency: "AOA",
        });

        const date = Intl.DateTimeFormat("pt-AO", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    const lastTransactionEntries = getLastTransactionData(
      transactions,
      "positive"
    );
    const lastTransactionExpensives = getLastTransactionData(
      transactions,
      "negative"
    );
    const totalInterval = `01 a ${lastTransactionExpensives}`;

    const total = entriesTotal - expensiveTotal;
    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-AO", {
          style: "currency",
          currency: "AOA",
        }),
        lastTransaction: lastTransactionEntries,
      },
      expansive: {
        amount: expensiveTotal.toLocaleString("pt-AO", {
          style: "currency",
          currency: "AOA",
        }),
        lastTransaction: lastTransactionExpensives,
      },
      total: {
        amount: total.toLocaleString("pt-AO", {
          style: "currency",
          currency: "AOA",
        }),
        lastTransaction: totalInterval,
      },
    });
    setTransactions(transactionsFormated);
    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
    // AsyncStorage.removeItem(dataKey);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.secondary} size="large" />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={{ uri: "https://github.com/AlienDev66.png" }} />
                <User>
                  <UserGreeting>Olá, </UserGreeting>
                  <UserName>Rodrigo</UserName>
                </User>
              </UserInfo>
              <LogoutButton onPress={() => {}}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>
          <HighlightCards>
            <HighlightCard
              type="up"
              title="Entrada"
              amount={highlightData?.entries?.amount}
              lastTransaction={`Última entrada dia ${highlightData.entries.lastTransaction}`}
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData?.expansive?.amount}
              lastTransaction={`Última saída dia ${highlightData.expansive.lastTransaction}`}
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData?.total?.amount}
              lastTransaction={highlightData?.total?.lastTransaction}
            />
          </HighlightCards>
          <Transactions>
            <Title>Listagem</Title>
            <TransactionList
              data={transactions}
              keyExtrator={(item: DataListProps) => item.id}
              renderItem={({ item }: { item: DataListProps }) => (
                <TransactionCard data={item} />
              )}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
}
