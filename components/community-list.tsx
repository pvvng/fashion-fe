"use client";

import { CommunityData } from "@/app/(main)/community/page";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ListProps {
  initialData: CommunityData;
}

const imageMap = [
  { id: 1, image: "/test-img1.jpg" },
  { id: 2, image: "/test-img2.jpg" },
  { id: 3, image: "/test-img3.jpg" },
  { id: 4, image: "/test-img4.jpg" },
];

export default function CoummnityList({ initialData }: ListProps) {
  const [listData, setListData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const trigger = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        const element = entries[0];
        // trigger 감지
        if (element.isIntersecting && trigger.current) {
          // observer 감시 중지
          observer.unobserve(trigger.current);

          setIsLoading(true);
          // fetch
          await new Promise((r) => setTimeout(r, 500));
          const newData: CommunityData = [];
          [...Array(5)].forEach((_) => newData.push(...imageMap));

          // 실제 상황에선 가져온 데이터 개수가 0일때 page 증가 금지
          if (page <= 3) {
            setPage((pre) => pre + 1);
            setListData((pre) => [...pre, ...newData]);
          } else {
            setIsLastPage(true);
          }
          setIsLoading(false);
        }
      },
      { threshold: 1.0 }
    );
    if (trigger.current) {
      observer.observe(trigger.current);
    }

    // clean-up
    return () => {
      observer.disconnect();
    };
    // 나중엔 종속성 page로 변경
  }, [listData.length]);

  return (
    <div className="relative p-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {listData.map((v, i) => (
          <Link href={`/community/${v.id}`} key={i}>
            <div className="relative w-full mx-auto overflow-hidden aspect-square rounded-xl group">
              <Image
                src={v.image}
                alt="test"
                sizes="200px"
                fill
                className="object-cover transition-transform duration-300 rounded-lg group-hover:scale-95"
              />
            </div>
          </Link>
        ))}
      </div>
      {/* trigger */}
      {!isLastPage && (
        <p ref={trigger} className="mx-auto my-3 size-6">
          {isLoading ? <ArrowPathIcon className="mx-auto animate-spin" /> : ""}
        </p>
      )}
      <div className="sticky bottom-0 p-2 mt-5 bg-white/50 dark:bg-black/50 rounded-t-xl">
        <Link
          href="/community/write"
          className="block w-full p-2 my-3 font-semibold text-center text-white shadow-md rounded-xl 
          bg-black/90 dark:bg-neutral-100 dark:text-black z-100"
        >
          글 작성하기
        </Link>
      </div>
    </div>
  );
}
