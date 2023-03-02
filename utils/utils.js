import moment from 'moment';

const timeDiff = (startDate, endDate, isCurrent) => {
  if (isCurrent) {
    endDate = moment();
  }

  return moment(endDate).diff(moment(startDate));
};

const renderTimeSpam = (years, months, time) => {
  if (years >= 1) {
    return `${Math.round(years)} .Yrs ${Math.round((months / 100) * 12)} .Mos`;
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
const renderDateMsg = (startDate, endDate, isCurrent = undefined) => {
  if (isCurrent) {
    return `Date: ${moment(startDate).format(
      'MMM YYYY'
    )} - Current (${calculateDates(startDate, endDate, isCurrent)})`;
  }

  return `Date: ${moment(startDate).format('MMM YYYY')} - ${moment(
    endDate
  ).format('MMM YYYY')} (${calculateDates(startDate, endDate, isCurrent)})`;
};

export { renderDateMsg, calculateDates, timeDiff, renderTimeSpam };
