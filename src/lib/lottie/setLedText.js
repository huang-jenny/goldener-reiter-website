const setLedText = (ledsJson, text, lineNumber) => {
  ledsJson?.assets[lineNumber]?.layers?.forEach((layer) => {
    if (layer.t) {
      layer.t.d.k[0].s.t = text + ' ' + text; // duplicate so it does not jump when theres few text
    }
  });
};

export default setLedText;
