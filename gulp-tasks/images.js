'use strict'

import {paths} from '../gulpfile.babel'
import gulp from 'gulp'
import gulpif from 'gulp-if'
import newer from 'gulp-newer'
import debug from 'gulp-debug'
import browsersync from 'browser-sync'
import yargs from 'yargs'
// import imagemin from 'gulp-imagemin'

const argv = yargs.argv,
  production = !!argv.production

gulp.task('images', () => {
  return (
    gulp
      .src(paths.images.src)
      .pipe(newer(paths.images.dist))
      // .pipe(gulpif(production, imagemin()))
      .pipe(gulp.dest(paths.images.dist))
      .pipe(
        debug({
          title: 'Images',
        }),
      )
      .on('end', browsersync.reload)
  )
})
