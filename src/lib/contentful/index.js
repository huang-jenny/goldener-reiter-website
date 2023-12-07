export const graphql = async (query) => {
  const r = await fetch(process.env.CONTENTFUL_ADDRESS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
    },
    body: JSON.stringify({ query })
  });

  if (r.ok) {
    return r.json();
  }

  throw new Error(r.json().errors[0].message);
};
