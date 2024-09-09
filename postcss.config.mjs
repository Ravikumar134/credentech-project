/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-import': {},
    'postcss-preset-env': {},
    cssnano: process.env.NODE_ENV === 'production' ? {} : false,
  },
};

export default config;
