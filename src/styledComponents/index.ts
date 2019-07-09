import * as styledComponents from 'styled-components';

import theme, { IThemeProps } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeProps>;

export { css, createGlobalStyle, keyframes, ThemeProvider, theme };
export default styled;