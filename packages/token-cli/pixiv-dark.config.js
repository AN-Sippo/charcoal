// eslint-disable-next-line @typescript-eslint/no-var-requires
const { transformer } = require('./src/transformer')

/** @type { import('style-dictionary') } */
module.exports = {
  source: ['tokens/base.json', 'tokens/pixiv-dark.json'],
  transform: {
    'name/cti/kebab': {
      type: 'name',
      transformer: transformer,
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      prefix: 'charcoal',
      files: [
        {
          destination: '_variables_dark.css',
          format: 'css/variables',
        },
      ],
      options: {
        outputReferences: true,
      },
    },
  },
}
