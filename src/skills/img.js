import { SKILLS_IMG } from '../data/data.js';

const imgWrapper = document.getElementById('icons-wrapper');

const generateImg = (item) => {
  const img = document.createElement('img');
  img.src = item.src;
  if (item.alt != null) img.alt = item.alt;
  if (item.title != null) img.title = item.title;
  return img;
};

SKILLS_IMG.forEach((img) => {
  imgWrapper.appendChild(generateImg(img));
});
