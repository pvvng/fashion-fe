"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Tab from "./coumminity-navbar-tab";

export default function CommunityNavbar() {
  const [isScroll, setIsScroll] = useState(false);
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
    <div className="w-full h-screen grid grid-rows-4 gap-3 p-5 sticky top-0 left-0 items-center">
      <Tab tabName="board" />
      <Tab tabName="profile" />
      <Tab tabName="about" />
      {/* logo */}
      <div className="flex items-end justify-start">
        <Link href="/">
          <p
            className={`${
              isScroll ? "text-7xl" : "text-8xl"
            } font-extrabold transition-all duration-800`}
          >
            夢遊
          </p>
        </Link>
      </div>
    </div>
  );
}
