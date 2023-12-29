const formatDate = (date) => {
  const dateOptionsWeekday = {
    weekday: 'long'
    // day: 'numeric',
    // month: 'numeric'
  };
  const dateOptions = {
    // weekday: 'long',
    month: 'numeric',
    day: 'numeric'
  };

  const weekdayString = new Date(date).toLocaleDateString('en-US', dateOptionsWeekday);
  const dateString = new Date(date).toLocaleDateString('en-US', dateOptions);

  return weekdayString + ' ' + dateString;
};

export default formatDate;
