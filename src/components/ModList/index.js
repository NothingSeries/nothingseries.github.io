import React, { useState } from 'react';
import styles from './styles.module.css';
import { ModCard } from '../ModCard/index.js';
import { TAG_CATEGORIES } from '../../data/tags.js';

export function ModList({ mods, modLoader }) {
  const [showImages, setShowImages] = useState(true);
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

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.tagFilters}>
          <h3>Filter by Tags</h3>
          <div className={styles.toggleContainer}>
            <span className={styles.toggleLabel}>Show Images</span>
            <label className={styles.toggleSwitch}>
              <input
                type="checkbox"
                checked={showImages}
                onChange={(e) => setShowImages(e.target.checked)}
              />
              <span className={styles.toggleSlider}></span>
            </label>
          </div>
          {Object.entries(TAG_CATEGORIES).filter(([category]) => category !== 'Display').map(([category, tags]) => (
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
            <ModCard 
              key={mod.name} 
              mod={mod} 
              showImage={showImages}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 
