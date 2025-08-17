/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
                source: '/',
                destination: '/filmes',
                permanent: true
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"image.tmdb.org",
                port:"",
                pathname: "/t/p/**"
            }
        ]
    }
};

export default nextConfig;
