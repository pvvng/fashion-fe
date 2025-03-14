"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "agreement", link: "/agreement" },
  { name: "privacy policy", link: "/privacy-policy" },
  { name: "guide", link: "/guide" },
];

export default function MainFooter() {
  const pathname = usePathname();

  return (
    <div
      className="w-full grid grid-cols-3 text-center sm:gap-0 gap-3 items-center p-2 py-3 text-sm sm:text-base
      bg-black dark:bg-neutral-100 text-white dark:text-black *:uppercase *:font-bold *:transition-colors"
    >
      {links.map(({ name, link }) => (
        <Link
          key={name}
          href={link}
          className={`${
            pathname.includes(link)
              ? "text-blue-500 hover:text-blue-400"
              : "hover:text-gray-400"
          }`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
