/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dvbozetul",
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: "pk.eyJ1IjoibHkteW91c3NlZiIsImEiOiJjbG1xdXl5anIwMWdjMnZtdWpiazkwc2I3In0.-OX32vVO5JfTx5FqHc8kjQ",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
