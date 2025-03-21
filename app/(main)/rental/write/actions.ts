"use server";

import { uploadRentalSchema } from "@/lib/zod-schemas";

export async function uploadRental(_: any, formData: FormData) {
  const data = {
    photo: formData.get("photo"),
    title: formData.get("title"),
    price: formData.get("price"),
    content: formData.get("content"),
  };

  const result = uploadRentalSchema.safeParse(data);

  if (!result.success) {
    return result.error.flatten();
  }

  // data fetch
  console.log(result.data);
}
