import React, { useState } from 'react';
import styles from './styles.module.css';

const VerifiedBadge = () => (
  <svg className={styles.approved} width="16" height="16" viewBox="0 0 122.88 121.86" fill="none">
    <path className="st0" fillRule="evenodd" clipRule="evenodd" d="M61.44,0.01c3.27-0.14,5.85,1,8.45,2.65c3.3,2.09,7.02,6.23,11.61,8.85c6.45,3.69,18.41-1.4,24.53,7.7 c3.57,5.3,3.74,9.46,4,13.57c0.29,4.43,1.06,8.51,5.6,14.51c7.51,9.93,9.07,16.54,5.2,23.43c-2.64,4.7-8.19,7.31-9.48,10.28 c-2.73,6.33,0.29,11.1-3.45,18.48c-2.6,5.12-6.61,8.49-11.95,10.21c-4.5,1.45-9.03-0.65-12.63,0.87 c-6.34,2.66-11.01,8.85-16.06,10.42c-1.95,0.6-3.89,0.9-5.82,0.89c-1.94,0.01-3.88-0.28-5.82-0.89 c-5.04-1.57-9.72-7.75-16.06-10.42c-3.61-1.52-8.13,0.58-12.63-0.87c-5.34-1.72-9.35-5.09-11.95-10.21 C11.23,92.1,14.26,87.33,11.52,81c-1.29-2.97-6.84-5.58-9.48-10.28c-3.87-6.89-2.3-13.5,5.2-23.43c4.54-6,5.31-10.08,5.6-14.51 c0.27-4.11,0.43-8.27,4-13.57c6.12-9.1,18.08-4.01,24.53-7.7c4.59-2.62,8.3-6.76,11.61-8.85C55.59,1.01,58.17-0.13,61.44,0.01 L61.44,0.01z" fill="currentColor"/>
    <path d="M50.83,53.9l7.86,7.48l13.53-13.75c1.34-1.36,2.18-2.45,3.83-0.75l5.36,5.49c1.76,1.74,1.67,2.76,0.01,4.38 L61.75,76.06c-3.5,3.43-2.89,3.64-6.44,0.12L41.81,62.75c-0.74-0.8-0.66-1.61,0.15-2.41l6.22-6.45 C49.11,52.91,49.86,52.97,50.83,53.9L50.83,53.9z" fill="white"/>
  </svg>
);

const OutdatedBadge = () => (
  <svg className={styles.outdated} width="16" height="16" viewBox="0 0 122.88 121.86" fill="none">
    <path className="st0" fillRule="evenodd" clipRule="evenodd" d="M61.44,0.01c3.27-0.14,5.85,1,8.45,2.65c3.3,2.09,7.02,6.23,11.61,8.85c6.45,3.69,18.41-1.4,24.53,7.7 c3.57,5.3,3.74,9.46,4,13.57c0.29,4.43,1.06,8.51,5.6,14.51c7.51,9.93,9.07,16.54,5.2,23.43c-2.64,4.7-8.19,7.31-9.48,10.28 c-2.73,6.33,0.29,11.1-3.45,18.48c-2.6,5.12-6.61,8.49-11.95,10.21c-4.5,1.45-9.03-0.65-12.63,0.87 c-6.34,2.66-11.01,8.85-16.06,10.42c-1.95,0.6-3.89,0.9-5.82,0.89c-1.94,0.01-3.88-0.28-5.82-0.89 c-5.04-1.57-9.72-7.75-16.06-10.42c-3.61-1.52-8.13,0.58-12.63-0.87c-5.34-1.72-9.35-5.09-11.95-10.21 C11.23,92.1,14.26,87.33,11.52,81c-1.29-2.97-6.84-5.58-9.48-10.28c-3.87-6.89-2.3-13.5,5.2-23.43c4.54-6,5.31-10.08,5.6-14.51 c0.27-4.11,0.43-8.27,4-13.57c6.12-9.1,18.08-4.01,24.53-7.7c4.59-2.62,8.3-6.76,11.61-8.85C55.59,1.01,58.17-0.13,61.44,0.01 L61.44,0.01z" fill="currentColor"/>
    <path d="M45 45L77 77M77 45L45 77" stroke="white" strokeWidth="8" strokeLinecap="round"/>
  </svg>
);

const TAG_CATEGORIES = {
  'Batch': ['Recommended', 'Outdated'],
  'Types': ['Client', 'Server'],
  'Features': ['Rendering', 'Memory', 'Lighting', 'Bugfix', 'Tpsfix', 'Debug', 'Networking', 'Fork',],
};

export function ModList({ mods, modLoader }) {
  const [selectedTags, setSelectedTags] = useState(new Set());

  const toggleTag = (tag) => {
    setSelectedTags(prev => {
      const newTags = new Set(prev);
      if (newTags.has(tag)) {
        newTags.delete(tag);
      } else {
        newTags.add(tag);
      }
      return newTags;
    });
  };

  const filteredMods = selectedTags.size === 0
    ? mods
    : mods.filter(mod => 
        Array.from(selectedTags).every(tag => {
          if (tag === 'Recommended') return mod.status === 'approved';
          if (tag === 'Outdated') return mod.status === 'outdated';
          return mod.tags.includes(tag);
        })
      );

  const getModPageUrl = (modName) => {
    return `/docs/mods/modpages/${modName.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.tagFilters}>
          <h3>Filter by Tags</h3>
          {Object.entries(TAG_CATEGORIES).map(([category, tags]) => (
            <div key={category} className={styles.tagCategory}>
              <h4>{category}</h4>
              <div className={styles.tagButtons}>
                {tags.map(tag => (
                  <button
                    key={tag}
                    className={`${styles.tagButton} ${selectedTags.has(tag) ? styles.tagButtonActive : ''}`}
                    onClick={() => toggleTag(tag)}
                    data-tag={tag}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.modGrid}>
          {filteredMods.map(mod => (
            <a 
              key={mod.name} 
              href={getModPageUrl(mod.name)}
              className={styles.modCardLink}
            >
              <div className={styles.modCard}>
                <div className={styles.modCardContent}>
                  <h3 className={styles.modName}>
                    {mod.name}
                    {mod.status === 'approved' && <VerifiedBadge />}
                    {mod.status === 'outdated' && <OutdatedBadge />}
                  </h3>
                  <p>{mod.description}</p>
                  <div className={styles.modTags}>
                    {mod.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={styles.tag}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleTag(tag);
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.modLinks}>
                  {mod.links.map(link => (
                    <a
                      key={link.type}
                      href={link.url}
                      className={styles.modLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {link.type}
                    </a>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 
