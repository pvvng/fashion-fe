import Image from "next/image";
import Link from "next/link";

export default function Stores() {
  return (
    <div className="min-h-screen p-5">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        {[...Array(10)].map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
}

function Card() {
  return (
    <Link
      href={`/stores/${1}`}
      className="hover:scale-95 transition-transform flex flex-col gap-3"
    >
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image
          src="/shop-main1.jpg"
          alt="shop"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="text-center flex flex-col gap-1">
        <p className="font-semibold">Denim Jacket</p>
        <p>121,000원</p>
      </div>
    </Link>
  );
}
