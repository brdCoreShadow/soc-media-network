import * as SC from "./AppStyled";

import { useContext } from "react";
import ThemeContext from "./contest/styles/themeContext";
import { ThemeProvider } from "@emotion/react";
import lightTheme from "./styles/lightTheme";
import darkTheme from "./styles/darkTheme";

export const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const commonTheme = theme === "light" ? lightTheme : darkTheme;

console.log(theme);


  return (
    <ThemeProvider theme={commonTheme}>
      <SC.AppCon>
      </SC.AppCon>
    </ThemeProvider>
  );
};

export default App;
