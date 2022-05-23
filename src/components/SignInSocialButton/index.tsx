import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { Button } from "./styles";

interface Props extends RectButtonProps {
  svg: React.FC<SvgProps>;
}

export const SignInSocialButton = ({ svg: Svg, ...rest }: Props) => (
  <Button {...rest}>
    <Svg height="50%" width="50%" />
  </Button>
);
