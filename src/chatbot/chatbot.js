import { generateImg, generateItem, loadLanguages } from '../../utils/utils.js';

const main = async () => {
  const { BOT_ICONS, BOT_HELLO } = await loadLanguages();

  const main = document.querySelector('main');
  const botWrapper = generateItem('div', 'bot');
  const chatWrapper = generateItem('div', 'bot__chat-window');

  // Generates Chat button
  const botBtn = generateItem('button', ['bot__btn', 'blob']);
  const botBtnImg = generateImg(BOT_ICONS[0], ['bot-img']);
  botBtn.append(botBtnImg);

  // Generates close button
  const botCloseBtn = generateItem('button', 'bot__close');
  const closeImg = generateImg(BOT_ICONS[1], ['close-img']);

  // Generates chat windows
  const botWindow = generateItem('div', 'bot__chat');

  // Generates input chat
  const botInput = generateItem('input', 'bot__input');

  botCloseBtn.append(closeImg);
  botWindow.append(botCloseBtn);
  botWindow.append(botInput);
  botWindow.append(chatWrapper);

  // Simulates human delayed hello response
  const welcomeMsg = (textItem) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const p = generateItem('p', 'chat__msg');
        var text = document.createTextNode(textItem);
        p.appendChild(text);
        resolve(p);
      }, 1000);
    });
  };

  // Listen to the click to open the chat window
  botCloseBtn.addEventListener('click', () => {
    botBtn.classList.remove('bot__btn--open');
    botWindow.classList.remove('bot__chat--open');
    botBtn.classList.add('bot__btn--close');
    botWindow.classList.add('bot__chat--close');
  });

  // Listen to the click to close the chat window
  botBtn.addEventListener('click', async () => {
    botBtn.classList.remove('bot__btn--close');
    botWindow.classList.remove('bot__chat--close');
    botBtn.classList.add('bot__btn--open');
    botWindow.classList.add('bot__chat--open');

    for (const textItem of BOT_HELLO) {
      if (chatWrapper.childNodes.length < 3) {
        const text = await welcomeMsg(textItem);
        chatWrapper.append(text);
      }
    }
  });

  // Listen to input to be shown in the chat
  botInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      const p = generateItem('p', 'chat__msg');
      var text = document.createTextNode(event.target.value);
      p.appendChild(text);
      chatWrapper.append(p);
      event.target.value = '';
    }
  });

  botWrapper.append(botWindow);
  botWrapper.append(botBtn);
  main.append(botWrapper);
};

(function () {
  main();
})();
