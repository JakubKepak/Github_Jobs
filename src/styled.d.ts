import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius?: string;

    colors: {
      backgroundColor: string;
      backgroundColorItem: string;
      checkBoxBackground: string;
      checkBoxBackgroundHover: string;
      fontColorDark: string;
      fontColorLight: string;
      primary?: string;
      primaryLight?: string;
      primaryDark?: string;
      primaryVeryDark?: string;
      secondary?: string;
      secondaryLight?: string;
      secondaryDark?: string;
      secondaryVeryDark?: string;
    };
  }
}
