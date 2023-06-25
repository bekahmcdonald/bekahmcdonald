/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  sassOptions: {
    additionalData: `@import "${path.resolve(
      __dirname,
      "src/assets/styles/mixins.scss"
    )}";`,
  },
};

console.log(__dirname);

module.exports = nextConfig;
