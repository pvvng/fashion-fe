import RentalMap from "@/components/kakao-map/rental-map";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { PostLoading } from "./loading";

export default function Rental() {
  return (
    <div className="relative min-h-screen p-5">
      <Suspense fallback={<PostLoading />}>
        <RetalPosts />
      </Suspense>
      <div className="sticky bottom-0 p-2 bg-white/50 dark:bg-black/50 rounded-t-xl">
        <Link
          href="/rental/write"
          className="block w-full p-2 my-3 font-semibold text-center text-white shadow-md rounded-xl 
          bg-black/90 dark:bg-neutral-100 dark:text-black z-100"
        >
          글 작성하기
        </Link>
      </div>
      <RentalMap />
    </div>
  );
}

async function RetalPosts() {
  return (
    <div className="flex flex-col gap-5">
      {[...Array(12)].map((_, i) => (
        <Link
          key={i}
          href={`/rental/${(i % 4) + 1}`}
          className="flex items-center gap-3"
        >
          <div className="relative overflow-hidden size-28 rounded-xl">
            <Image
              src={`/test-img${(i % 4) + 1}.jpg`}
              alt="test"
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p>옷 빌려드립니다 {i + 1}</p>
            <p className="text-lg font-semibold">23000 원</p>
            <p className="text-sm text-neutral-500">3일전</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
