'use strict'

import {paths} from '../gulpfile.babel'
import gulp from 'gulp'
import debug from 'gulp-debug'



gulp.task('copy', () => {
  return gulp
    .src(paths.copy.src)
    .pipe(gulp.dest(paths.copy.dist))
    .pipe(
      debug({
        title: 'Copy',
      }),
    )
})

gulp.task('copyScripts', () => {
  return gulp
    .src(paths.copyScripts.src)
    .pipe(gulp.dest(paths.copyScripts.dist))
    .pipe(
      debug({
        title: 'Copy',
      }),
    )
})
