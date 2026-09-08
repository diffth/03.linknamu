type LinkCardProps = {
  label: string;
  url: string;
  count: number;
  onClick: () => void;
};

export function LinkCard({ label, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
      onClick={onClick}
      className="relative flex items-center justify-center rounded-full border border-stone-300 bg-white px-12 py-4 text-center text-base font-medium transition hover:-translate-y-0.5 hover:border-stone-900 hover:shadow-md active:translate-y-0"
    >
      <span className="truncate">{label}</span>
      <span
        className="absolute right-5 text-sm text-stone-400 tabular-nums"
        aria-label={`클릭 ${count}회`}
      >
        {count}
      </span>
    </a>
  );
}
