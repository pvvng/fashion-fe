"use client";

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

export default function JoinUsForm() {
  return (
    <form className="flex flex-col gap-3 p-5">
      <FormInput
        id="nickname"
        name="nickname"
        labelText="이름"
        placeholder="사용할 이름을 입력하세요."
        required
        type="text"
        minLength={NICKNAME_MIN_LENGTH}
        maxLength={NICKNAME_MAX_LENGTH}
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
      />
      <FormButton text="회원가입" />
    </form>
  );
}
