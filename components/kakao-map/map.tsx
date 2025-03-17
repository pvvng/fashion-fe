"use client";

import { useEffect, useRef } from "react";

interface LatLng {
  lat: number;
  lng: number;
}

interface MapProps {
  center: LatLng;
  className?: string;
  level?: number;
  onCreate?: ((map: kakao.maps.Map) => void) | undefined;
  children?: Readonly<React.ReactNode>;
}

export default function Map({
  center,
  className,
  level = 3,
  onCreate,
  children,
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mapRef.current;

    if (container) {
      const options = {
        center: new kakao.maps.LatLng(center.lat, center.lng),
        level: level,
      };

      const newMap = new window.kakao.maps.Map(mapRef.current, options);

      if (onCreate) {
        onCreate(newMap);
      }
    }
  }, [center]);

  return (
    <div ref={mapRef} className={className}>
      {children}
    </div>
  );
}
