/**
 * Created by Alfianjau on 02/06/2015.
 */

var gulp = require('gulp');
var uncss = require('gulp-uncss');

 
gulp.task('default', function () {
    return gulp.src('*.css')
        .pipe(uncss({
            html: ['index.html']
        }))
        .pipe(gulp.dest('./gulper'));
});