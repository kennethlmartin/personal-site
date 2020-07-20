/**
 * @module 404
 */

import React from 'react';

import Layout from '../components/Layout';
import Helmet from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <Helmet title="404: Not found" />
    <h1>{'NOT FOUND'}</h1>
  </Layout>
);

export default NotFoundPage;
