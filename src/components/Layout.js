/**
 * @module components/Layout
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import './Layout.css';

const Main = styled.main`
  background: rgb(195,233,228);
  background: linear-gradient(
    0deg,
    rgba(195, 233, 228, 0.75) 0%,
    rgba(195, 233, 228, 0.75) 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 100%);
  height: 100vh;
  position: relative;
  text-align: center;
  width: 100%;
`;

const Layout = ({ children }) => (
  <Main>{children}</Main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
