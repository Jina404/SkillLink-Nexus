/** Site icons. All UI icons come from lucide-react (outline, strokeWidth 1.5). */
import {
  ArrowRight,
  BriefcaseBusiness,
  ChartColumn,
  Check,
  ChevronDown,
  CodeXml,
  Globe,
  Megaphone,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type IconProps = { className?: string; title?: string };

const STROKE = 1.5;

function make(Icon: LucideIcon, size: number) {
  function SiteIcon({ className, size: s = size }: IconProps & { size?: number }) {
    return <Icon className={className} size={s} strokeWidth={STROKE} aria-hidden />;
  }
  return SiteIcon;
}

export const IconSearch = make(Search, 18);
export const IconChevron = make(ChevronDown, 12);
export const IconArrow = make(ArrowRight, 12);
export const IconCheck = make(Check, 16);
export const IconSpark = make(Sparkles, 12);
export const IconSparkBadge = make(Sparkles, 16);

/** Service tile icons: 28px, shown on their own (no container). */
const categoryIcons: Record<string, ReturnType<typeof make>> = {
  globe: make(Globe, 28),
  palette: make(Palette, 28),
  megaphone: make(Megaphone, 28),
  shield: make(ShieldCheck, 28),
  chart: make(ChartColumn, 28),
  briefcase: make(BriefcaseBusiness, 28),
  code: make(CodeXml, 28),
};

export function categoryIcon(icon: string) {
  return categoryIcons[icon] ?? categoryIcons.globe;
}

/** Priority picker icons (same 18px size as before). */
const optionIcons: Record<string, ReturnType<typeof make>> = {
  rocket: make(Rocket, 18),
  palette: make(Palette, 18),
  trending: make(TrendingUp, 18),
  chart: make(ChartColumn, 18),
  shield: make(ShieldCheck, 18),
  briefcase: make(BriefcaseBusiness, 18),
};

export function optionIcon(icon: string) {
  return optionIcons[icon] ?? optionIcons.rocket;
}

// LinkedIn brand mark: lucide-react no longer ships brand logos, so this one stays custom.
export function IconLinkedIn({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM20.3 20h-2.8v-5.6c0-1.6-.6-2.5-1.8-2.5-1 0-1.5.7-1.7 1.3-.1.2-.1.6-.1.9V20h-2.8s.1-9.2 0-10.5h2.8v1.7c.5-.8 1.5-1.9 3.5-1.9 2.5 0 4.4 1.6 4.4 5.2V20Z" />
    </svg>
  );
}
