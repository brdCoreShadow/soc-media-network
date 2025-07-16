export interface IChildProps {
  children: React.ReactNode;
}

export type ThemeMode = "light" | "dark";

export interface IStyleProps {
  difference: string; // e.g., "up" or "down"
  platform: string;
}

export interface IThemeContext {
  theme: ThemeMode;
  toggle: () => void;
}
