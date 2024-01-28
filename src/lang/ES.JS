const WORK_ITEMS = [
  {
    title: 'Globant',
    startDate: '20180801',
    endDate: '20201201',
    subtitle: 'Contratado como Jr Web developer.',
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
        title: 'Pryecto: eVestment',
        description:
          'Desarrollo web enfocado en VueJs (uso de state, store(vuex), router), trabajé con Highcharts y VueJs para hacer componentes reutilizables para la página del cliente. Y algo experiencia con backend usando .net core y nodejs.',
      },
      {
        title: 'Proyecto: Smile Direct Club',
        description:
          'Desarrollo web con tecnologías frontend como VueJs y NuxtJs, enfocado en el rendimiento de la página utilizando la capacidad de server-side rendering con nuxt. Uso de vue-axios, bootstrap-vue, ECMA 6+.',
      },
    ],
  },
  {
    title: 'Cliengo',
    startDate: '20201201',
    endDate: '20210801',
    subtitle: 'Contratado como Semi-senior Full-stack developer.',
    skill: ['HTML', 'CSS', 'Storybook', 'Highcharts', 'React', 'Front End', 'Cypress',],
    projects: [
      {
        title: 'Proyecto: Conversational',
        description:
          'Aplicación conversacional. Desarrollo web usando ReactJs, trabajando también con aplicaciones móviles usando React Native. Migraciones tecnológicas de angular a react. Uso de Axios, Bootstrap, ECMA 6+.',
      },
      {
        title: 'Proyecto: Live/Lit',
        description:
          'Aplicación CRM, manejador de conversaciones, usando React Js, Css, Router, Redux, Axios. Pruebas unitarias con JestJs, Deployment con AWS/Heroku.',
      },
    ],
  },
  {
    title: 'Docente (part-time)',
    startDate: '20210601',
    endDate: '20220301',
    skill: ['Teaching', 'C', 'Programming'],
    projects: 'Enseñé programación a alumnos de primer año.',
  },
  {
    title: 'Endava',
    startDate: '20210801',
    endDate: '20220401',
    subtitle: 'Contratado como Semi-senior Full-stack developer.',
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
        title: 'Proyecto: Marklogic',
        description:
          'Líder técnico del equipo trabajando como consultor de proyectos de Marklogic. También trabajando en un proyecto de base de datos semántica para la Universidad de Yale.',
      },
      {
        title: 'Endava Argentina Intership',
        description:
          'Organizador y mentor del programa de pasantías Endava Argentina 2022, a cargo de conferencias relacionadas con JS y programación general.',
      },
    ],
  },
  {
    title: 'Qubika',
    startDate: '20220401',
    subtitle: 'Contratado como Senior Frontend developer.',
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
      'Cypress',
      'Front End',
    ],
    projects: [
      {
        title: 'Project Avant',
        description:
          'Desarrollo de software para la aplicación Avant, trabajando en una aplicación web usando Remix (framework ReactJs para SSR).',
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
    name: 'Inicio',
    src: '../assets/icons/home.svg',
    className: ['nav-bar__icon'],
    alt: 'Inicio Logo',
    title: 'Inicio',
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
  // {
  //   path: './views/projects.html',
  //   name: 'Proyectos',
  //   src: '../assets/icons/folder.svg',
  //   className: ['nav-bar__icon'],
  //   alt: 'Proyectos Logo',
  //   title: 'Proyectos',
  //   tabindex: '-1',
  //   location: 'Projects',
  // },
  {
    path: './views/education.html',
    name: 'Educación',
    src: '../assets/icons/education.svg',
    className: ['nav-bar__icon'],
    alt: 'Educación Logo',
    title: 'Educación',
    tabindex: '-1',
    location: 'Education',
  },
  // {
  //   path: './views/contact.html',
  //   name: 'Contacto',
  //   src: '../assets/icons/profile.svg',
  //   className: ['nav-bar__icon'],
  //   alt: 'Contacto Logo',
  //   title: 'Contacto',
  //   tabindex: '-1',
  //   location: 'Contact',
  // },
];

const INTRO = [
  'Bienvenido, mi nombre es Gonzalo Alvarez Campos',
  'Soy Desarrollador de Software e hice esta página para que me conozcan un poco mejor',
];

const BOT_HELLO = [
  'Hola, soy un bot interactivo y mi nombre es ',
  'Por ahora soy un trabajo en proceso asi que mis respuestas puede que no sean las mejores.',
  'Me pueden decir tu nombre asi lo recuerdo para la proxima vez que nos visites?',
];

const BOT_HI = 'Que bueno verte de nuevo,';

const BOT_ICONS = [
  {
    src: './assets/icons/chatbot.svg',
    alt: 'Bot Logo',
    title: 'Chat bot',
  },
  {
    src: './assets/icons/close-button.svg',
    alt: 'Cerrar',
    title: 'Cerrar',
  },
  {
    src: './assets/icons/send-icon.svg',
    alt: 'Send Message',
    title: 'Send Message',
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
