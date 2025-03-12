import CreateAccountForm from "@/components/form/create-account";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "회원가입",
};

export default function CreateAccount() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center p-5">
      <div className="p-10 px-14 w-2xl mx-auto bg-white/90 rounded-2xl">
        <h1 className="font-ubuntu font-extrabold text-2xl mb-10 uppercase">
          create account
        </h1>
        <CreateAccountForm />
        <p className="mt-5 text-center">
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-400 transition-colors"
          >
            로그인 페이지로 이동
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
