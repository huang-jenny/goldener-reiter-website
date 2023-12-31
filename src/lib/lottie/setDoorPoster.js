export const setDoorPoster = (posterJson, posterUrl) => {
  console.log(posterUrl);
  posterJson.assets[0].u = '';
  posterJson.assets[0].p = posterUrl + '?fit=fill&w=200&h=250'; // to reduce size and crop if necessary
};
