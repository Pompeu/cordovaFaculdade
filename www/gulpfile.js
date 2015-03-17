var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css');
 
gulp.task('minify-css', function() {
  return gulp.src('../www/src/css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src('../www/src/**/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(connect.reload());
});

gulp.task('html', function() {
  return gulp.src('../www/*.html')
    .pipe(connect.reload());
});
gulp.task('html-tpl', function() {
  return gulp.src('../www/templates/*.html')
    .pipe(connect.reload());
});

gulp.task('watch',function() {
  gulp.watch('../www/src/**/*.js',['scripts']);
  gulp.watch('../www/src/css/*.css',['minify-css']);
  gulp.watch('../www/*.html',['html']);
  gulp.watch('../www/templates/*.html',['html-tpl']);
})

gulp.task('connect',function() {
  connect.server({
    root:['../www'],
    port: 8888,
    livereload: true
  })
});


gulp.task('default',
  ['scripts','minify-css','html','html-tpl','watch', 'connect']);