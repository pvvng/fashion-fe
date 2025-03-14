import FormButton from "@/components/button";
import FormInput from "@/components/input";
import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

interface CommunityDetailProps {
  params: Promise<{ id: string }>;
}

export default async function CommunityDetail({
  params,
}: CommunityDetailProps) {
  const id = (await params).id;

  return (
    <div className="p-5 flex flex-col gap-5 relative">
      {/* content */}
      <div className="aspect-square overflow-hidden rounded-xl relative">
        <Image
          src={`/test-img${id}.jpg`}
          alt="text"
          fill
          sizes="600px"
          className="object-cover"
          priority
        />
      </div>
      <h1 className="text-xl font-semibold">커뮤니티 글에 대한 제목</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        debitis repudiandae laudantium facilis aliquam consequuntur atque illum,
        incidunt ipsum qui excepturi perspiciatis, saepe iure cumque? Explicabo
        voluptate atque perspiciatis inventore!
      </p>
      {/* hr */}
      {/* <div className="border-b border-neutral-200" /> */}
      {/* heart-comments count */}
      <div className="flex gap-5 justify-end">
        <button className="flex gap-1 items-center">
          <HeartIcon
            aria-label="like-count"
            className="size-5 cursor-pointer"
          />
          <p>128</p>
        </button>
        <div className="flex gap-1 items-center">
          <ChatBubbleBottomCenterIcon className="size-5" />
          <p>5</p>
        </div>
      </div>
      {/* comments */}
      {[...Array(5)].map((_, i) => (
        <Comment key={i} />
      ))}
      <div className="border-b border-neutral-200" />
      {/* comment-form */}
      <form className="w-full border-neutral-200 rounded-xl bg-white dark:bg-neutral-950 flex flex-col gap-5">
        <Link href="#" className="flex gap-2 items-center">
          {/* user-profile-image */}
          <div className="size-10 rounded-full bg-blue-500" />
          <p className="font-semibold">현재사용자의이름 </p>
        </Link>
        <FormInput
          id="comment"
          name="comment"
          type="text"
          placeholder="게시물에 관한 댓글 작성하기"
        />
        <FormButton text="댓글 등록" />
      </form>
    </div>
  );
}

function Comment() {
  return (
    <>
      <div className="border-b border-neutral-200" />
      <div className="flex flex-col gap-3">
        {/* commented-user */}
        <div className="flex items-center">
          <Link href="#" className="flex gap-2 items-center">
            {/* user-profile-image */}
            <div className="size-10 rounded-full bg-amber-300" />
            <p className="font-semibold">
              댓글쓴사용자의이름{" "}
              <span className="text-neutral-500 text-sm">(글쓴이)</span>
            </p>
          </Link>
        </div>
        {/* comment-content */}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          impedit corrupti, numquam libero, autem beatae, atque quidem nulla
          cumque quasi et accusamus voluptatum officiis ducimus fugiat magnam id
          blanditiis quisquam.
        </p>
        {/* heart count */}
        <div className="flex gap-5 justify-end">
          <button
            aria-label="like-count"
            className="flex gap-1 items-center cursor-pointer"
          >
            <HeartIcon className="size-5" />
            <p>13</p>
          </button>
        </div>
        {/* edit-delete-button */}
        <div className="flex gap-2 items-center *:hover:text-neutral-600 *:transition-colors">
          <button aria-label="edit-comment">
            <PencilSquareIcon className="size-5 cursor-pointer" />
          </button>
          <button aria-label="delete-comment">
            <TrashIcon className="size-5 cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  );
}
