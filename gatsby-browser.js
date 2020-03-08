/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// gatsby-browser.js

import React from "react";
import { GlobalContextProvider } from './src/components/context/GlobalContext';

import "./src/styles/prism-atom-one-dark.css";
import 'typeface-noto-sans-kr';

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
)