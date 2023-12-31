import Image from 'next/image';
import styles from './page.module.css';
import Program from '@/components/program/Program';
import { getEvents, getNextTwoEvents } from '@/lib/contentful/program';
import { getGoreiInfo } from '@/lib/contentful/about';
import PageTemplate from '@/components/PageTemplate';
import setLedText from '@/lib/lottie/setLedText';
import ledsJson from 'public/leds.json';
import doorJson from 'public/door.json';
import clickareaJson from 'public/clickarea.json';
import doorWithPosterJson from 'public/doorWithPoster.json';
import { getWeekDay } from '@/lib/formatDate';
import { getPosterUrl } from '@/lib/contentful/door';
import { setDoorPoster } from '@/lib/lottie/setDoorPoster';
import { setDoorEasterEgg } from '@/lib/lottie/setDoorEasterEgg';

export default async function Home() {
  const [events, goreiInfo, nextTwoEvents, posterUrl] = await Promise.all([
    getEvents(),
    getGoreiInfo(),
    getNextTwoEvents(),
    getPosterUrl()
  ]);

  // ___________LED_______________
  // setLedText(ledsJson, 'COMING UP @ GOLDENER REITER //', 0);

  // change LED text in Lottie Jsons according to retrieved events
  nextTwoEvents.forEach((event, index) => {
    const lineup =
      getWeekDay(event.date) +
      ': ' +
      (event.eventname ? event.eventname + ' w/ ' : '') +
      (event.lineupCollection
        ? event.lineupCollection.items.map((item) => item.artistName).join(' & ')
        : '') +
      ' //';
    setLedText(ledsJson, lineup.toUpperCase(), index + 1);
  });

  // ___________POSTER_______________
  setDoorPoster(doorWithPosterJson, posterUrl);

  // setDoorEasterEgg(doorWithPosterJson, '../test.mp4');

  const lottieJsons = {
    leds: ledsJson,
    door: doorJson,
    doorWithPoster: doorWithPosterJson,
    clickarea: clickareaJson
  };
  const doorData = {
    lottieJsons: lottieJsons
  };

  return (
    <main>
      <PageTemplate events={events} goreiInfo={goreiInfo} doorData={doorData} />
    </main>
  );
}
