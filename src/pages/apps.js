import React, {useState, useEffect} from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const newsResult = await axios.get('http://localhost:1337/articles')
    setNews(newsResult.data)
  }

  return (
    <Layout>
      Apps
    </Layout>
  );
};

export default News;
