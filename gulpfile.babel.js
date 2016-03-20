
const gulp = require ('gulp')
const yargs = require ('yargs').argv
const isRelease = yargs.r || yargs.release

require ('./www/lib/ti-ionic/gulp-tasks/main') (gulp, isRelease)
require ('./gulp-tasks/main') (gulp, isRelease)
