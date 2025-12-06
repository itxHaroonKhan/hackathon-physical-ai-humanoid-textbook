import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Learning Physical AI and Robotics',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://itxHaroonKhan.github.io',
  // GitHub Pages repo page: use '/repo-name/'
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'itxHaroonKhan', // Your GitHub username
  projectName: 'physical-ai-humanoid-robotics-textbook', // Your repo name
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/itxHaroonKhan/physical-ai-humanoid-robotics-textbook/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/itxHaroonKhan/physical-ai-humanoid-robotics-textbook/edit/main/',
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
      image: 'img/ph-ai-logo.png',
      navbar: {
        title: 'Physical AI & Humanoid Robotics Textbook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ph-ai-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          {
            href: 'https://github.com/itxHaroonKhan',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            i18n: {
              defaultLocale: 'en',
              locales: ['en', 'ur'],
              localeConfigs: {
                ur: {
                  label: 'اردو',
                  direction: 'rtl',
                },
              },
            },
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
                label: 'Introduction',
                to: '/docs/introduction/intro',
              },
            ],
          },
          {
            title: 'Social Profiles',
            items: [
              {
                label: 'Instagram',
                href: 'https://instagram.com/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/i',
              },
              {
                label: '(X)Twitter',
                href: 'https://x.com/su',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/itxHaroonKhan/physical-ai-humanoid-robotics-textbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook, Built with ❤️ by Haroon Rasheed.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
