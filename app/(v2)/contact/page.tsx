import type { Metadata } from "next";
import {
  ArrowUpRight,
  DiscordLogo,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";

import { PageHeader } from "@/components/v2/page-header";
import { profile } from "@/lib/content/profile";

const CHANNELS = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Envelope,
    primary: true,
  },
  {
    label: "GitHub",
    value: "AureliusNguyen",
    href: "https://github.com/AureliusNguyen",
    Icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    value: "aurelius-nguyen",
    href: "https://linkedin.com/in/aurelius-nguyen",
    Icon: LinkedinLogo,
  },
  {
    label: "Discord",
    value: "_Madarame_",
    Icon: DiscordLogo,
  },
  {
    label: "Location",
    value: profile.location,
    Icon: MapPin,
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}. ${profile.availability}`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" lede={profile.availability} />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <ul className="grid gap-4 sm:grid-cols-2">
          {CHANNELS.map(({ label, value, href, Icon, primary }) => {
            const inner = (
              <>
                <span
                  className={[
                    "grid size-11 shrink-0 place-items-center rounded-base border-2 border-border",
                    primary
                      ? "bg-secondary-background"
                      : "bg-main text-main-foreground",
                  ].join(" ")}
                >
                  <Icon size={20} weight="bold" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-foreground-muted">
                    {label}
                  </span>
                  <span className="block truncate font-heading">{value}</span>
                </span>
                {href && (
                  <ArrowUpRight
                    weight="bold"
                    className="ml-auto size-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </>
            );

            const shared = [
              "flex items-center gap-4 rounded-base border-2 border-border p-4",
              primary ? "bg-main text-main-foreground" : "bg-secondary-background",
            ].join(" ");

            return (
              <li
                key={label}
                className={primary ? "sm:col-span-2" : undefined}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className={`group ${shared} shadow-shadow transition-all duration-150 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none active:translate-x-boxShadowX active:translate-y-boxShadowY active:shadow-none active:scale-[0.99] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={shared}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
