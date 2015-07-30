var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('gulp-browserify'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify');
gulp.task('css', function () {
    gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css','bower_components/ng-responsive-calendar/dist/css/calendar.min.css','app/styles/*.css'])
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/dist/styles'))
});
gulp.task('fonts',function(){
  gulp.src('bower_components/bootstrap/dist/fonts/*.*')
        .pipe(gulp.dest('app/dist/fonts'));
});
gulp.task('js', function () {
    gulp.src(['app/scripts/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(browserify())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('app/dist/scripts'));
});
gulp.task('libs', function () {
    gulp.src(['bower_components/**/*.min.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('app/dist/scripts'));
});
gulp.task('default', function () {
    gulp.run('css','js','libs','fonts');
});
gulp.task('watch', function() {
    gulp.watch('app/styles/*.css',['css']);
    gulp.watch('app/scripts/**/*js',['js']);
});
