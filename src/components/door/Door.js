// import Lottie from 'lottie-react';
import door from '../../../public/goreiDoor_door.json';
import poster from '../../../public/goreiDoor_plakat.json';
import LED1 from '../../../public/goreiDoor_led1.json';
import LED2 from '../../../public/goreiDoor_led2.json';
import LED3 from '../../../public/goreiDoor_led3.json';
import { Box } from '@chakra-ui/react';
import Button3D from '../reusable/Button3D';
import setLedText from '@/lib/lottie/setLedText';
import { Suspense, useEffect, useState, useRef } from 'react';
import { pressStart2P } from '@/app/fonts';
import Lottie from 'lottie-react';

const Door = ({ lottieJsons }) => {
  const [posterWithImage, setPosterWithImage] = useState(null);
  const [isStopped, setIsStopped] = useState(true);
  const lottieRef = useRef(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    // const posterWithImage = { ...poster };
    let newPosterWithImage = { ...poster };
    newPosterWithImage.assets[0].u = '';
    newPosterWithImage.assets[0].p = 'newyears_rescaled.jpg';
    setPosterWithImage(newPosterWithImage);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setAnimations(
  //       <Lottie
  //         animationData={lottieJsons.led1}
  //         loop={true}
  //         style={{
  //           width: '100%',
  //           height: '100%',
  //           position: 'absolute',
  //           top: 0,
  //           left: 0
  //         }}
  //         autoplay={true}
  //       />
  //     );
  //   }, 100); //TODO: BULLSHIT
  //   // Cleanup function to clear the timeout if the component unmounts
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Box pos="relative" h="100%">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* todo Suspense??? */}
      <Box h="100%" pos="relative">
        <Lottie
          animationData={door}
          loop={false}
          style={{ width: 'auto', height: '100%' }}
          autoplay={false}
          lottieRef={lottieRef}
          direction={direction}
          onAnimationEnd={() => setDirection(-direction)} // TODO!!
          // keepLastFrame={true}
        />
        {/* <Lottie
          animationData={posterWithImage}
          loop={false}
          style={{ width: 'auto', height: '100%', position: 'absolute', top: 0, left: 0 }}
          autoplay={false}
        /> */}

        <Lottie
          animationData={lottieJsons.leds}
          loop={true}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            fontFamily: pressStart2P.style.fontFamily
          }}
          autoplay={true}
        />
      </Box>
      {/* </Suspense> */}
      <Box
        pos="absolute"
        left="87%"
        bottom="50%"
        zIndex="2"
        onClick={() => {
          lottieRef.current.play();
        }}>
        <Button3D></Button3D>
      </Box>
      {/* <Box
        fontSize="lg"
        pos="absolute"
        left="45%"
        bottom="130px"
        textAlign="center"
        zIndex="2"
        bgColor="pink">
        &apos;knock knock&apos;
      </Box> */}
    </Box>
  );
};

export default Door;
