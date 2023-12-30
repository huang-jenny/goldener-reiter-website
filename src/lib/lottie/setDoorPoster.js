import posterJson from 'public/plakat.json';

export const setDoorPoster = (posterUrl) => {
  console.log(posterUrl);
  posterJson.assets[0].u = '';
  posterJson.assets[0].p = posterUrl + '?fit=fill&w=200&h=250'; // to reduce size and crop if necessary
};
