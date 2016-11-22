'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()

gulp.task('sass', function(){
	return gulp.src('./src/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./src/css'))
		.pipe(browserSync.stream())
})


gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: './src/'
		}
	})
	gulp.watch('./src/**/*.scss', ['sass'])
	gulp.watch('./src/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['server'])
