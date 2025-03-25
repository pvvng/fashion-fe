import { useEffect, useState } from "react";

interface UseKakaoLoaderProps {
  appkey: string;
  libraries?: string[];
}

export interface KakaoLoaderResult {
  readonly loading: boolean;
  readonly error: Error | null;
}

export function useKakaoLoader({
  appkey,
  libraries = [],
}: UseKakaoLoaderProps): KakaoLoaderResult {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    // 이미 Kakao SDK가 로드되어 있으면 로딩 완료
    if (window.kakao && window.kakao.maps) {
      setLoading(false);
      return;
    }

    // 중복 추가 방지: 기존 script 태그가 있는지 확인
    let script = document.querySelector(
      `script[src*="dapi.kakao.com"]`
    ) as HTMLScriptElement;

    if (!script) {
      script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&autoload=false&libraries=${libraries.join(
        ","
      )}`;
      script.async = true;
      document.head.appendChild(script);
    }

    const timeoutId = setTimeout(() => {
      if (attempts < 3) {
        setAttempts((prev) => prev + 1);
      } else {
        setLoading(false);
        setError(new Error("Kakao Map SDK 로드 실패"));
        alert("Kakao map 로드에 실패했습니다.\n새로고침 후 다시 시도해주세요.");
        console.log("Error loading Kakao Map SDK");
      }
    }, 20000); // 20초 후에 요청을 중지하도록 설정

    const loadMapSdk = () => {
      window.kakao.maps.load(() => {
        setLoading(false);
        clearTimeout(timeoutId); // 성공적으로 로드되면 타이머 해제
        console.log("Success to load Kakao Map SDK");
      });
    };

    const handleError = () => {
      if (attempts < 3) {
        setAttempts((prev) => prev + 1);
      } else {
        clearTimeout(timeoutId);
        setLoading(false);
        setError(new Error("Kakao Map SDK 로드 실패"));
        alert("Kakao map 로드에 실패했습니다.\n새로고침 후 다시 시도해주세요.");
        console.log("Error loading Kakao Map SDK");
      }
    };

    script.onload = loadMapSdk;
    script.onerror = handleError;

    return () => {
      // 클린업 시 타이머만 정리 (script는 그대로 둠)
      clearTimeout(timeoutId);
    };
  }, [attempts]);

  return { loading, error } as const;
}
