import {
  checkNameSpace,
  generateItem,
  generateNavBar,
  loadLanguages,
} from '../utils/utils.js';

const main = async () => {
  const { NAV_BAR, INTRO } = await loadLanguages();
  generateNavBar(NAV_BAR, 'Home');
  const h1 = generateItem('h1', null, INTRO[0]);
  const p1 = generateItem('p', null, INTRO[1]);
  const section = document.getElementById('section');
  section.append(h1);
  section.append(p1);
};

(function () {
  checkNameSpace('index', main);
})();
