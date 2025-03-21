"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import FormTextArea from "@/components/textarea";
import ImageInput from "@/components/image-input";
import useImageHandler from "@/util/use-image-handler";
import { uploadPost } from "./actions";
import { useActionState } from "react";
import {
  POST_CONTENT_MAX_LENGTH,
  POST_CONTENT_MIN_LENGTH,
  POST_TITLE_MAX_LENGTH,
  POST_TITLE_MIN_LENGTH,
} from "@/constants";

export default function RentalWrite() {
  const { preview, uploadUrl, imageId, onImageChange, createPhotoUrlForm } =
    useImageHandler();

  const uploadImageAction = async (_: any, formData: FormData) => {
    const result = await createPhotoUrlForm(formData, uploadUrl, imageId);

    if (!result.success) {
      alert(result.error);
      return;
    }
    // call uploadPost Action
    return uploadPost(_, result.data);
  };

  const [state, action] = useActionState(uploadImageAction, null);

  return (
    <div className="p-5">
      <form action={action} className="flex flex-col gap-5">
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
