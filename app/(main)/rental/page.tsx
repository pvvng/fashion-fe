import RentalMap from "@/components/kakao-map/rental-map";
import WriteLinkButton from "@/components/write-link-button";
import { PostLoading } from "./loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Rental() {
  return (
    <div className="relative min-h-screen p-5">
      <Suspense fallback={<PostLoading />}>
        <RetalPosts />
      </Suspense>
      <WriteLinkButton link="/rental/write" />
      <RentalMap />
    </div>
  );
}

async function RetalPosts() {
  return (
    <div className="flex flex-col gap-5 mb-5">
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
