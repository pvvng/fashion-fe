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
import { createAccount } from "@/app/(auth)/create-account/actions";

export default function CreateAccountForm() {
  const [state, action] = useActionState(createAccount, null);

  return (
    <form action={action} className="flex flex-col gap-5">
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
