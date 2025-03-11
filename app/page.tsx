"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";

export default function Home() {
  return (
    <form className="h-screen flex flex-col gap-3 justify-center items-center px-48">
      <FormInput
        name="nickname"
        labelText="이름"
        placeholder="사용할 이름을 입력하세요."
        required
        type="text"
      />
      <FormInput
        name="id"
        labelText="아이디"
        placeholder="아이디를 입력하세요."
        required
        type="text"
      />
      <FormInput
        name="password"
        labelText="비밀번호"
        placeholder="비밀번호를 입력하세요."
        required
        type="password"
      />
      <FormInput
        name="confirm-password"
        labelText="비밀번호 확인"
        placeholder="비밀번호를 다시 입력하세요."
        required
        type="password"
      />
      <FormButton text="회원가입" />
    </form>
  );
}
