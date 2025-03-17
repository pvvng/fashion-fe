"use client";

import { useEffect, useState } from "react";
import { locationType } from "./use-geolcation";

interface SearchItem {
  position: { lat: number; lng: number };
  id: string;
  phone: string;
  address_name: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
}

// 검색 키워드
const SEARCH_KEYWORD = "의류판매";

/**
 *
 * @param location useGeoLocation 반환 타입(LocationType)
 *
 * @returns map : 카카오 맵 객체 저장 상태
 * @returns createMap : 카카오 맵 생성 함수
 * @returns search : 검색 결과
 * @returns message : 결과 메시지
 */
export default function useSearchPlace(location: locationType) {
  const [search, setSearch] = useState<SearchItem[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  const createMap = (newMap: kakao.maps.Map) => {
    setMap(newMap);
  };

  useEffect(() => {
    if (!map) return;
    const places = new kakao.maps.services.Places();

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
          setMessage("검색 결과가 존재하지 않습니다.");
        } else if (status === kakao.maps.services.Status.ERROR) {
          setMessage("검색 결과 중 오류가 발생했습니다.");
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
    places.keywordSearch(SEARCH_KEYWORD, searchPlacesCB, userLocation);
  }, [map]);

  return { map, createMap, search, message };
}
