import moment from 'moment';

//Dynamic Import
const loadLanguages = async () => {
  var userLang = navigator.language || navigator.userLanguage;

  switch (userLang) {
    case 'en':
      return await import('../src/lang/EN.js');
    case 'es':
      return await import('../src/lang/ES.js');
    default:
      return await import('../src/lang/EN.js');
  }
};

const timeDiff = (startDate, endDate, isCurrent) => {
  if (isCurrent) {
    endDate = moment().format('YYYYMMDD');
  }

  return moment(endDate).diff(moment(startDate));
};

const renderTimeSpam = (years, months, time) => {
  if (years >= 1) {
    return `${Math.trunc(years)} .Yrs ${Math.round((months / 100) * 12)} .Mos`;
  } else {
    return `${Math.round(moment.duration(time).asMonths())} .Mos`;
  }
};

// Get start and end date to calculate how much time in years or months has passed, if isCurrent is true that calculates from start until today.
const calculateDates = (startDate, endDate, isCurrent) => {
  const time = timeDiff(startDate, endDate, isCurrent);

  const calculateYears = moment.duration(time).asYears();

  const calculateMonths = calculateYears.toFixed(2).toString().split('.')[1];

  return renderTimeSpam(calculateYears, calculateMonths, time);
};

// Render date phrase
const renderDateMsg = (
  startDate = undefined,
  endDate = undefined,
  isCurrent = undefined
) => {
  if (isCurrent) {
    return `Date: ${moment(startDate).format(
      'MMM YYYY'
    )} - Current (${calculateDates(startDate, endDate, isCurrent)})`;
  }

  return `Date: ${moment(startDate).format('MMM YYYY')} - ${moment(
    endDate
  ).format('MMM YYYY')} (${calculateDates(startDate, endDate, isCurrent)})`;
};

// Generates custom img
const generateImg = (item = {}, className = []) => {
  const img = document.createElement('img');
  img.src = item.src;
  if (className) className.forEach((classItem) => img.classList.add(classItem));
  if (item.alt) img.alt = item.alt;
  if (item.title) img.title = item.title;
  return img;
};

const generateItem = (
  itemType = undefined,
  className = undefined,
  text = undefined
) => {
  const item = document.createElement(itemType);
  if (className) item.classList.add(className);
  if (text) item.innerHTML = text;
  return item;
};

// Generates the main NavBar
const generateNavBar = (items, activeBtn) => {
  const navBar = document.getElementById('nav-btn');
  items.forEach((item) => {
    const li = document.createElement('li');
    li.tabIndex = item?.tabIndex;
    if (activeBtn === item?.location) li.id = 'active-btn';
    const anchor = document.createElement('a');
    anchor.href = item?.path;
    if (activeBtn !== 'Home') anchor.href = item?.path.replace('views/', '');
    const span = document.createElement('span');
    span.innerHTML = item?.name;
    if (activeBtn !== 'Home') item.src = item?.src.replace('views/', '');
    const img = generateImg(item, item.className);
    anchor.append(img);
    anchor.append(span);
    li.append(anchor);
    navBar.append(li);
  });
};

// Checks if it should trigger a function or not based on body id
const checkNameSpace = (space, callback) => {
  if (document.getElementById(space)) {
    callback();
  }
};

export {
  renderDateMsg,
  calculateDates,
  timeDiff,
  renderTimeSpam,
  generateImg,
  generateItem,
  loadLanguages,
  generateNavBar,
  checkNameSpace,
};
