 const gulp = require('gulp');

 const sass = require('gulp-sass')(require('sass'));

 const autoprefixer = require('gulp-autoprefixer');

 const browserSync = require('browser-sync').create();

 const concat = require('gulp-concat');

 const babel = require('gulp-babel');

 const uglify = require('gulp-uglify');
 
 function sassCompiler() {
    return gulp.src('src/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
     }))
    .pipe(gulp.dest('src/styles/'))
    .pipe(browserSync.stream());
 }

 gulp.task('sass', sassCompiler);


 function gulpJs() { 
    return gulp.src('src/js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('src/js/'))
    .pipe(browserSync.stream());
 }

 gulp.task('alljs', gulpJs);


 function browser() { 
    browserSync.init({
        server: { 
            baseDir: './'
        }
    })
 }

 gulp.task('browser-sync', browser);


 function watch() { 
    gulp.watch('src/sass/*.scss', sassCompiler);
    gulp.watch('*.html').on('change', browserSync.reload)

    gulp.watch('js/scripts/*js', gulpJs);
 }

 gulp.task('watch', watch);

 gulp.task('default', gulp.parallel('watch','browser-sync', 'sass', 'alljs'));
 