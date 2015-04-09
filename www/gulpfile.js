var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css'),
    imageop = require('gulp-image-optimization');

gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg'])
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('../www')).on('end', cb).on('error', cb);
});

gulp.task('minify-css', function() {
  return gulp.src('../www/src/css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('../www/src/css/min'))
    .pipe(connect.reload());
});

gulp.task('alljs', function() {
  return gulp.src([
    '../www/bower_components/angular/angular.min.js',
    '../www/bower_components/angular-material/angular-material.min.js',
    '../www/bower_components/angular-animate/angular-animate.min.js',
    '../www/bower_components/angular-aria/angular-aria.min.js',
    '../www/src/js/app.js',
    '../www/src/js/factorys/*.js',
    '../www/src/js/controllers/*.js'
    ])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(connect.reload());
});
gulp.task('allcss', function() {
  return gulp.src(['../www/src/css/min/*.css',
    '../www/bower_components/angular-material/angular-material.min.css'
    ])
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(connect.reload());
});


gulp.task('scripts', function() {
  return gulp.src(['../www/src/js/app.js',
      '../www/src/js/factorys/*.js',
      '../www/src/js/controllers/*.js'])
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
    port: 8000,
    livereload: true
  })
});

gulp.task('miniall',
  ['alljs','allcss']);

gulp.task('default',
  ['miniall','html','html-tpl','watch', 'connect']);