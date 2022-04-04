const sass = require('gulp-sass');

function generateCSS(cb) {
    src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/stylesheets'));
    cb();
}

exports.css = generateCSS;


function copy(cb) {
    src('routes/*.js')
        .pipe(dest('copies'));
    cb();
}

exports.copy = copy;


function mytask(callback) {
   // task body
   callback();
}

exports.mytask = mytask;
