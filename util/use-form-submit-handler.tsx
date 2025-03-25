"use client";

import { startTransition } from "react";

interface UseFormSubmitHandler {
  action: (payload: FormData) => void;
}

/**
 * useActionState의 입력값 초기화를 막기 위한 submitHandler 제공하는 커스텀훅
 *
 * @param action useActionState의 두번째 반환값인 form action
 * @returns handleSubmit 함수, form onSubmit 이벤트에서 사용
 */
export default function useFormSubmitHandler({ action }: UseFormSubmitHandler) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    startTransition(() => {
      action(formData);
    });
  };

  return handleSubmit;
}
