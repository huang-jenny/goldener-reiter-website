import Image from 'next/image';
import styles from './page.module.css';
import Program from '@/components/program/Program';
import { getEvents, getNextTwoEvents } from '@/lib/contentful/program';
import { getGoreiInfo } from '@/lib/contentful/about';
import PageTemplate from '@/components/PageTemplate';
import setLedText from '@/lib/lottie/setLedText';
import leds from 'public/leds.json';
import door from 'public/door.json';
import doorWithPoster from 'public/plakat.json';
import { getWeekDay } from '@/lib/formatDate';
import { getPosterUrl } from '@/lib/contentful/door';
import { setDoorPoster } from '@/lib/lottie/setDoorPoster';

export default async function Home() {
  const [events, goreiInfo, nextTwoEvents, posterUrl] = await Promise.all([
    getEvents(),
    getGoreiInfo(),
    getNextTwoEvents(),
    getPosterUrl()
  ]);
  setLedText('COMING UP @ GOLDENER REITER //', 0);

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
    setLedText(lineup.toUpperCase(), index + 1);
  });

  setDoorPoster(posterUrl);

  const lottieJsons = { leds: leds, door: door, doorWithPoster: doorWithPoster };
  const doorData = {
    lottieJsons: lottieJsons
  };

  return (
    <main>
      <PageTemplate events={events} goreiInfo={goreiInfo} doorData={doorData} />
    </main>
  );
}
