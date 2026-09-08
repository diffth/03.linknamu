import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://cdn.jsdelivr.net" },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Matches the top of the page gradient so mobile browser chrome blends in. */}
        <meta name="theme-color" content="#fdf6ec" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "문제가 발생했어요";
  let details = "잠시 후 다시 시도해 주세요.";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "페이지를 찾을 수 없어요" : `오류 ${error.status}`;
    details = error.statusText || details;
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-2 p-6 text-center">
      <h1 className="text-xl font-bold">{message}</h1>
      <p className="text-sm text-stone-500">{details}</p>
    </main>
  );
}
