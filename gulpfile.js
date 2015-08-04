'use strict'; /* eslint strict:0, no-var:0, func-names:0 */
var path = require('path');
var gulp = require('gulp');

var babel = require('gulp-babel');
var batch = require('gulp-batch');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var nsp = require('gulp-nsp');
var rimraf = require('rimraf');
var webpack = require('webpack-stream');

var KarmaServer = require('karma').Server;

var createWebpackConfig = require('./createWebpackConfig.js');

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register');

gulp.task('clean', function(cb) {
  rimraf('./dist', cb);
});

gulp.task('static', function() {
  return gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', function(cb) {
  nsp('package.json', cb);
});

gulp.task('test', ['test:karma', 'test:node']);

gulp.task('test:node', function() {
  return gulp.src('test/**/*.js')
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('test:karma', function(done) {
  new KarmaServer({
    configFile: path.join(__dirname, 'karma.conf.js'),
    singleRun: true,
  }, done).start();
});

gulp.task('babel', function() {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(['lib/**/*.js', 'test/**/*.js'], batch(function(events, done) {
    gulp.start('test:node', done);
  }));
});

gulp.task('webpack', ['webpack:standalone', 'webpack:standalone:min']);

gulp.task('webpack:standalone', function() {
  var config = createWebpackConfig({ filename: 'updeep-standalone.js' });

  return gulp.src('lib/index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/umd/'));
});

gulp.task('webpack:standalone:min', function() {
  var config = createWebpackConfig({
    filename: 'updeep-standalone.min.js',
    minify: true,
  });

  return gulp.src('lib/index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/umd/'));
});

gulp.task('build', ['babel', 'webpack']);

gulp.task('build:clean', ['clean'], function(done) {
  gulp.start('build', done);
});

gulp.task('prepublish', ['nsp', 'build:clean']);
gulp.task('default', ['static', 'test']);
