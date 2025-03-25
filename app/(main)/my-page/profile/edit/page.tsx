"use client";

import FormInput from "@/components/input";
import FormTextArea from "@/components/textarea";
import FormButton from "@/components/button";
import useGeolocation from "@/util/use-geolcation";
import { useKakaoLoader } from "@/util/use-kakao-loader";
import useImageHandler from "@/util/use-image-handler";
import { useActionState, useEffect, useState } from "react";
import { PhotoIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { editProfile } from "./actions";
import useGetAddress from "@/util/use-get-address";
import {
  HEIGHT_MAX_VALUE,
  HEIGHT_MIN_VALUE,
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
  PROFILE_DESCRIPTION_MAX_LENGTH,
  PROFILE_DESCRIPTION_MIN_LENGTH,
  SHOES_SIZE_MAX_VALUE,
  SHOES_SIZE_MIN_VALUE,
  WEIGHT_MAX_VALUE,
  WEIGHT_MIN_VALUE,
} from "@/constants";

export default function Profile() {
  // 카카오맵 api 로더
  const kakaoMapResult = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JS_KEY!,
    libraries: ["services", "clusterer"],
  });
  // user geolocation 로드
  const location = useGeolocation();
  // 반환된 실제 주소
  const address = useGetAddress(kakaoMapResult, location);
  // CF Image handler hook
  const { preview, uploadUrl, imageId, onImageChange, createPhotoUrlForm } =
    useImageHandler();
  // interceptAction
  const uploadImageAction = async (_: any, formData: FormData) => {
    const result = await createPhotoUrlForm(formData, uploadUrl, imageId);

    if (!result.success) {
      alert(result.error);
      return;
    }

    if (location.loading || location.error) {
      alert("위치 인증이 완료되지 않았습니다.\n새로고침 후 다시 시도해주세요.");
      return;
    }

    const { lat, lng } = location.coordinates;

    result.data.set("lat", lat.toString());
    result.data.set("lng", lng.toString());

    // call form Action
    return editProfile(_, result.data);
  };

  const [state, action] = useActionState(uploadImageAction, null);

  return (
    <form action={action} className="min-h-screen p-5 flex flex-col gap-5">
      <label
        htmlFor="photo"
        className="border-3 border-dashed border-neutral-300 rounded-full size-52 mx-auto
        flex items-center justify-center text-neutral-300 cursor-pointer bg-center bg-cover"
        style={{ backgroundImage: `url(${preview ?? ""})` }}
      >
        {!preview && <PhotoIcon className="w-14" />}
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
        name="name"
        id="name"
        type="text"
        labelText="이름"
        defaultValue="김동우"
        disabled
      />
      <FormInput
        name="email"
        id="email"
        type="email"
        labelText="이메일"
        defaultValue="gdongu093@gmail.com"
        disabled
      />
      <FormInput
        name="memberNickname"
        id="memberNickname"
        type="text"
        placeholder="사용할 별명을 입력하세요."
        labelText="별명"
        defaultValue="pvvng"
        errors={state?.fieldErrors.memberNickname}
        min={NICKNAME_MIN_LENGTH}
        max={NICKNAME_MAX_LENGTH}
      />
      <FormInput
        name="height"
        id="height"
        type="number"
        labelText="키 (숫자만 입력)"
        placeholder="ex) 170"
        errors={state?.fieldErrors.height}
        min={HEIGHT_MIN_VALUE}
        max={HEIGHT_MAX_VALUE}
      />
      <FormInput
        name="weight"
        id="weight"
        type="number"
        labelText="몸무게 (숫자만 입력)"
        placeholder="ex) 65"
        errors={state?.fieldErrors.weight}
        min={WEIGHT_MIN_VALUE}
        max={WEIGHT_MAX_VALUE}
      />
      <FormInput
        name="shoesSize"
        id="shoesSize"
        type="number"
        labelText="신발 사이즈 (숫자만 입력)"
        placeholder="ex) 260"
        errors={state?.fieldErrors.shoesSize}
        min={SHOES_SIZE_MIN_VALUE}
        max={SHOES_SIZE_MAX_VALUE}
      />
      <FormTextArea
        id="description"
        name="description"
        labelText="자기소개"
        placeholder="자신에 대한 소개글을 작성해주세요."
        errors={state?.fieldErrors.description}
        minLength={PROFILE_DESCRIPTION_MIN_LENGTH}
        maxLength={PROFILE_DESCRIPTION_MAX_LENGTH}
      />
      <AddressCard address={address} />
      {address && <FormButton text="프로필 저장" />}
    </form>
  );
}

function AddressCard({ address }: { address: string | undefined }) {
  const refresh = () => window.location.reload();
  return (
    <div
      className="w-full h-36 mt-5 p-3 rounded-xl shadow-md text-center font-semibold relative overflow-hidden 
        flex flex-col gap-2 justify-center items-center ring ring-neutral-100"
    >
      {!address && (
        <div
          className="size-20 animate-ping delay-1000 bg-green-500 rounded-full 
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      )}
      <p>
        {address ? (
          <ShieldCheckIcon className="size-12 text-green-400" />
        ) : (
          "현재 위치를 확인하는 중..."
        )}
      </p>
      {address && (
        <>
          <p>{address}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            이 주소가 아닌가요?{" "}
            <span
              className="text-blue-600 hover:text-blue-500 transition-colors cursor-pointer"
              onClick={refresh}
            >
              새로고침
            </span>
          </p>
        </>
      )}
    </div>
  );
}
