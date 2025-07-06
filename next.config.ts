import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Advertencia: Esto permite que las construcciones de producción se completen
    // exitosamente incluso si tu proyecto tiene errores de ESLint.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Advertencia: Esto permite que las construcciones de producción se completen
    // exitosamente incluso si tu proyecto tiene errores de TypeScript.
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: { exclude: ["error"] },
  },
};

export default nextConfig;
