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
    "피파온라인4 유사 선수 검색 사이트입니다. 머신러닝으로 분석한 유사 선수를 확인하세요";

  return [
    { name: "description", content: description },
    { name: "og:description", content: description },
    { name: "twitter:description", content: description },
    { title: "Damf4 - 피파온라인4 - 피파온라인4 유사 선수 검색" },
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
          content="피파4, 피파온라인4, fifa4, 피파, 선수, 유사 선수, 닮은, 스쿼드, 팀컬러, 추천, 검색, 모바일, 인벤, 피파어딕트, 피파시티"
        />
        <meta name="format-detection" content="no" />
        <meta name="author" content="OhGyoungHwan" />
        <meta name="og:site_name" content="Damf4" />
        <meta
          name="og:title"
          content="Damf4 - 피파온라인4 - 피파온라인4 유사 선수 검색"
        />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://damf4.com" />
        <meta name="og:image" content="/thumbnail.png" />
        <meta name="twitter:image" content="/thumbnail.png" />
        <meta name="apple-mobile-web-app-title" content="dmaf4"></meta>
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
