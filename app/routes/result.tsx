import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";

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
