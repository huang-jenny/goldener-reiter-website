import { Box, useBreakpointValue } from '@chakra-ui/react';
import Button3D from '../reusable/Button3D';
import { Suspense, useEffect, useState, useRef } from 'react';
import { matrix_complex, pressStart2P } from '@/app/fonts';
import Lottie from 'lottie-react';

const Door = ({ doorData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lottieRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    const handleEvent = () => {
      setIsOpen(!isOpen);
      console.log('click');
    };

    // Attach the event listener to the layer #clickarea in Lottie JSON
    const element = document.getElementById('clickarea');
    if (element) {
      element.style.cursor = 'pointer';
      element.addEventListener('click', handleEvent);
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      if (element) {
        element.removeEventListener('click', handleEvent);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      lottieRef.current.playSegments([0, 13], true);
    } else {
      lottieRef.current.playSegments([13, 0], true);
    }
  }, [isOpen]);

  useEffect(() => {
    lottieRef.current.stop(); // TODO: eleganter lösen?
  }, []);

  return (
    <Box pos="relative" h="100%">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* todo Suspense??? */}
      <Box h={isMobile ? '100%' : '100vh'} pos="relative">
        <Lottie
          animationData={doorData.lottieJsons.leds}
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
        <Lottie
          animationData={doorData.lottieJsons.doorWithPoster}
          // animationData={doorData.lottieJsons.door}
          loop={false}
          style={{ width: '100%', height: '100%' }}
          autoplay={false}
          lottieRef={lottieRef}
          // TODO!!
          // keepLastFrame={true}
        />
        <Lottie
          animationData={doorData.lottieJsons.clickarea}
          loop={false}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
          autoplay={false}
        />
      </Box>
      {/* </Suspense> */}
      {/* <Box
        pos="absolute"
        left="87%"
        bottom="50%"
        zIndex="2"
        onClick={() => {
          lottieRef.current.play();
        }}>
        <Button3D></Button3D>
      </Box> */}
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
