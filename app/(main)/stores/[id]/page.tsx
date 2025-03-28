import Image from "next/image";

interface StoreDetailProps {
  params: Promise<{ id: string }>;
}

export default async function StoreDetail({ params }: StoreDetailProps) {
  const id = (await params).id;

  return (
    <div className="min-h-screen p-5">
      <div className="grid sm:grid-cols-2 gap-3">
        <Image
          src="/shop-main1.jpg"
          alt="shop"
          width={200}
          height={200}
          className="w-full rounded-xl"
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl">Denim Jacket</h1>
          <p>121,000원</p>
          <div>
            <label htmlFor="size">사이즈</label>
            <select id="size" name="size" className="w-full">
              <option selected disabled>
                [필수] 사이즈를 선택해주세요
              </option>
              <option value="option1">M</option>
              <option value="option2">L</option>
              <option value="option3">XL</option>
            </select>
          </div>
          <div>
            <label htmlFor="colors">색상</label>
            <select id="colors" name="colors" className="w-full">
              <option selected disabled>
                [필수] 색상을 선택해주세요
              </option>
              <option value="option1">black</option>
              <option value="option1">white</option>
            </select>
          </div>
          <button className="mt-10 w-full h-10 flex justify-center items-center bg-black text-white uppercase text-center font-semibold text-sm">
            add to cart
          </button>
          <button className="w-full h-10 flex justify-center items-center border uppercase text-center font-semibold text-sm">
            buy now
          </button>
          <div className="border-b-2" />
          <div className="flex items-center gap-2 h-10 *:flex *:justify-center *:items-center">
            <button className="w-full h-full bg-green-400 text-sm font-semibold p-2">
              pay 구매하기
            </button>
            <button className="h-full size-10 p-2 border border-neutral-300">
              찜
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>American retro stand-up collar denim jacket</p>
        <div>
          <p className="font-semibold text-neutral-500">Fabric</p>
          <p>Cotton 83.5%, polyester 13%, viscose 3.5%</p>
        </div>
        <div>
          <p className="font-semibold text-neutral-500">Model size</p>
          <p>185/74 착용사이즈 XL</p>
        </div>
      </div>
    </div>
  );
}
