"use server";

import { loginSchmea } from "@/lib/zod-schemas";

export async function login(_: any, formData: FormData) {
  await new Promise((r) => setTimeout(r, 4000));
  const data = {
    id: formData.get("id"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = loginSchmea.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  }

  // fetch
}
