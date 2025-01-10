// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  modsSidebar: [
    {
      type: 'category',
      label: 'NeoForge Mods',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'mods/neoforge',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'mods/neoforge/1.21.1',
          label: '1.21.1',
        },
        {
          type: 'doc',
          id: 'mods/neoforge/1.20.1',
          label: '1.20.1',
        },
      ],
    },
    {
      type: 'category',
      label: 'Forge Mods',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'mods/forge',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'mods/forge/1.21.1',
          label: '1.21.1',
        },
        {
          type: 'doc',
          id: 'mods/forge/1.20.1',
          label: '1.20.1',
        },
      ],
    },
    {
      type: 'category',
      label: 'Fabric Mods',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'mods/fabric',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'mods/fabric/1.21.1',
          label: '1.21.1',
        },
        {
          type: 'doc',
          id: 'mods/fabric/1.20.1',
          label: '1.20.1',
        },
      ],
    },
    {
      type: 'doc',
      id: 'tag-reference',
      label: 'Tags Reference',
    },
  ],
};

export default sidebars;
