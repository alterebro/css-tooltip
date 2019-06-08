// const gulp = require('gulp');
const { src, dest, parallel, watch } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');

sass.compiler = require('node-sass');

function postCSS() {
    return src('./src/*.scss')
        .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(postcss([
            require('autoprefixer'),
        ]))
        .pipe(dest('./dist'));
}
function postCSSmin() {
    return src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            require('autoprefixer'),
            require('cssnano')
        ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist'));
}

exports.build = parallel(postCSS, postCSSmin);
exports.watch = function() {
    watch('./src/*.scss', parallel(postCSS, postCSSmin));
}
