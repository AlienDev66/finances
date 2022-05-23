import theme from "../../global/styles/theme";
import { Title, LinearGradientBg } from "./styles";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <LinearGradientBg
      start={{ x: 0.2, y: 0.0 }}
      end={{ x: 0.9, y: 0.9 }}
      colors={[theme.colors.secondary, theme.colors.primary]}>
      <Title>{title}</Title>
    </LinearGradientBg>
  );
}

export default Header;
