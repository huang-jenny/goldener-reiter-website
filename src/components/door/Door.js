import Lottie from 'lottie-react';
import door from '../../../public/goreiDoor_door.json';
import poster from '../../../public/goreiDoor_plakat.json';
import LED1 from '../../../public/goreiDoor_led1.json';
import LED2 from '../../../public/goreiDoor_led2.json';
import LED3 from '../../../public/goreiDoor_led3.json';
import { Box } from '@chakra-ui/react';
import Button3D from '../reusable/Button3D';
import getLedWithText from '@/lib/lottie/getLedText';
import { Suspense, useEffect, useState } from 'react';

const Door = () => {
  const [led1WithText, setLed1WithText] = useState(null);
  const [led2WithText, setLed2WithText] = useState(null);
  const [led3WithText, setLed3WithText] = useState(null);

  const [posterWithImage, setPosterWithImage] = useState(null);

  useEffect(() => {
    setLed1WithText(getLedWithText(LED1, 'COMING UP @ GOLDENER REITER: '));
    setLed2WithText(getLedWithText(LED2, 'THURSDAY: DAVID BÖNING / JEYROTOTO //'));
    setLed3WithText(getLedWithText(LED3, 'FRIDAY: DJ SWAGGER / DANCEKOWSKI //'));

    // const posterWithImage = { ...poster };
    let newPosterWithImage = { ...poster };
    newPosterWithImage.assets[0].u = '';
    newPosterWithImage.assets[0].p = 'newyears_rescaled.jpg';
    setPosterWithImage(newPosterWithImage);
  }, []);

  return (
    <Box pos="relative" h="100%">
      <Suspense fallback={<div>Loading...</div>}>
        {/* todo Suspense??? */}
        <Box h="100%" pos="relative">
          <Lottie
            animationData={door}
            loop={false}
            style={{ width: 'auto', height: '100%' }}
            autoplay={false}
          />
          {/* <Lottie
          animationData={posterWithImage}
          loop={false}
          style={{ width: 'auto', height: '100%', position: 'absolute', top: 0, left: 0 }}
          autoplay={false}
        /> */}
          <Lottie
            animationData={LED3}
            loop={true}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0
            }}
            autoplay={true}
          />
          <Lottie
            animationData={LED2}
            loop={true}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0
            }}
            autoplay={true}
          />
          <Lottie
            animationData={led1WithText}
            loop={true}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0
            }}
            autoplay={true}
          />
        </Box>
      </Suspense>
      <Box pos="absolute" left="87%" bottom="50%" zIndex="2">
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
