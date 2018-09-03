let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let postcss = require('gulp-postcss');
let tailwindcss = require('tailwindcss');
let purgecss = require('gulp-purgecss');
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let htmlmin = require('gulp-htmlmin');

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
    .pipe(gulp.dest('../css/'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js', function(){
  return gulp.src([
    './js/jquery.js',
    './js/plugins.js',
    './js/main.js'
  ])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest('../js/'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('html', function(){
  return gulp.src('./*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('../'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('data', function(){
  return gulp.src('../data.js')
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', function(){
  // $ ./node_modules/.bin/gulp
  browserSync.init({server: { baseDir: "../" }});
  gulp.watch(['./css/**/*.css', './tailwind.js', './*.html'], ['css']);
  gulp.watch('./js/**/*.js', ['js']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('../data.js', ['data']);
});
