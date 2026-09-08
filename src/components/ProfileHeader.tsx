import type { Profile } from "~/data/profile";

export function ProfileHeader({ name, bio, avatarUrl }: Profile) {
  return (
    <header className="flex flex-col items-center gap-3">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={name}
          className="size-32 rounded-full object-cover sm:size-36"
        />
      ) : (
        <div
          aria-hidden
          className="flex size-32 items-center justify-center rounded-full bg-stone-100 text-3xl font-bold text-stone-400 sm:size-36"
        >
          {name.slice(0, 1)}
        </div>
      )}

      <div className="flex flex-col items-center gap-1">
        <h1 className="text-xl font-bold sm:text-2xl">{name}</h1>
        <p className="text-sm text-stone-500">{bio}</p>
      </div>
    </header>
  );
}
