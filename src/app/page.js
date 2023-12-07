import Image from 'next/image';
import styles from './page.module.css';
import Program from '@/components/program/Program';
import { getEvents } from '@/lib/contentful/program';
import PageTemplate from '@/components/PageTemplate';

export default async function Home() {
  const events = await getEvents();
  return (
    <main>
      <PageTemplate events={events}/>
      
    </main>
  );
}
