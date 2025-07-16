import * as SC from "./ThemeConsoleStyled";

const ThemeConsole: React.FC = () => {
  return (
    <SC.ThemeConsoleCon>
      <h3>Dark Mode</h3>
      <SC.ThemeBtn type="button">
        <div></div>
      </SC.ThemeBtn>
    </SC.ThemeConsoleCon>
  );
};

export default ThemeConsole;
