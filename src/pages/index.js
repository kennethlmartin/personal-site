import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content-wrapper">
      <img
        alt="avatar"
        className="avatar"
        src="https://ik.imagekit.io/wuaot0lqvg/tr:w-500,h-500,q-85/avatar-circle_nTp34hMVR.png"
      />
    </div>
  </Layout>
)

export default IndexPage
