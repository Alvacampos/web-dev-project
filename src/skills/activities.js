import { generateImg, generateItem } from '../../utils/utils.js';

//* Activities section
export default function generateActivitiesSection(
  ENDAVA_EXTRA,
  ENDAVA_EXTRA_IMG,
  UNSTA_EXTRA,
  UNSTA_EXTRA_IMG,
  QUBIKA_EXTRA,
  QUBIKA_EXTRA_IMG
) {
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
}
