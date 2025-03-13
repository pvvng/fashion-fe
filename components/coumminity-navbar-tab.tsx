import Link from "next/link";

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

export default function Tab({ tabName }: TabProps) {
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
            className="underline underline-offset-6 font-bold text-sm sm:text-base
            uppercase hover:text-gray-600 transition-all"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
