import { existsSync } from "node:fs";
import path from "node:path";

import { RESUME_PATH } from "@/lib/content/profile";

/**
 * A "Resume" button that 404s is worse than no button, so the CTA is only
 * rendered when the PDF is actually present. Drop the file at
 * public/resume.pdf and it appears on the next build - no code change.
 *
 * Server-only: this reads the filesystem at render time.
 */
export function hasResume(): boolean {
  return existsSync(path.join(process.cwd(), "public", RESUME_PATH));
}
