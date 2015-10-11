import ghpages from 'gh-pages';

import * as paths from './paths';
import gulp from './_gulp';


gulp.task('publish', ['dist'], () => ghpages.publish(paths.DIST_DIR, () => {}));
