import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { API } from '@stoplight/elements';
import '@stoplight/elements/styles.min.css';
import useBreakpoint from '../lib/useBreakPoint';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  
  const size = useBreakpoint();
  return (
    <>
    <header className="header">
      <a href="/" className="header__logo"><h1>bradn</h1></a>
    </header>
      <main>
        <API
          layout={size === 'sm' ? 'stacked' : 'sidebar'}
          apiDescriptionUrl="/api/v1.yaml"
          router="hash"
        />
      </main>
      </>
  );
}
