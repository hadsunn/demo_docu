import {themes as prismThemes} from 'prism-react-renderer';
import remarkFigureXref from './plugins/remark-figure-xref.js';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DocsAsCode',
  tagline: 'DaC',
  favicon: 'img/faviconV2.png',

  markdown: {
    format: 'detect',
  },
  plugins: [
    [
    '@docusaurus/plugin-content-docs',
      {
        id: 'comm',
        path: 'docs-comm',
        routeBasePath: 'comm',
        sidebarPath: require.resolve('./sidebarsComm.js'),
        versions: {
          current: {
            label: 'В разработке',
            banner: 'unreleased',
          },
          '18.3.1,6.13.1,5.17.1,4.22.1': {
            banner: 'none',
            label: '18.3.1, 6.13.1, 5.17.1, 4.22.1',
          },
          '18.4.1,6.14.1,5.18.1,4.23.1': {
            banner: 'none',
            label: '18.4.1, 6.14.1, 5.18.1, 4.23.1',
        }
      },
    },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cert',
        path: 'docs-cert',
        routeBasePath: 'cert',
        sidebarPath: require.resolve('./sidebarsCert.js'),
      },
    ],

    [
    require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: '/',
        language: ['en', 'ru'],
        hashed: true, // хеширование индекса для кэширования
        // searchResultLimits: 8, // макс. число результатов
        // searchResultContextMaxLength: 50, // длина контекста
      },
    ]
  ],
  // plugins: [require.resolve('@cmfcmf/docusaurus-search-local')],
  // module.exports = {
    // plugins: [require.resolve('docusaurus-lunr-search')],
    // },
  future: {
    // experimental_router: 'hash',
    //v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://hadsunn.github.io', // Set the production url of your site here
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  organizationName: 'datagile', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenAnchors: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  trailingSlash: false,

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
          // versions: {
          //   '18.3.1': {
          //     banner: 'none',
          //   },
          //   'test': {
          //     banner: 'none',
          //   },
          // },
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
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
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
          // {
          //   href: 'https://jatoba.ru',
          //   label: 'Jatoba.ru',
          //   position: 'left',
          // },
          {
            type: 'doc',
            docsPluginId: 'comm',
            docId: 'index',
            position: 'left',
            label: 'Коммерческая версия',
          },
          {
            type: 'doc',
            docsPluginId: 'cert',
            docId: 'index',
            position: 'left',
            label: 'Сертифицированная версия',
          },
          {
          type: 'docsVersionDropdown',
          docsPluginId: 'comm',
          position: 'right',
          dropdownActiveClassDisabled: true,
          versions: [
              '18.4.1,6.14.1,5.18.1,4.23.1',
              '18.3.1,6.13.1,5.17.1,4.22.1'
            ],
          },
          // {
          //   type: 'docsVersionDropdown',
          //   docsPluginId: 'cert',
          //   position: 'right',
          // },
          
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   versions: [
          //     '18.4.1,6.14.1,5.18.1,4.23.1',
          //     '18.3.1,6.13.1,5.17.1,4.22.1'
          //   ],
          // }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Footer1',
            items: [
              {
                label: 'test1',
                to: '/archive/install',
              },
            ],
          },
          {
            title: 'Footer2',
          },
          {
            title: 'Footer3',
            items: [
              {
                label: 'Footer3-1',
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