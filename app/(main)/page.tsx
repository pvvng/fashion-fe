import Image from "next/image";

export const metadata = {
  title: "홈",
};

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen relative">
        <Image
          src="/led.gif"
          alt="led"
          fill
          sizes="600px"
          priority
          className="object-cover"
        />
      </div>
      <div className="my-48 *:text-center p-3">
        <h1 className="uppercase text-5xl font-extrabold mb-24">mongu</h1>
        <p className="my-3 font-semibold text-lg">[몽유] 꿈 속에서 놂.</p>
        <p>우리는 현실과 꿈이 만나는 지점에서 영감을 받아,</p>
        <p>당신의 일상에 특별한 세계를 만들어 냅니다.</p>
      </div>
    </div>
  );
}
