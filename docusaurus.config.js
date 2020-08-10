module.exports = {
  title: 'Spaceflight News API',
  tagline: 'Spaceflight related news for your apps',
  url: 'https://www.spaceflightnewsapi.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'spaceflightnewsapi', // Usually your GitHub org/user name.
  projectName: 'spaceflightnewsapi', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Spaceflight News API',
      logo: {
        alt: 'SNAPI Logo',
        src: 'img/SNAPI_logo.png',
      },
      items: [
        {
          to: 'news/',
          activeBasePath: 'news',
          label: 'News',
          position: 'left',
        },
        {
          to: 'apps/',
          activeBasePath: 'apps',
          label: 'Apps',
          position: 'left',
        },
        {
          to: 'https://www.spaceflightnewsapi.net/documentation',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'https://thespacedevs.com',
          activeBasePath: 'thespacedevs',
          label: 'The Space Devs',
          position: 'right',
        },
        {
          href: 'https://github.com/spaceflightnewsapi/spaceflightnewsapi',
          label: 'GitHub',
          position: 'right',
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
              label: 'Documentation',
              to: 'https://www.spaceflightnewsapi.net/documentation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/p7ntkNA',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/the_snapi',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/spaceflightnewsapi/spaceflightnewsapi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spaceflight News API. Built with Docusaurus, Strapi and JetBrains Software.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
