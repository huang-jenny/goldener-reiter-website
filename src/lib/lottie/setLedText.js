import ledJson from 'public/leds.json';

const setLedText = (text, lineNumber) => {
  ledJson?.assets[lineNumber]?.layers?.forEach((layer) => {
    if (layer.t) {
      layer.t.d.k[0].s.t = text;
    }
  });
};

export default setLedText;
