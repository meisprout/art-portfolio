/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  images:{
    domains:['https://notion.so',
    'https://s3.us-west-2.amazonaws.com/',
    'secure.notion-static.com'],
    formats: ["image/webp"],
  },
}
