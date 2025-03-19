"use client";

import useGeolocation from "@/util/use-geolcation";
import { useKakaoLoader } from "@/util/use-kakao-loader";
import MapWrapper from "./map-wrapper";
import Map from "./map";
import Marker from "./marker";
import { useState } from "react";
import { MapLoading } from "@/app/(main)/rental/loading";

export default function RentalMap() {
  // kakao map sdk 로드
  const kakaoMapResult = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JS_KEY!,
    libraries: ["services", "clusterer"],
  });
  // user geolocation 로드
  const location = useGeolocation();

  const [map, setMap] = useState<kakao.maps.Map | undefined>(undefined);
  const createMap = (newMap: kakao.maps.Map) => {
    setMap(newMap);
  };

  return (
    <MapWrapper
      kakaoMapResult={kakaoMapResult}
      location={location}
      fallback={<MapLoading />}
    >
      <Map
        center={location.coordinates}
        className="aspect-video rounded-2xl"
        onCreate={createMap}
      >
        <Marker position={location.coordinates} map={map} />
      </Map>
    </MapWrapper>
  );
}
