// const gulp = require('gulp');
const { src, dest, parallel, watch } = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');


function postCSS() {
    return src('./src/*.css')
        .pipe(postcss([
            require('postcss-nested'),
            require('autoprefixer'),
        ]))
        .pipe(dest('./dist'));
}
function postCSSmin() {
    return src('./src/*.css')
        .pipe(postcss([
            require('postcss-nested'),
            require('autoprefixer'),
            require('cssnano')
        ]))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist'));
}

exports.build = parallel(postCSS, postCSSmin);
exports.watch = function() {
    watch('./src/*.css', parallel(postCSS, postCSSmin));
}
