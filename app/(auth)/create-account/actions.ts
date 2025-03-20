"use server";

import { createAccountSchema } from "@/lib/zod-schemas";

export async function createAccount(_: any, formData: FormData) {
  const data = {
    memberName: formData.get("memberName"),
    memberNickName: formData.get("memberNickName"),
    memberEmail: formData.get("memberEmail"),
    memberPassword: formData.get("memberPassword"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const result = createAccountSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  }

  // fetch

  // fetch response
  // {
  //   "id": 1,
  //   "memberName": "yeop",
  //   "memberEmail": "tmdduqflfl@naver.com",
  //   "memberPassword": "11112222",
  //   "memberNickname": "yeop"
  // }
}
