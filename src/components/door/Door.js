import Lottie from 'lottie-react';
import bueroklammer from 'public/Animation - 1702478830707.json';
import stern from 'public/Animation - 1702478638256.json';

const Door = () => {
  return (
    <div>
      <Lottie animationData={stern} loop={true} style={{ width: 'auto', height: '100%' }} />
    </div>
  );
};

export default Door;
