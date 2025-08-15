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
    }
};

export default nextConfig;
