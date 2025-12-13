/** @type {import('next').NextConfig} */
const repoBase = process.env.BASE_PATH?.trim() ?? "";
const normalizedBasePath = repoBase
    ? repoBase.startsWith("/")
        ? repoBase
        : `/${repoBase}`
    : "";

const nextConfig = {
    output: "export",
    trailingSlash: true,
    basePath: normalizedBasePath,
    assetPrefix: normalizedBasePath || undefined,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
