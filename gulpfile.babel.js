
const gulp = require ('gulp')
const yargs = require ('yargs').argv
const isRelease = yargs.r || yargs.release
const tiIonicPath = './www/lib/ti-ionic'

require (tiIonicPath + '/gulp-tasks/main') (gulp, tiIonicPath, isRelease)
require ('./gulp-tasks/main') (gulp, isRelease)
