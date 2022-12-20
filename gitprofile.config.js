// gitprofile.config.js

const config = {
  github: {
    username: 'XavierMillan', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'xavier-millan',
    twitter: '',
    facebook: '',
    instagram: 'xavi__m',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: 'xaviermillan.com',
    phone: '',
    email: 'xavierm@stanford.edu',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vQDRjMKxDQN12Ual10Zl-mrYvUkvdu4zOQETdGc0VC2EiXrrKyB-nFa-I283JYwY0EDynEsKmS7U4lz/pub', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'C++',
    'Node.js',
    'Git',
    'Google Cloud',
    'AWS',
    'CSS',
  ],
  experiences: [
    {
      company: 'Google',
      position: 'Computer Science Summer Institute',
      from: 'July 2022',
      to: 'August 2022',
      companyLink: 'https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute',
    },
    {
      company: 'Stanford',
      position: 'Frosh Council Representative and Executive Team Co-Chair',
      from: 'October 2022',
      to: 'Present',
      companyLink: 'https://stanford.edu',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2015',
    //   to: '2019',
    // },
    {
      institution: 'Stanfrd University',
      degree: 'Bachelor of Science in Computer Science',
      from: '2022',
      to: '2026',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'xaviermillan', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-KPC9H4WHGT', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
