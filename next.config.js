/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoibWFkamVkIiwiYSI6ImNsM2xuZDlmajAyaWIzYnBobm5tczZwdjMifQ.e2oipmXrBPo5GB-viD-b-Q",
  },
};

module.exports = nextConfig;
