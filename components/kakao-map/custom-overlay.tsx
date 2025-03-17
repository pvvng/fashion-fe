"use client";

import { useEffect, useRef } from "react";

interface LatLng {
  lat: number;
  lng: number;
}

interface CustomOverlayProps {
  position: LatLng;
  map?: kakao.maps.Map;
  children?: Readonly<React.ReactNode>;
}

export default function CustomOverlay({
  position,
  map,
  children,
}: CustomOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    if (!map) return;

    const overlay = new kakao.maps.CustomOverlay({
      position: new kakao.maps.LatLng(position.lat, position.lng),
      content: overlayRef.current,
    });

    overlay.setMap(map);

    return () => overlay.setMap(null); // 언마운트 시 제거
  }, [position, map]);

  return <div ref={overlayRef}>{children}</div>;
}
