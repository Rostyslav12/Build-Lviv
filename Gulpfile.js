const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
function compileSass(done) {
  src("scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./"));
  done();
}
function watchSass() {
  watch("scss/styles.scss", compileSass);
}
exports.watchSass = watchSass;
