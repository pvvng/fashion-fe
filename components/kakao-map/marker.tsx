import { useEffect } from "react";

interface LatLng {
  lat: number;
  lng: number;
}

interface MarkerProps {
  position: LatLng;
  map?: kakao.maps.Map;
}

export default function Marker({ position, map }: MarkerProps) {
  useEffect(() => {
    if (!map) return;
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(position.lat, position.lng),
    });

    marker.setMap(map);
  }, [position, map]);

  return null;
}
