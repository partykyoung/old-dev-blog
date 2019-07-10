import { createGlobalStyle } from '@nfront/global-styles';
import theme from '../styledComponents/theme';

const GlobalStyle = createGlobalStyle`
  html, body, 
  h1, h2, h3, h4, h5, h6,
  div, p, span,
  blockquote, applet, object, iframe,
  pre, a, 
  abbr, acronym, address,
  big, cite, code,
  del, dfn, em,
  font, img, 
  ins, kbd, q, s,
  samp, small,
  strike, strong,
  sub, sup, tt, var,
  dl, dt, dd,
  ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
  }
  body,
  input,
  textarea,
  select,
  button,
  table {
    font-size: ${theme.font14};
    line-height: 1.25em;
  }

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    color: ${theme.blackColor};
    box-sizing: border-box;
  }
 
  body {
    background-color: ${theme.bodyColor}
  }

  img,
  fieldset {
    border: 0;
  }
  
  ul,
  ol {
    list-style: none;
  }

  em,
  address {
    font-style: normal;
  }

  a,
  a:hover,
  a:active,
  a:focus {
    color: ${theme.primaryColor};
    text-decoration: none;
    box-sizing: border-box;
  }

  
  #___gatsby {
    position: relative;
    min-height: 100%;
  }
`;

export default GlobalStyle;