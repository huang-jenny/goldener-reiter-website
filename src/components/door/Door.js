import { Box, Image, useBreakpointValue } from '@chakra-ui/react';
import Button3D from '../reusable/Button3D';
import { Suspense, useEffect, useState, useRef } from 'react';
import { matrix_complex, pressStart2P } from '@/app/fonts';
import Lottie from 'lottie-react';
import { DotLottiePlayer, Controls, PlayerEvents } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { shuffleArray } from '@/lib/shuffleArray';

const Door = ({ doorData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [horseAnimationRunning, setHorseAnimationRunning] = useState(false);
  const doorRef = useRef(null);
  const horseRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const [horseAnimationQueue, setHorseAnimationQueue] = useState(
    shuffleArray([...doorData.lottieFiles.horses])
  );

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

      // horseRef.current?.stop();
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
        <Image
          src="/doorBg.svg"
          alt="background of a door"
          width="100%"
          height="100%"
          pos="relative"
          zIndex={0}></Image>
        <DotLottiePlayer
          key={horseAnimationQueue[0]} // TO FORCE RERENDER!!!
          src={horseAnimationQueue[0]}
          autoplay={false}
          ref={horseRef}
          // onEvent={
          //   doorData.isOpenToday // close door automatically if today is not open
          //     ? null
          //     : (event) => {
          //         if (event === PlayerEvents.LoopComplete) {
          //           setIsOpen(false);
          //         }
          //       }
          // }
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

        <Lottie
          animationData={doorData.lottieFiles.door} // ACHTUNG: HIER IST AUCH #CLICKAREA DRIN
          loop={false}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            minHeight: '100%',
            minWidth: '100%'
          }}
          autoplay={false}
          lottieRef={doorRef}
          onEnterFrame={(frame) => {
            if (frame.currentTime === 0) {
              // if door closed
              let newAnimationQueue = [...horseAnimationQueue];
              newAnimationQueue.push(newAnimationQueue[0]);
              newAnimationQueue.shift();
              setHorseAnimationQueue(newAnimationQueue);
            }
          }}
        />
        <Lottie
          animationData={doorData.lottieFiles.leds}
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
    </>
  );
};

export default Door;
