import LoginForm from "@/components/form/login-form";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "로그인",
};

export default function LoginPage() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center p-5">
      <div className="w-2xl p-10 px-14 mx-auto bg-white/80 rounded-2xl">
        <h1 className="font-extrabold text-2xl uppercase mb-10">
          welcome back
        </h1>
        <LoginForm />
        <p className="mt-5 text-center">
          <span className="text-neutral-700 mr-2">
            회원가입을 하지 않았다면?
          </span>
          <Link
            href="/create-account"
            className="font-semibold text-blue-600 hover:text-blue-400 transition-colors"
          >
            회원가입 페이지로 이동
          </Link>
        </p>
      </div>
      <Image
        src="/slash.gif"
        alt="slash"
        fill
        className="object-cover -z-10 opacity-95"
      />
    </div>
  );
}
