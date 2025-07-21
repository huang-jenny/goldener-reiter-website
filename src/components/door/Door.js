import { Box, Image } from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { pressStart2P } from '@/app/fonts';
import Lottie from 'lottie-react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { shuffleArray } from '@/lib/shuffleArray';

const Door = ({ doorData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const doorRef = useRef(null);
  const horseRef = useRef(null);
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
    }
  }, [isOpen]);

  useEffect(() => {
    doorRef.current.stop();
  }, []);

  return (
    <>

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
          animationData={doorData.lottieFiles.door}
          loop={false}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
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
          animationData={doorData.lottieFiles.leds[2]} // ACHTUNG: HIER IST AUCH #CLICKAREA DRIN
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
          animationData={doorData.lottieFiles.leds[1]} // ACHTUNG: HIER IST AUCH #CLICKAREA DRIN
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
          animationData={doorData.lottieFiles.leds[0]} // ACHTUNG: HIER IST AUCH #CLICKAREA DRIN
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
    </>
  );
};

export default Door;
