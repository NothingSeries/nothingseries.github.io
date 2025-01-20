import React from 'react';
import styles from './styles.module.css';

export default function VersionGrid({ versions }) {
  return (
    <div className={styles['version-grid']}>
      {versions.map(({ loader, numbers, ranges }) => (
        <div key={loader} className={styles['version-card']}>
          <div className={styles['version-name']}>{loader}</div>
          {numbers?.map(version => (
            <div key={version} className={styles['version-number']}>{version}</div>
          ))}
          {ranges?.map(({ from, until }, index) => (
            <div key={index} className={styles['version-range']}>
              {from} - {until}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
} 