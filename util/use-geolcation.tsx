import { useState, useEffect } from "react";

interface locationType {
  loaded: boolean;
  coordinates: { lat: number; lng: number };
  error?: { code: number; message: string };
}

/** 지도 위치 기본값 */
const SEOUL_CITY_HALL = {
  lat: 37.566826,
  lng: 126.9786567,
};

export default function useGeolocation() {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: SEOUL_CITY_HALL,
  });

  // 성공에 대한 로직
  const onSuccess = (location: {
    coords: { latitude: number; longitude: number };
  }) => {
    console.log("Success to load geolocation.");
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  // 에러에 대한 로직
  const onError = (error: { code: number; message: string }) => {
    console.log("Error loading geolocation : ", error.code);
    setLocation({
      loaded: true,
      coordinates: SEOUL_CITY_HALL,
      error,
    });
  };

  useEffect(() => {
    // navigator 객체 안에 geolocation이 없다면
    // 위치 정보가 없는 것.
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
}
