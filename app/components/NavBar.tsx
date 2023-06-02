import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import { navigation } from "~/utils/alltype";
import { classNames } from "~/utils/cssfunction";
import InputSearch from "./Form/InputSearch";

export default function NavBar({
  navigations,
}: {
  navigations: Array<navigation>;
}) {
  const NavBarMobile = ({ open }: { open: boolean }) => {
    return (
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <Disclosure.Button className="inline-flex items-center justify-center rounded-sm p-2 text-primary-light">
          <span className="sr-only">Open main menu</span>
          {open ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
        </Disclosure.Button>
        <Link
          to="/"
          className="inline-block w-auto align-middle rounded-sm px-1 mx-5 text-primary-light font-black font-sans"
        >
          Damf4
        </Link>
      </div>
    );
  };

  const NavBarMobileWrap = () => {
    return (
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 py-1">
          {navigations.map((navigation: navigation) => (
            <Disclosure.Button
              key={navigation.name}
              as="a"
              href={navigation.href}
              className={classNames(
                "block text-left rounded-sm px-3 py-2 border-t-2 border-gray-800 text-base font-bold font-sans",
                navigation.current
                  ? "bg-gray-900 text-white"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
              )}
              aria-current={navigation.current ? "page" : undefined}
            >
              {navigation.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
    );
  };

  const NavBarPC = () => {
    return (
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        {/* 로고 */}
        <div className="flex flex-shrink-0 items-center">
          <Link
            to="/"
            className="hidden sm:inline-block w-auto align-middle rounded-sm px-1 text-primary-light font-black font-sans"
          >
            Damf4
          </Link>
        </div>
        {/* 페이지 이동 */}
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navigations.map((navigation: navigation) => (
              <a
                key={navigation.name}
                href={navigation.href}
                className={classNames(
                  navigation.current
                    ? "bg-gray-900 text-white"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white",
                  "rounded-sm px-3 py-2 text-sm font-bold font-sans"
                )}
                aria-current={navigation.current ? "page" : undefined}
              >
                {navigation.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const NavBarSearch = () => {
    return (
      <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        {/* input */}
        <div className="flex w-full justify-end">
          <InputSearch
            ClassNameInput="text-gray-300 text-sm pl-2 bg-gray-800 h-8 w-1/2 sm:w-full rounded-l-md align-baseline placeholder:text-gray-500 focus:outline-none"
            ClassNameLink="text-primary-light px-2 mr-2 bg-gray-800 h-8 rounded-r-md align-middle focus:outline-none"
          />
        </div>
      </div>
    );
  };

  return (
    <Disclosure as="nav" className="fixed inset-x-0 top-0 z-30 bg-gray-900">
      {({ open }) => (
        <>
          <div className="h-14 relative flex items-center justify-between mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <NavBarMobile open={open} />
            <NavBarPC />
            <NavBarSearch />
          </div>
          <NavBarMobileWrap />
        </>
      )}
    </Disclosure>
  );
}
