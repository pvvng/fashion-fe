import { useEffect, useState } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface UseKakaoLoaderProps {
  appkey: string;
  libraries?: string[];
}

export function useKakaoLoader({
  appkey,
  libraries = [],
}: UseKakaoLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      setLoading(false);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&autoload=false&libraries=${libraries.join(
      ","
    )}`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => setLoading(false));
    };
    script.onerror = () => setError(new Error("Kakao Map SDK 로드 실패"));

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [appkey, libraries]);

  return [loading, error] as const;
}
