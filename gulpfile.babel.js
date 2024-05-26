'use strict'

import gulp from 'gulp'

const requireDir = require('require-dir')

const paths = {
  views: {
    src: ['./src/views/**/*.html', './src/views/pages/*.html'],
    dist: './dist/',
    watch: ['./src/blocks/**/*.html', './src/views/**/*.html'],
  },
  styles: {
    src: './src/styles/app.{scss,sass}',
    dist: './dist/styles/',
    watch: ['./src/blocks/**/*.{scss,sass}', './src/styles/**/*.{scss,sass}'],
  },
  scripts: {
    src: './src/scripts/index.js',
    dist: './dist/scripts/',
    watch: ['./src/blocks/**/*.js', './src/scripts/**/*.js'],
  },
  copyScripts: {
    src: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/swiper/swiper-bundle.min.js',
      './node_modules/jquery-modal/jquery.modal.min.js',
      './src/scripts/**/*.js'],
    dist: './dist/scripts/',
    watch: ['./src/blocks/**/*.js', './src/scripts/**/*.js'],
  },
  images: {
    src: [
      './src/images/**/*.{jpg,jpeg,png,gif,tiff,svg}',
      // '!./src/images/favicons/*.{jpg,jpeg,png,gif,tiff}',
    ],
    dist: './dist/images/',
    watch: './src/images/**/*.{jpg,jpeg,png,gif,svg,tiff}',
  },
  fonts: {
    src: './src/fonts/**/*.{woff,woff2}',
    dist: './dist/fonts/',
    watch: './src/fonts/**/*.{woff,woff2}',
  },
  favicons: {
    srcFolder: './src/images/favicons/',
    src: './src/images/favicons/favicon.svg',
    dist: './dist/images/favicons/',
    data: './dist/images/favicons/data.json',
  },
  gzip: {
    src: './src/.htaccess',
    dist: './dist/',
  },

  copy: {
    src: './src/images/favicons/*.{webmanifest,xml}',
    dist: './dist/images/favicons/',
    watch: ['./src/images/favicons/*.{webmanifest,xml}'],
  },
  deploy: {
    src: './dist/**/*',
  },
}

requireDir('./gulp-tasks/')

export {paths}

export const development = gulp.series(
  'clean',
  'views',
  'styles',
  gulp.parallel([ 'images', 'webp', 'fonts', 'copy', 'copyScripts']),
  'serve',
)

export const prod = gulp.series(
  'clean',
  'views',
  gulp.parallel([
    'styles',
    'images',
    'webp',
    'fonts',
    'gzip',
    'copy',
    'copyScripts',
  ]),
)

export default development
