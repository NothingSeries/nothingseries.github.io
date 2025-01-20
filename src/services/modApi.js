const MODRINTH_API_URL = 'https://api.modrinth.com/v2';

export function extractModrinthId(url) {
  if (!url) return null;
  const match = url.match(/modrinth\.com\/mod\/([^/]+)/);
  return match ? match[1] : null;
}

export async function getModInfo(modrinthUrl) {
  try {
    const modId = extractModrinthId(modrinthUrl);
    if (!modId) return null;

    const response = await fetch(`${MODRINTH_API_URL}/project/${modId}`);
    if (!response.ok) {
      console.warn(`No Modrinth data found for ${modId}: ${response.status}`);
      return null;
    }
    
    const data = await response.json();
    return {
      logo: data.icon_url ? { url: data.icon_url } : null
    };
  } catch (error) {
    console.error('Error fetching mod info:', error);
    return null;
  }
}

// Helper function to create a mod with minimal required info
export function createMod({ 
  name,
  description,
  modrinthUrl = null,
  githubUrl = null,
  curseforgeUrl = null,
  status = null,
  tags = [],
  image = null
}) {
  const links = [];
  
  // Maintain specific order: CurseForge, Modrinth, GitHub
  if (curseforgeUrl) {
    links.push({ type: 'CurseForge', url: curseforgeUrl });
  }
  if (modrinthUrl) {
    links.push({ type: 'Modrinth', url: modrinthUrl });
  }
  if (githubUrl) {
    links.push({ type: 'GitHub', url: githubUrl });
  }

  return {
    name,
    description,
    links,
    status,
    tags,
    image
  };
}

// Helper to create multiple mods at once and sort them
export function createMods(modsData) {
  return modsData
    .map(modData => createMod(modData))
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Example usage in a page:
/*
import { createMods } from '@site/src/services/modApi';

const mods = createMods([
  {
    name: "Mod Name",
    description: "A short description",
    curseforgeUrl: "https://curseforge.com/minecraft/mods/example", // Listed first
    modrinthUrl: "https://modrinth.com/mod/example", // Listed second
    githubUrl: "https://github.com/example/mod", // Listed third
    status: "approved", // Optional, can be "approved" or "outdated"
    tags: ["Client", "Performance"] // All tags must be explicitly listed
  }
]);

<ModList mods={mods} />
*/ 