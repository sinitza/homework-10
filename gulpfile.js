var gulp         = require('gulp'),
    concat       = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    scss         = require('gulp-sass'),
    minifyCss    = require('gulp-minify-css'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    sourcemaps   = require('gulp-sourcemaps'),
    babel        = require('gulp-babel'),
    browserSync  = require('browser-sync'),
    less         = require('gulp-less'),
    util         = require('gulp-util');

gulp.task('default', ['clean'], function() {
    gulp.start('images', 'less', 'scripts', 'browserSync');
});

gulp.task('clean', function () {
    del(['less', 'js/*', 'images']);
});

gulp.task('less', function () {
    return gulp.src('web-src/less/*.less')
        .pipe(sourcemaps.init(''))
        .pipe(less())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src(['web-src/images/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('images/'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src('web-src/js/*.js')
    .pipe(babel())
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: ''
        }
    });
});

gulp.task('watch', function () {
   gulp.watch('web-src/less/*.less', ['less']);
   gulp.watch('**/*.html', browserSync.reload);
   gulp.watch('web-src/js/**/*.js', ['babel']);
});