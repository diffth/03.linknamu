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
    <main className="flex min-h-dvh justify-center px-6 py-16 sm:px-8 sm:py-20">
      {/* Single centered column on the gradient: profile on top, glass links below. */}
      <div className="m-auto w-full max-w-sm">
        <ProfileHeader {...profile} />

        <nav className="mt-12 flex flex-col gap-4 sm:mt-14 sm:gap-5">
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
