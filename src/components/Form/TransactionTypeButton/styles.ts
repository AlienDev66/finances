import styled, { DefaultTheme, css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionTypeButtonProps {
  type: "up" | "down";
  theme: DefaultTheme;
}

interface ButtonProps {
  theme: DefaultTheme;
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: ${({ isActive, type }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  padding: 16px;

  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }: TransactionTypeButtonProps) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;
