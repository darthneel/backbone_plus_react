var gulp = require('gulp');

//Plugins
var browserify = require('browserify');
var reactify = require('reactify')
var source = require('vinyl-source-stream');


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
 
// Watchers 
gulp.task('watch', function() {
    gulp.watch('public/scripts/backbone/**/.*.js', ['js']);
});
