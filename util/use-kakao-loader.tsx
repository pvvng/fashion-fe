import { useEffect, useState } from "react";

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
  const [attempts, setAttempts] = useState(0);

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

    const timeoutId = setTimeout(() => {
      if (attempts < 3) {
        setAttempts((prevAttempts) => prevAttempts + 1);
        setLoading(false);
        setError(new Error("Kakao Map SDK 로드 실패"));
        return;
      }
    }, 20000); // 20초 후에 요청을 중지하도록 설정

    const loadMapSdk = () => {
      window.kakao.maps.load(() => {
        setLoading(false);
        clearTimeout(timeoutId); // 성공적으로 로드되면 타이머 해제
      });
    };

    const handleError = () => {
      setAttempts((prevAttempts) => prevAttempts + 1);

      // 3회 시도
      if (attempts > 3) {
        clearTimeout(timeoutId); // 에러 발생 후에도 타이머 해제
        setLoading(false);
        setError(new Error("Kakao Map SDK 로드 실패"));
        return;
      }
    };

    script.onload = loadMapSdk;
    script.onerror = handleError;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      clearTimeout(timeoutId); // 클린업
    };
  }, []);

  return [loading, error] as const;
}
