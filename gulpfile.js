'use strict'; // eslint-disable-line
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var nsp = require('gulp-nsp');
var babel = require('gulp-babel');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register');

gulp.task('static', function () {
  return gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', function (cb) {
  nsp('package.json', cb);
});

gulp.task('test', function () {
  return gulp.src('test/**/*.js')
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('babel', function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  watch(['lib/**/*.js', 'test/**/*.js'], batch(function (events, done) {
    gulp.start('test', done);
  }));
});

gulp.task('prepublish', ['nsp', 'babel']);
gulp.task('default', ['static', 'test']);
