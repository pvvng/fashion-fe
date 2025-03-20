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
        id="memberName"
        name="memberName"
        labelText="이름"
        placeholder="이름을 입력하세요."
        required
        type="text"
        minLength={NICKNAME_MIN_LENGTH}
        maxLength={NICKNAME_MAX_LENGTH}
        errors={state?.fieldErrors.memberName}
      />
      <FormInput
        id="memberNickName"
        name="memberNickName"
        labelText="별명"
        placeholder="사용할 별명을 입력하세요."
        required
        type="text"
        minLength={ID_MIN_LENGTH}
        maxLength={ID_MAX_LENGTH}
        errors={state?.fieldErrors.memberNickName}
      />
      <FormInput
        id="memberEmail"
        name="memberEmail"
        labelText="이메일"
        placeholder="이메일을 입력하세요."
        required
        type="email"
        errors={state?.fieldErrors.memberEmail}
      />
      <FormInput
        id="memberPassword"
        name="memberPassword"
        labelText="비밀번호"
        placeholder="비밀번호를 입력하세요."
        required
        type="password"
        minLength={PASSWORD_MIN_LENGTH}
        maxLength={PASSWORD_MAX_LENGTH}
        errors={state?.fieldErrors.memberPassword}
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
