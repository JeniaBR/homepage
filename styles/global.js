import { css } from '@emotion/react';

import { colors, typography } from './helpers';

import tokens from './tokens';

export const globalCss = css`
  /**
   * Box model like it should be:
   * http://www.paulirish.com/2012/box-sizing-border-box-ftw/
   */
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /**
   * Reset
   */
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-weight: 300;
    letter-spacing: 0.2px;
  }

  a {
    text-decoration: none;
    color: hotpink;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: none;
  }

  :root {
    ${tokens}
  }

  /**
   * Default font settings for all generic text
   */
  body {
    color: ${colors.grayDark};
    background-color: ${colors.light};
    font-family: ${typography.fontPrimary};
    font-size: 16px;
    font-weight: 400;
    /* Prevent scroll-bar from showing when positioning elements outside (to the page's right) */
    overflow-x: hidden;
  }
`;
