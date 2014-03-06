var gulp       = require('gulp'),
    nodemon    = require('gulp-nodemon'),
    less       = require('gulp-less'),
    jshint     = require('gulp-jshint'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['styles', 'scripts', 'nodemon', 'watch']);

gulp.task('styles', function() {
  gulp.src('./server/assets/stylesheets/**/*.less')
      .pipe(less({compress: true}))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('scripts', function() {
  gulp.src('./server/assets/javascripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'))
});

gulp.task('nodemon', function () {
  nodemon({script: 'app.js', watch: ['./server/controllers/**/*',
                                     './server/models/**/*',
                                     './server/routes/**/*',
                                     './middleware/**/*',
                                     './node_modules/**/*']});
});

gulp.task('watch', function() {
  gulp.watch('./server/assets/stylesheets/**/*.less', ['styles']);
  gulp.watch('./server/assets/javascripts/**/*.js'  , ['scripts']);

  var livereloadServer = livereload();
  gulp.watch(['server/views/**/*', 'public/**/*']).on('change', function(file) {
    livereloadServer.changed(file.path);
  });
});