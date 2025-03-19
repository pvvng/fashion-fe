import { locationType } from "@/util/use-geolcation";
import { KakaoLoaderResult } from "@/util/use-kakao-loader";

interface MapWrapperProps {
  location: locationType;
  kakaoMapResult: KakaoLoaderResult;
  fallback?: Readonly<React.ReactNode> | string;
  children: Readonly<React.ReactNode>;
}

export default function MapWrapper({
  location,
  kakaoMapResult,
  fallback = null,
  children,
}: MapWrapperProps) {
  if (kakaoMapResult.loading || location.loading) {
    return fallback;
  }

  if (kakaoMapResult.error || location.error) {
    return (
      <div className="aspect-video flex flex-col justify-center items-center border border-neutral-200 rounded-2xl">
        <p className="text-sm">지도를 불러오는 중 에러가 발생했습니다.</p>
      </div>
    );
  }

  return children;
}
