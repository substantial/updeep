'use strict'; /* eslint strict:0, no-var:0, func-names:0 */
var path = require('path');
var gulp = require('gulp');

var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var nsp = require('gulp-nsp');
var rimraf = require('rimraf');

var KarmaServer = require('karma').Server;

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register');

gulp.task('clean', function (cb) {
  rimraf('./dist', cb);
});

gulp.task('static', function () {
  return gulp.src(['*.js', 'lib/**/*.js', 'test/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', function (cb) {
  nsp({ package: path.join(__dirname, 'package.json') }, cb);
});

gulp.task('test', ['test:karma', 'test:node']);

gulp.task('test:node', function () {
  return gulp.src('test/**/*.js')
    .pipe(mocha({ reporter: 'dot' }));
});

gulp.task('test:karma', function (done) {
  new KarmaServer({
    configFile: path.join(__dirname, 'karma.conf.js'),
    singleRun: true,
  }, done).start();
});

gulp.task('babel', function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.start(['test:node']);
  gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['test:node']);
  new KarmaServer({
    configFile: path.join(__dirname, 'karma.conf.js'),
  }).start();
});

gulp.task('build', ['babel', 'webpack']);

gulp.task('build:clean', ['clean'], function (done) {
  gulp.start('build', done);
});

gulp.task('prepublish', ['nsp', 'build:clean']);
gulp.task('default', ['static', 'test']);
