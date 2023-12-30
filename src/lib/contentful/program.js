import { graphql } from '.';
export const getEvents = async () => {
  const res = await graphql(`
    query {
      eventCollection(order: date_ASC) {
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

export const getNextTwoEvents = async () => {
  // const res = await graphql(`
  //   query {
  //     eventCollection(
  //       where: { date_gte: "${new Date().toISOString()}" }
  //       order: [date_ASC]
  //       limit: 2
  //     ) {
  //       items {
  //         date
  //         eventname
  //         lineupCollection {
  //           items {
  //             artistName
  //             link
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // TODO: NUR FÜR DEMO ZWECKE, oben wieder auskommentieren für produktion
  const res = await graphql(`
    query {
      eventCollection(
        where: { date_gte: "2023-12-28T18:13:25.122Z" }
        order: [date_ASC]
        limit: 2
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
