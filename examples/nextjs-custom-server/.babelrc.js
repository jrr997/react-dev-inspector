// https://nextjs.org/docs/advanced-features/customizing-babel-config
module.exports = {
  presets: [
    'next/babel',
  ],

  plugins: [
    [
      // https://github.com/emotion-js/emotion/tree/main/packages/babel-plugin#options
      '@emotion/babel-plugin',
      {
        sourceMap: true,
        autoLabel: 'always',
        labelFormat: '[local]',
      },
    ],

    /**
     * react-dev-inspector plugin, options docs see:
     * https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
     */
    '@react-dev-inspector/babel-plugin',
  ],
}
