import Link from "next/link";

export default function MainFooter() {
  return (
    <div
      className="w-full flex sm:flex-row flex-col sm:gap-0 gap-3 justify-around items-center p-2 py-3 bg-black text-white
      *:uppercase *:font-bold *:hover:text-gray-400 *:transition-colors"
    >
      <Link href="/">agreement</Link>
      <Link href="/">privacy policy</Link>
      <Link href="/">guide</Link>
    </div>
  );
}
