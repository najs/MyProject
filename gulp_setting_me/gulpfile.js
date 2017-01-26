var gulp = require('gulp');
var concat = require('gulp-concat'); //파일결합하기
var fileInclude = require('gulp-file-include');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
/*var uglify = require('gulp-uglify');*/


// 작업 경로 설정
var devSrc = 'src/dev';
var devPaths = {
    js: devSrc + '/js/*.js',
    css: devSrc + '/css/*.css',
    html: devSrc + '/html/**/*.*',
		images: devSrc + '/images/**/*.*',
    font: devSrc + '/fonts/*.*'
};
// 결과물 경로 설정
var buildSrc = 'src/build';

gulp.task('js', function(){
    return gulp.src(devPaths.js)
		//.pipe(concat('everything.js')) //everything.js이라는 파일명으로 모두 병합한뒤
		//.pipe(uglify()) //minify해서
      .pipe(gulp.dest(buildSrc+'/js'));
});

gulp.task('css', function () {
    return gulp.src(devPaths.css)
      .pipe(gulp.dest(buildSrc+'/css'));
});

gulp.task('sass',function(){
   return gulp.src(devPaths.scss).
		 pipe(sass.sync().on('error', sass.logError)).
     pipe(gulp.dest(buildSrc+'/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch(devPaths.scss, ['sass']);
});

gulp.task('images', function(){
	return gulp.src(devPaths.images)
		.pipe(imagemin())
		.pipe(gulp.dest(buildSrc+'/images'));
});

gulp.task('html', function(){
    return gulp.src(devPaths.html)
      .pipe(fileInclude({
        prefix: '@@',
        basepath: '@file'
    }))
      .pipe(gulp.dest(buildSrc + '/html'));
});

gulp.task('watch', function (){
    gulp.watch(devPaths.js, ['js']);
    gulp.watch(devPaths.css, ['css']);
    gulp.watch(devPaths.html, ['html']);
    gulp.watch(devPaths.images, ['images']);
});

gulp.task('clean', function () {
    return gulp.src(buildSrc, {
        read: false
    })
      .pipe(clean());
});

gulp.task('compile', ['js', 'css', 'html', 'images'], function(){});

gulp.task('default', [
  'js',
  'css',
  'html',
  'images'
]);
