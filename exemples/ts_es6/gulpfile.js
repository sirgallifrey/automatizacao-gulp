'use strict'
const gulp = require('gulp')
const rm = require('rimraf')
const babel = require('gulp-babel')
// npm install --save-dev babel-cli babel-preset-es2015
const ts = require('gulp-typescript')

gulp.task('clean', function(cb){
	rm('./dist', cb)
})

gulp.task('es6', ['clean'], function(){
	return gulp.src('./src/es6.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dist'))
})

gulp.task('typescript', ['clean'], function() {
	return gulp.src('./src/typescript.ts')
		.pipe(ts({
			noImplicitAny: true,
			out: 'ts.js'
		}))
		.pipe(gulp.dest('./dist/'))
})

gulp.task('build', ['typescript', 'es6','clean'])

gulp.task('default', ['build'])
