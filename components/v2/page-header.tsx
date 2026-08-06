/**
 * Every inner page opens the same way: title, one line of orientation, done.
 * No eyebrow label above the title - the nav already says which page this is.
 */
export function PageHeader({
  title,
  lede,
}: {
  title: string;
  lede?: string;
}) {
  return (
    <div className="border-b-2 border-border bg-secondary-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-4 max-w-[60ch] text-base text-foreground-muted sm:text-lg">
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}
