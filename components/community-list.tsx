"use client";

import { CommunityData } from "@/app/(main)/community/page";
import WriteLinkButton from "./write-link-button";
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
  const trigger = useRef<HTMLDivElement>(null);

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
        <div
          ref={trigger}
          className="flex flex-row gap-2 justify-center items-center my-3 mt-4"
        >
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
          <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
        </div>
      )}
      <WriteLinkButton link="/community/write" />
    </div>
  );
}
