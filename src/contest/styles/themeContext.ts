import { ThemeMode } from "@/utils/types";
import { createContext } from "react";


interface IThemeContext {
  theme: ThemeMode;
  toggle: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);


export default ThemeContext;