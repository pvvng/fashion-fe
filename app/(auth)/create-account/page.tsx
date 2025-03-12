import CreateAccountForm from "@/components/form/create-account";
import Image from "next/image";

export const metadata = {
  title: "회원가입",
};

export default function CreateAccount() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center p-5">
      <div className="p-10 px-14 w-2xl mx-auto bg-white/90 rounded-2xl">
        <h1 className="font-extrabold text-2xl mb-10 uppercase">
          create account
        </h1>
        <CreateAccountForm />
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
