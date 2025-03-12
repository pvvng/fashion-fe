"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

const boardLinks = [
  { name: "coummunity", link: "/" },
  { name: "brands", link: "/" },
  { name: "stores", link: "/" },
  { name: "rental", link: "/" },
];

const profileLinks = [
  { name: "login", link: "/login" },
  { name: "join-us", link: "/create-account" },
  { name: "my-page", link: "/" },
];

const aboutUsLinks = [
  { name: "about-us", link: "/" },
  { name: "contact", link: "/" },
  { name: "notice", link: "/" },
  { name: "q&a", link: "/" },
];

interface TabProps {
  tabName: "board" | "profile" | "about";
}

function Tab({ tabName }: TabProps) {
  const linkMap = {
    board: boardLinks,
    profile: profileLinks,
    about: aboutUsLinks,
  };

  return (
    <div className="w-full">
      <p className="font-extrabold uppercase mb-5 text-xl">{tabName}</p>
      <ul
        className="grid grid-cols-2 gap-3 *:underline *:underline-offset-6 *:font-semibold 
    *:uppercase *:hover:text-gray-600 *:transition-all"
      >
        {linkMap[tabName].map(({ name, link }) => (
          <li key={name + link}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
