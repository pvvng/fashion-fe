"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import FormTextArea from "@/components/textarea";
import ImageInput from "@/components/image-input";
import useImageHandler from "@/util/use-image-handler";
import { useActionState } from "react";
import {
  POST_CONTENT_MAX_LENGTH,
  POST_CONTENT_MIN_LENGTH,
  POST_TITLE_MAX_LENGTH,
  POST_TITLE_MIN_LENGTH,
} from "@/constants";
import { postSchema } from "@/lib/zod-schemas";
import useFormSubmitHandler from "@/util/use-form-submit-handler";

export default function RentalWrite() {
  const { preview, uploadUrl, imageId, onImageChange, createPhotoUrlForm } =
    useImageHandler();

  const uploadAction = async (_: any, formData: FormData) => {
    const formResult = await createPhotoUrlForm(formData, uploadUrl, imageId);

    if (!formResult.success) {
      alert(formResult.error);
      return;
    }

    const data = {
      photo: formResult.data.get("photo"),
      title: formResult.data.get("title"),
      content: formResult.data.get("content"),
    };

    // zod parse
    const parseResult = postSchema.safeParse(data);

    if (!parseResult.success) {
      return parseResult.error.flatten();
    }

    // fetch to BE
    console.log(parseResult.data);
    // BE에서 검증하지 않는다면 서버에서 검증 후 BE로 전송
    // return uploadPost(_, formResult.data);
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
