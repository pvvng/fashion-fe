import Link from "next/link";

export default function CoummunityFooter() {
  return (
    <div
      className="w-full flex justify-around items-center p-2 py-3 bg-black text-white
      *:uppercase *:font-bold *:hover:text-gray-400 *:transition-colors"
    >
      <Link href="/">agreement</Link>
      <Link href="/">privacy policy</Link>
      <Link href="/">guide</Link>
    </div>
  );
}
