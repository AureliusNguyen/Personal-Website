import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

// Icons are passed as components rather than pre-rendered elements so each
// site can size them itself (v1 wants 40px card art, the current site wants
// inline 20px glyphs).
export type Channel = {
  rank: string;
  suit: "♠" | "♥" | "♦" | "♣";
  label: string;
  value: string;
  href?: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export const channels: Channel[] = [
  {
    rank: "10",
    suit: "♠",
    label: "Location",
    value: "Minneapolis, MN",
    Icon: FaMapMarkerAlt,
  },
  {
    rank: "J",
    suit: "♥",
    label: "Email",
    value: "nguy5272@umn.edu",
    href: "mailto:nguy5272@umn.edu",
    Icon: FaEnvelope,
  },
  {
    rank: "Q",
    suit: "♦",
    label: "GitHub",
    value: "View my projects",
    href: "https://github.com/AureliusNguyen",
    Icon: FaGithub,
  },
  {
    rank: "K",
    suit: "♣",
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/aurelius-nguyen",
    Icon: FaLinkedin,
  },
  {
    rank: "A",
    suit: "♠",
    label: "Discord",
    value: "_Madarame_",
    Icon: FaDiscord,
  },
];
