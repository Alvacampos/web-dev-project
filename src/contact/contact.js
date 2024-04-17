import {
  checkNameSpace,
  generateNavBar,
  loadLanguages,
} from '../../utils/utils.js';

const main = async () => {
  try {
    const { NAV_BAR } = await loadLanguages();
    generateNavBar(NAV_BAR, 'Contact');
  } catch (e) {
    console.log('Fatal error', e);
  }
};

(function () {
  checkNameSpace('contact', main);
})();
