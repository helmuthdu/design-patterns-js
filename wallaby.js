module.exports = wallaby => ({
  files: [
    { pattern: './src/**/*.js', load: false }
  ],

  tests: [
    './test/**/*.spec.js'
  ],

  env: {
    type: 'node'
  },

  compilers: {
    '**/*.js': wallaby.compilers.babel({})
  },

  debug: true
})
