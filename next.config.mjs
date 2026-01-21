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
            {
                protocol: 'https',
                hostname: 'd1s24u4ln0wd0i.cloudfront.net',
            },
            {
                protocol: 'https',
                hostname: 'club-cdn.pharmeasy.in',
            },
            {
                protocol: 'https',
                hostname: 'd22gqcf6g8w6wb.cloudfront.net',
            },
            {
                protocol: 'https',
                hostname: 'cms-contents.pharmeasy.in',
            },
        ],
    },
};

export default nextConfig;
