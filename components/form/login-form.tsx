"use client";

import { login } from "@/app/(auth)/login/actions";
import { useActionState } from "react";
import FormInput from "../input";
import FormButton from "../button";
import {
  ID_MAX_LENGTH,
  ID_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from "@/constants";

export default function LoginForm() {
  const [state, action] = useActionState(login, null);

  return (
    <form action={action} className="flex flex-col gap-5">
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

      <FormButton text="로그인" />
    </form>
  );
}
