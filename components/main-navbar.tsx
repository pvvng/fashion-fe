"use client";

import Link from "next/link";
import Tab from "./main-navbar-tab";
import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function MainNavbar() {
  const pathame = usePathname();

  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggleMenu = () => {
    setIsMenuShown((pre) => !pre);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-0 left-0 w-full max-h-screen z-50">
      {/* mobile content */}
      <div className="lg:hidden block bg-neutral-100/80 p-2 px-4">
        <div className="grid grid-cols-3 items-center">
          <p
            className="cursor-pointer hover:text-neutral-600 transition-colors *:size-7"
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
      {/* desktop menu content */}
      <div
        className={`lg:block p-5 w-full h-full lg:min-h-screen bg-white transition-all shadow lg:shadow-none ${
          isMenuShown ? "" : "hidden"
        }`}
      >
        <div className="grid lg:grid-rows-4 grid-rows-3 gap-3 items-center h-full">
          <Tab tabName="service" pathname={pathame} />
          <Tab tabName="profile" pathname={pathame} />
          <Tab tabName="about" pathname={pathame} />
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
    </div>
  );
}
