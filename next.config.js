/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    experimental: {
        serverActions: true
    },
    env: {
        HCAPTCHA_SITEKEY: process.env.HCAPTCHA_SITEKEY
    }
}

module.exports = nextConfig
