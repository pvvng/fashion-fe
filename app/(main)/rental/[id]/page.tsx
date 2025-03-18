import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

interface RentalDetailProps {
  params: Promise<{ id: string }>;
}

export default async function RentalDetail({ params }: RentalDetailProps) {
  const id = (await params).id;
  return (
    <div className="p-5 flex flex-col gap-5 min-h-screen">
      <div className="aspect-square relative rounded-xl overflow-hidden">
        <Image
          src={`/test-img${id}.jpg`}
          alt="test"
          fill
          sizes="600px"
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-xl font-semibold">렌탈 글에 대한 제목</h1>
      <h1 className="text-xl font-semibold">23000 원</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        debitis repudiandae laudantium facilis aliquam consequuntur atque illum,
        incidunt ipsum qui excepturi perspiciatis, saepe iure cumque? Explicabo
        voluptate atque perspiciatis inventore!
      </p>
      {/* heart-chats count */}
      <div className="flex gap-5 justify-end">
        <button className="flex gap-1 items-center">
          <HeartIcon
            aria-label="like-count"
            className="size-5 cursor-pointer"
          />
          <p>128</p>
        </button>
        <div className="flex gap-1 items-center">
          <ChatBubbleOvalLeftEllipsisIcon className="size-5" />
          <p>5</p>
        </div>
      </div>
      {/* buttons */}
      <div className="flex gap-2 py-3">
        <button className="w-full ring-1 ring-red-400 hover:bg-red-500 hover:text-white rounded-md text-red-400 p-2 font-semibold cursor-pointer transition-colors">
          찜하기
        </button>
        <button className="w-full ring-1 ring-black hover:bg-black hover:text-white rounded-md text-black p-2 font-semibold cursor-pointer transition-colors">
          채팅하기
        </button>
      </div>
    </div>
  );
}
