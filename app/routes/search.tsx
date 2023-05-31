import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

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
