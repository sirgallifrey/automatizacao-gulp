'use strict';

const gulp = require('gulp')
const rm = require('rimraf')


gulp.task('clean', function(cb){
	rm('./dist', cb)
})
