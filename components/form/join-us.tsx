"use client";

import { useActionState } from "react";
import FormButton from "../button";
import FormInput from "../input";
import {
  ID_MAX_LENGTH,
  ID_MIN_LENGTH,
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from "@/constants";
import { joinUsSchema } from "@/lib/zod-schemas";

export default function JoinUsForm() {
  const interceptAction = (_: any, formData: FormData) => {
    const data = {
      nickname: formData.get("nickname"),
      id: formData.get("id"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    const result = joinUsSchema.safeParse(data);

    if (!result.success) {
      console.log(result.error.flatten());
      return result.error.flatten();
    }

    // fetch
  };

  const [state, action] = useActionState(interceptAction, null);

  return (
    <form
      action={action}
      className="flex flex-col gap-3 p-5 bg-white max-w-screen-sm mx-auto"
    >
      <p className="font-semibold text-xl">회원가입</p>
      <div className="border-b border-neutral-300" />
      <FormInput
        id="nickname"
        name="nickname"
        labelText="이름"
        placeholder="사용할 이름을 입력하세요."
        required
        type="text"
        minLength={NICKNAME_MIN_LENGTH}
        maxLength={NICKNAME_MAX_LENGTH}
        errors={state?.fieldErrors.nickname}
      />
      <FormInput
        id="email"
        name="email"
        labelText="이메일"
        placeholder="이메일을 입력하세요."
        required
        type="email"
        errors={state?.fieldErrors.email}
      />
      <FormInput
        id="id"
        name="id"
        labelText="아이디"
        placeholder="아이디를 입력하세요."
        required
        type="text"
        minLength={ID_MIN_LENGTH}
        maxLength={ID_MAX_LENGTH}
        errors={state?.fieldErrors.id}
      />
      <FormInput
        id="password"
        name="password"
        labelText="비밀번호"
        placeholder="비밀번호를 입력하세요."
        required
        type="password"
        minLength={PASSWORD_MIN_LENGTH}
        maxLength={PASSWORD_MAX_LENGTH}
        errors={state?.fieldErrors.password}
      />
      <FormInput
        id="confirmPassword"
        name="confirmPassword"
        labelText="비밀번호 확인"
        placeholder="비밀번호를 다시 입력하세요."
        required
        type="password"
        minLength={PASSWORD_MIN_LENGTH}
        maxLength={PASSWORD_MAX_LENGTH}
        errors={state?.fieldErrors.confirmPassword}
      />
      <FormButton text="회원가입" />
    </form>
  );
}
