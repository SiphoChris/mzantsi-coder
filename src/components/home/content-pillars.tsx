import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { contentPillars, type ContentPillar } from '@/lib/home.data';

function PillarCard({ pillar }: { pillar: ContentPillar }) {
  const inner = (
    <Card className="h-full transition-colors hover:border-[#2e8639]/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-2xl">{pillar.icon}</span>
          <Badge variant="secondary" className="text-[10px] font-medium mt-0.5">
            {pillar.tag}
          </Badge>
        </div>
        <p className="font-semibold text-sm leading-snug">{pillar.title}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {pillar.description}
        </p>
        {pillar.chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {pillar.chips.map((chip) => (
              <span
                key={chip}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (!pillar.href) return inner;

  const isExternal = pillar.href.startsWith('http');

  if (isExternal) {
    return (
      <a href={pillar.href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }

  return <Link href={pillar.href} className="block">{inner}</Link>;
}

export function ContentPillars() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 border-t">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
        What you'll find
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-1">Content & Community</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Four ways to engage — on the channel and on this site.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contentPillars.map((pillar) => (
          <PillarCard key={pillar.tag} pillar={pillar} />
        ))}
      </div>
    </section>
  );
}