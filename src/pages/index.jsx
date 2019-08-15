import React from "react";

import Layout from "../components/layout";
import Bio from "../components/bio";
import SEO from "../components/seo";
import Projects from "../components/projects";
import Contact from "../components/contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `James`, `DeLay`]} />
    <Bio />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
