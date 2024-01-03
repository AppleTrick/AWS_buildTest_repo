/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  generateBuildId: () => "appletrick-develop-project",
  // output: "export",
  // exportPathMap: () => ({
  //   "/": { page: "/" },
  //   "/boards": { page: "/boards" },
  //   "/404": { page: "/404" },
  // }),
};

module.exports = nextConfig;
