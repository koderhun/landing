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
