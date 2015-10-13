import * as paths from './paths';
import gulp from './_gulp';


gulp.task('utils:copy_to_tmp', ['clean:tmp'], () => gulp.src(paths.SRC_ALL)
  .pipe(gulp.dest(paths.TMP_DIR))
);
