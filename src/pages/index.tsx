import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import styles from './index.module.scss';
 

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <img src={require('@site/static/img/VELESA_LOGO.jpg').default} alt={"VELESA Logo"} style={{maxHeight: '352px', maxWidth: '100%', borderRadius: '10px', border: '2px solid #ddd'}}/>
                <div className="" style={{marginBottom: '3rem'}}></div>
                <div className={styles.buttons} >
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/getting-started/introduction">
                        Getting Started
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={""}
            description="Robust components and tools crafted to simplify the creation of intricate gameplay mechanics in Unreal Engine 5.">
            <HomepageHeader/>
            <main>
            </main>
        </Layout>
    );
}
