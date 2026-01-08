/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // `appDir` is enabled by default in Next.js 13.5+
  // Move `metadata` out of `experimental` (it's a top-level config now)
  metadata: {
    metadataBase: new URL("https://www.netialap.com/"),
  },
  images: {
    domains: ["cdn.sanity.io", "avatars.githubusercontent.com", "this.png", "rap.png"],
  },
};