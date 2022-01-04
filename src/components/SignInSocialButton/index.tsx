import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { Title, Button, ImageContainer } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export const SignInSocialButton = ({ title, svg: Svg, ...rest }: Props) => (
  <Button {...rest}>
    <ImageContainer>
      <Svg />
    </ImageContainer>
    <Title>{title}</Title>
  </Button>
);
