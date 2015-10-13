import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

import * as paths from './paths';
import gulp from './_gulp';


const $ = gulpLoadPlugins();


gulp.task('dist:post-jspm', () => gulp.src(paths.BUILD_INDEX_JS)
  .pipe($.replace(/(angular.bootstrap.*strictDi:\s*)(false)/g, '$1true'))
  .pipe($.ngAnnotate())
  .pipe($.uglify())
  .pipe(gulp.dest(paths.BUILD_DIR))
);


gulp.task('dist:js', (callback) => runSequence(
  'build:jspm', 'dist:post-jspm', 'js:replace_paths', callback
));


gulp.task('dist:html', () => gulp.src(paths.SRC_INDEX_HTML)
  .pipe($.htmlReplace({'js': paths.INDEX_SCRIPT}))
  .pipe($.minifyHtml({empty: true}))
  .pipe(gulp.dest(paths.BUILD_DIR))
);


gulp.task('dist:copy', () => {
  const htmlFilter = $.filter('**/*.!(html)', {restore: true});

  return gulp.src(paths.BUILD_ALL)
  .pipe(htmlFilter)
  .pipe($.rev())
  .pipe(htmlFilter.restore)
  .pipe($.revReplace())
  .pipe(gulp.dest(paths.DIST_DIR))
  .pipe($.gzip())
  .pipe(gulp.dest(paths.DIST_DIR));
});


gulp.task('dist', (callback) => runSequence(
  ['clean:build', 'clean:dist', 'build:make-settings', 'utils:copy_to_tmp'],
  ['dist:js', 'dist:html', 'build:images'],
  'dist:copy',
  callback
));
