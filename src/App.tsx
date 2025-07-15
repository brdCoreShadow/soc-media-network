import * as SC from "./AppStyled";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";
import { useThemeContext } from "./contest/styles/useThemeContext";

export const App: React.FC = () => {
  const { theme } = useThemeContext();

  const commonTheme = theme === "light" ? lightTheme : darkTheme;

  console.log(theme);

  return (
    <EmotionThemeProvider theme={commonTheme}>
      <SC.AppCon>
      </SC.AppCon>
    </EmotionThemeProvider>
  );
};

export default App;