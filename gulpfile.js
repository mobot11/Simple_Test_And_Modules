var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require ('gulp-mocha');

gulp.task('default', ['watch']);

gulp.task('test', function() {
	//return file that is being tested. Into test directory, all files with test.js in them
	return gulp.src('./test/*test.js')
						 .pipe(mocha());
});

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('./*.js')
					    .pipe(jshint())
					    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  return gulp.watch('./*.js', ['jshint']);
});