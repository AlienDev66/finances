import React, { useState } from "react";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { Modal } from "react-native";
import { useForm } from "react-hook-form";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
} from "./styles";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { CategorySelect } from "../CategorySelect";
import { InputForm } from "../../components/Form/InputForm";

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [category, setCategory] = useState({
    key: "category",
    name: "category",
  });
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const { control, handleSubmit } = useForm();

  function handleTransactionTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleRegister(form: FormData) {
    const { name, amount } = form;
    const data = {
      name,
      amount,
      transactionType,
      category: category.key,
    };
    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm name="name" control={control} placeholder="Nome" />
          <InputForm name="amount" control={control} placeholder="Preço" />

          <TransactionsTypes>
            <TransactionTypeButton
              isActive={transactionType === "up"}
              title="Income"
              type="up"
              onPress={() => handleTransactionTypeSelect("up")}
            />
            <TransactionTypeButton
              isActive={transactionType === "down"}
              title="Outcome"
              type="down"
              onPress={() => handleTransactionTypeSelect("down")}
            />
          </TransactionsTypes>

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
