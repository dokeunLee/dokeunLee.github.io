// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '이도근 — Study & Notes',
  tagline: '공부한 것과 경험한 것을 기록합니다',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-site.example.com',
  baseUrl: '/',

  organizationName: 'your-github-id',
  projectName: 'study-notes',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          breadcrumbs: true,
          showLastUpdateTime: false,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          blogTitle: '회고 & 기록',
          blogDescription: '발표, 세미나, 해커톤 등 학회/연구 활동 회고록',
          postsPerPage: 10,
          blogSidebarTitle: '최근 글',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
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
      image: 'img/social-card.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '이도근',
        logo: {
          alt: 'Lee Dogeun',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'About', position: 'left', activeBaseRegex: '^/$'},
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Knowledge',
            items: [
              {label: '시작하기', to: '/docs/intro'},
              {label: '논문 정리', to: '/docs/category/논문-정리'},
              {label: '강의 노트', to: '/docs/category/강의-노트'},
              {label: '기술 학습', to: '/docs/category/기술-학습'},
            ],
          },
          {
            title: 'Records',
            items: [
              {label: '전체 회고', to: '/blog'},
              {label: '논문 발표', to: '/blog/tags/논문-발표'},
              {label: '세미나', to: '/blog/tags/세미나'},
              {label: '해커톤', to: '/blog/tags/해커톤'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'About', to: '/'},
              {label: 'RSS', href: 'pathname:///blog/rss.xml'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} 이도근 (Lee Dogeun). Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash', 'yaml', 'json', 'latex'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

export default config;
