'use strict'

import {paths} from '../gulpfile.babel'
import gulp from 'gulp'
import debug from 'gulp-debug'

gulp.task('predeploy', () => {
  return gulp.src(paths.deploy.src).pipe(
    debug({
      title: 'Deploy',
    }),
  )
})

gulp.task('deploy', gulp.series('predeploy'))
