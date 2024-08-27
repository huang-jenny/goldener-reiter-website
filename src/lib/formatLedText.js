import { getWeekDay } from './formatDate';

export const formatLedText_Weekday_Event_Lineup = (event) => {
  let string = '* * * * * * * * * * * *';
  if (event) {
    string =
      (event.date ? getWeekDay(event.date) + ': ' : '') +
      (event.eventname ? event.eventname : '') +
      (event.eventname && event.lineupCollection.items.length > 0 ? ' w/ ' : '') +
      (event.lineupCollection
        ? event.lineupCollection.items.map((item) => item.artistName).join(' & ')
        : '') +
      ' //';
  }
  return string;
};

export const formatLedText_Event = (event) => {
  const string = (event.eventname ? event.eventname : '') + ' ---';
  return string;
};

export const formatLedText_Lineup = (event) => {
  const string =
    (event.lineupCollection
      ? event.lineupCollection.items.map((item) => item.artistName).join(' & ')
      : '') + ' //';
  return string;
};
