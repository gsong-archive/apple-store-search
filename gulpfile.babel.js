import 'babel-polyfill';
import gulp from 'gulp';
import {makeSettings} from 'gulp-tasks';

import environments from './src/config/environments';


makeSettings(environments);
gulp.task('default', ['serve:dev'], () => {});
