"use client";

import Link from "next/link";

const serviceLinks = [
  { name: "stores", link: "/stores" },
  { name: "community", link: "/community" },
  { name: "brands", link: "/brands" },
  { name: "rental", link: "/rental" },
];

const profileLinks = [
  { name: "login", link: "/login" },
  { name: "join-us", link: "/create-account" },
  { name: "my-page", link: "/my-page" },
  { name: "cart", link: "/cart" },
];

const aboutUsLinks = [
  { name: "about-us", link: "/about-us" },
  { name: "contact", link: "/contact" },
  { name: "notice", link: "/notice" },
  { name: "q&a", link: "/qna" },
];

interface TabProps {
  tabName: "service" | "profile" | "about";
  pathname: string;
}

export default function Tab({ tabName, pathname }: TabProps) {
  const linkMap = {
    service: serviceLinks,
    profile: profileLinks,
    about: aboutUsLinks,
  };

  return (
    <div className="w-full">
      <p className="font-extrabold uppercase md:mb-5 mb-3 md:text-2xl text-lg">
        {tabName}
      </p>
      <ul className="grid grid-cols-2 gap-3">
        {linkMap[tabName].map(({ name, link }) => (
          <li
            key={name + link}
            className={`underline underline-offset-4 font-bold text-xs md:text-base uppercase transition-all ${
              pathname.includes(link)
                ? "text-blue-600 hover:text-blue-500"
                : "hover:text-gray-600"
            }`}
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
