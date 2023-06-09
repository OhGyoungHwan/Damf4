/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
  serverModuleFormat: "cjs",
  serverDependenciesToBundle: [
    "swiper",
    "swiper/react",
    "ssr-window",
    "react-fast-marquee",
  ],
  tailwind: true,
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    // unstable_tailwind: true,
  },
};
