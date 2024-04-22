const SECTION_TITLES = [
  'Experiencia Laboral',
  'Total de años de experiencia',
  'Habilidades y Herramientas',
  'Años de experiencia',
  'Actividades Extra',
];

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
    subtitle: 'Contratado como Profesor de Programacion I.',
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
      'GraphQL',
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
    src: '../assets/icons/ts.svg',
    alt: 'TypeScript Logo',
    title: 'TypeScript',
  },
  {
    src: '../assets/icons/react.svg',
    alt: 'React Logo',
    title: 'React',
  },
  {
    src: '../assets/icons/remix.svg',
    alt: 'Remix.run Logo',
    title: 'Remix.run',
  },
  {
    src: '../assets/icons/redux.svg',
    alt: 'Redux Logo',
    title: 'Redux',
  },
  {
    src: '../assets/icons/git-icon.svg',
    alt: 'Git Logo',
    title: 'Git',
  },
  {
    src: '../assets/icons/cypress.svg',
    alt: 'Cypress Logo',
    title: 'Cypress',
  },
  {
    src: '../assets/icons/storybook.svg',
    alt: 'Storybook Logo',
    title: 'Storybook',
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
    src: '../assets/icons/highcharts.svg',
    alt: 'Highcharts Logo',
    title: 'Highcharts',
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
];

const TOP_SKILLS = ['Front End', 'Back End'];

const ENDAVA_EXTRA = [
  {
    title: 'Endava Argentina Internship',
    text: 'Organizador y mentor del Programa de Pasantías Endava Argentina 2022. A cargo de charlas/clases sobre JS y programación general.',
  },
  {
    title: 'Mentoria',
    text: 'Mentor para 3 desarrolladores Jr en la empresa. Encargado de guiarlos en su camino profesional y ayudarlos con sus problemas técnicos.',
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
    title: 'Lider Tecnico',
    text: 'Líder Técnico del proyecto para la carrera Tecnicatura en desarrollo de Software. Encargado del desarrollo del proyecto y del equipo.',
  },
  {
    title: 'Profesor',
    text: 'Ensené programación a alumnos de primer año de la carrera Tecnicatura en desarrollo de Software.',
  },
];

const UNSTA_EXTRA_IMG = {
  src: '../assets/img/unsta.png',
  className: 'skills__work--icon',
  alt: 'UNSTA Logo',
};

const QUBIKA_EXTRA = [
  {
    title: 'Remix Charla Introductoria',
    text: 'Organicé y di una charla sobre Remix.run, un marco de renderizado en el lado del servidor de React que acaba de ser lanzado y con el que estaba trabajando en mi proyecto.',
  },
  {
    title: 'Induccion',
    text: 'Inducción de nuevos empleados en proyecto, enseñando sobre los proyectos y las tecnologías utilizadas.',
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
];

const SKILL_CHART_DATA = {
  js: {
    name: 'JavaScript',
    data: '20180801',
  },
  ts: {
    name: 'TypeScript',
    data: '20220401',
  },
  react: {
    name: 'ReactJs',
    data: '20201201',
  },
  cypress: {
    name: 'Cypress',
    data: '20201201',
  },
  graphql: {
    name: 'GraphQL',
    data: '20220401',
  },
  storybook: {
    name: 'Storybook',
    data: '20180801',
  },
  remix: {
    name: 'Remix',
    data: '20220401',
  },
  css: {
    name: 'Css',
    data: '20180801',
  },
  postcss: {
    name: 'PostCss',
    data: '20220401',
  },
  html: {
    name: 'HTML',
    data: '20180801',
  },
};

const INTRO = [
  'Bienvenido, mi nombre es Gonzalo Alvarez Campos',
  'Soy Desarrollador de Software e hice esta página para que me conozcan un poco mejor',
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
  SKILL_CHART_DATA,
};
