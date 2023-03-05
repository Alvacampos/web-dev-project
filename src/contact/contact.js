import {
  checkNameSpace,
  generateNavBar,
  loadLanguages,
} from '../../utils/utils.js';

const main = async () => {
  const { NAV_BAR } = await loadLanguages();
  generateNavBar(NAV_BAR, 'Contact');
};

(function () {
  checkNameSpace('contact', main);
})();
