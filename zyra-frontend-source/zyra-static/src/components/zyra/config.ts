import type { LucideIcon } from "lucide-react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

/**
 * Central place for editable site-wide content.
 * Update the email and social URLs here — every section reads from this file.
 */
export const SITE = {
  name: "ZYRA",
  tagline: "Building Technology for Everyday Life.",
  established: "2026",
  email: "tez.youtub.2012@gmail.com",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Vision", href: "#vision" },
  { label: "Founders", href: "#founders" },
  { label: "Contact", href: "#contact" },
] as const;

export type SocialLink = { label: string; href: string; icon: LucideIcon };

// TODO: replace "#" with the real social profile URLs
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "X (Twitter)", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "GitHub", href: "#", icon: Github },
];
