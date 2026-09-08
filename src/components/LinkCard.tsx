type LinkCardProps = {
  label: string;
  url: string;
  count: number;
  onClick: () => void;
};

export function LinkCard({ label, url, count, onClick }: LinkCardProps) {
  // mailto:/tel: have no page to show, so a new tab would just be left blank.
  const opensInNewTab = /^https?:/i.test(url);

  return (
    <a
      href={url}
      target={opensInNewTab ? "_blank" : undefined}
      rel={opensInNewTab ? "noreferrer noopener" : undefined}
      onClick={onClick}
      className="relative flex items-center justify-center rounded-2xl border border-white/70 bg-white/45 px-14 py-4 text-center text-[0.95rem] font-semibold text-stone-800 shadow-[0_10px_26px_-14px_rgba(146,94,55,0.6)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:border-white/90 hover:bg-white/65 hover:shadow-[0_14px_30px_-14px_rgba(146,94,55,0.65)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/60 active:translate-y-0"
    >
      <span className="truncate">{label}</span>
      <span
        className="absolute right-5 text-xs text-stone-400 tabular-nums"
        aria-label={`클릭 ${count}회`}
      >
        {count}
      </span>
    </a>
  );
}
