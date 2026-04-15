import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CHANNEL_URL } from '@/lib/home.data';
import {ExternalLink} from 'lucide-react'

export function CTA() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 border-t text-center">
      <p className="text-2xl mb-2">🚀</p>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Ready to start?</h2>
      <p className="text-sm text-muted-foreground mb-8 max-w-sm mx-auto">
        Subscribe to the channel and explore the community resources — whether you're just starting or
        levelling up.
      </p>
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <Button asChild className='dark:bg-white bg-red-600 hover:bg-red-700 dark:hover:bg-gray-300'>
          <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer">
            Subscribe on YouTube <ExternalLink size={14} />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/docs">Community resources</Link>
        </Button>
      </div>
    </section>
  );
}