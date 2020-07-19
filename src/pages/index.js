/**
 * @module pages/index
 */

import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Avatar = styled.img`
  background-color: #FFF;
  border-radius: 50%;
  border: 5px solid #FFF;
  width: 250px;
`;

const Content = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Content>
      <Avatar
        alt="avatar"
        className="avatar"
        src="https://ik.imagekit.io/wuaot0lqvg/tr:w-500,h-500,q-85/avatar-circle_nTp34hMVR.png"
      />
    </Content>
  </Layout>
)

export default IndexPage
