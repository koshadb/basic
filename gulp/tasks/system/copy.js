gulp.task('copy-html', () => {
  gulp.src([config.markup.src])
    .pipe($.changed(config.markup.dest))
    .pipe(gulp.dest(config.markup.dest));
});

gulp.task('copy-img', () => {
  gulp.src([config.images.src])
    .pipe(gulp.dest(config.images.dest));
});

gulp.task('copy-js', () => {
  gulp.src([config.js.src])
    .pipe(gulp.dest(config.js.dest));
});

gulp.task('copy-assets', ['copy-html', 'copy-img', 'copy-js']);
