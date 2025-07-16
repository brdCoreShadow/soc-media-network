import { useThemeContext } from "@/contest/styles/useThemeContext";
import * as SC from "./ThemeConsoleStyled";

const ThemeConsole: React.FC = () => {
  const {theme, toggle } = useThemeContext();

const toggleTheme = () => toggle()

  return (
    <SC.ThemeConsoleCon>
      <h3>Dark Mode</h3>
      <SC.ThemeBtn type="button" onClick={toggleTheme} $mode={theme}>
        <div></div>
      </SC.ThemeBtn>
    </SC.ThemeConsoleCon>
  );
};

export default ThemeConsole;
