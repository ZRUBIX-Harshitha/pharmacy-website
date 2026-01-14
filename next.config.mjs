/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.pharmeasy.in',
            },
            {
                protocol: 'https',
                hostname: 'retention-images.pharmeasy.in',
            },
        ],
    },
};

export default nextConfig;
