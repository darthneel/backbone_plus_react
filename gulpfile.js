var gulp = require('gulp');

//Plugins
var browserify = require('browserify');
var reactify = require('reactify')
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');


// Tasks 

// Default
gulp.task('default', ['js', 'watch']);

// Browserify
gulp.task('js', function() {
  browserify('./public/scripts/uncompiled/script.js')
    .transform(reactify) 
    .bundle()
    .pipe(source('bundled.js'))
    .pipe(gulp.dest('public/scripts'));
});

// // Nodemon
// gulp.task('nodemon', function () {
//   nodemon({ script: 'server.js' })
//     .on('restart', function () {
//       console.log('restarted!')
//     })
// })
 
// Watchers 
gulp.task('watch', function() {
    gulp.watch('public/scripts/uncompiled/*.js', ['js']);
    // gulp.watch('public/scripts/uncompiled/*.js', ['js', 'nodemon']);
    gulp.watch('public/scripts/backbone/**/*.js', ['js']);
    gulp.watch('public/scripts/backbone/**/*.jsx', ['js']);
    // gulp.watch('public/scripts/backbone/**/*.js', ['js', 'nodemon']);
});
