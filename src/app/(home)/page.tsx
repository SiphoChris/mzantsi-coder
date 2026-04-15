import { Hero } from '@/components/home/hero';
import { ContentPillars } from '@/components/home/content-pillars';
import { Method } from '@/components/home/method';
import { SeriesSection } from '@/components/home/series';
import { Playlists } from '@/components/home/playlists';
import { CTA } from '@/components/home/cta';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ContentPillars />
      <Method />
      <SeriesSection />
      <Playlists />
      <CTA />
    </div>
  );
}