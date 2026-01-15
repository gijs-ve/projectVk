import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-semibold">Event niet gevonden</h1>
        <p className="text-brand-textMuted text-lg">
          Dit event bestaat niet of is niet meer beschikbaar.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/events"
            className="rounded-full bg-brand-accent px-6 py-3 text-brand-bg font-medium transition-colors hover:bg-brand-accentHover"
          >
            Bekijk alle events
          </Link>
          <Link
            href="/"
            className="rounded-full border border-brand-border px-6 py-3 text-brand-text transition-colors hover:bg-brand-overlay"
          >
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}
