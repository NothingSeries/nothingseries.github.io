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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
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
        copyright: `Copyright © ${new Date().getFullYear()} Nothing Series, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
