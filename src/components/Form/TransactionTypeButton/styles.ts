import styled, { DefaultTheme, css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface TransactionTypeButtonProps {
  type: "up" | "down";
  theme: DefaultTheme;
}

interface ButtonProps {
  theme: DefaultTheme;
  isActive: boolean;
  type: "up" | "down";
}
interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.View<ButtonProps>`
  width: 48%;
  border-width: ${({ isActive }: ContainerProps) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

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
export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 16px;
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
