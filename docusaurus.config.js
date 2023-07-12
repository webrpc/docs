const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/palenight')
darkCodeTheme.plain.backgroundColor = '#1d1d1d'
lightCodeTheme.plain.backgroundColor = '#ffffff'

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'webrpc',
  tagline: '',
  url: 'https://webrpc.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],
  organizationName: 'webrpc', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

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
          exclude: ['docs-todo/**']
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  clientModules: [
    require.resolve('./src/load.js')
  ],
  plugins: [
    async function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        docsRouteBasePath: '/'
      }
    ],
    'docusaurus-plugin-sass'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/webrpc-banner.png',
      announcementBar: {
        id: 'announcementBar', // Increment on change
        content: `❤️ To follow webrpc updates or give us a star :) check out our <a target="_blank" rel="noopener noreferrer" href="https://github.com/webrpc">github</a>`
      },
      navbar: {
        logo: {
          alt: 'webrpc',
          src: 'img/webrpc-composite.svg',
        },
        items: [
          {
            href: 'https://github.com/webrpc',
            label: 'github',
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'typescript',
          'go',
          'markdown',
          'json',
          'jsx',
          'python',
          'csharp'
        ]
      },
      colorMode: {
        defaultMode: 'dark'
      }
    })
}
