import { LinkCard } from "~/components/LinkCard";
import { ProfileHeader } from "~/components/ProfileHeader";
import { links, profile } from "~/data/profile";
import { useClickCounts } from "~/hooks/useClickCounts";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${profile.name} | 링크나무` },
    { name: "description", content: `${profile.name} - ${profile.bio}` },
  ];
}

export default function Home() {
  const { counts, increment } = useClickCounts();

  return (
    <main className="flex min-h-screen justify-center p-4 sm:items-center sm:p-8">
      {/* Phone-shaped card: circular avatar and profile on top, links stacked below. */}
      <div className="w-full max-w-sm rounded-[2.5rem] border border-stone-200 bg-white px-6 pt-12 pb-16 shadow-sm sm:px-8 sm:pt-14 sm:pb-20">
        <ProfileHeader {...profile} />

        <nav className="mt-10 flex flex-col gap-5 sm:gap-6">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              label={link.label}
              url={link.url}
              count={counts[link.id] ?? 0}
              onClick={() => increment(link.id)}
            />
          ))}
        </nav>
      </div>
    </main>
  );
}
