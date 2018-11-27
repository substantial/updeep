'use strict'

/* eslint strict:0, no-var:0, func-names:0 */
var path = require('path')
var gulp = require('gulp')

var babel = require('gulp-babel')
var eslint = require('gulp-eslint')
var mocha = require('gulp-mocha')
var rimraf = require('rimraf')
var webpack = require('webpack-stream')

var KarmaServer = require('karma').Server

var createWebpackConfig = require('./createWebpackConfig.js')

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register')

gulp.task('clean', cb => {
  rimraf('./dist', cb)
})

gulp.task('static', () =>
  gulp
    .src(['*.js', 'lib/**/*.js', 'test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
)

gulp.task('test', ['test:karma', 'test:node'])

gulp.task('test:node', () =>
  gulp.src('test/**/*.js').pipe(mocha({ reporter: 'dot' }))
)

gulp.task('test:karma', done => {
  new KarmaServer(
    {
      configFile: path.join(__dirname, 'karma.conf.js'),
      singleRun: true,
    },
    done
  ).start()
})

gulp.task('babel', () =>
  gulp
    .src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
)

gulp.task('watch', () => {
  gulp.start(['test:node'])
  gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['test:node'])
  new KarmaServer({
    configFile: path.join(__dirname, 'karma.conf.js'),
  }).start()
})

gulp.task('webpack', ['webpack:standalone', 'webpack:standalone:min'])

gulp.task('webpack:standalone', () => {
  var config = createWebpackConfig({ filename: 'updeep-standalone.js' })

  return gulp
    .src('lib/index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/umd/'))
})

gulp.task('webpack:standalone:min', () => {
  var config = createWebpackConfig({
    filename: 'updeep-standalone.min.js',
    minify: true,
    env: 'production',
  })

  return gulp
    .src('lib/index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/umd/'))
})

gulp.task('build', ['babel', 'webpack'])

gulp.task('build:clean', ['clean'], done => {
  gulp.start('build', done)
})

gulp.task('prepublish', ['build:clean'])
gulp.task('default', ['static', 'test'])
