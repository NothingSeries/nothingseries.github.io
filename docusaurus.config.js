// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Performance Docs',
  tagline: 'made by Nothing Series',
  favicon: 'img/lightning100.png',

  // Set the production url of your site here
  url: 'https://nothingseries.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'nothingseries', // GitHub org/user name
  projectName: 'nothingseries.github.io', // Repository name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    // @ts-ignore
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: "/docs",
        searchBarPosition: "right",
        searchResultLimits: 8,
        highlightSearchTermsOnTargetPage: true,
        searchContextByPaths: ["docs/mods"],
        docsDir: ["docs"],
        searchBarShortcutHint: true,
        searchResultContextMaxLength: 50,
        hideSearchBarWithNoSearchContext: false,
        explicitSearchResultPath: true,
        ignoreFiles: [/tutorial/],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/nothingseries/nothingseries.github.io/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card,
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Home',
        logo: {
          src: 'img/lightning100.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'modsSidebar',
            position: 'left',
            label: 'Mods',
          },
          {
            type: 'dropdown',
            label: 'Mod Loaders',
            position: 'left',
            items: [
              {
                label: 'NeoForge',
                to: '/docs/mods/neoforge',
              },
              {
                label: 'Forge',
                to: '/docs/mods/forge',
              },
              {
                label: 'Fabric',
                to: '/docs/mods/fabric',
              },
              {
                label: 'Quilt',
                to: '/docs/mods/quilt',
              },
            ],
          },
          {
            href: 'https://github.com/nothingseries/nothingseries.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'NeoForge Mods',
                to: '/docs/mods/neoforge',
              },
              {
                label: 'Forge Mods',
                to: '/docs/mods/forge',
              },
              {
                label: 'Fabric Mods',
                to: '/docs/mods/fabric',
              },
              {
                label: 'Quilt Mods',
                to: '/docs/mods/quilt',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/CS5BHP2w8j',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/nothingseries/nothingseries.github.io',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus. This documentation is open source.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    
};

export default config;
