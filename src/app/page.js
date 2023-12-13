import Image from 'next/image';
import styles from './page.module.css';
import Program from '@/components/program/Program';
import { getEvents } from '@/lib/contentful/program';
import { getGoreiInfo } from '@/lib/contentful/about';
import PageTemplate from '@/components/PageTemplate';

export default async function Home() {
  const events = await getEvents();
  const goreiInfo = await getGoreiInfo();

  return (
    <main>
      <PageTemplate events={events} goreiInfo={goreiInfo} />
    </main>
  );
}
