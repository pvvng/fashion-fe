"use client";

import Link from "next/link";
import Tab from "./main-navbar-tab";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MainNavbar() {
  const pathname = usePathname();

  const [pathnameState, setPathnameState] = useState(pathname);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const toggleMenu = () => {
    setIsMenuShown((pre) => !pre);
  };

  useEffect(() => {
    if (pathname !== pathnameState && isMenuShown) {
      setPathnameState(pathname);
      setIsMenuShown(false);
    }
  }, [pathname]);

  return (
    <div className="sticky top-0 left-0 w-full max-h-screen z-50">
      <MobileContent isMenuShown={isMenuShown} toggleMenu={toggleMenu} />
      {/* menu bar */}
      <Menu pathname={pathname} isMenuShown={isMenuShown} />
    </div>
  );
}

interface MobileContentProps {
  isMenuShown: boolean;
  toggleMenu: () => void;
}

function MobileContent({ isMenuShown, toggleMenu }: MobileContentProps) {
  return (
    <div className="lg:hidden block bg-neutral-100/80 dark:bg-neutral-800/80 p-2 px-4 relative h-12">
      <div className="grid grid-cols-3 items-center">
        <p
          className="cursor-pointer hover:text-neutral-500 transition-colors *:size-7"
          onClick={toggleMenu}
        >
          {isMenuShown ? <XMarkIcon /> : <Bars3Icon />}
        </p>
        <Link href="/" className="text-2xl font-extrabold text-center">
          夢遊
        </Link>
        <div className="text-end" />
      </div>
    </div>
  );
}

interface MenuProps {
  pathname: string;
  isMenuShown: boolean;
}
function Menu({ pathname, isMenuShown }: MenuProps) {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`p-5 w-full h-full bg-white dark:bg-neutral-950 transition-all lg:block
    dark:shadow-neutral-500 lg:shadow-none shadow top-0 ${
      isMenuShown ? "block" : "hidden"
    }`}
    >
      <div className="grid lg:grid-rows-4 grid-rows-3 gap-3 items-center h-full">
        <Tab tabName="service" pathname={pathname} />
        <Tab tabName="profile" pathname={pathname} />
        <Tab tabName="about" pathname={pathname} />
        <Link
          href="/"
          className={`${
            isScroll ? "text-7xl" : "text-8xl"
          } font-extrabold transition-all duration-800 mt-auto hidden lg:block`}
        >
          夢遊
        </Link>
      </div>
    </div>
  );
}
