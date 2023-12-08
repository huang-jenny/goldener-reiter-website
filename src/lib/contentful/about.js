import { graphql } from '.';

export const getGoreiInfo = async () => {
  const res = await graphql(`
    query {
      goreiInformationCollection(limit: 1) {
        items {
          informationen {
            json
          }
          instagramLink
          residentAdvisorLink
          googleMapsLink
        }
      }
    }
  `); //.then((r) => console.log(r.data?.goreiInformationCollection?.items[0]));

  const { data } = res;
  return data?.goreiInformationCollection?.items[0];
};
