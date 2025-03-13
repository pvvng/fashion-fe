"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const boardLinks = [
  { name: "community", link: "/community" },
  { name: "brands", link: "/brands" },
  { name: "stores", link: "/stores" },
  { name: "rental", link: "/rental" },
];

const profileLinks = [
  { name: "login", link: "/login" },
  { name: "join-us", link: "/create-account" },
  { name: "my-page", link: "/my-page" },
];

const aboutUsLinks = [
  { name: "about-us", link: "/about-us" },
  { name: "contact", link: "/contact" },
  { name: "notice", link: "/notice" },
  { name: "q&a", link: "/qna" },
];

interface TabProps {
  tabName: "board" | "profile" | "about";
  pathname: string;
}

export default function Tab({ tabName, pathname }: TabProps) {
  const linkMap = {
    board: boardLinks,
    profile: profileLinks,
    about: aboutUsLinks,
  };

  return (
    <div className="w-full">
      <p className="font-extrabold uppercase mb-5 text-2xl">{tabName}</p>
      <ul className="grid grid-cols-2 gap-3">
        {linkMap[tabName].map(({ name, link }) => (
          <li
            key={name + link}
            className={`underline underline-offset-4 font-bold text-sm sm:text-base
            uppercase hover:text-gray-600 transition-all ${
              link === pathname && "text-blue-500"
            }`}
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
