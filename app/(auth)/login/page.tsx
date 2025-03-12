import LoginForm from "@/components/form/login-form";
import Image from "next/image";

export const metadata = {
  title: "로그인",
};

export default function LoginPage() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center p-5">
      <div className="p-10 px-14 w-2xl mx-auto bg-white/80 rounded-2xl">
        <h1 className="font-extrabold text-2xl mb-10 uppercase">
          welcome back
        </h1>
        <LoginForm />
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
