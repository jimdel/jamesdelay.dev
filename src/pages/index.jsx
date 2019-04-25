import React from "react";

import Layout from "../components/layout";
import Bio from "../components/bio";
import SEO from "../components/seo";
import Projects from "../components/projects";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `James`, `DeLay`]} />
    <Bio />
    <Projects />
  </Layout>
);

export default IndexPage;
