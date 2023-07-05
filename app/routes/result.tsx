import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

export const meta: V2_MetaFunction = () => {
  const description = "특정 선수를 검색완료 필터와 스텟비교를 해봅시다.";

  return [
    { name: "description", content: description },
    { name: "og:description", content: description },
    { title: "Damf4 - 피파온라인4 - 피파온라인4 유사 선수 검색 | 선수 결과" },
  ];
};

export default function Result() {
  return (
    <div className="font-ko">
      <NavBar
        navigations={[{ name: "선수 검색", href: "/search", current: false }]}
      />
      <div className="w-full bg-gray-950">
        <div className="mx-auto md:max-w-5xl mt-14 py-2">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
