import { graphql } from '.';
let date = new Date().toISOString();
// let date = '2023-12-01T19:13:25.122Z'; // TODO: NUR FÜR DEMO ZWECKE, oben verwenden für produktion
let minDate = getCorrectedCurrentDateTime(new Date(date));

export const getUpcomingEvents = async () => {
  const res = await graphql(`
    query {
      eventCollection(where: { date_gte: "${minDate.toISOString()}" } order: date_ASC) {
        items {
          date
          eventname
          lineupCollection {
            items {
              artistName
              link
            }
          }
        }
      }
    }
  `);
  const { data } = res;
  return data?.eventCollection?.items;
};

export const getNextThreeEvents = async () => {
  const res = await graphql(`
    query {
      eventCollection(
        where: { date_gte: "${minDate.toISOString()}" }
        order: [date_ASC]
        limit: 3
      ) {
        items {
          date
          eventname
          lineupCollection {
            items {
              artistName
              link
            }
          }
        }
      }
    }
  `);

  const { data } = res;
  // console.log(data?.eventCollection?.items[0].date);
  return data?.eventCollection?.items;
};

export const getNextEvent = async () => {
  const res = await graphql(`
    query {
      eventCollection(
        where: { date_gte: "${minDate.toISOString()}" }
        order: [date_ASC]
        limit: 1
      ) {
        items {
          date
          eventname
          lineupCollection {
            items {
              artistName
              link
            }
          }
        }
      }
    }
  `);

  const { data } = res;
  return data?.eventCollection?.items;
};

export const isTodayOpen = async () => {
  const nextEvent = await getNextEvent();
  const nextEventDate = new Date(nextEvent[0]?.date);
  // console.log('nextEventDate', nextEventDate.toISOString(), minDate.toISOString());
  return nextEventDate - minDate < 1000 * 60 * 60 * 24; // if difference is less than 24 hours
};

// Function to get the minimum date and time for the query with time corrections
function getCorrectedCurrentDateTime(date) {
  let minDate = new Date(date);

  // time correction because contentful wrongly assumes the event date is in UTC
  isDaylightSavingTime(minDate)
    ? minDate.setHours(minDate.getHours() + 2)
    : minDate.setHours(minDate.getHours() + 1);

  minDate.setDate(minDate.getDate() - 1); // time correction because time of date is 00:00:00 and we want to include the current day
  minDate.setHours(minDate.getHours() - 5); // time correction because events go until the next morning
  // console.log('minDate', minDate.toISOString());
  return minDate;
}

// Function to check if the given date is in daylight saving time (CEST)
function isDaylightSavingTime(date) {
  const year = date.getFullYear();
  // Daylight saving time in Germany typically starts on the last Sunday in March and ends on the last Sunday in October
  const dstStart = new Date(Date.UTC(year, 3, 25)); // March 25th
  const dstEnd = new Date(Date.UTC(year, 10, 25)); // October 25th
  dstStart.setDate(dstStart.getDate() - dstStart.getDay() + 7); // Adjust to the last Sunday in March
  dstEnd.setDate(dstEnd.getDate() - dstEnd.getDay() + 7); // Adjust to the last Sunday in October
  return date >= dstStart && date < dstEnd;
}
