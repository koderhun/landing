'use strict';

import { paths } from '../gulpfile.babel';
import gulp from 'gulp';
import browsersync from 'browser-sync';

gulp.task('serve', () => {
  browsersync.init({
    server: './dist/',
    port: 4000,
    notify: true,
    open: false,
  });

  gulp.watch(paths.views.watch, gulp.parallel('views'));
  gulp.watch(paths.styles.watch, gulp.parallel('styles'));
  gulp.watch(paths.scripts.watch, gulp.parallel('scripts'));
  gulp.watch(paths.copy.watch, gulp.parallel('copy'));
  gulp.watch(paths.copyScripts.watch, gulp.parallel('copyScripts'));
  gulp.watch(paths.images.watch, gulp.parallel('images'));
  gulp.watch(paths.fonts.watch, gulp.parallel('fonts'));
});
