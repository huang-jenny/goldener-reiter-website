export const setDoorEasterEgg = (doorJson, animationUrl) => {
  console.log(animationUrl);
  doorJson.assets[1].u = '';
  doorJson.assets[1].p = animationUrl; // + '?fit=fill&w=200&h=250'; // to reduce size and crop if necessary
};
