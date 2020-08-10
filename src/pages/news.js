import React, {useState, useEffect} from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';
import axios from 'axios';
import styles from './styles.module.css';


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

  const News = () => {
    return news.map(newsItem => {
      return (
        <div key={newsItem.id} className="col col--3 " style={{margin: '1rem 0 1rem 0'}}>
          <div className={styles.cardContainer}>
            <div className="card" style={{height: '100%'}}>
              <div className="card__image">
                <img
                  src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                  alt={newsItem.title}
                  title={newsItem.title}
                />
              </div>
              <div className="card__body">
                <h4>{newsItem.title}</h4>
                <h6>{newsItem.newsSite}</h6>
                <small>{newsItem.summary}</small>
              </div>
              <div className="card__footer">
                <a href={newsItem.url} className="button button--primary button--block">Open</a>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <News />
        </div>
      </div>
    </Layout>
  );
};

export default News;
