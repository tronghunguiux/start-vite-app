/* eslint-disable @typescript-eslint/no-require-imports */

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };
// export default nextConfig;

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",         // destination directory for the PWA files
  disable: process.env.NODE_ENV === "development",        // disable PWA in the development environment
  register: true,         // register the PWA service worker
  skipWaiting: true,      // skip waiting for service worker activation
});

module.exports = withPWA({
  // Your Next.js config
});