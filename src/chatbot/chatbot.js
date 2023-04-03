import {
  generateImg,
  generateItem,
  loadLanguages,
  routeSanitization,
} from '../../utils/utils.js';

const main = async () => {
  const { BOT_ICONS, BOT_HELLO, BOT_HI } = await loadLanguages();
  const isSkillSection = document.getElementById('skills');

  const main = document.querySelector('main');
  const botWrapper = generateItem(
    'div',
    !isSkillSection ? 'bot' : ['bot', 'bot--skill'],
    null,
    'bot'
  );
  const chatWrapper = generateItem('div', 'bot__chat-window');

  // Generates Chat button
  const botBtn = generateItem('button', ['bot__btn', 'blob']);
  if (isSkillSection)
    BOT_ICONS[0].src = routeSanitization(BOT_ICONS[0]?.src, '.', '..');

  const botBtnImg = generateImg(BOT_ICONS[0], ['bot-img']);
  botBtn.append(botBtnImg);

  // Generates close button
  const botCloseBtn = generateItem('button', 'bot__close');
  if (isSkillSection)
    BOT_ICONS[1].src = routeSanitization(BOT_ICONS[1]?.src, '.', '..');

  if (isSkillSection)
    BOT_ICONS[2].src = routeSanitization(BOT_ICONS[2]?.src, '.', '..');

  const closeImg = generateImg(BOT_ICONS[1], ['close-img']);

  const arrow = generateImg(BOT_ICONS[2], ['send-arrow']);

  const arrowBtn = generateItem('button', 'arrow__button');

  // Generates chat windows
  const botWindow = generateItem('div', 'bot__chat');

  // Generates input chat
  const botInput = generateItem('input', 'bot__input', null, 'bot-input');

  botCloseBtn.append(closeImg);
  arrowBtn.append(arrow);
  botWindow.append(arrowBtn);
  botWindow.append(botCloseBtn);
  botWindow.append(botInput);
  botWindow.append(chatWrapper);

  // Simulates human delayed hello response
  const botMessages = (textItem, time = 1000) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const p = generateItem('p', ['chat__msg', 'chat__msg-bot']);
        var text = document.createTextNode(textItem);
        p.appendChild(text);
        resolve(p);
      }, time);
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

    // Fetches the bots name
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    let { name } = await response.json();

    // Discriminates if the user is a new user or not
    // If it is a new user will ask for a name and save it in localStorage for future use, if it a regular user will look for the stored data
    if (chatWrapper.childNodes.length < 3 && !localStorage.getItem('user')) {
      for (const textItem in BOT_HELLO) {
        if (textItem == 0) {
          const text = await botMessages(
            `${BOT_HELLO[textItem]} ${name.split(' ')[0]}`,
            700
          );
          chatWrapper.append(text);
        } else {
          const text = await botMessages(BOT_HELLO[textItem], 700);
          chatWrapper.append(text);
        }
      }
    } else {
      const text = await botMessages(
        `${BOT_HI} ${JSON.parse(localStorage.getItem('user')).name}!`,
        500
      );
      chatWrapper.append(text);
    }
    chatWrapper.scrollTop = chatWrapper.scrollHeight;
  });

  const chatListener = async (event) => {
    const inputElement = document.getElementById('bot-input');
    const inputValue = inputElement.value || event.target.value;
    if (
      (event.key === 'Enter' || event.type === 'click') &&
      inputValue !== ''
    ) {
      const p = generateItem('p', 'chat__msg');
      var text = document.createTextNode(inputValue);
      p.appendChild(text);
      chatWrapper.append(p);
      chatWrapper.scrollTop = chatWrapper.scrollHeight;

      // Expects the user input of a name
      if (chatWrapper.childNodes.length === 4) {
        localStorage.setItem(
          'user',
          JSON.stringify({ id: 1, name: event.target.value })
        );
      }

      // Sends standard response
      if (chatWrapper.childNodes.length > 1) {
        const text = await botMessages('Sorry I have no more responses', 500);
        chatWrapper.append(text);
        chatWrapper.scrollTop = chatWrapper.scrollHeight;
      }

      event.target.value = '';
      inputElement.value = '';
    }
  };

  // Listen to input to be shown in the chat
  arrowBtn.addEventListener('click', (event) => {
    chatListener(event);
  });

  // Listen to input to be shown in the chat
  botInput.addEventListener('keypress', (event) => {
    chatListener(event);
  });

  botWrapper.append(botWindow);
  botWrapper.append(botBtn);
  main.append(botWrapper);
};

(function () {
  main();
})();
