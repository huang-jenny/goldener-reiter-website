const getLedWithText = (lottieJson, text) => {
  const newLottieJson = { ...lottieJson };
  // newLottieJson.layers.map((layer) => {
  //   if (layer.nm.startsWith('text')) {
  //     layer.t.d.k[0].s.t = text;
  //   }
  // });
  newLottieJson.layers.forEach((layer) => {
    if (layer.t) {
      layer.t.d.k[0].s.t = text;
    }
  });

  return newLottieJson;
};

export default getLedWithText;
