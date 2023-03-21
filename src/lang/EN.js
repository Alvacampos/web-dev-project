const WORK_ITEMS = [
  {
    title: 'Globant',
    startDate: '20180801',
    endDate: '20201201',
    subtitle: 'Hired as Jr Web developer.',
    skill: [
      'HTML',
      'CSS',
      'Storybook',
      'Highcharts',
      'Vue',
      '.Net',
      'Front End',
      'Back End',
    ],
    projects: [
      {
        title: 'Project: eVestment',
        description:
          'Web development focused in VueJs (use of state, store(vuex), router), worked with Highcharts and VueJs to make reusable components for the clients’ page. And minor exp with backend using .net core and nodejs.',
      },
      {
        title: 'Project: Smile Direct Club',
        description:
          'Web development with frontend technologies such VueJs and NuxtJs focus on page performance using nuxt server-side capacity. Use of vue-axios, bootstrap-vue, ECMA 6+.',
      },
    ],
  },
  {
    title: 'Cliengo',
    startDate: '20201201',
    endDate: '20210801',
    subtitle: 'Hired as Mid Level Full-stack developer.',
    skill: ['HTML', 'CSS', 'Storybook', 'Highcharts', 'React', 'Front End'],
    projects: [
      {
        title: 'Project: Conversational',
        description:
          'Conversational App. Web development using ReactJs, also working with mobile apps using React Native. Tech migrations from angular to react. Use of Axios, Bootstrap, ECMA 6+.',
      },
      {
        title: 'Project: Live/Lit',
        description:
          'CRM App, conversation handler, using React Js, Css, Router, Redux, Axios. Unit Testing with JestJs, Deployment with AWS/Heroku.',
      },
    ],
  },
  {
    title: 'Professor (part-time)',
    startDate: '20210601',
    endDate: '20220301',
    skill: ['Teaching', 'C', 'Programming'],
    projects: 'Teaching programming to first year students.',
  },
  {
    title: 'Endava',
    startDate: '20210801',
    endDate: '20220401',
    subtitle: 'Hired as Mid Level Full-stack developer.',
    skill: [
      'HTML',
      'CSS',
      'JavaScript',
      'SQL',
      'Marklogic',
      'Teaching',
      'Leadership',
      'Interviewing',
      'Back End',
    ],
    projects: [
      {
        title: 'Project Marklogic',
        description:
          'Technical Leader and developer in a team working as consultant for Marklogic projects. Also working in a semantics data base project for Yale University. ',
      },
      {
        title: 'Endava Argentina Intership',
        description:
          'Organizer and mentor for Endava Argentina Internship program 2022, in charge of lectures related to JS and general programming.',
      },
    ],
  },
  {
    title: 'Sitenso',
    startDate: '20220901',
    endDate: '20221201',
    subtitle: 'Hired as Technical Manager.',
    skill: [
      'HTML',
      'CSS',
      'Storybook',
      'Leadership',
      'React',
      'NodeJs',
      'Interviewing',
    ],
    projects:
      'Technical leader and manager for many projects and developers. In charge of technical interview, planning and developer path and technical advise in react and other front end technologies.',
  },
  {
    title: 'Moove-IT',
    startDate: '20220401',
    subtitle: 'Hired as Senior Full-stack developer.',
    isCurrent: true,
    skill: [
      'HTML',
      'CSS',
      'Storybook',
      'Highcharts',
      'React',
      'Nodejs',
      'Remix',
      'Sass',
      'Front End',
    ],
    projects: [
      {
        title: 'Project Avant',
        description:
          'Software development for Avant application, working on a web app using Remix (ReactJs framework for SSR).',
      },
    ],
  },
];

const SKILLS_IMG = [
  {
    src: '../assets/icons/html.svg',
    alt: 'HTML Logo',
    title: 'HTML',
  },
  {
    src: '../assets/icons/css.svg',
    alt: 'CSS Logo',
    title: 'CSS',
  },
  {
    src: '../assets/icons/tailwind.svg',
    alt: 'Tailwind Logo',
    title: 'Tailwind',
  },
  {
    src: '../assets/icons/js.svg',
    alt: 'JavaScript Logo',
    title: 'JavaScript',
  },
  {
    src: '../assets/icons/react.svg',
    alt: 'React Logo',
    title: 'React',
  },
  {
    src: '../assets/icons/redux.svg',
    alt: 'Redux Logo',
    title: 'Redux',
  },
  {
    src: '../assets/icons/nodejs.svg',
    alt: 'Nodejs Logo',
    title: 'NodeJs',
  },
  {
    src: '../assets/icons/axios.svg',
    alt: 'Axios Logo',
    title: 'Axios',
  },
  {
    src: '../assets/icons/express.svg',
    alt: 'Express Logo',
    title: 'Express',
  },
  {
    src: '../assets/icons/git-icon.svg',
    alt: 'Git Logo',
    title: 'Git',
  },
  {
    src: '../assets/icons/mongodb.svg',
    alt: 'Mongodb Logo',
    title: 'Mongodb',
  },
  {
    src: '../assets/icons/vue-js.svg',
    alt: 'Vue Logo',
    title: 'Vue',
  },
  {
    src: '../assets/icons/cypress.svg',
    alt: 'Cypress Logo',
    title: 'Cypress',
  },
  {
    src: '../assets/icons/highcharts.svg',
    alt: 'Highcharts Logo',
    title: 'Highcharts',
  },
  {
    src: '../assets/icons/storybook.svg',
    alt: 'Storybook Logo',
    title: 'Storybook',
  },
  {
    src: '../assets/icons/agile-software.svg',
    alt: 'Agile Logo',
    title: 'Agile Development',
  },
  {
    src: '../assets/icons/sass.svg',
    alt: 'Sass Logo',
    title: 'Sass',
  },
  {
    src: '../assets/icons/heroku.svg',
    alt: 'Heroku Logo',
    title: 'Heroku',
  },
  {
    src: '../assets/icons/remix.svg',
    alt: 'Remix.run Logo',
    title: 'Remix.run',
  },
];

const TOP_SKILLS = ['Front End', 'Back End'];

const NAV_BAR = [
  {
    path: '../index.html',
    name: 'Home',
    src: '../assets/icons/home.svg',
    className: ['nav-bar__icon'],
    alt: 'Home Logo',
    title: 'Home',
    tabindex: '-1',
    location: 'Home',
  },
  {
    path: './views/skills.html',
    name: 'CV',
    src: '../assets/icons/paper.svg',
    className: ['nav-bar__icon'],
    alt: 'CV Logo',
    title: 'CV',
    tabindex: '-1',
    location: 'CV',
  },
  {
    path: './views/projects.html',
    name: 'Projects',
    src: '../assets/icons/folder.svg',
    className: ['nav-bar__icon'],
    alt: 'Folder Logo',
    title: 'Projects',
    tabindex: '-1',
    location: 'Projects',
  },
  {
    path: './views/education.html',
    name: 'Education',
    src: '../assets/icons/education.svg',
    className: ['nav-bar__icon'],
    alt: 'Education Logo',
    title: 'Education',
    tabindex: '-1',
    location: 'Education',
  },
  {
    path: './views/contact.html',
    name: 'Contact',
    src: '../assets/icons/profile.svg',
    className: ['nav-bar__icon'],
    alt: 'Contact Logo',
    title: 'Contact',
    tabindex: '-1',
    location: 'Contact',
  },
];

const INTRO = [
  'Welcome, my name is Gonzalo Alvarez Campos.',
  "I'm a Software Developer and I made this page so you can get to know me a little better",
];

const BOT_HELLO = [
  "Hi, my name is Jarvis and I'm an interactive chat bot.",
  "For now I'm a work in progress so my responses might not be the best.",
  'Can you tell your name so I can remember it next time you visit?',
];

const BOT_HI = 'Welcome back,';

const BOT_ICONS = [
  {
    src: './assets/icons/chatbot.svg',
    alt: 'Bot Logo',
    title: 'Chat bot',
  },
  {
    src: './assets/icons/close-button.svg',
    alt: 'Close',
    title: 'Close',
  },
];

export {
  WORK_ITEMS,
  SKILLS_IMG,
  TOP_SKILLS,
  NAV_BAR,
  INTRO,
  BOT_HELLO,
  BOT_ICONS,
  BOT_HI,
};
