/**
 * @module components/Layout
 */

import PropTypes from 'prop-types';
import React from 'react';

import GlobalStyle from '../components/GlobalStyle';

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <main>
      {children}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
