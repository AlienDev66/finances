import React, { useState } from "react";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import BgImg from "../../assets/BG_IMG.png";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/auth";
import {
  Background,
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";
import { useTheme } from "styled-components";

interface SignInProps {}

export function SignIn({}: SignInProps) {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar conta google");
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar conta apple");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Background source={BgImg} resizeMode="cover">
        <Header>
          <TitleWrapper>
            <LogoSvg width={RFValue(120)} height={RFValue(68)} />
            <Title>
              Controle da{"\n"}melhor forma{"\n"}as suas finanças
            </Title>
          </TitleWrapper>

          <SignInTitle>
            Faça seu login com{"\n"}uma das contas abaixo
          </SignInTitle>
        </Header>

        <Footer>
          <FooterWrapper>
            <SignInSocialButton
              svg={GoogleSvg}
              onPress={handleSignInWithGoogle}
            />
            {Platform.OS === "ios" && (
              <SignInSocialButton
                svg={AppleSvg}
                onPress={handleSignInWithApple}
              />
            )}
          </FooterWrapper>

          {isLoading && (
            <ActivityIndicator
              color={theme.colors.shape}
              size="small"
              style={{ marginTop: 14 }}
            />
          )}
        </Footer>
      </Background>
    </Container>
  );
}
