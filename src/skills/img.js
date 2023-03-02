import { generateImg } from '../../utils/utils.js';
import { SKILLS_IMG } from '../data/data.js';

const imgWrapper = document.getElementById('icons-wrapper');

SKILLS_IMG.forEach((img) => {
  imgWrapper.appendChild(generateImg(img));
});
