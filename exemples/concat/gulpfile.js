'use strict';

const gulp = require('gulp')
const rm = require('rimraf')
const rename = require('gulp-rename')


gulp.task('clean', function(cb){
	rm('./dist', cb)
})

//
// const libsJavascript = [
// 	'./bower_components/**/dist/**/*.min.js',
// 	'!./bower_components/**/dist/**/sizzle.min.js',
// 	'./bower_components/**/angular.min.js'
// ]


const libsJavascript = [
	'./bower_components/angular/**/angular.min.js',
	'./bower_components/jquery/**/jquery.min.js',
	'./bower_components/lodash/**/lodash.min.js',
	'./bower_components/Materialize/**/materialize.min.js',
]

const libsCss = [
	'./bower_components/**/*.min.css'
]

gulp.task('build', ['copy:javascript', 'copy:css', 'clean'])

gulp.task('copy:javascript', ['clean'], function(){
	return gulp.src(libsJavascript)
		.pipe(rename({dirname:''}))
		.pipe(gulp.dest('./dist/assets/js'))
})

gulp.task('copy:css', ['clean'], function(){
	return gulp.src(libsCss)
		.pipe(rename({dirname:''}))
		.pipe(gulp.dest('./dist/assets/css'))
})
