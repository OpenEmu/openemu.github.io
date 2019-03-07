let gulp = require('gulp');
let postcss = require('gulp-postcss');
let tailwindcss = require('tailwindcss');
let purgecss = require('gulp-purgecss');
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let hash = require('gulp-hash');
let references = require('gulp-hash-references');

gulp.task('css', function(){
  return gulp.src('./css/main.css')
    .pipe(postcss([
      tailwindcss('./tailwind.js'),
    ]))
    .pipe(purgecss({
      content: ['./*.html', './js/*.js'],
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract(content) {
              return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
            }
          },
          extensions: ['html', 'js']
        }
      ]
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(hash())
    .pipe(gulp.dest('../css/'))
    .pipe(hash.manifest('./asset-manifest.json', {
      deleteOld: true,
      sourceDir: '../css/'
    }));
});

gulp.task('js', function(){
  return gulp.src([
    './js/jquery.js',
    './js/plugins.js',
    './js/main.js'
  ])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(hash())
  .pipe(gulp.dest('../js/'))
  .pipe(hash.manifest('./asset-manifest.json', {
    deleteOld: true,
    sourceDir: '../js/'
  }));
});

gulp.task('html', function(){
  return gulp.src('./index.html')
  .pipe(references('./asset-manifest.json'))
  .pipe(gulp.dest('../'));
});

gulp.task('default', function(){
  // $ ./node_modules/.bin/gulp
  gulp.watch(['./css/**/*.css', './tailwind.js', './index.html'], gulp.series('css', 'html'));
  gulp.watch('./js/**/*.js', gulp.series('js', 'html'));
  gulp.watch('./index.html', gulp.series('html'));
});
