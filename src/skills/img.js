import { generateImg, loadLanguages } from '../../utils/utils.js';

(async function () {
  try {
    const { SKILLS_IMG } = await loadLanguages();
    const imgWrapper = document.getElementById('icons-wrapper');
    if (imgWrapper) {
      SKILLS_IMG.forEach((img) => {
        imgWrapper.append(generateImg(img));
      });
    }
  } catch (e) {
    console.log('Fatal error', e);
  }
})();
