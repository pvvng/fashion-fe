"use client";

import FormInput from "@/components/input";
import useGeolocation from "@/util/use-geolcation";
import { useKakaoLoader } from "@/util/use-kakao-loader";
import { useState } from "react";
import Image from "next/image";

export default function Profile() {
  const kakaoMapResult = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JS_KEY!,
    libraries: ["services", "clusterer"],
  });

  // user geolocation 로드
  const location = useGeolocation();

  const [address, setAddress] = useState<string | undefined>(undefined);

  const getAddress = () => {
    if (kakaoMapResult.loading || location.loading) return;
    if (kakaoMapResult.error || location.error) return;

    const geocoder = new kakao.maps.services.Geocoder();

    const displayCenterInfo = (
      result: Array<kakao.maps.services.RegionCode>,
      status: kakao.maps.services.Status
    ) => {
      if (status === kakao.maps.services.Status.OK) {
        const addressName = result.find(
          (v) => v.region_type === "H"
        )?.address_name;
        setAddress(addressName);
      }
    };

    const { lat, lng } = location.coordinates;
    geocoder.coord2RegionCode(lng, lat, displayCenterInfo);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="overflow-hidden size-52 rounded-full relative mx-auto">
        <Image
          src="/test-img4.jpg"
          alt="user"
          className="object-cover"
          sizes="208px"
          fill
          priority
        />
      </div>
      <div className="mt-5 flex flex-col gap-5">
        <FormInput
          name=""
          id="name"
          type="text"
          placeholder=""
          labelText="이름"
          defaultValue="김동우"
          disabled
        />
        <FormInput
          name=""
          id="nickname"
          type="text"
          placeholder=""
          labelText="별명"
          defaultValue="pvvng"
        />
        <FormInput
          name=""
          id="email"
          type="email"
          placeholder=""
          labelText="이메일"
          defaultValue="gdongu093@gmail.com"
          disabled
        />
        <FormInput
          name=""
          id="name"
          type="text"
          placeholder=""
          labelText="이름"
          defaultValue="김동우"
          disabled
        />
      </div>
      <div
        className="mt-5 p-5 h-24 rounded-xl shadow-md text-center font-semibold relative overflow-hidden flex justify-center items-center"
        onClick={getAddress}
      >
        <div className="size-24 animate-ping duration-1000 bg-green-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-1" />
        {address ? address : "클릭해서 위치 인증하기"}
      </div>
    </div>
  );
}
