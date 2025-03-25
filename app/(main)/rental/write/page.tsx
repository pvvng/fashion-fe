"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import FormTextArea from "@/components/textarea";
import ImageInput from "@/components/image-input";
import useImageHandler from "@/util/use-image-handler";
import useFormSubmitHandler from "@/util/use-form-submit-handler";
import { uploadRental } from "./actions";
import {
  POST_CONTENT_MAX_LENGTH,
  POST_CONTENT_MIN_LENGTH,
  POST_TITLE_MAX_LENGTH,
  POST_TITLE_MIN_LENGTH,
  RENTAL_MAX_VALUE,
  RENTAL_MIN_VALUE,
} from "@/constants";
import { useActionState } from "react";

export default function RentalWrite() {
  const { preview, uploadUrl, imageId, onImageChange, createPhotoUrlForm } =
    useImageHandler();

  const uploadAction = async (_: any, formData: FormData) => {
    const formResult = await createPhotoUrlForm(formData, uploadUrl, imageId);

    if (!formResult.success) {
      alert(formResult.error);
      return;
    }

    return uploadRental(_, formResult.data);
  };

  const [state, action] = useActionState(uploadAction, null);
  const handleSubmit = useFormSubmitHandler({ action });

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <ImageInput preview={preview} onImageChange={onImageChange} />
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
