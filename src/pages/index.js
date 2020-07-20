/**
 * @module index
 */

import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import Helmet from '../components/SEO';

const Avatar = styled.img`
  background-color: #fff;
  border: 5px solid #fff;
  border-radius: 50%;
  width: 250px;
`;

const Content = styled.div`
  align-items: center;
  background: rgb(195, 233, 228);
  background:
    linear-gradient(
      0deg,
      rgba(195, 233, 228, 0.75) 0%,
      rgba(195, 233, 228, 0.75) 50%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
`;

const IndexPage = () => (
  <Layout>
    <Helmet title="Home" />
    <Content>
      <Avatar
        alt="avatar"
        className="avatar"
        src="https://ik.imagekit.io/wuaot0lqvg/tr:w-500,h-500,q-85/avatar-circle_nTp34hMVR.png"
      />
    </Content>
  </Layout>
);

export default IndexPage;
