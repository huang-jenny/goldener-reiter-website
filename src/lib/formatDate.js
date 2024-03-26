const formatDate = (date) => {
  const dateOptionsWeekday = {
    weekday: 'long'
    // day: 'numeric',
    // month: 'numeric'
  };
  const dateOptionsDay = {
    // weekday: 'long',
    // month: 'numeric',
    day: 'numeric'
  };

  const dateOptionsMonth = {
    // weekday: 'long',
    month: 'numeric'
  };

  const weekdayString = new Date(date).toLocaleDateString('en-US', dateOptionsWeekday);
  const dateString =
    new Date(date).toLocaleDateString('en-US', dateOptionsDay) +
    '/' +
    new Date(date).toLocaleDateString('en-US', dateOptionsMonth);

  return weekdayString + ' ' + dateString;
};

export const getWeekDay = (date) => {
  const dateOptionsWeekday = {
    weekday: 'long'
    // day: 'numeric',
    // month: 'numeric'
  };
  const weekdayString = new Date(date).toLocaleDateString('en-US', dateOptionsWeekday);
  return weekdayString;
};

export default formatDate;
