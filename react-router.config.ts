import type { Config } from "@react-router/dev/config";

export default {
  // No server runtime: everything is prerendered to static HTML.
  ssr: false,
  appDirectory: "src",
  // Add every new route path here so it gets prerendered.
  prerender: ["/"],
} satisfies Config;
