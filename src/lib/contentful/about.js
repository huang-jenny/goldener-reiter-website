import { graphql } from '.';

export const getGoreiInfo = async () => {
  const res = await graphql(`
    query {
      goreiInformationCollection(limit: 1) {
        items {
          openingHours {
            json
          }
          address {
            json
          }
          infotext {
            json
          }
          infotext2 {
            json
          }
          instagramLink
          residentAdvisorLink
          googleMapsLink
        }
      }
    }
  `);

  const { data } = res;
  return data?.goreiInformationCollection?.items[0];
};
