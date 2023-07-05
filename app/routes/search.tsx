import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

export const meta: V2_MetaFunction = () => {
  const description = "선수를 검색 궁금한 선수를 클릭해보세요";

  return [
    { name: "description", content: description },
    { name: "twitter:description", content: description },
    { title: "Damf4 - 피파온라인4 - 피파온라인4 유사 선수 검색 | 선수 검색" },
  ];
};

export default function Search() {
  return (
    <div className="font-ko">
      <NavBar
        navigations={[{ name: "선수 검색", href: "/search", current: true }]}
      />
      <div className="w-full bg-gray-950">
        <div className="mx-auto md:max-w-5xl mt-14 p-2">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
