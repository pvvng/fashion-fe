"use server";

import { profileSchema } from "@/lib/zod-schemas";

export async function editProfile(_: any, formData: FormData) {
  const data = {
    photo: formData.get("photo"),
    memberNickname: formData.get("memberNickname"),
    weight: formData.get("weight"),
    height: formData.get("height"),
    shoesSize: formData.get("shoesSize"),
    description: formData.get("description"),
    lat: formData.get("lat"),
    lng: formData.get("lng"),
  };

  const result = profileSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }

  console.log(result);
  // fetch
}
