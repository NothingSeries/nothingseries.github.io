// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  modsSidebar: [
    {
      type: 'category',
      label: 'NeoForge Mods',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'mods/neoforge',
      },
      items: [
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
      link: {
        type: 'doc',
        id: 'mods/forge',
      },
      items: [
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
        {
          type: 'doc',
          id: 'mods/forge/1.16.5',
          label: '1.16.5',
        },
        {
          type: 'doc',
          id: 'mods/forge/1.12.2',
          label: '1.12.2',
        },
        {
          type: 'doc',
          id: 'mods/forge/1.7.10',
          label: '1.7.10',
        },
      ],
    },
    {
      type: 'category',
      label: 'Fabric Mods',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'mods/fabric',
      },
      items: [
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
        {
          type: 'doc',
          id: 'mods/fabric/1.16.5',
          label: '1.16.5',
        },
      ],
    },
    {
      type: 'category',
      label: 'Quilt Mods',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'mods/quilt',
      },
      items: [
        {
          type: 'doc',
          id: 'mods/quilt/1.21.1',
          label: '1.21.1',
        },
        {
          type: 'doc',
          id: 'mods/quilt/1.20.1',
          label: '1.20.1',
        },
        {
          type: 'doc',
          id: 'mods/quilt/1.16.5',
          label: '1.16.5',
        },
      ],
    },
    {
      type: 'category',
      label: 'Mod Details',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'mods/modpages/embeddium',
          label: 'Embeddium',
        },
        {
          type: 'doc',
          id: 'mods/modpages/better-fps---render-distance',
          label: 'Better FPS - Render Distance',
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
