import { generateImg, loadLanguages } from '../../utils/utils.js';

(async function () {
  const imgWrapper = document.getElementById('icons-wrapper');
  const { SKILLS_IMG } = await loadLanguages();
  if (imgWrapper) {
    SKILLS_IMG.forEach((img) => {
      imgWrapper.append(generateImg(img));
    });
  }
})();
