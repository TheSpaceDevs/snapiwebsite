module.exports = {
  title: 'Spaceflight News API',
  tagline: 'The Most Complete Spaceflight Related News API 🚀',
  url: 'https://www.spaceflightnewsapi.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'spaceflightnewsapi', // Usually your GitHub org/user name.
  projectName: 'spaceflightnewsapi', // Usually your repo name.
  themeConfig: {
    image: 'img/SNAPI.png',
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        'Keep the servers going! Consider <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/bePatron?u=32219121">becoming a TSD Patron</a> or <a target="_blank" rel="noopener noreferrer" href="https://ko-fi.com/derkweijers">give a one-time donation!</a>',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    navbar: {
      title: 'Spaceflight News API',
      logo: {
        alt: 'SNAPI Logo',
        src: 'img/SNAPI_logo.png',
      },
      items: [
        {
          to: `https://api.spaceflightnewsapi.net/v3/documentation`,
          label: 'Documentation',
          position: 'left',
        },
        {
          to: 'users/',
          activeBasePath: 'users',
          label: 'Users',
          position: 'left',
        },
        {
          to: 'https://thespacedevs.com',
          label: 'The Space Devs',
          position: 'right',
        },
        {
          to: 'https://discord.gg/p7ntkNA',
          label: 'Discord',
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
              to: `https://api.spaceflightnewsapi.net/v3/documentation`,
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
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/snapi/',
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
            {
              label: 'The Space Devs',
              href: 'https://thespacedevs.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Spaceflight News API. Built with Docusaurus and Strapi.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
