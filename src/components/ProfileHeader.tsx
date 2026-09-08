import type { Profile } from "~/data/profile";

export function ProfileHeader({ name, bio, avatarUrl }: Profile) {
  return (
    <header className="flex flex-col items-center gap-3">
      {/* White ring + warm drop shadow lift the avatar off the gradient. */}
      <div className="rounded-full p-1 shadow-[0_16px_34px_-14px_rgba(146,94,55,0.55)] ring-1 ring-white/70">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="size-28 rounded-full object-cover ring-4 ring-white/80 sm:size-32"
          />
        ) : (
          <div
            aria-hidden
            className="flex size-28 items-center justify-center rounded-full bg-white/70 text-3xl font-bold text-stone-400 ring-4 ring-white/80 sm:size-32"
          >
            {name.slice(0, 1)}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-1">
        <h1 className="text-xl font-bold sm:text-2xl">{name}</h1>
        <p className="text-sm text-stone-500">{bio}</p>
      </div>
    </header>
  );
}
