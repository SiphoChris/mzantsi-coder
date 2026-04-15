import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  CHANNEL_URL,
  heroTagline,
  heroBody,
  latestAnnouncement,
} from '@/lib/home.data';
import { ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
      {/* Channel identity */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">🇿🇦</span>
          <Badge
            variant="secondary"
            className="text-xs font-medium"
            style={{ backgroundColor: 'hsl(var(--primary) / 0.12)', color: 'hsl(var(--primary))' }}
          >
            Proudly South African
          </Badge>
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Mzantsi Coder
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          {heroTagline}
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          {heroBody}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-3 flex-wrap mb-10">
        <Button asChild className='dark:bg-white bg-red-600 hover:bg-red-700 dark:hover:bg-gray-300'>
          <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
            Subscribe on YouTube <ExternalLink size={14} />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs">Browse resources</Link>
        </Button>
      </div>

      <Separator className="mb-8" />

      {/* Latest announcement card */}
      <div className="mb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
          Latest
        </p>
        <Card className="border-l-4 border-l-[#2e8639]">
          <CardContent className="py-4 px-5 flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {latestAnnouncement.isNew && (
                  <Badge
                    className="text-[10px] font-bold"
                    style={{ backgroundColor: '#2e8639', color: 'white' }}
                  >
                    NEW
                  </Badge>
                )}
              </div>
              <div>
                <p className="font-semibold text-sm mb-0.5">{latestAnnouncement.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {latestAnnouncement.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{latestAnnouncement.date}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" asChild className="flex-shrink-0 self-start">
              <Link href={latestAnnouncement.href}>View →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}