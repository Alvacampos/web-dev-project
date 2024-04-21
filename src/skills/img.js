import { generateImg, loadLanguages } from '../../utils/utils.js';

//* Generates the icons for the skills & tools section
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
