import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import Button3D from '../reusable/Button3D';
import { Suspense, useEffect, useState, useRef } from 'react';
import { matrix_complex, pressStart2P } from '@/app/fonts';
import Lottie from 'lottie-react';
import { DotLottiePlayer, Controls, PlayerEvents } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const Door = ({ doorData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [horseAnimationRunning, setHorseAnimationRunning] = useState(false);
  const doorRef = useRef(null);
  const horseRef = useRef(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleEvent = () => {
      setIsOpen((isOpen) => !isOpen);
    };

    // Attach the event listener to the layer #clickarea in Lottie JSON
    const element = document.getElementById('clickarea');
    if (element) {
      element.classList.add('pointerCursor');
      element.addEventListener('click', handleEvent);
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      if (element) {
        element.classList.remove('pointerCursor');
        element.removeEventListener('click', handleEvent);
      }
    };
  }, []);

  useEffect(() => {
    if (isOpen === true) {
      doorRef.current?.playSegments([0, 13], true);
      horseRef.current?.play();
    } else {
      doorRef.current?.playSegments([13, 0], true);
      horseRef.current?.stop();
    }
  }, [isOpen]);

  useEffect(() => {
    doorRef.current.stop(); // TODO: eleganter lösen? z.B. set (opening) (closing) (closed)
  }, []);

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* todo Suspense??? */}

      <Box h="100%" w="100%" pos="relative">
        <DotLottiePlayer
          src="/animationpferd.lottie"
          autoplay={false}
          ref={horseRef}
          onEvent={
            doorData.isOpenToday // close door automatically if today is not open
              ? null
              : (event) => {
                  if (event === PlayerEvents.LoopComplete) {
                    setIsOpen(false);
                  }
                }
          }
          loop
          style={{
            width: '100%',
            zIndex: 0,
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            fontFamily: pressStart2P.style.fontFamily
          }}></DotLottiePlayer>

        {/* <Image
          src="https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=5.0.39"
          height="100%"
          width="100%"
          aspectRatio={1 / 1}
          display="block"
          // position="absolute"
          objectFit="cover"
        /> */}

        <Lottie
          animationData={doorData.lottieJsons.doorWithPoster} // ACHTUNG: HIER IST AUCH #CLICKAREA DRIN
          // animationData={doorData.lottieJsons.door}
          loop={false}
          style={{
            // position: 'absolute',
            width: '100%',
            height: '100%',
            minHeight: '100%',
            minWidth: '100%'
          }}
          autoplay={false}
          lottieRef={doorRef}

          // TODO!!
          // keepLastFrame={true}
        />
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
        {/* <Lottie
          animationData={doorData.lottieJsons.clickarea}
          loop={false}
          style={{
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            position: 'static',
            zIndex: 5
          }}
          autoplay={false}
        /> */}
      </Box>
      {/* </Suspense> */}
    </>
  );
};

export default Door;
