const production = process.env.NODE_ENV == 'production'

module.exports = {
  plugins: [
    require('postcss-import'),
    require('lost'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    production &&
      require('cssnano')({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }),
  ],
}
