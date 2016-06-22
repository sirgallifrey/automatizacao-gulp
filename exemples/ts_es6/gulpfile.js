'use strict'
const gulp = require('gulp')
const rm = require('rimraf')
const babel = require('gulp-babel')
// npm install --save-dev babel-cli babel-preset-es2015
const ts = require('gulp-typescript')

gulp.task('clean', function(cb){
	rm('./dist', cb)
})



gulp.task('build', ['typescript', 'es6','clean'])
