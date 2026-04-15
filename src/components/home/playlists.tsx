import Link from 'next/link';
import { playlists, type Playlist } from '@/lib/home.data';

function PlaylistChip({ playlist }: { playlist: Playlist }) {
  const isExternal = playlist.href.startsWith('http');

  const chip = (
    <span
      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-colors hover:border-[#2e8639]/50 hover:text-[#2e8639] cursor-pointer"
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: playlist.special ? '#ffeb3b' : '#2e8639' }}
      />
      {playlist.label}
    </span>
  );

  if (isExternal) {
    return (
      <a href={playlist.href} target="_blank" rel="noopener noreferrer">
        {chip}
      </a>
    );
  }

  return <Link href={playlist.href}>{chip}</Link>;
}

export function Playlists() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 border-t">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
        Playlists
      </p>
      <h2 className="text-2xl font-bold tracking-tight mb-2">Browse by topic</h2>
      <p className="text-sm text-muted-foreground mb-8">
        All playlists link directly to the YouTube channel.
      </p>
      <div className="flex flex-wrap gap-2">
        {playlists.map((playlist) => (
          <PlaylistChip key={playlist.label} playlist={playlist} />
        ))}
      </div>
    </section>
  );
}