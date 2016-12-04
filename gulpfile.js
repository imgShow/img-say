const gulp = require('gulp');
const babel = require('gulp-babel');
const server = require('gulp-server-livereload');
const less = require('gulp-less');

gulp.task('es6', () => {
    return gulp.src('src/js/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('less', () => {
    return gulp.src('src/less/**.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('webServer', () => {
    return gulp.src('.')
           .pipe(server({
                livereload: true,
                directoryListing: true,
                open: true
            }))
})

// watch all change, auto make
gulp.task('watch', ['webServer'], () => {
    gulp.watch('src/js/**.js', ['es6']);   
    gulp.watch('src/less/**.less', ['less']);   
})

