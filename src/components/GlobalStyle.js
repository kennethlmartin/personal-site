/**
 * @module components/GlobalStyle
 */

import emotionNormalize from 'emotion-normalize';
import React from 'react';
import { Global, css } from '@emotion/core';

const styles = css`
  ${emotionNormalize}

  html {
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  hr {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 16px;
    font-weight: normal;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:active,
  a:hover {
    outline-width: 0;
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
  }
`;

const GlobalStyle = () => (
  <Global styles={styles} />
);

export default GlobalStyle;
