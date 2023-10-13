/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const _nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.simplilearn.com',
        port: '',
        pathname: '/ice9/**',
      },
    ],
  },
};

module.exports = withVideos(_nextConfig);
