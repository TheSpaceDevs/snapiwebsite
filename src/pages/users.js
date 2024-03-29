import React from 'react';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css'
import apps from '../data/apps.json'

const Users = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  const Apps = () => {
    return apps.map(app => {
      return (
        <div key={app.name} className={clsx("col col--3", styles.appCol)}>
          <div className={clsx("card", styles.appCard)}>
            <div className="card__header">
              <div className="avatar">
                <img
                  className="avatar__photo"
                  src={app.image}
                />
                <div className="avatar__intro">
                  <h4 className="avatar__name">{app.name}</h4>
                  <small className="avatar__subtitle">
                    {
                      app.platforms.map(platform => {
                        return <span className="badge badge--primary" style={{marginLeft: 1, marginRight: 1}}>{platform}</span>
                      })
                    }
                  </small>
                </div>
              </div>
            </div>
            <div className="card__footer">
                <a href={app.website} target="_blank" className="button button--secondary">Website</a>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <Layout
      title="Users"
      description="These apps and services are using the Spaceflight News API">
      <div className="container">
        <div className="row" style={{marginBottom: "2rem"}}>
          <Apps/>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
