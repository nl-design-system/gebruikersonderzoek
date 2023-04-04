import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Onderzoeken bekijken',
    description: (
      <>
        Je kan de onderzoeken op deze pagina zoeken met de zoekbalk rechtsboven, of{' '}
        <Link to="/docs/onderzoek-bekijken">navigeren door bestaande onderzoeken</Link>
      </>
    ),
  },
  {
    title: 'Onderzoek delen',
    description: (
      <>
        Heb je een onderzoek dat je wilt delen met mensen binnen en buiten je organisatie?{' '}
        <Link to="docs/onderzoeken-delen">Plaats het eenvoudig op deze site</Link>.
      </>
    ),
  },
  {
    title: 'Vragen?',
    description: (
      <>
        Als je meer weten over hoe dit initiatief werkt,{' '}
        <Link to="docs/vragen">hebben we wat zaken op een rijtje gezet</Link>.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
