import Lottie from 'lottie-react';
import bueroklammer from 'public/Animation - 1702478830707.json';
import stern from 'public/Animation - 1702478638256.json';
import goreiDoor from 'public/goreiDoor.json';

const Door = () => {
  return (
    <Lottie
      animationData={goreiDoor}
      loop={false}
      style={{ width: 'auto', height: '100%' }}
      autoplay={false}
    />
  );
};

export default Door;
