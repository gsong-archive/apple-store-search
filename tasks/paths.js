import path from 'path';


export const BUILD_DIR = '.build/';
export const DIST_DIR = 'dist/';
export const SRC_DIR = 'src/';
export const TMP_DIR = '.tmp/';

export const BUILD_ALL = path.join(BUILD_DIR, '**/*');
export const BUILD_SCRIPTS_DIR = path.join(BUILD_DIR, 'scripts/');

export const SRC_ALL = path.join(SRC_DIR, '**/*');
export const SRC_HTML = path.join(SRC_DIR, '**/*.html');
export const SRC_INDEX = path.join(SRC_DIR, 'index.html');
export const SRC_SCRIPT = path.join(SRC_DIR, '**/*.js');
export const SRC_STYLE = path.join(SRC_DIR, '**/*.scss');

export const TMP_IMAGE = path.join(TMP_DIR, '**/*.+(png|jpg|svg)');
export const TMP_SCRIPTS_DIR = path.join(TMP_DIR, 'scripts/');

const SCRIPT = 'main';
export const MAIN_SRC = path.join(TMP_SCRIPTS_DIR, SCRIPT);
export const MAIN_DEST = path.join(BUILD_SCRIPTS_DIR, SCRIPT + '.js');
