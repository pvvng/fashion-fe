"use client";

import { useEffect, useState } from "react";
import { locationType } from "./use-geolcation";
import { KakaoLoaderResult } from "./use-kakao-loader";

export default function useGetAddress(
  kakaoMapResult: KakaoLoaderResult,
  location: locationType
) {
  const [address, setAddress] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (kakaoMapResult.loading || location.loading) return;
    if (kakaoMapResult.error || location.error) return;

    const geocoder = new kakao.maps.services.Geocoder();
    const { lat, lng } = location.coordinates;

    geocoder.coord2RegionCode(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const addressName = result.find(
          (v) => v.region_type === "H"
        )?.address_name;
        setAddress(addressName);
      }
    });
  }, [kakaoMapResult.loading, location.loading]);

  return address;
}
