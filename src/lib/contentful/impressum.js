import { graphql } from '.';

export const getImpressum = async () => {
  const res = await graphql(`
    query {
      impressumCollection(limit: 1) {
        items {
          impressum {
            json
          }
        }
      }
    }
  `);
  const { data } = res;
  return data?.impressumCollection?.items[0];
};
