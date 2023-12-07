import { graphql } from '.';

export const getEvents = async () => {
  const data = await graphql(`
    query {
      eventCollection {
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
  return data?.eventCollection?.items;
};
