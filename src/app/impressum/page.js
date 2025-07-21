import ImpressumView from '@/components/impressum/ImpressumView';
import { getImpressum } from '@/lib/contentful/impressum';

export default async function ImpressumPage() {
  const impressum = await getImpressum();
  return <ImpressumView impressum={impressum} />;
}
