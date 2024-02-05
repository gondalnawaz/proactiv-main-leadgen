// /** @type {import('next').NextConfig} */
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// const nextConfig = {
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
//   webpack: (config, { isServer }) => {
//     // Add the CopyWebpackPlugin configuration to copy the folder during build
//     // if (!isServer) {
//       config.plugins.push(
//         new CopyWebpackPlugin({
//           patterns: [
//             {
//               from: "emails",
//               to: "server/emails",
//             },
//           ],
//         })
//       );
//     // }
//     return config;
//   },
// };

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nextConfig = {
  // output: 'export',
  images: {
    domains: ['res.cloudinary.com', 'media.giphy.com'], // Add "media.giphy.com" to the domains array
  },
  webpack: (config, { isServer }) => {
    // Add the CopyWebpackPlugin configuration to copy the folder during build
    // if (!isServer) {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'emails',
            to: 'server/emails',
          },
        ],
      })
    );
    // }
    return config;
  },
};

module.exports = nextConfig;
