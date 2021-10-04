const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'WebRPC',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'webrpc', // Usually your GitHub org/user name.
  projectName: 'webrpc', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/',
          editUrl: 'https://github.com/webrpc/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), {
      indexDocs: true,
      docsRouteBasePath: '/',
    }],
   'docusaurus-plugin-sass'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Logo',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            href: 'https://github.com/webrpc',
            className: 'navbar-item-github',
            position: 'right',
          },
          {
            href: 'https://twitter.com/0xHorizonGames',
            className: 'navbar-item-twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          alt: "Horizon Blockchain Games Logo",
          src: "/img/horizon-dark-mode.svg",
          href: "https://horizon.io",
          // srcDark: "/img/horizon-dark-mode.svg",
        },
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/',
              }
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/webrpc',
              },
            ],
          }
        ],

        copyright: `Copyright © ${new Date().getFullYear()} https://github.com/webrpc authors`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['typescript', 'go',
        'markdown', 'json',
        'jsx', 'python'],
      },
      colorMode: {
        defaultMode: 'dark',
      },
    }),
});
