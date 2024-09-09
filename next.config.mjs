import withBundleAnalyzer from '@next/bundle-analyzer';

const config = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  basePath: '',
  reactStrictMode: true,
});

export default config;
