var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');

// Concat CSS
gulp.task('concatCSS', function() {
    gulp.src([
            'src/css/style.css',
            'src/css/print.css'
        ])
        .pipe(concat('app.css'))
        .pipe(gulp.dest('dist/css'));
});

// Minify CSS
gulp.task('minifyCSS', function() {
    gulp.src("dist/css/app.css")
        .pipe(minifyCSS())
        .pipe(rename('app.min.css'))
        .pipe(gulp.dest('dist/css'));
});

// Minify JS files used in index.
gulp.task('minifyJS', function() {
    gulp.src("src/js/perfmatters.js")
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('dist/js'));
});

// Minify HTML
gulp.task('minifyHTML', function() {
    gulp.src("src/index.html")
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['concatCSS', 'minifyCSS', 'minifyJS', 'minifyHTML']);
