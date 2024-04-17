import {
  checkNameSpace,
  generateNavBar,
  loadLanguages,
} from '../../utils/utils.js';

const main = async () => {
  try {
    const { NAV_BAR } = await loadLanguages();
    generateNavBar(NAV_BAR, 'Projects');
  } catch (e) {
    console.log('Fatal error', e);
  }
};

(function () {
  checkNameSpace('projects', main);
})();
