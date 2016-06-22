'use strict';

const gulp = require('gulp')
const rm = require('rimraf')
const concat = require('gulp-concat')


gulp.task('clean', function(cb){
	rm('./dist', cb)
})
