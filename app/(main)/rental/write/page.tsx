"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import FormTextArea from "@/components/textarea";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MAX_FILE_SIZE_MB = 3;

export default function RentalWrite() {
  const [uploadUrl, setUploadUrl] = useState("");
  const [preview, setPreview] = useState("");
  const [imageFile, setFile] = useState<File | null>(null);

  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length == 0) {
      // 취소버튼 클릭하면 초기화 시켜야함
      setPreview("");
      return;
    }

    const file = files[0];

    if (!file.type.startsWith("image")) {
      alert("이미지 파일만 업로드 할 수 있습니다.");
      return;
    }

    if (MAX_FILE_SIZE_MB < file.size / (1024 * 1024)) {
      alert(`최대 ${MAX_FILE_SIZE_MB}MB의 이미지만 업로드 할 수 있습니다.`);
      return;
    }

    // 내 브라우저에서만 사용가능한 url 생성하기
    // 브라우저 메모리에 파일 임시저장되는거 사용하는거임
    const url = URL.createObjectURL(file);
    setPreview(url);
    // 파일 상태(state)에 저장
    setFile(file);
  };

  return (
    <div className="p-5">
      <form className="flex flex-col gap-5">
        <label
          htmlFor="photo"
          className="border-2 border-neutral-300 rounded-xl border-dashed aspect-square 
          flex items-center justify-center text-neutral-300 cursor-pointer bg-center bg-cover"
          style={{ backgroundImage: `url(${preview})` }}
        >
          {preview === "" && (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neural-400 text-sm"></div>
            </>
          )}
        </label>
        <input
          type="file"
          id="photo"
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
        />
        <FormInput
          id="price"
          name="price"
          type="number"
          placeholder="가격을 입력하세요"
          labelText="Price"
          required
          min={0}
        />
        <FormTextArea
          id="content"
          name="content"
          placeholder="내용을 입력하세요"
          labelText="Content"
          required
        />
        <FormButton text="작성 완료" />
      </form>
    </div>
  );
}
