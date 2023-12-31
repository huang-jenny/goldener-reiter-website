const setLedText = (ledsJson, text, lineNumber) => {
  ledsJson?.assets[lineNumber]?.layers?.forEach((layer) => {
    if (layer.t) {
      layer.t.d.k[0].s.t = text;
    }
  });
};

export default setLedText;
