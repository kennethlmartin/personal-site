import React from 'react';

import Avatar from '../components/Avatar';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content-wrapper">
      <div className="avatar-wrapper">
        <Avatar />
      </div>
      <div className="content-lower" />
    </div>
    <div className="bg-upper" />
    <div className="bg-lower" />
  </Layout>
)

export default IndexPage
