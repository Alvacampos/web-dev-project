import {
  calculateDates,
  checkNameSpace,
  generateImg,
  generateItem,
  generateNavBar,
  loadLanguages,
  renderDateMsg,
} from '../../utils/utils.js';

const main = async () => {
  try {
    const {
      TOP_SKILLS,
      WORK_ITEMS,
      NAV_BAR,
      SECTION_TITLES,
      ENDAVA_EXTRA,
      ENDAVA_EXTRA_IMG,
      UNSTA_EXTRA,
      UNSTA_EXTRA_IMG,
      QUBIKA_EXTRA,
      QUBIKA_EXTRA_IMG,
    } = await loadLanguages();

    generateNavBar(NAV_BAR, 'CV');

    //!! Section titles ORDER MATTERS
    const sectionTitles = [
      'work__section-title',
      'work__total-exp',
      'icons-card__section-title',
      'activities__section-title',
    ];

    //* Section title generator
    sectionTitles.forEach((titles, index) => {
      const sectionTitle = document.getElementById(titles);
      const sectionContent = document.createTextNode(SECTION_TITLES[index]);
      sectionTitle.appendChild(sectionContent);
    });

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

    //* Generates the divider between the cards
    const generateDivider = () => {
      return generateItem('div', 'work__divider');
    };

    //* Generates the title of the card
    const generateTitle = (item) => {
      const h2Wrapper = document.createElement('h2');
      const title = document.createTextNode(item.title);
      h2Wrapper.appendChild(title);
      const divWrapper = generateItem('div', 'work__title');
      divWrapper.appendChild(h2Wrapper);
      return divWrapper;
    };

    const generateContent = (item) => {
      const contentWrapper = document.createElement('div');
      contentWrapper.classList.add('work__content');
      const date = document.createTextNode(
        renderDateMsg(item?.startDate, item?.endDate, item?.isCurrent)
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

    const appendCard = (divider, card, position) => {
      const work = document.getElementById(`column__${position}`);
      divider.classList.add(`work__divider--${position}`);
      if (position === 'left') {
        work.appendChild(card);
        work.appendChild(divider);
      } else {
        work.appendChild(divider);
        work.appendChild(card);
      }
    };

    const createJobCard = (item, index) => {
      // Divider generator
      const divider = document.createElement('div');
      divider.classList.add('exp_line--horizontal');

      // Card
      const card = document.createElement('div');
      card.classList.add('work__item');

      let img = null;

      const logo = {
        src: '../assets/icons/new-job.svg',
        alt: 'New Work Logo',
        title: 'New Work',
      };

      if (index % 2 === 0) {
        card.classList.add('work__item--left');
        img = generateImg(logo, ['work__project', 'work__project--left']);
      } else {
        img = generateImg(logo, ['work__project', 'work__project--right']);
      }
      card.appendChild(img);
      card.appendChild(divider);
      card.appendChild(generateContent(item));

      const workDivider = generateDivider();

      // Helps distribute the rows in the 2 columns, in order to keep css aligned.
      if (index % 2 === 0) {
        appendCard(workDivider, card, 'left');
      } else {
        appendCard(workDivider, card, 'right');
      }
    };

    //* Render bts to filter skills
    const generateBtn = (skill) => {
      const wrapper = document.getElementById('bts-wrapper');
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.id = skill.toLowerCase();
      anchor.classList.add('skill-btn');

      let flag = true;

      for (let i = 0; i < 4; i++) {
        const span = document.createElement('span');
        anchor.appendChild(span);
      }

      const btnTitle = document.createTextNode(skill);
      anchor.appendChild(btnTitle);
      anchor.addEventListener('click', () => {
        if (flag) {
          filter(skill);
          anchor.classList.add('skill-btn--active');
        } else {
          filter();
          anchor.classList.remove('skill-btn--active');
        }
        flag = !flag;
      });
      wrapper.appendChild(anchor);
    };

    //* Render filter input for skills
    const filter = (input) => {
      const leftColumn = document.getElementById('column__left');
      leftColumn.replaceChildren();
      const rightColumn = document.getElementById('column__right');
      rightColumn.replaceChildren();
      if (input) {
        let filteredItems = WORK_ITEMS.filter((item) =>
          item.skill.some((skill) =>
            skill.toLowerCase().includes(input.toLowerCase())
          )
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

    TOP_SKILLS.forEach((skill) => generateBtn(skill));

    const totalExpTimeWrapper = document.getElementById('time');
    const totalExpTime = document.createTextNode(
      calculateDates(WORK_ITEMS[0]?.startDate, null, true)
    );
    totalExpTimeWrapper.appendChild(totalExpTime);

    //* Activities section
    (function () {
      const activitiesCards = document.getElementsByClassName(
        'activities__card card'
      );

      const items = [ENDAVA_EXTRA, UNSTA_EXTRA, QUBIKA_EXTRA];
      const itemsImg = [ENDAVA_EXTRA_IMG, UNSTA_EXTRA_IMG, QUBIKA_EXTRA_IMG];

      for (let i = 0; i < activitiesCards.length; i++) {
        const wrapperImg = generateItem('div', 'skills__card-wrapper');
        const img = generateImg(itemsImg[i], ['skills__work--icon']);
        wrapperImg.appendChild(img);

        const wrapperItem = generateItem('div');
        const ul = generateItem('ul');

        items[i].forEach((item) => {
          const li = generateItem('li');
          const title = generateItem('h3', undefined, item.title);
          const p = generateItem('p', undefined, item.text);
          li.appendChild(title);
          li.appendChild(p);
          ul.appendChild(li);
        });

        wrapperItem.appendChild(ul);

        activitiesCards[i].appendChild(wrapperImg);
        activitiesCards[i].appendChild(wrapperItem);
      }
    })();
  } catch (e) {
    console.log('Fatal error', e);
  }
};

(function () {
  checkNameSpace('skills', main);
})();
