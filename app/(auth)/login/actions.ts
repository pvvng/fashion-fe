"use server";

import { loginSchmea } from "@/lib/zod-schemas";

export async function login(_: any, formData: FormData) {
  const data = {
    memberEmail: formData.get("memberEmail"),
    memberPassword: formData.get("memberPassword"),
  };

  const result = loginSchmea.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  }

  // fetch

  // fetch response
  // {
  //   "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3NDIzODEyNzQsImlhdCI6MTc0MjM3OTQ3NCwianRpIjoiNzhiYTQwNjUtZWFjYi00ZDhlLWE0YzItNmFhYmNmYTk0NzIyIiwibWVtYmVySWQiOjF9.5hJSXAfKji6aJp89q9K7i_jNl7gVWLDM8VhfywjaPuw",
  //   "memberId": 1,
  //   "memberName": "yeop",
  //   "memberNickName": "yeop"
  // }
}
