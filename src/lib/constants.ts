import { NavLink, Service, SocialLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "The Quintet", href: "#about" },
  { label: "Repertoire", href: "#media" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    title: "Weddings",
    description:
      "From the aisle walk to the cocktail hour, we curate a bespoke setlist that defines your love story.",
    features: [],
    icon: "music",
  },
  {
    title: "Corporate Galas",
    description:
      "Add a layer of prestige to your company events. Background jazz, classical pop, and award show themes.",
    features: [],
    icon: "star",
  },
  {
    title: "Private Parties",
    description:
      "Intimate gatherings requiring a sophisticated touch. We adapt our volume and vibe to your venue.",
    features: [],
    icon: "calendar",
  },
];

export const REPERTOIRE_ITEMS = [
  "Bridgerton / Modern Classical",
  "Jazz Standards & Bossa Nova",
  "OPM Classics (String Arranged)",
  "Pop & Top 40 Hits",
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/1234567890",
    color: "whatsapp",
    icon: "messageCircle",
  },
  {
    label: "Viber",
    href: "viber://chat?number=1234567890",
    color: "viber",
    icon: "phone",
  },
  {
    label: "Messenger",
    href: "https://m.me/easternquintet",
    color: "messenger",
    icon: "messageSquare",
  },
];

export const EVENT_TYPES = [
  "Wedding Ceremony",
  "Wedding Reception",
  "Corporate Event",
  "Private Party",
  "Gala Dinner",
  "Cocktail Event",
  "Birthday Celebration",
  "Other",
] as const;
