/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  images:{
    domains:['s3.us-west-2.amazonaws.com'],
    formats: ["image/webp"],
  }
}
