import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 빌드 시 ESLint 오류 무시
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
