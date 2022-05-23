import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ImageBackgroundProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Background = styled.ImageBackground<ImageBackgroundProps>`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Header = styled.View`
  width: 100%;
  height: 70%;

  justify-content: flex-end;
  align-items: center;
`;
export const TitleWrapper = styled.View`
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  margin-top: 45px;
`;
export const SignInTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  margin-top: 80px;
  margin-bottom: 67px;
`;
export const Footer = styled.View`
  width: 100%;
  height: 30%;
`;
export const FooterWrapper = styled.View`
  width: 100%;
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 110px 0px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
