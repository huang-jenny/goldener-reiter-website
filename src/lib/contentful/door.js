import { graphql } from '.';
export const getPosterUrl = async () => {
  const res = await graphql(`
    query {
      posterCollection(limit: 1) {
        items {
          poster {
            url
          }
        }
      }
    }
  `);
  const { data } = res;
  return data?.posterCollection?.items[0].poster?.url;
};
