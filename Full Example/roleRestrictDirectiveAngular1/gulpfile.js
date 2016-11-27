(function () {

    var gulp        = require('gulp');
    var browserSync = require('browser-sync');
    
    gulp.task('run', function (done) {
        return browserSync({
            server: {
                baseDir: './'
            }
        }, done);
    });

})();