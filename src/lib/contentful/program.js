import { graphql } from '.';

export const getEvents = async () => {
  const res = await graphql(`
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
  const { data } = res;
  return data?.eventCollection?.items;
};
