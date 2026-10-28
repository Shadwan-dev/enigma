// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true, // ✅ Ahora va aquí, no en experimental
};

export default nextConfig;