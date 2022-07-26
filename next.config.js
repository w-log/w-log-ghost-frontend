/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        images: {
            unoptimized: true,
        },
    },
    reactStrictMode: true,
    images: {
        loader: 'custom',
        domains: [
            'www.prog-ocean.org',
            'static-w-log.s3.ap-northeast-2.amazonaws.com',
        ],
    },
};

module.exports = nextConfig;
