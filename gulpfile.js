const gulp = require('gulp');

const htmlmin = require('gulp-html-minifier2');
const concatCSS = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');

gulp.task('dev-css', () => {
    return gulp.src('./src/css/styles/*.css')
        .pipe(concatCSS('styles.css'))
        .pipe(gulp.dest('./src/css'))
});

gulp.task('watch', () => {
    gulp.watch('src/css/styles/*.css', ['dev-css']);
});



//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------

gulp.task('prod-html', () => {
    return gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('prod-css', () => {
    return gulp.src('./src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['prod-html', 'prod-css']);