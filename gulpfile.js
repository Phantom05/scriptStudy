const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const htmlmin = require('gulp-htmlmin');
// const imgmin = require('gulp-imagemin');
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');
// const minify = require('gulp-minify');
// const jsminify = require('gulp-js-minify');
// const obf = require('gulp-obfuscate');

// css sprite;
// 커버리지에 ie 가 없으면 css 스프라이트 안써도 됨.

//sudo npm install --save-dev gulp-uglify gulp-clean-css gulp-htmlmin gulp-imagemin del

// src,dist 주소
let SRC = {
  HTML:"./public/src/**/*.html",
  SCSS:"./public/src/**/*.scss",
  JS:"./public/src/**/*.js",
  IMG:"",
};
let DIST ={
  HTML:"./public/dist/",
  CSS:"./public/dist/",
  JS:"./public/dist/",
  IMG:"",
};

gulp.task('htmlmin', function() {
  return gulp.src(SRC.HTML)
    .pipe(htmlmin())
    .pipe(gulp.dest(DIST.HTML));
});

gulp.task('babel', function() {
  return gulp.src(SRC.JS)
    .pipe(babel())
    // .pipe(jsminify())
    .pipe(gulp.dest(DIST.JS));
});

gulp.task('sass', function () {
  return gulp.src(SRC.SCSS)  // 입력 경로
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(DIST.CSS));  // 출력 경로
});

gulp.task('watch', () => {
  let watcher = {
      js: gulp.watch(SRC.JS, ['babel']),
      scss: gulp.watch(SRC.SCSS, ['sass']),
      html:gulp.watch(SRC.HTML,['htmlmin'])
  };
});

gulp.task('default', ['sass','htmlmin', 'babel', 'watch'], () => {
  console.log('Gulp is running');
});
