import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/mods/neoforge"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 16px' }}>
            <img 
              alt="neoforge" 
              height="24" 
              src="/img/neoforge_vector_compact-minimal.svg"
            />
            NeoForge
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/mods/forge"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 16px' }}>
            <img 
              alt="forge" 
              height="24" 
              src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/supported/forge_vector.svg"
            />
            Forge
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/mods/fabric"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 16px' }}>
            <img 
              alt="fabric" 
              height="24" 
              src="https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/cozy-minimal/supported/fabric_vector.svg"
            />
            Fabric
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features} style={{ marginTop: '4rem' }}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4', styles.featureCard)}>
            <h3>🔍 Easy to Navigate</h3>
            <p>Find mods quickly using our tag-based search system</p>
          </div>
          <div className={clsx('col col--4', styles.featureCard)}>
            <h3>⚙️ Version Support</h3>
            <p>Filter mods by Minecraft versions from 1.7.10 to 1.21.1</p>
          </div>
          <div className={clsx('col col--4', styles.featureCard)}>
            <h3>🧩 Mod Loaders</h3>
            <p>Support for Forge, Fabric, and NeoForge mods</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="A comprehensive wiki for Minecraft performance mods">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
