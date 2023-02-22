import moment from 'moment';

const workItems = [
  {
    title: 'Globant',
    startDate: '20180801',
    endDate: '20201101',
    subtitle: 'Hired as Jr Web developer.',
    skill: ['HTML', 'CSS', 'Storybook', 'Highcharts', 'Vue', '.Net'],
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
    skill: ['HTML', 'CSS', 'Storybook', 'Highcharts', 'React'],
    projects: [
      {
        title: 'Project Conversational',
        description:
          'Conversational App. Web development using ReactJs, also working with mobile apps using React Native. Tech migrations from angular to react. Use of Axios, Bootstrap, ECMA 6+.',
      },
      {
        title: 'Project Live/Lit',
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
          'Organizer and mentor for Endava Argentina Intership program 2022, in charge of lectures related to JS and general programming.',
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
      'Technical leader and manager for many projects and developers. In charge of technical interview, planning and developer path.',
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

const handleDates = (startDate, endDate, isCurrent) => {
  if (isCurrent) {
    endDate = moment();
  }

  const timeDiff = moment(endDate).diff(moment(startDate));

  const isYears = Math.round(moment.duration(timeDiff).asYears()) >= 1;

  if (isYears) {
    return `${Math.round(moment.duration(timeDiff).asYears())} .Yrs`;
  } else {
    return `${Math.abs(Math.round(moment.duration(timeDiff).asMonths()))} .Mos`;
  }
};

const calculateDates = (startDate, endDate, isCurrent = undefined) => {
  if (isCurrent) {
    return `Date: ${moment(startDate).format(
      'MMM YYYY'
    )} - Current (${handleDates(startDate, endDate, isCurrent)})`;
  }

  return `Date: ${moment(startDate).format('MMM YYYY')} - ${moment(
    endDate
  ).format('MMM YYYY')} (${handleDates(startDate, endDate, isCurrent)})`;
};

const generateList = (item) => {
  const li = document.createElement('li');
  item.projects.forEach((element) => {
    const liItem = document.createElement('h3');
    const liContent = document.createTextNode(element.title);
    const liItem2 = document.createElement('p');
    const liContent2 = document.createTextNode(element.description);
    liItem.appendChild(liContent);
    liItem2.appendChild(liContent2);
    li.appendChild(liItem);
    li.appendChild(liItem2);
  });
  return li;
};

const generateDivider = () => {
  const divider = document.createElement('div');
  divider.classList.add('work__divider');
  return divider;
};

const generateTitle = (item) => {
  const h2Wrapper = document.createElement('h2');
  const title = document.createTextNode(item.title);
  h2Wrapper.appendChild(title);
  const divWrapper = document.createElement('div');
  divWrapper.classList.add('work__title');
  divWrapper.appendChild(h2Wrapper);
  return divWrapper;
};

const generateContent = (item) => {
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('work__content');
  const date = document.createTextNode(
    calculateDates(item.startDate, item?.endDate, item?.isCurrent)
  );
  const dateWrapper = document.createElement('p');
  dateWrapper.appendChild(date);

  contentWrapper.appendChild(dateWrapper);
  if (item.subtitle) {
    const subtitle = document.createTextNode(item.subtitle);
    const subtitleWrapper = document.createElement('p');
    subtitleWrapper.appendChild(subtitle);
    contentWrapper.appendChild(subtitleWrapper);
  }

  if (Array.isArray(item.projects)) {
    const ul = document.createElement('ul');
    ul.appendChild(generateList(item));
    contentWrapper.appendChild(ul);
  } else {
    const descriptionWrapper = document.createElement('p');
    const description = document.createTextNode(item.projects);
    descriptionWrapper.appendChild(description);
    contentWrapper.appendChild(descriptionWrapper);
  }

  const workContent = document.createElement('div');
  workContent.classList.add('work__card');
  workContent.classList.add('card');

  workContent.appendChild(generateTitle(item));
  workContent.appendChild(contentWrapper);

  return workContent;
};

const createJobCard = (item, index) => {
  // Divider generator
  const divider = document.createElement('div');
  divider.classList.add('exp_line--horizontal');

  // Card
  const card = document.createElement('div');
  card.classList.add('work__item');

  // Image generator
  const img = document.createElement('img');
  img.setAttribute('src', '../assets/icons/new-job.svg');
  img.classList.add('work__project');

  if (index % 2 === 0) {
    card.classList.add('work__item--left');
    img.classList.add('work__project--left');
  } else {
    img.classList.add('work__project--right');
  }

  card.appendChild(img);
  card.appendChild(divider);
  card.appendChild(generateContent(item));

  const workDivider = generateDivider();

  // Helps distribute the rows in the 2 columns, in order to keep css aligned.
  if (index % 2 === 0) {
    const work = document.getElementById('column__left');
    workDivider.classList.add('work__divider--left');
    work.appendChild(card);
    work.appendChild(workDivider);
  } else {
    const work = document.getElementById('column__right');
    workDivider.classList.add('work__divider--right');
    work.appendChild(workDivider);
    work.appendChild(card);
  }
};

const filter = (input) => {
  const leftColumn = document.getElementById('column__left');
  leftColumn.replaceChildren();
  const rightColumn = document.getElementById('column__right');
  rightColumn.replaceChildren();
  if (input) {
    let filteredItems = workItems.filter((item) =>
      item.skill.some((skill) => skill.toLowerCase() === input.toLowerCase())
    );

    filteredItems.forEach((item, index) => createJobCard(item, index));
  } else {
    workItems.forEach((item, index) => createJobCard(item, index));
  }
};

const input = document.getElementById('filter');

workItems.forEach((item, index) => createJobCard(item, index));
input.addEventListener('keyup', (event) => {
  filter(event.target.value);
});
