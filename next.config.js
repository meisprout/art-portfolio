/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  images:{
    //domains:['s3.us-west-2.amazonaws.com','loafsprout.vercel.app'],
    //formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-west-2.amazonaws.com',
      },
    ],
  },
}
