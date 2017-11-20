// Karma configuration
// Generated on Mon Nov 20 2017 22:06:23 GMT+0800 (中国标准时间)
const webpackConfig = require('../webpack.prod.conf')

module.exports = function (config) {
  config.set({
    // 浏览器
    browsers: ['PhantomJS'],
    // 测试框架
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    // 测试报告
    reporters: ['spec', 'coverage'],
    // 测试入口文件
    files:'test/unit/specs/*.spec.js',
    // 预处理器 karma-webpack
    preprocessors: {
      'test/unit/specs/*.spec.js': ['webpack','sourcemap']
    },
    // Webpack配置
    webpackConfig: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules | bower_components)/,
            loader: 'babel-loader',
          },
          {
            test :/\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },
      vue: {
        loaders: {
          js: 'babel-loader'
        }
      },
      babel: {
        presents: ['es2015']
      },
    },
    // Webpack中间件
    webpackMiddleware: {
      noInfo: true
    },
    // 测试覆盖率报告
    // https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
