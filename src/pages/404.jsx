import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{ textAlign: `center`, marginTop: `1rem` }}>NOT FOUND</h1>
    <p style={{ textAlign: `center` }}>This page does not exist...</p>
  </Layout>
);

export default NotFoundPage;
