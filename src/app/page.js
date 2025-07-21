import {
  getUpcomingEvents,
  getNextThreeEvents,
  isTodayOpen,
  getNextEvent
} from '@/lib/contentful/program';
import { getGoreiInfo } from '@/lib/contentful/about';
import HomeView from '@/components/HomeView';
import setLedText from '@/lib/lottie/setLedText';
import led1Json from '@/data/led1.json';
import led2Json from '@/data/led2.json';
import led3Json from '@/data/led3.json';
import doorJson from '@/data/door.json';
import doorWithPosterJson from '@/data/doorWithPoster.json';
import { getPosterUrl } from '@/lib/contentful/door';
import { setDoorPoster } from '@/lib/lottie/setDoorPoster';
import {
  formatLedText_Weekday_Event_Lineup,
  formatLedText_Event,
  formatLedText_Lineup,
} from '@/lib/formatLedText';

export default async function HomePage() {
  const [events, goreiInfo, nextThreeEvents, nextEvent, posterUrl, isOpenToday] = await Promise.all(
    [
      getUpcomingEvents(),
      getGoreiInfo(),
      getNextThreeEvents(),
      getNextEvent(),
      getPosterUrl(),
      isTodayOpen()
    ]
  );

  // _____________ LEDS ______________
  if (isOpenToday) {
    const todaysEvent = nextEvent[0];

    setLedText(led1Json, 'TONIGHT TONIGHT TONIGHT');

    // if event has both eventname and lineup
    if (todaysEvent.eventname && todaysEvent.lineupCollection.items.length > 0) {
      setLedText(led2Json, formatLedText_Event(todaysEvent));
      setLedText(led3Json, 'with ' + formatLedText_Lineup(todaysEvent).toUpperCase());
    } else if (todaysEvent.eventname) {
      // if event has only eventname
      setLedText(led2Json, '* * * * * * * * * * * *');
      setLedText(led3Json, formatLedText_Event(todaysEvent).toUpperCase());
    } else if (todaysEvent.lineupCollection.items.length > 0) {
      // if event has only lineup
      setLedText(led2Json, '* * * * * * * * * * * *');
      setLedText(led3Json, formatLedText_Lineup(todaysEvent).toUpperCase());
    }
  } else {
    let ledText = formatLedText_Weekday_Event_Lineup(nextThreeEvents[0]).toUpperCase();
    setLedText(led1Json, ledText);

    ledText = formatLedText_Weekday_Event_Lineup(nextThreeEvents[1]).toUpperCase();
    setLedText(led2Json, ledText);

    ledText = formatLedText_Weekday_Event_Lineup(nextThreeEvents[2]).toUpperCase();
    setLedText(led3Json, ledText);
  }

  // ___________POSTER_______________
  if (posterUrl) {
    setDoorPoster(doorWithPosterJson, posterUrl);
  }

  const lottieFiles = {
    leds: [led1Json, led2Json, led3Json],
    door: posterUrl ? doorWithPosterJson : doorJson,
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
  };
  const doorData = {
    lottieFiles: lottieFiles,
    isOpenToday: isOpenToday
  };

  return (
    <main>
      <HomeView events={events} goreiInfo={goreiInfo} doorData={doorData} />
    </main>
  );
}
