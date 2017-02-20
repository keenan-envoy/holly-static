/**
 * ./buildsys/tasks/watch-static.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Watch (Static)
 * 'gulp watch-static'
 */

var watch = require('gulp-watch')
var browserSync = require('browser-sync')

/* $ gulp watch */
gulp.task('watch-static', function () {

  if (env === 'dev') {
    // Watch for template changes
    watch([
      config.paths.srcRoot + '/*.njk',
      config.views.paths.src + '/**/*.njk'
    ], {
      name: 'Templates Watcher'
    }, function () {
      gulp.start('templating')
    })
  }
})
