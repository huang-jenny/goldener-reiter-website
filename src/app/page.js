import Image from 'next/image';
import styles from './page.module.css';
import Program from '@/components/program/Program';
import {
  getUpcomingEvents,
  getNextThreeEvents,
  getMinDateTime,
  isTodayOpen
} from '@/lib/contentful/program';
import { getGoreiInfo } from '@/lib/contentful/about';
import PageTemplate from '@/components/PageLayout';
import setLedText from '@/lib/lottie/setLedText';
import ledsJson from 'public/leds.json';
import doorJson from 'public/door.json';
import doorWithPosterJson from 'public/doorWithPoster.json';
import { getWeekDay } from '@/lib/formatDate';
import { getPosterUrl } from '@/lib/contentful/door';
import { setDoorPoster } from '@/lib/lottie/setDoorPoster';
import { setDoorEasterEgg } from '@/lib/lottie/setDoorEasterEgg';
import {
  formatLedText_Weekday_Event_Lineup,
  formatLedText_Event,
  formatLedText_Lineup,
  formatLedText_Event_Lineup
} from '@/lib/formatLedText';

export default async function Home() {
  const [events, goreiInfo, nextThreeEvents, posterUrl, isOpenToday] = await Promise.all([
    getUpcomingEvents(),
    getGoreiInfo(),
    getNextThreeEvents(),
    getPosterUrl(),
    isTodayOpen()
  ]);

  // _____________ LEDS ______________
  if (isOpenToday) {
    const todaysEvent = nextThreeEvents[0];

    setLedText(ledsJson, 'TONIGHT TONIGHT TONIGHT', 0);

    // if event has both eventname and lineup
    if (todaysEvent.eventname && todaysEvent.lineupCollection.items.length > 0) {
      setLedText(ledsJson, formatLedText_Event(todaysEvent), 1);
      setLedText(ledsJson, 'with ' + formatLedText_Lineup(todaysEvent).toUpperCase(), 2);
    } else if (todaysEvent.eventname) {
      // if event has only eventname
      setLedText(ledsJson, '* * * * * * * * * * * *', 1);
      setLedText(ledsJson, formatLedText_Event(todaysEvent).toUpperCase(), 2);
    } else if (todaysEvent.lineupCollection.items.length > 0) {
      // if event has only lineup
      setLedText(ledsJson, '* * * * * * * * * * * *', 1);
      setLedText(ledsJson, formatLedText_Lineup(todaysEvent).toUpperCase(), 2);
    }
  } else {
    nextThreeEvents.forEach((event, index) => {
      const ledText = formatLedText_Weekday_Event_Lineup(event).toUpperCase();
      setLedText(ledsJson, ledText, index);
    });
  }

  // ___________POSTER_______________
  if (posterUrl) {
    setDoorPoster(doorWithPosterJson, posterUrl);
  }

  // setDoorEasterEgg(doorWithPosterJson, '../test.mp4');

  const lottieFiles = {
    leds: ledsJson,
    door: posterUrl ? doorWithPosterJson : doorJson,
    // doorWithPoster: doorWithPosterJson,
    horses: isOpenToday
      ? [
          '/animationpferd_dance.lottie',
          '/animationpferd_dj.lottie',
          '/animationpferd_drink.lottie'
        ]
      : [
          '/animationpferd_giessen.lottie',
          '/animationpferd_dusche.lottie',
          '/animationpferd_lesen.lottie'
        ]
    // {

    // eventDay: [
    //   '/animationpferd_dance.lottie',
    //   '/animationpferd_dj.lottie',
    //   '/animationpferd_drink.lottie'
    // ],
    // nonEventDay: [
    //   '/animationpferd_giessen.lottie',
    //   '/animationpferd_dusche.lottie',
    //   '/animationpferd_lesen.lottie'
    // ]
    // }
  };
  const doorData = {
    lottieFiles: lottieFiles,
    isOpenToday: isOpenToday
  };

  return (
    <main>
      <PageTemplate events={events} goreiInfo={goreiInfo} doorData={doorData} />
    </main>
  );
}
