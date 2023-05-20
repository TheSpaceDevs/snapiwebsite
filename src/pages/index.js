import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


const features = [
  {
    title: <>News</>,
    imageUrl: 'img/features/News.svg',
    description: (
      <>
        Get an overview of the latest Spaceflight news, from various sources! Easily link your users to the right websites
      </>
    ),
  },
  {
    title: <>Blogs</>,
    imageUrl: 'img/features/Blogs.svg',
    description: (
      <>
        Blogs often provide a more detailed overview of launches and missions. A must-have for the serious spaceflight enthusiast
      </>
    ),
  },
  {
    title: <>Reports</>,
    imageUrl: 'img/features/Reports.svg',
    description: (
      <>
        Space stations and other missions often publish their data. With SNAPI, you can include it in your app as well!
      </>
    ),
  },
  {
    title: <>Launch Library 2 Integration</>,
    imageUrl: 'img/features/LL2.svg',
    description: (
      <>
        Already using Launch Library 2 to get launches and events? Awesome! SNAPI offers integration so you can build relations between news and launches/events
      </>
    ),
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      description="The Spaceflight News API lets you add space related news to your apps.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to='https://api.spaceflightnewsapi.net/v4/docs'>
              Get Started v4
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
