import { PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function WriteLinkButton({ link }: { link: string }) {
  return (
    <Link href={link}>
      <div
        className="fixed bottom-20 right-8 size-14 rounded-full flex justify-center items-center transition-colors shadow-md
      bg-blue-700 hover:bg-blue-600 text-white z-100"
      >
        <PencilSquareIcon className="size-6" />
      </div>
    </Link>
  );
}
