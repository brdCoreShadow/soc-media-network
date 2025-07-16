import { IThemeContext } from "@/utils/types";
import { createContext } from "react";



const ThemeContext = createContext<IThemeContext | undefined>(undefined);


export default ThemeContext;