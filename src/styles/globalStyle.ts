import { createGlobalStyle } from "@nfront/global-styles"
import theme from "../styledComponents/theme"

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
    line-height: 1.25em;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    color: ${theme.blackColor};
    font-size: ${theme.font16};
    box-sizing: border-box;
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
    color: #adc2cb;
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export default GlobalStyle
