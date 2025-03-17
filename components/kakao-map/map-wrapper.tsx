import { locationType } from "@/util/use-geolcation";
import { KakaoLoaderResult } from "@/util/use-kakao-loader";

interface MapWrapperProps {
  location: locationType;
  kakaoMapResult: KakaoLoaderResult;
  children: Readonly<React.ReactNode>;
}

export default function MapWrapper({
  location,
  kakaoMapResult,
  children,
}: MapWrapperProps) {
  if (kakaoMapResult.loading || location.loading) {
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

  if (kakaoMapResult.error || location.error) {
    return (
      <div className="aspect-square flex flex-col justify-center items-center border border-neutral-200 rounded-2xl">
        <p className="text-sm">지도를 불러오는 중 에러가 발생했습니다.</p>
      </div>
    );
  }

  return children;
}
