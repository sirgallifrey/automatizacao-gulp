'use strict';

const gulp = require('gulp')
const rm = require('rimraf')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const autoPrefixer = require('gulp-autoprefixer')
const cssMin = require('gulp-cssmin')

gulp.task('clean', function(cb){
	rm('./dist', cb)
})

const scssglobs = [
	'./src/sass/**/*.scss',
	'!./src/sass/**/_*.scss'
]

gulp.task('sass', ['clean'], function(){
	return gulp.src(scssglobs)
		.pipe(autoPrefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(sass())
		.pipe(cssMin())
		.pipe(gulp.dest('./dist/css'))
})

gulp.task('build', ['sass', 'clean'])

gulp.task('default', ['build'])
