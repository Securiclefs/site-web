/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/google59be6c17e45ff582.html', // Remplacez "googleXXXXX.html" par le nom réel de votre fichier de confirmation de Google
        destination: '/google59be6c17e45ff582.html', // Remplacez "googleXXXXX.html" par le nom réel de votre fichier de confirmation de Google
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.csv$/,
      use: [
        {
          loader: "csv-loader",
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
