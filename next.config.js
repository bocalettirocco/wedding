module.exports = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options
    config.module.rules.push({
      test: /\.mp3$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    return config
  },
}
