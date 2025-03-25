import { getUploadUrl } from "@/lib/cloudflare";
import { useState } from "react";

type PhotoUrlFnReturnType =
  | { success: false; error: string }
  | { success: true; data: string };

const MAX_FILE_SIZE_MB = 3;

/** CF 이미지 업로드 커스텀 훅 */
export default function useImageHandler() {
  const [uploadUrl, setUploadUrl] = useState<string | undefined>(undefined);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [imageId, setImageId] = useState<string | undefined>(undefined);
  const [prevPhotoUrl, setprevPhotoUrl] = useState<string | undefined>(
    undefined
  );
  const [isUploading, setIsUploading] = useState(false);

  /** 이미지 변경 핸들러 함수 */
  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 중복 요청 방지
    if (isUploading) {
      return alert("이미지 업로드 중 입니다.");
    }

    // 이전에 정의된 photoURL 초기화
    setprevPhotoUrl(undefined);
    // 로딩 플래그 true
    setIsUploading(true);

    try {
      const files = e.target.files;

      if (!files || files.length == 0) {
        // 취소버튼 클릭하면 초기화 시켜야함
        setPreview("");
        return;
      }

      const file = files[0];

      if (!file.type.startsWith("image")) {
        return alert("이미지 파일만 업로드 할 수 있습니다.");
      }

      if (MAX_FILE_SIZE_MB < file.size / (1024 * 1024)) {
        return alert(
          `최대 ${MAX_FILE_SIZE_MB}MB의 이미지만 업로드 할 수 있습니다.`
        );
      }

      // 내 브라우저에서만 사용가능한 url 생성하기
      // 브라우저 메모리에 파일 임시저장되는거 사용하는 것
      const url = URL.createObjectURL(file);
      // preview Url blob link
      setPreview(url);

      // cf upload url
      const { success, result } = await getUploadUrl();

      if (!success) {
        return alert(
          "이미지 확인에 실패했습니다.\n문제가 지속될 경우 다른 네트워크 환경에서 시도해주세요."
        );
      }

      const { id, uploadURL } = result;
      setUploadUrl(uploadURL);
      setImageId(id);
    } finally {
      setIsUploading(false);
    }
  };

  /** photo form을 File에서 CF 이미지 url 문자열로 변경한 Form 반환하는 함수 */
  const createPhotoUrlForm = async (
    formData: FormData,
    uploadUrl: string | undefined,
    imageId: string | undefined
  ): Promise<PhotoUrlFnReturnType> => {
    const imageFile = formData.get("photo");

    // file, uploadUrl, imageId 중 하나라도 정의되지 않았다면 return
    if (!imageFile || !uploadUrl || !imageId) {
      return {
        success: false,
        error: "이미지를 확인하지 못했습니다. 새로고침 후 다시 시도해주세요.",
      };
    }

    const cloudflareForm = new FormData();
    cloudflareForm.append("file", imageFile);

    // 이미 사용된 uploadurl 사용시 중첩 에러(309)가 발생하는듯
    const response = await fetch(uploadUrl, {
      method: "post",
      body: cloudflareForm,
    });

    if (response.status !== 200) {
      return {
        success: false,
        error: "이미지 업로드에 실패했습니다. 새로고침 후 다시 시도해주세요.",
      };
    }

    // replace photo in formdata
    const photoUrl = `https://imagedelivery.net/${process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH}/${imageId}`;
    // photoUrl 저장
    setprevPhotoUrl(photoUrl);

    return {
      success: true,
      data: photoUrl,
    };
  };

  return {
    preview,
    uploadUrl,
    imageId,
    prevPhotoUrl,
    isUploading,
    onImageChange,
    createPhotoUrlForm,
  };
}
