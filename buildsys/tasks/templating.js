/**
 * ./buildsys/tasks/templating.js
 * @author Keenan Staffieri
 * ------------------------------------
 * TASK: Nunjucks Templating
 * 'gulp templating'
 */

var nunjucks = require('nunjucks')
var gnunjucks = require('gulp-nunjucks')
var rename = require('gulp-rename')

/* $ gulp templating */
gulp.task('templating', function () {
  return gulp.src([
      config.paths.srcRoot + '/*.njk',
      config.views.paths.src + '/**/*.njk'
    ])
    .pipe(gnunjucks.compile({}, {
      env: new nunjucks.Environment(
        new nunjucks.FileSystemLoader(config.views.paths.src)
      )
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(config.paths.distRoot))
})
