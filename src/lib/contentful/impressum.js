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
  console.log(data?.impressumCollection?.items[0]);
  return data?.impressumCollection?.items[0];
};
