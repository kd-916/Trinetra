/** @type {import('next').NextConfig} */
const nextConfig = {
  // Routes frontend calls to /api/ai/ straight to your FastAPI backend
  async rewrites() {
    return [
      {
        source: "/api/ai/:path*",
        destination: "http://127.0.0*",
      },
    ];
  },
  poweredByHeader: false, // Hides server runtime tech for security compliance
};

export default nextConfig;
