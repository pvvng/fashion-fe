"use client";

import { useFormStatus } from "react-dom";

export default function FormButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="w-full h-10 mt-3 cursor-pointer bg-neutral-950 hover:bg-neutral-800 text-white transition-colors 
    font-semibold rounded-lg shadow-md disabled:bg-neutral-500"
    >
      {!pending ? text : "로딩 중"}
    </button>
  );
}
