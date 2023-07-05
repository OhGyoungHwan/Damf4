import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { recommend } from "~/utils/alltype";
import { getRecommend } from "~/utils/recommend.server";
import NavBar from "~/components/NavBar";
import InputSearch from "~/components/Form/InputSearch";
import Footer from "~/components/Footer";
import TabList from "~/components/Tab/TabList";
import TabPanels from "~/components/Tab/TabPanels";
import TabGroup from "~/components/Tab/TabGroup";
import { getWindowWidth } from "~/utils/cssfunction";

export const loader: LoaderFunction = async () => {
  const recommends = await getRecommend();
  return json({ recommends });
};

export default function Index() {
  const windowWidth = getWindowWidth();
  const data: { recommends: recommend[] } = useLoaderData<typeof loader>();
  // recommend에서 categories항목 가져오기
  const categories = [
    ...new Set(data.recommends.map((recommend) => recommend["categories"])),
  ];
  // categories별 tabGrops생성
  const tabGrops = categories.map((categorie: string) => {
    const filteredRecommend = data.recommends.filter(
      (recommend) => recommend["categories"] === categorie
    );
    const tabList = (
      <TabList
        recommends={filteredRecommend}
        slidesPerView={windowWidth === 0 ? 0 : windowWidth > 640 ? 9.5 : 5.5}
      />
    );
    const tabPanels = (
      <TabPanels
        recommends={filteredRecommend}
        slidesPerView={windowWidth === 0 ? 0 : windowWidth > 640 ? 7.5 : 3.5}
      />
    );
    return {
      title: categorie,
      tabList: tabList,
      tabPanels: tabPanels,
    };
  });

  return (
    <div className="w-full bg-gray-950 font-ko">
      <NavBar
        navigations={[{ name: "선수 검색", href: "/search", current: false }]}
      />
      <div className="w-full mt-14">
        <div className="flex flex-wrap w-full h-[30vh] items-center">
          <div className="flex w-full max-w-xs sm:max-w-sm h-12 justify-center mx-auto">
            <InputSearch
              ClassNameInput="text-gray-300 text-base pl-2 bg-gray-900 h-12 leading-none w-full rounded-l-md align-baseline placeholder:text-gray-500 focus:outline-none"
              ClassNameLink="text-primary-light px-2 bg-gray-900 h-12 rounded-r-md align-middle focus:outline-none"
            />
          </div>
        </div>
        <div className="w-full mb-2 sm:max-w-5xl mx-auto">
          <span className="text-primary-light pc-h3">{"추천 선수 "}</span>
          <span className="text-primary-base pc-caption">
            클릭으로 한번에 찾는 60명 유사 선수
          </span>
        </div>
        <div className="w-full sm:max-w-5xl mx-auto">
          {tabGrops.map((tabGrop, idx) => (
            <div key={idx} className="mb-10">
              <p className="px-2 mb-2 pc-h4">{`${tabGrop["title"]} 추천`}</p>
              <TabGroup
                tabList={tabGrop.tabList}
                tabPanels={tabGrop.tabPanels}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
