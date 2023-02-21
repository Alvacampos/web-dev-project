import moment from 'moment';

const workItemsLeft = [
  {
    title: 'Cliengo',
    date: '20201201',
    subTitle: 'Hired as Mid Level Full-stack developer.',
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
    title: 'Endava',
    date: '20210801',
    subTitle: 'Hired as Mid Level Full-stack developer.',
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
];

// const calculateDates = (date) => {
//   return moment(date, 'YYYYMMDD').fromNow();
// };

const createJobCard = (item) => {
  // Image generator
  const img = document.createElement('img');
  img.setAttribute('src', '../assets/icons/new-job.svg');
  img.classList.add('work__project');
  img.classList.add('work__project--left');

  // Divider generator
  const divider = document.createElement('div');
  divider.classList.add('exp_line--horizontal');

  // Card generator
  // const date = document.createTextNode("Hi there and greetings!");

  // Title
  const h2Wrapper = document.createElement('h2');
  const title = document.createTextNode(item.title);
  h2Wrapper.appendChild(title);
  const divWrapper = document.createElement('div');
  divWrapper.classList.add('work__title');
  divWrapper.appendChild(h2Wrapper);

  // Content
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('work__content');
  // const date = document.createTextNode(calculateDates(item.date));
  const dateWrapper = document.createElement('p');
  dateWrapper.appendChild(date);
  const subtitle = document.createTextNode(item.subtitle);
  const subtitleWrapper = document.createElement('p');
  subtitleWrapper.appendChild(subtitle);
  // const ul = document.createElement('ul');
  // const li = document.createElement('li');
  // const liItem = document.createElement('h3');

  contentWrapper.appendChild(dateWrapper);
  contentWrapper.appendChild(subtitleWrapper);

  const workContent = document.createElement('div');
  workContent.classList.add('work__card');
  workContent.classList.add('card');

  workContent.appendChild(divWrapper);
  workContent.appendChild(contentWrapper);
  // workContent.appendChild(date);

  // Card
  const card = document.createElement('div');
  card.classList.add('work__item');
  card.classList.add('work__item--left');

  card.appendChild(img);
  card.appendChild(divider);
  card.appendChild(workContent);

  const work = document.getElementById('work__left');
  work.appendChild(card);
};

console.log(moment);

workItemsLeft.forEach((item) => createJobCard(item));
