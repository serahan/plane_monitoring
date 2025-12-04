import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: "export", // 정적 사이트로 export
    images: {
        unoptimized: true, // GitHub Pages는 이미지 최적화 미지원
    },
    basePath: "/plane_monitoring", // 레포지토리 이름으로 변경
    assetPrefix: "/plane_monitoring",
};

export default nextConfig;
