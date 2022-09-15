import { DefaultTheme, ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface ThemeProps {
  children: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  const theme: DefaultTheme = {
    colors: {
      blue_900: "#00072d",
      blue_800: "#001c55",
      blue_700: "#0a2472",
      blue_300: "#0e6ba8",
      blue_100: "#a6e1fa",
    },
  };
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
