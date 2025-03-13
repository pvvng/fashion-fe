import CreateAccountForm from "@/components/form/create-account";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "회원가입",
};

export default function CreateAccount() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center sm:p-10 p-5 text-black">
      <div className="sm:p-10 sm:px-14 p-5 px-8 w-2xl mx-auto bg-white/90 rounded-2xl">
        <h1 className="font-extrabold sm:text-2xl text-xl sm:mb-10 mb-5 uppercase">
          create account
        </h1>
        <CreateAccountForm />
        <div className="mt-5 flex flex-col gap-2 text-center">
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-400 transition-colors"
          >
            로그인 페이지로 이동
          </Link>
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
        className="object-cover -z-10 opacity-95"
        unoptimized
      />
    </div>
  );
}
