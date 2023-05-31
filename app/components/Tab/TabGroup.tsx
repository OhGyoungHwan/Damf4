import { Tab } from "@headlessui/react";

export default function TabGroup({
  tabList,
  tabPanels,
}: {
  tabList: JSX.Element;
  tabPanels: JSX.Element;
}) {
  return (
    <Tab.Group>
      <Tab.List>{tabList}</Tab.List>
      <Tab.Panels>{tabPanels}</Tab.Panels>
    </Tab.Group>
  );
}
