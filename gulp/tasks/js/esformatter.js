gulp.task('esformatter', function() {
  return gulp.src(config.esformatter.src)
    .pipe($.esformatter({
      plugins: ["esformatter-quotes"],
      quotes: {
        type: "single",
        avoidEscape: false
      }
    }))
    .pipe(gulp.dest(config.esformatter.dest));
});
