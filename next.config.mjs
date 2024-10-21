/** @type {import('next').NextConfig} */
const nextConfig = {
  onDemandEntries: {
    // Setting to clear the cache if the page is not used for a certain period of time during development to reduce cache
    maxInactiveAge: 25 * 1000, // 25 seconds
  },
};

export default nextConfig;
