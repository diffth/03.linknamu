import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "linknamu:click-counts";

type Counts = Record<string, number>;

function readCounts(): Counts {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Counts) : {};
  } catch {
    return {};
  }
}

/**
 * Click counts live in localStorage: the app is prerendered with no server runtime,
 * so there is nowhere else to persist them.
 */
export function useClickCounts() {
  const [counts, setCounts] = useState<Counts>({});

  // Read after mount so the prerendered HTML and the first render match.
  useEffect(() => {
    setCounts(readCounts());
  }, []);

  const increment = useCallback((id: string) => {
    setCounts((prev) => {
      const next = { ...prev, [id]: (prev[id] ?? 0) + 1 };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Private mode or storage full: keep the in-memory count only.
      }
      return next;
    });
  }, []);

  return { counts, increment };
}
