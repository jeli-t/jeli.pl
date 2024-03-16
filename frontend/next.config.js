/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
}

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

module.exports = withNextIntl(nextConfig);
