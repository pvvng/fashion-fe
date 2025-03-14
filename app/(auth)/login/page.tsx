import LoginForm from "@/components/form/login-form";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "로그인",
};

export default function LoginPage() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center sm:p-10 p-5">
      <div className="sm:p-10 sm:px-14 p-5 w-2xl mx-auto bg-white/80 dark:bg-neutral-800/80 rounded-2xl">
        <h1 className="font-extrabold sm:text-2xl text-xl uppercase sm:mb-10 mb-5">
          welcome back
        </h1>
        <LoginForm />
        <div className="mt-5 flex flex-col gap-2 text-center">
          <p>
            <span className="text-neutral-700 mr-2 sm:inline hidden dark:text-neutral-300">
              회원가입을 하지 않았다면?
            </span>
            <Link
              href="/create-account"
              className="font-semibold text-blue-600 hover:text-blue-400 transition-colors"
            >
              회원가입 페이지로 이동
            </Link>
          </p>
          <Link
            href="/"
            className="font-semibold text-center text-blue-600 hover:text-blue-400 transition-colors"
          >
            메인페이지로 이동
          </Link>
        </div>
      </div>
      <Image
        src="/slash.gif"
        alt="slash"
        fill
        className="object-cover -z-10 opacity-95 filter "
        unoptimized
      />
    </div>
  );
}
