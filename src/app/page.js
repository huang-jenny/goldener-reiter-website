import Image from 'next/image';
import styles from './page.module.css';
import Program from '@/components/program/Program';
import { getEvents, getNextTwoEvents } from '@/lib/contentful/program';
import { getGoreiInfo } from '@/lib/contentful/about';
import PageTemplate from '@/components/PageTemplate';
import setLedText from '@/lib/lottie/setLedText';
import LED1 from 'public/goreiDoor_led1_bodymovin.json';
import LED2 from 'public/goreiDoor_led2_bodymovin.json';
import LED3 from 'public/goreiDoor_led3_bodymovin.json';
import LEDs from 'public/leds.json';
import { getWeekDay } from '@/lib/formatDate';

export default async function Home() {
  const [events, goreiInfo, nextTwoEvents] = await Promise.all([
    getEvents(),
    getGoreiInfo(),
    getNextTwoEvents()
  ]);
  setLedText('COMING UP @ GOLDENER REITER //', 0);

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

  const lottieJsons = { leds: LEDs };

  return (
    <main>
      <PageTemplate events={events} goreiInfo={goreiInfo} lottieJsons={lottieJsons} />
    </main>
  );
}
