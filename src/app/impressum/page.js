import ImpressumLayout from '@/components/ImpressumLayout';
import { getImpressum } from '@/lib/contentful/impressum';

export default async function Impressum() {
  const impressum = await getImpressum();
  return <ImpressumLayout impressum={impressum} />;
}
