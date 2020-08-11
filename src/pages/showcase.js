import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';

const Showcase = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout>
      Apps
    </Layout>
  );
};

export default Showcase;
