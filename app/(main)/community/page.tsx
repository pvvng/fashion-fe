import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "커뮤니티",
};

const imageMap = [
  "/test-img1.jpg",
  "/test-img2.jpg",
  "/test-img3.jpg",
  "/test-img4.jpg",
];

export default function Community() {
  const amplified: string[] = [];
  [...Array(10)].forEach((_) => amplified.push(...imageMap));

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-3 gap-3 p-5">
      {amplified.map((v, i) => (
        <Link href="#" key={i}>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden mx-auto group">
            <Image
              src={v}
              alt="test"
              sizes="200px"
              fill
              className="object-cover rounded-lg group-hover:scale-95 transition-transform duration-300"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
