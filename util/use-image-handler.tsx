import { getUploadUrl } from "@/lib/get-upload-url";
import { useState } from "react";

const MAX_FILE_SIZE_MB = 3;

export default function useImageHandler() {
  const [uploadUrl, setUploadUrl] = useState("");
  const [preview, setPreview] = useState("");
  const [imageId, setImageId] = useState("");

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

    // cf upload url
    const { success, result } = await getUploadUrl();

    if (success) {
      const { id, uploadURL } = result;
      setUploadUrl(uploadURL);
      setImageId(id);
    }
  };

  const getCloudFlareImageUrl = async (formData: FormData) => {
    // upload image
    const file = formData.get("photo");

    // file, uploadUrl, imageId 중 하나라도 정의되지 않았다면 return
    if (!(file && uploadUrl && imageId)) {
      return {
        error: true,
        message: "이미지를 확인하지 못했습니다. 새로고침 후 다시 시도해주세요.",
      };
    }

    const cloudflareForm = new FormData();
    cloudflareForm.append("file", file);

    const response = await fetch(uploadUrl, {
      method: "post",
      body: cloudflareForm,
    });

    if (response.status !== 200) {
      return {
        error: true,
        message: "이미지 업로드에 실패했습니다. 새로고침 후 다시 시도해주세요.",
      };
    }

    // replace photo in formdata
    const photoUrl = `https://imagedelivery.net/MR01-6_39Z4fkK0Q1BsXww/${imageId}`;
    formData.set("photo", photoUrl);

    // preview 초기화
    setPreview("");

    return {
      formData,
      error: false,
      message: "성공적으로 이미지를 등록했습니다.",
    };
  };

  return { preview, onImageChange, getCloudFlareImageUrl };
}
