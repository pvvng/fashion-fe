import RentalMap from "@/components/kakao-map/rental-map";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { PostLoading } from "./loading";

export default function Rental() {
  return (
    <div className="min-h-screen p-5 relative">
      <RentalMap />
      <Suspense fallback={<PostLoading />}>
        <RetalPosts />
      </Suspense>
      <div className="sticky bottom-0 p-2 bg-white/40 dark:bg-black/40 rounded-t-xl">
        <Link
          href="/rental/write"
          className="block w-full mt-5 text-center 
        rounded-xl p-2 font-semibold shadow-md 
        bg-black/90 text-white dark:bg-neutral-100 dark:text-black z-100"
        >
          글 작성하기
        </Link>
      </div>
    </div>
  );
}

async function RetalPosts() {
  return (
    <div className="flex flex-col gap-5 py-5">
      {[...Array(12)].map((_, i) => (
        <Link
          key={i}
          href={`/rental/${(i % 4) + 1}`}
          className="flex gap-3 items-center"
        >
          <div className="size-28 rounded-xl overflow-hidden relative">
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
