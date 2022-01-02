import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Container } from "./styles";
import { Input } from "../Input";

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export const InputForm = ({ control, name, ...rest }: Props) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
    </Container>
  );
};
