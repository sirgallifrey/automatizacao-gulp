'use strict';

const gulp = require('gulp')
const rm = require('rimraf')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

gulp.task('clean', function(cb){
	rm('./dist', cb)
})

gulp.task('minify:js', ['clean'], function(){
	return gulp.src('./src/js/**/*.js')
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
})

gulp.task('build', ['minify:js','clean'])

gulp.task('default', ['build']);
