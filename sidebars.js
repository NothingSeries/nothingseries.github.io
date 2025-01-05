// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  modsSidebar: [
    {
      type: 'category',
      label: 'NeoForge Mods',
      link: {
        type: 'doc',
        id: 'mods/neoforge',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Forge Mods',
      link: {
        type: 'doc',
        id: 'mods/forge',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'Fabric Mods',
      link: {
        type: 'doc',
        id: 'mods/fabric',
      },
      items: [],
    },
    {
      type: 'doc',
      id: 'tag-reference',
      label: 'Tags Reference',
    },
  ],
};

export default sidebars;
