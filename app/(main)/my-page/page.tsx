import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  DocumentIcon,
  GiftTopIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default async function MyPage() {
  await new Promise((r) => setTimeout(r, 30000));
  return (
    <div className="@container p-5 flex flex-col gap-5">
      <div className="mx-auto size-52 rounded-full overflow-hidden relative">
        <Image
          src="/test-img4.jpg"
          alt="test"
          sizes="208px"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-5 rounded-xl shadow-md flex flex-col gap-3 dark:border dark:border-neutral-400">
        <p className="text-2xl font-semibold">username</p>
        <div>
          <p className="text-sm">처인구 역북동</p>
          <p className="text-sm">173cm, 68kg, 260cm</p>
        </div>
        <p className="text-sm text-neutral-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          praesentium soluta rem voluptate sunt quis. Eos nesciunt mollitia ex,
          minima impedit nostrum pariatur tenetur sit suscipit labore iure, enim
          dolorum!
        </p>
      </div>
      <div
        className="p-5 rounded-xl shadow-md grid @xs:grid-cols-3 gap-5 items-center 
        dark:border dark:border-neutral-400 dark:shadow-none
        *:uppercase *:text-center *:hover:scale-90 *:transition-transform *:cursor-pointer"
      >
        <Link href="#">
          <p className="text-xl font-bold">24</p>
          <p className="text-xs text-neutral-400 font-semibold">followers</p>
        </Link>
        <Link href="#">
          <p className="text-xl font-bold">128</p>
          <p className="text-xs text-neutral-400 font-semibold">following</p>
        </Link>
        <Link href="#">
          <p className="text-xl font-bold">8</p>
          <p className="text-xs text-neutral-400 font-semibold">scrap</p>
        </Link>
      </div>
      <Menu name="Profile" icon="profile" link="#" />
      <Menu name="Posts" icon="post" link="#" />
      <Menu name="Rental" icon="rental" link="#" />
      <Menu name="Comments" icon="comment" link="#" />
      <Menu name="Chats" icon="chat" link="#" />
      <Menu name="Setting" icon="setting" link="#" />
    </div>
  );
}

interface MenuProps {
  name: string;
  icon: "profile" | "setting" | "post" | "comment" | "chat" | "rental";
  link: string;
}

function Menu({ name, icon, link }: MenuProps) {
  const menuItems = {
    profile: <UserIcon />,
    post: <DocumentIcon />,
    comment: <ChatBubbleBottomCenterIcon />,
    chat: <ChatBubbleOvalLeftEllipsisIcon />,
    rental: <GiftTopIcon />,
    setting: <Cog6ToothIcon />,
  };

  return (
    <Link
      href={link}
      className="flex justify-between items-center transition-colors 
      hover:bg-neutral-200 dark:hover:bg-neutral-500 p-3 rounded-md"
    >
      <div className="flex gap-3 items-center">
        <span className="*:size-5">{menuItems[icon]}</span>
        <p className="font-semibold">{name}</p>
      </div>
      <ChevronRightIcon className="size-5 text-neutral-600" />
    </Link>
  );
}
