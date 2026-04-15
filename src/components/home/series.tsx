import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { series, CHANNEL_URL, type Series } from '@/lib/home.data';
import { ExternalLink } from 'lucide-react';

function SeriesCard({ item }: { item: Series }) {
  return (
    <Card className="transition-colors hover:border-[#2e8639]/50">
      <CardContent className="pt-5 pb-5 flex items-start gap-4">
        <span className="text-3xl font-bold text-muted-foreground/20 leading-none w-8 shrink-0">
          {item.number}
        </span>
        <div>
          <p className="font-semibold text-sm mb-1">
            {item.name} {item.emoji}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          {item.href && (
                <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium mt-2 inline-block"
              style={{ color: '#2e8639' }}
            >
              Watch on YouTube <ExternalLink size={14} className='inline-block' />
            </Link>
            
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function SeriesSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 border-t">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
        Series
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-8">Original series</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {series.map((item) => (
          <SeriesCard key={item.number} item={item} />
        ))}
      </div>

      {/* isiXhosa callout */}
      <Card
        className="border-l-4"
        style={{ borderLeftColor: '#2e8639' }}
      >
        <CardContent className="py-5 px-6 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-start gap-4">
            <span className="text-2xl shrink-0">🌍</span>
            <div>
              <p className="font-semibold text-sm mb-1">IsiXhosa Dubbed Videos</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Every major tutorial available in isiXhosa — for native speakers, the diaspora, and anyone
                who believes tech education shouldn't require leaving your language at the door.
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild className="shrink-0">
            <Link href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
              Watch <ExternalLink size={14} /> <span></span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}