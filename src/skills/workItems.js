import { calculateDates, renderDateMsg } from '../../utils/utils.js';
import { WORK_ITEMS } from '../data/data.js';

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
    renderDateMsg(item.startDate, item?.endDate, item?.isCurrent)
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
    let filteredItems = WORK_ITEMS.filter((item) =>
      item.skill.some((skill) => skill.toLowerCase() === input.toLowerCase())
    );

    filteredItems.forEach((item, index) => createJobCard(item, index));
  } else {
    WORK_ITEMS.forEach((item, index) => createJobCard(item, index));
  }
};

const input = document.getElementById('filter');

WORK_ITEMS.forEach((item, index) => createJobCard(item, index));
input.addEventListener('keyup', (event) => {
  filter(event.target.value);
});

const totalExpTimeWrapper = document.getElementById('time');
const totalExpTime = document.createTextNode(
  calculateDates(WORK_ITEMS[0].startDate, null, true)
);
totalExpTimeWrapper.appendChild(totalExpTime);
