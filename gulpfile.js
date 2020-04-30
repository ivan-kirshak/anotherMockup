const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require("browser-sync").create();
const imagemin = require('gulp-imagemin');
let uglify = require('gulp-uglify-es').default;

// SCSS compile (Gulp 4 syntax)
sass.compiler = require('node-sass');
function style() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

// copy HTML
function html () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest('build'));
}

function images () {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/images'))
}

gulp.task("uglify", function () {
    return gulp.src("src/js/*.js")
        .pipe(uglify(/* options */))
        .pipe(gulp.dest("build/js"));
});


function watch () {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    })
    gulp.watch('./src/scss/**/*.scss', gulp.style).on('change', browserSync.reload);
    gulp.watch('src/*.html', gulp.html).on('change', browserSync.reload);
    gulp.watch('build/*.html').on('change', browserSync.reload);
}

//line below makes function above run when called
exports.style = style;
exports.html = html;
exports.watch = watch;
exports.images = images;