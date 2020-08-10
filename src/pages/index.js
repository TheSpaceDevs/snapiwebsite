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
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        The latest Spaceflight related news, for you and your users
      </>
    ),
  },
  {
    title: <>Blogs</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Blogs for more detailed coverage
      </>
    ),
  },
  {
    title: <>Reports</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Space Station and Mission reports to keep up-to-date with ongoing missions
      </>
    ),
  },
  {
    title: <>Launch Library 2 Integration</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Integration with LL2 so you can get related news with launches
      </>
    ),
  },
  {
    title: <>Images</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Yet to come - Beautiful images from various sources
      </>
    ),
  },
  {
    title: <>Videos</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Yet to come - Awesome videos from various sources
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
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
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
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
              to={useBaseUrl('https://www.spaceflightnewsapi.net/documentation')}>
              Get Started
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
