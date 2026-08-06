import { Flag, Brain } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export const ctfPlacements = [
  "Top 1 IUCTF 2025",
  "Top 3 MinneHackCTF 2025",
  "Top 4 UMNACMCTF 2025",
  "Top 18 K17CTF 2025",
  "Top 19 OlympicsCTF 2025",
  "Top 27 WannaGameCTF 2025",
  "Top 29 squ1rrel CTF 2026",
  "Top 30 BitsCTF 2025",
  "Top 31 UTCTF 2026",
  "Top 35 ECTF 2025",
  "Top 40 ApoorvCTF 2026",
  "Top 44 DawgCTF 2026",
  "Top 50 RITSEC CTF 2026",
  "Top 51 K!nd4SUS CTF 2026",
  "Top 60 pingCTF 2026",
  "Top 61 TAMUctf 2026",
  "Top 62 EHAX CTF 2026",
  "Top 71 BITSCTF 2026",
  "Top 106 IrisCTF 2024",
];

export const hackathonPlacements = [
  "Top 20 / 1,500 Headstarter Hackathon",
  "Participant @ OriginHouse 2025",
  "Participant @ MinneHack 2025",
];

export const otherAwards = [
  "$2K Undergraduate Research Award",
  "$60K UMN Global Excellence Scholarship",
];

// Called out beside the CTF placements rather than buried in the award list:
// it is a global standing on the same skill those placements come from.
export const ctfHighlight = "Top 94 / 118,941 @ CryptoHack.org";

export const profileLinks = [
  { name: "GopherHack", href: "https://gopherhack.com/", Icon: Flag },
  {
    name: "CryptoHack",
    href: "https://cryptohack.org/user/Madarame/",
    Icon: Brain,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/aureliusnguyen/",
    Icon: SiLeetcode,
  },
];
