module.exports = wallaby => ({
  files: [{ pattern: 'src/**/*.js', load: false }, '!src/**/__tests__/**/*.js'],

  tests: ['src/**/__tests__/**/*'],

  env: {
    type: 'node',
  },

  compilers: {
    '**/*.js': wallaby.compilers.babel({}),
  },

  debug: true,
});
