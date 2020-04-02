module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
        loose: true,
        targets: {
          browsers: ['last 2 versions', 'IE >= 9'],
        },
        },
      ],
    ],
  }
}
