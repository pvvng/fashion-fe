import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

interface CommunityDetailProps {
  params: Promise<{ id: string }>;
}

export default async function CommunityDetail({
  params,
}: CommunityDetailProps) {
  const id = (await params).id;
  console.log(id);
  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="aspect-square overflow-hidden rounded-xl relative">
        <Image
          src={`/test-img${id}.jpg`}
          alt="text"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-xl font-semibold">커뮤니티 글에 대한 제목</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        debitis repudiandae laudantium facilis aliquam consequuntur atque illum,
        incidunt ipsum qui excepturi perspiciatis, saepe iure cumque? Explicabo
        voluptate atque perspiciatis inventore!
      </p>
      <div className="border-b border-neutral-200" />
      <div className="flex gap-5 justify-end">
        <div className="flex gap-1 items-center">
          <HeartIcon className="size-5" />
          <p>128</p>
        </div>
        <div className="flex gap-1 items-center">
          <ChatBubbleBottomCenterIcon className="size-5" />
          <p>34</p>
        </div>
      </div>
    </div>
  );
}
