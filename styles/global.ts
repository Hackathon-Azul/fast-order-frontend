import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

type GlobalStylesProps = {
  defaultHeader?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  Partial<DefaultTheme>,
  GlobalStylesProps
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
`;

export default GlobalStyles;
