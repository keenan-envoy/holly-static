/**
 * ./buildsys/tasks/serve.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Development Server
 * 'gulp serve'
 */

var browserSync = require('browser-sync')

/* $ gulp serve */
gulp.task('serve', function () {
  return browserSync.init({
      server: {
        baseDir: [config.paths.distRoot, './node_modules']
      },
      port: config.devServer.port,
      open: false,
      logPrefix: 'Holly-Static',
      injectChanges: true
    })
})
