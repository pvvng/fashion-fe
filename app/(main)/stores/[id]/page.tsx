import SelectOption from "@/components/options";
import StoreContent from "@/components/store-content";
import Image from "next/image";

interface StoreDetailProps {
  params: Promise<{ id: string }>;
}

export default async function StoreDetail({ params }: StoreDetailProps) {
  const id = (await params).id;

  return (
    <div className="min-h-screen">
      <div className="grid sm:grid-cols-2 gap-3 p-5">
        <Image
          src="/shop-main1.jpg"
          alt="shop"
          width={200}
          height={300}
          className="w-full rounded-xl"
          priority
        />
        <div className="flex flex-col gap-5">
          {/* name - price */}
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">Denim Jacket</h1>
            <p>121,000원</p>
          </div>
          {/* options */}
          <div className="flex flex-col gap-2">
            <SelectOption
              id="size"
              name="size"
              labelText="사이즈"
              options={["M", "L", "XL"]}
              required
              requiredText="사이즈를 선택해주세요."
            />
            <SelectOption
              id="color"
              name="color"
              labelText="색상"
              options={["black", "white"]}
              required
              requiredText="색상을 선택해주세요."
            />
          </div>
          {/* discount card */}
          <div className="w-full border border-neutral-200 p-2 px-3 flex justify-between items-center mt-5">
            <div>
              <p className="text-sm">쿠폰 사용시</p>
              <p className="font-semibold text-lg">108,900원</p>
            </div>
            <button
              className="bg-black text-white dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-300
              rounded-md px-2 py-1 font-medium hover:bg-neutral-700 transition-colors text-sm"
            >
              쿠폰 받기
            </button>
          </div>
          {/* button */}
          <div className="flex flex-col gap-2 mt-5">
            <button
              className="w-full h-10 flex justify-center items-center bg-black text-white 
              dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-300
              uppercase text-center font-semibold text-sm
            hover:bg-neutral-700 transition-colors"
            >
              buy now
            </button>
            <button
              className="w-full h-10 flex justify-center items-center border 
            uppercase text-center font-semibold text-sm
            hover:bg-neutral-200 transition-colors"
            >
              add to cart
            </button>
          </div>
          {/* naver pay */}
          {/* <div className="border-b-1" /> */}
          {/* <div className="flex items-center gap-2 h-10 *:flex *:justify-center *:items-center">
            <button className="w-full h-full bg-green-400 text-sm font-semibold p-2">
              pay 구매하기
            </button>
            <button className="h-full size-10 p-2 border border-neutral-300">
              찜
            </button>
          </div> */}
        </div>
      </div>
      <StoreContent />
    </div>
  );
}
