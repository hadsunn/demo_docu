// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkFigureXref from './plugins/remark-figure-xref.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Postgres',
  tagline: 'Postgresql',
  favicon: 'img/faviconV2.png',

  markdown: {
    format: 'detect',
  },
  // plugins: [require.resolve('docusaurus-lunr-search')],
  // plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],
  // module.exports = {
  //   plugins: [require.resolve('docusaurus-lunr-search')],
//  }
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hadsunn.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/demo_docu/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'datagile', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenAnchors: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars_pg.js',
	        routeBasePath: '/',
          remarkPlugins: [remarkFigureXref],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({docs: {
        sidebar: {autoCollapseCategories: true,},
          },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Jatoba',
        logo: {
          alt: 'My Site Logo',
          //src: 'img/logo.svg',
          src: 'img/jatoba.png',
        },
        items: [
          {
            href: 'https://jatoba.ru',
            label: 'Jatoba.ru',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};



export default config;
//export default {
//  plugins: [require.resolve('docusaurus-lunr-search')],
//}
