const webpackConfig = require('./webpack.config');
delete webpackConfig.entry;

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'test/test.bundle.js',
    ],
    preprocessors: {
      'test/test.bundle.js': ['webpack', 'sourcemap'],
    },
    reporters: ['progress'],
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_WARN,
    browsers: ['PhantomJS'],
    autoWatch: false,
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },
  })
}
