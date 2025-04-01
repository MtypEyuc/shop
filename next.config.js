/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true, // ✅ App Router 활성화
    },
};

module.exports = {
    experimental: {
        appDir: true,
    },
};
