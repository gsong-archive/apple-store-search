import gulpLoadPlugins from 'gulp-load-plugins';

import * as paths from './paths';
import gulp from './_gulp';


const $ = gulpLoadPlugins();


gulp.task('js:lint', () =>
  gulp.src(paths.SRC_SCRIPT)
  .pipe($.eslint())
  .pipe($.eslint.formatEach())
  .pipe($.eslint.failAfterError())
);


gulp.task('js:replace_paths', ['js:lint'], () =>
  gulp.src(paths.BUILD_INDEX_JS)
  .pipe($.replace(paths.TMP_DIR, ''))
  .pipe(gulp.dest(paths.BUILD_DIR))
);
