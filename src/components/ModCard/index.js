import React, { useState } from 'react';
import { getModInfo, extractModrinthId } from '../../services/modApi.js';
import { VerifiedBadge, OutdatedBadge } from '../Badges/index.js';
import styles from './styles.module.css';

export function ModCard({ mod, showImage = true }) {
  const [modImage, setModImage] = useState(mod.image || '/img/missing-texture.svg');
  const [isLoading, setIsLoading] = useState(false);

  const handleImageError = () => {
    console.log(`[ModCard] Image failed to load for ${mod.name}, using fallback`);
    setModImage('/img/missing-texture.svg');
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    console.log(`[ModCard] Image loaded successfully for ${mod.name}`);
    setIsLoading(false);
  };

  // Convert mod URLs to links array format for backward compatibility
  const getLinks = () => {
    if (mod.links) return mod.links;
    
    const links = [];
    if (mod.curseforgeUrl) links.push({ type: 'CurseForge', url: mod.curseforgeUrl });
    if (mod.modrinthUrl) links.push({ type: 'Modrinth', url: mod.modrinthUrl });
    if (mod.githubUrl) links.push({ type: 'GitHub', url: mod.githubUrl });
    if (mod.websiteUrl) links.push({ type: 'Website', url: mod.websiteUrl });
    return links;
  };

  const handleCardClick = (e) => {
    // Don't navigate if clicking on a link
    if (e.target.closest(`.${styles.modLink}`)) {
      return;
    }
    
    // Navigate to mod details page
    window.location.href = `/docs/mods/modpages/${mod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  };

  return (
    <div 
      className={`${styles.modCardLink} ${styles.clickable}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleCardClick(e);
        }
      }}
    >
      <div className={styles.modCard}>
        <div className={styles.modCardContent}>
          <div className={styles.modCardHeader}>
            {showImage && (
              <div className={styles.imageContainer}>
                <img 
                  src={modImage} 
                  alt={`${mod.name} logo`}
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                  className={`${styles.modImage} ${isLoading ? styles.loading : ''}`}
                />
              </div>
            )}
            <div>
              <h3 className={styles.modName}>
                {mod.name}
                {mod.status === 'approved' && <VerifiedBadge />}
                {mod.status === 'outdated' && <OutdatedBadge />}
              </h3>
              <p>{mod.description}</p>
            </div>
          </div>
          <div className={styles.modTags}>
            {mod.tags.map(tag => (
              <span 
                key={tag} 
                className={styles.tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.modLinks}>
          {getLinks().map(link => (
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
    </div>
  );
} 