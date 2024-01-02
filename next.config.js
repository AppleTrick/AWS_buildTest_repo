/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // output: "standalone",
  trailingSlash: true,
  generateBuildId: () => "appletrick-develop-project",
  // 아래 주소들만 out 폴더에 만들어주는 것 => getServerSideProps 있는 페이지는 제외
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
