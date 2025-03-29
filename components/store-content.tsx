"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const contentNavItems = ["정보", "사이즈", "후기", "문의"];
const listMap: { [key: number]: React.JSX.Element } = {
  0: <Detail />,
  1: <Size />,
  2: <Review />,
  3: <QnA />,
};

export default function StoreContent() {
  const [nowList, setList] = useState(0);

  return (
    <div className="mt-10 min-h-screen">
      {/* content-nav */}
      <div
        className="w-full grid grid-cols-4 text-center text-white font-semibold z-10
        sticky lg:top-0 top-12 *:p-3 bg-neutral-100 *:transition-colors cursor-pointer"
      >
        {contentNavItems.map((item, i) => (
          <p
            key={item}
            className={`${
              nowList === i ? "bg-black dark:bg-neutral-600" : "text-black"
            }`}
            onClick={() => setList(i)}
          >
            {item}
          </p>
        ))}
      </div>
      {/* content */}
      <div className="p-5">{listMap[nowList]}</div>
    </div>
  );
}

function Detail() {
  return (
    <div className="text-center flex flex-col gap-3">
      <p className="text-2xl font-bold my-20">
        American retro stand-up collar denim jacket
      </p>
      <div>
        <p className="font-semibold text-neutral-500">Fabric</p>
        <p>Cotton 83.5%, polyester 13%, viscose 3.5%</p>
      </div>
      <div className="mb-20">
        <p className="font-semibold text-neutral-500">Model size</p>
        <p>185/74 착용사이즈 XL</p>
      </div>
      <Image
        src="/shop-d1.webp"
        alt="shop-d1"
        width={600}
        height={600}
        className="w-full"
      />
      <Image
        src="/shop-d2.webp"
        alt="shop-d1"
        width={600}
        height={600}
        className="w-full"
      />
      <Image
        src="/shop-d3.webp"
        alt="shop-d1"
        width={600}
        height={600}
        className="w-full"
      />
      <Image
        src="/shop-main1.jpg"
        alt="shop-d1"
        width={600}
        height={600}
        className="w-full"
      />
      <Image
        src="/shop-main2.jpg"
        alt="shop-d1"
        width={600}
        height={600}
        className="w-full"
      />
      <Image
        src="/shop-main3.jpg"
        alt="shop-d1"
        width={600}
        height={600}
        className="w-full"
      />
    </div>
  );
}

const sizeMap = [
  { size: "M", chest: 132, length: 65, sleeve: 80.5 },
  { size: "L", chest: 136, length: 67, sleeve: 82 },
  { size: "XL", chest: 140, length: 69, sleeve: 83.5 },
  { size: "2XL", chest: 144, length: 71, sleeve: 85 },
];

const danger = [
  "드라이클리닝을 권장하며 염소표백은 적합하지 않습니다.",
  "직사광선을 피하고 통풍이 잘 되는 곳에서 건조하십시오.",
  "세탁/건조 시 줄어들거나 변형이 올 수 있습니다.",
  "옷의 변색을 방지하기 위해 담금 시간을 짧게 하고, 염료 및 색상에 따라 구분 세탁하는 것이 좋습니다.",
];

function Size() {
  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold">
                Size
              </th>
              <th className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold">
                Shoulder
              </th>
              <th className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold">
                Chest
              </th>
              <th className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold">
                Length
              </th>
              <th className="px-4 py-2 border border-gray-300 text-gray-700 font-semibold">
                Sleeve
              </th>
            </tr>
          </thead>
          <tbody>
            {sizeMap.map(({ size, chest, length, sleeve }, index) => (
              <tr key={size} className="border border-gray-300">
                <td className="px-4 py-2 border border-gray-300">{size}</td>
                <td className="px-4 py-2 border border-gray-300">/</td>
                <td className="px-4 py-2 border border-gray-300">{chest}</td>
                <td className="px-4 py-2 border border-gray-300">{length}</td>
                <td className="px-4 py-2 border border-gray-300">{sleeve}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border border-gray-300 text-gray-700 font-semibold">
                세탁시 주의사항
              </th>
            </tr>
          </thead>
          <tbody>
            {danger.map((text, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="px-4 py-3 border border-gray-300">{text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Review() {
  return (
    <div>
      {[...Array(10)].map((_, i) => (
        <ReviewCard key={i} />
      ))}
    </div>
  );
}

function ReviewCard() {
  const [imageClick, setImageClick] = useState(false);

  const toggleClick = () => {
    setImageClick((pre) => !pre);
  };

  return (
    <div className="flex flex-col gap-3 border-b-1 last:border-none border-neutral-200 py-3">
      <div className="flex gap-2 items-center">
        <div className="size-6 rounded-full bg-neutral-200" />
        <div>
          <div className="flex gap-1 items-center">
            <p className="font-semibold">으르릉캉캉월월</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              25.03.29
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        170cm · 65kg · 260cm | M 구매
      </p>
      <div
        className={`${
          imageClick ? "aspect-square" : "size-28"
        } relative rounded-xl overflow-hidden`}
        onClick={toggleClick}
      >
        <Image src="/test-img1.jpg" alt="text" fill className="object-cover" />
      </div>
      <p className="text-sm">개이뻐요 ㄷㄷ 나만샀으면 좋겠음 님들 사지마셈</p>
    </div>
  );
}

function QnA() {
  return (
    <div>
      {[...Array(2)].map((_, i) => (
        <QnACard key={i} />
      ))}
    </div>
  );
}

function QnACard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((pre) => !pre);
  };

  return (
    <div
      className="py-3 border-b border-neutral-200 last:border-none flex flex-col gap-3"
      onClick={toggleOpen}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">재입고 문의</p>
          <p className="text-sm text-neutral-500">답변완료 · 2025.03.16</p>
        </div>
        <div className="*:size-4">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </div>
      {isOpen && (
        <div className="bg-neutral-100 p-3 flex flex-col gap-2">
          <p className="text-neutral-500">Denim Jacket</p>
          <p className="text-sm">재입고 언제 되나요</p>
          <div className="border-b border-neutral-400 my-5" />
          <div className="*:text-sm">
            <p>안녕하세요 고객님.</p>
            <p>문의 주신 제품은 현재 재생산 예정이 없는 제품입니다.</p>
            <p>도움 드리지 못하는 점 양해 부탁드립니다.</p>
            <p>그 외 추가적인 문의 사항이 있으시면 재문의 부탁드립니다.</p>
            <p>감사합니다 :)</p>
          </div>
        </div>
      )}
    </div>
  );
}
