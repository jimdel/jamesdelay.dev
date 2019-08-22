import React from "react";

import Layout from "../components/layout";
import Bio from "../components/bio";
import SEO from "../components/seo";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `James`, `DeLay`]} />
    <Bio />
    <Portfolio />
    <Contact />
  </Layout>
);

export default IndexPage;
