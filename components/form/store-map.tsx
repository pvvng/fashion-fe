"use client";

import useGeolocation from "@/util/use-geolcation";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";

interface SearchItem {
  position: { lat: number; lng: number };
  id: string;
  phone: string;
  address_name: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
}

export default function StoreMap() {
  // kakao map sdk 로드
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JS_KEY!,
    libraries: ["services", "clusterer"],
  });

  const [search, setSearch] = useState<SearchItem[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | undefined>(undefined);

  const location = useGeolocation();

  useEffect(() => {
    // map이 undfiend인 상황에선 실행하지 않고 반환
    // 위 상황은 geolocation 혹은 kakao-map-sdk가 로딩중일때
    if (!map) return;
    const places = new kakao.maps.services.Places();

    // 검색 키워드
    const searchKeyword = "의류판매";

    // keywordSearch 콜백
    const searchPlacesCB = async (
      data: kakao.maps.services.PlacesSearchResult,
      status: kakao.maps.services.Status,
      _pagination: kakao.maps.Pagination
    ) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        // 검색 결과 데이터 추가
        for (let i = 0; i < data.length; i++) {
          const { x, y, ...rest } = data[i];
          const position = {
            lat: Number(y),
            lng: Number(x),
          };
          markers.push({
            position,
            ...rest,
          });
          bounds.extend(new kakao.maps.LatLng(Number(y), Number(x)));
        }
        setSearch(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      } else {
        if (status === kakao.maps.services.Status.ZERO_RESULT) {
          return alert("검색 결과가 존재하지 않습니다.");
        } else if (status === kakao.maps.services.Status.ERROR) {
          return alert("검색 결과 중 오류가 발생했습니다.");
        }
      }
    };

    // 검색 기준이 될 사용자 location
    const userLocation = {
      location: new kakao.maps.LatLng(
        location.coordinates.lat,
        location.coordinates.lng
      ),
    };

    // 키워드로 검색
    places.keywordSearch(searchKeyword, searchPlacesCB, userLocation);
  }, [map]);

  if (loading || !location.loaded) {
    return (
      <div className="animate-pulse">
        <div className="aspect-square bg-neutral-400 rounded-2xl" />
        <div className="flex flex-col gap-5 pt-5">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <div className="bg-neutral-400 w-20 h-5 rounded-md" />
                <div className="bg-neutral-400 w-40 h-5 rounded-md" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-neutral-400 w-40 h-5 rounded-md" />
                <div className="bg-neutral-400 w-24 h-5 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || location.error) {
    return (
      <div className="aspect-square flex flex-col justify-center items-center border border-neutral-200 rounded-2xl">
        <p className="text-sm">지도를 불러오는 중 에러가 발생했습니다.</p>
      </div>
    );
  }

  return (
    <>
      <Map
        center={location.coordinates}
        className="aspect-square rounded-2xl"
        level={3}
        onCreate={(newMap) => setMap(newMap)}
      >
        {search.map((item) => (
          <CustomOverlayMap key={item.id} position={item.position}>
            <div className="py-1 px-2 text-white rounded-md shadow font-semibold text-sm bg-blue-600 flex gap-1 items-center">
              <BuildingStorefrontIcon className="size-4" />
              {item.place_name}
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-10 border-t-blue-600"></div>
          </CustomOverlayMap>
        ))}
      </Map>
      <div className="flex flex-col gap-5 py-5">
        {search.map((item) => (
          <div key={item.id} id={item.id} className="flex flex-col gap-2">
            <div>
              <Link
                href={item.place_url}
                className="font-semibold text-xl text-blue-600 hover:text-blue-500 transition-colors"
                target="_blank"
              >
                {item.place_name}
              </Link>
              {item.phone && (
                <p className="text-sm text-neutral-400">{item.phone}</p>
              )}
            </div>
            <div>
              <p className="text-sm">{item.address_name}</p>
              <p className="text-sm">{item.road_address_name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
