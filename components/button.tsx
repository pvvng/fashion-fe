"use client";

import { useFormStatus } from "react-dom";

export default function FormButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="w-full h-10 cursor-pointer bg-blue-600 hover:bg-blue-500 transition-colors 
    text-white font-semibold rounded-md disabled:bg-neutral-500"
    >
      {!pending ? text : "로딩중.."}
    </button>
  );
}
