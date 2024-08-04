import { NextFederationPlugin } from '@module-federation/nextjs-mf';
import { FederatedTypesPlugin } from '@module-federation/typescript'

const federatedConfig = {
    name: "authen",
    filename: "static/chunks/remoteEntry.js",
    exposes: {
        './SignIn': './app/auth/signin/page.tsx',
        './SignUp': './app/auth/signup/page.tsx',
      },
    shared: {},
};

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    webpack(config, options) {
      config.plugins.push(
        new NextFederationPlugin(federatedConfig),
        new FederatedTypesPlugin({ federationConfig })
      );
      return config;
    },
};

export default nextConfig;
