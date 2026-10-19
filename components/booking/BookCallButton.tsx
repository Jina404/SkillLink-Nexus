import { brand } from "@/data/navigation";

// Same booking link the thank-you page's CalScheduler uses (same env override and default).
const BOOKING_URL = (
  process.env.NEXT_PUBLIC_SCHEDULER_URL ||
  process.env.NEXT_PUBLIC_MS_BOOKINGS_URL ||
  brand.schedulerUrl
).trim();

/** Opens the existing Cal.com booking page. Secondary (outlined) button style. */
export function BookCallButton({
  className = "btn btn-outline",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      Book a Call
    </a>
  );
}
