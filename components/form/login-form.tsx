"use client";

import { login } from "@/app/(auth)/login/actions";
import { useActionState } from "react";
import FormInput from "../input";
import FormButton from "../button";
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "@/constants";
import useFormSubmitHandler from "@/util/use-form-submit-handler";

export default function LoginForm() {
  const [state, action] = useActionState(login, null);
  const handleSubmit = useFormSubmitHandler({ action });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <FormInput
        id="memberEmail"
        name="memberEmail"
        labelText="이메일"
        placeholder="이메일을 입력하세요."
        required
        type="text"
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
      <FormButton text="로그인" />
    </form>
  );
}
