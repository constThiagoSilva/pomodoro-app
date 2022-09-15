import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

interface ThemeProps {
  children: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  const defaultTheme: DefaultTheme = {
    colors: {
      blue_900: "#00072d",
      blue_800: "#001c55",
      blue_700: "#0a2472",
      blue_300: "#0e6ba8",
      blue_100: "#a6e1fa",
    },
  };

  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};
