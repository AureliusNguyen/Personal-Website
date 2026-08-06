import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/nb/button";

// Root layouts do not share a 404, so this one belongs to the (v2) group.
export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-4 py-20 sm:px-6 sm:py-28">
      <p className="rounded-base border-2 border-border bg-main px-3 py-1.5 font-heading text-main-foreground shadow-shadow">
        404
      </p>
      <h1 className="mt-6 text-4xl leading-tight sm:text-5xl">
        That page does not exist.
      </h1>
      <p className="mt-4 max-w-[50ch] text-foreground-muted">
        It may have lived on the old site. That version is still online if you
        are looking for something specific.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/">
            Home
            <ArrowRight weight="bold" />
          </Link>
        </Button>
        <Button asChild variant="neutral">
          <Link href="/v1">Visit the v1 site</Link>
        </Button>
      </div>
    </div>
  );
}
