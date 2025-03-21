"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import FormTextArea from "@/components/textarea";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useActionState } from "react";
import { uploadRental } from "./actions";
import {
  POST_CONTENT_MAX_LENGTH,
  POST_CONTENT_MIN_LENGTH,
  POST_TITLE_MAX_LENGTH,
  POST_TITLE_MIN_LENGTH,
  RENTAL_MAX_VALUE,
  RENTAL_MIN_VALUE,
} from "@/constants";
import useImageHandler from "@/util/use-image-handler";

export default function RentalWrite() {
  const { preview, onImageChange, getCloudFlareImageUrl } = useImageHandler();

  const uploadImageAction = async (_: any, formData: FormData) => {
    const {
      formData: newFormData,
      error,
      message,
    } = await getCloudFlareImageUrl(formData);

    if (!newFormData || error) {
      alert(message);
      return;
    }

    // call uploadRental Action
    return uploadRental(_, newFormData);
  };

  const [state, action] = useActionState(uploadImageAction, null);

  return (
    <div className="p-5">
      <form action={action} className="flex flex-col gap-5">
        <label
          htmlFor="photo"
          className="border-2 border-neutral-300 rounded-xl border-dashed aspect-square 
          flex items-center justify-center text-neutral-300 cursor-pointer bg-center bg-cover"
          style={{ backgroundImage: `url(${preview})` }}
        >
          {preview === "" && <PhotoIcon className="w-20" />}
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          className="hidden"
          accept="image/*"
          onChange={onImageChange}
        />
        <FormInput
          id="title"
          name="title"
          type="text"
          placeholder="제목을 입력하세요"
          labelText="Title"
          required
          minLength={POST_TITLE_MIN_LENGTH}
          maxLength={POST_TITLE_MAX_LENGTH}
          errors={state?.fieldErrors.title}
        />
        <FormInput
          id="price"
          name="price"
          type="number"
          placeholder="가격을 입력하세요"
          labelText="Price"
          required
          min={RENTAL_MIN_VALUE}
          max={RENTAL_MAX_VALUE}
          errors={state?.fieldErrors.price}
        />
        <FormTextArea
          id="content"
          name="content"
          placeholder="내용을 입력하세요"
          labelText="Content"
          required
          minLength={POST_CONTENT_MIN_LENGTH}
          maxLength={POST_CONTENT_MAX_LENGTH}
          errors={state?.fieldErrors.content}
        />
        <FormButton text="작성 완료" />
      </form>
    </div>
  );
}
