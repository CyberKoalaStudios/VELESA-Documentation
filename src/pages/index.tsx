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
                <img src={require('@site/static/img/VELESA_LOGO.jpg').default} alt={"VELESA Logo"} style={{height:'352px', borderRadius: '10px', border: '1px solid #ddd'}}/>
                <div className={styles.buttons} >
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/getting-started/introduction">
                        Learn more
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