import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwind_stylesheet from "~/styles/app.css";
import swiper_stylesheet from "swiper/swiper-bundle.css";
import { CookiesProvider } from "react-cookie";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind_stylesheet },
  { rel: "stylesheet", href: swiper_stylesheet },
];

export const meta: V2_MetaFunction = () => {
  const description =
    "chatGPT 활용 피파온라인4 스텟 분포가 닮은 선수를 검색합니다.";

  return [
    { name: "description", content: description },
    { name: "og:description", content: description },
    { name: "twitter:description", content: description },
    { title: "Damf4" },
  ];
};

export default function App() {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="keywords"
          content="Damf4, 피파4, 피파온라인4, 피온4, 피파 선수, 피파 유사 선수, 피파4 가성비, 피파4 선수평가, 피파4 스쿼드"
        />
        <meta name="author" content="OhGyoungHwan" />
        <meta name="og:site_name" content="Damf4" />
        <meta name="og:title" content="Damf4" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="" />
        <meta name="og:image" content="/thumbnail.png" />
        <meta name="twitter:image" content="/thumbnail.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZZREG3MMDL`}
        />
        <script
          async
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-ZZREG3MMDL', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
        <CookiesProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </CookiesProvider>
      </body>
    </html>
  );
}
