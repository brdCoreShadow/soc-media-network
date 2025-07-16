// theme.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    weight: {
      thin: string;
      extraLight: string;
      light: string;
      regular: string;
      medium: string;
      semiBold: string;
      bold: string;
      extraBold: string;
      black: string;
    };
    colors: {
      headWrapper: string;
      bgBody: string;
      title: string;
      content: string;
      bgItem: string;
      themeBtn:string;
    };
  }
}
