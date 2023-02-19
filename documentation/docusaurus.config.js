// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        blog: {
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          showReadingTime: true,
        },
        docs: {
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  projectName: 'docusaurus', // Usually your repo name.
  tagline: 'Dinosaurs are cool',
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        links: [
          {
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
            title: 'Docs',
          },
          {
            items: [
              {
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                label: 'Stack Overflow',
              },
              {
                href: 'https://discordapp.com/invite/docusaurus',
                label: 'Discord',
              },
              {
                href: 'https://twitter.com/docusaurus',
                label: 'Twitter',
              },
            ],
            title: 'Community',
          },
          {
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                href: 'https://github.com/facebook/docusaurus',
                label: 'GitHub',
              },
            ],
            title: 'More',
          },
        ],
        style: 'dark',
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        items: [
          {
            docId: 'intro',
            label: 'Tutorial',
            position: 'left',
            type: 'doc',
          },
          { label: 'Blog', position: 'left', to: '/blog' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        title: 'My Site',
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
      },
    },

  title: 'My Site',

  // Set the production url of your site here

  url: 'https://your-docusaurus-test-site.com',
};

module.exports = config;
