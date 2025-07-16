import * as SC from "./AppStyled";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";
import { useThemeContext } from "./contest/styles/useThemeContext";
import Header from "./layouts/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import ThemeConsole from "./components/ThemeConsole/ThemeConsole";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import Followers from "./components/Followers/Followers";
import Overview from "./components/Overview/Overview";

export const App: React.FC = () => {
  const { theme } = useThemeContext();

  const commonTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <EmotionThemeProvider theme={commonTheme}>
      <SC.AppCon>
        <Header>
          <Dashboard />
          <ThemeConsole />
        </Header>
        <SharedLayout>
          <Followers />
          <Overview/>
        </SharedLayout>
      </SC.AppCon>
    </EmotionThemeProvider>
  );
};

export default App;
