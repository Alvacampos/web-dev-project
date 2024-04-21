const SECTION_TITLES = [
  'Work Experience',
  'Total years of experience',
  'Skills & Tools',
  'Extra Activities',
];

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
    skill: [
      'HTML',
      'CSS',
      'Storybook',
      'Highcharts',
      'React',
      'Front End',
      'Cypress',
    ],
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
        title: 'Project: Marklogic',
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
    title: 'Qubika',
    startDate: '20220401',
    subtitle: 'Hired as Senior Frontend developer.',
    isCurrent: true,
    skill: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Storybook',
      'Highcharts',
      'React',
      'Remix',
      'Post-css',
      'GraphQL',
      'Cypress',
      'Front End',
    ],
    projects: [
      {
        title: 'Project Avant',
        description:
          'Software development for Avant application, working on a web app using Remix (ReactJs framework for SSR) and supporting their legacy app.',
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

const ENDAVA_EXTRA = [
  {
    title: 'Endava Argentina Internship',
    text: 'Organizer and mentor for Endava Argentina Internship Program 2022. In charge of lectures related to JS and general programming.',
  },
  {
    title: 'Mentorship',
    text: 'Mentor for 3 Jr developers in the company. In charge of guiding them in their career path and helping them with their technical issues.',
  },
];

const ENDAVA_EXTRA_IMG = {
  src: '../assets/img/endava.png',
  className: 'skills__work--icon',
  id: 'endava',
  alt: 'Endava Logo',
};

const UNSTA_EXTRA = [
  {
    title: 'Technical Leader',
    text: 'Technical Leader of the project for the career of Software Engineering. In charge of the development of the project and the team.',
  },
  {
    title: 'Professor',
    text: 'Teaching programming to first year students Engineering Career.',
  },
];

const UNSTA_EXTRA_IMG = {
  src: '../assets/img/unsta.png',
  className: 'skills__work--icon',
  alt: 'UNSTA Logo',
};

const QUBIKA_EXTRA = [
  {
    title: 'Remix Introduction Talk',
    text: 'Organize and gave a talk about Remix.run a react server side rendering framework that was just released and my project was working with.',
  },
  {
    title: 'Team Induction',
    text: 'Induction of new team members to the project.',
  },
];

const QUBIKA_EXTRA_IMG = {
  src: '../assets/img/qubika.png',
  className: 'skills__work--icon',
  id: 'qubika',
  alt: 'Qubika Logo',
};

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
    path: './views/education.html',
    name: 'Education',
    src: '../assets/icons/education.svg',
    className: ['nav-bar__icon'],
    alt: 'Education Logo',
    title: 'Education',
    tabindex: '-1',
    location: 'Education',
  },
];

const INTRO = [
  'Welcome, my name is Gonzalo Alvarez Campos.',
  "I'm a Software Developer and I made this page so you can get to know me a little better",
];

export {
  SECTION_TITLES,
  WORK_ITEMS,
  SKILLS_IMG,
  TOP_SKILLS,
  NAV_BAR,
  INTRO,
  ENDAVA_EXTRA,
  ENDAVA_EXTRA_IMG,
  UNSTA_EXTRA,
  UNSTA_EXTRA_IMG,
  QUBIKA_EXTRA,
  QUBIKA_EXTRA_IMG,
};
