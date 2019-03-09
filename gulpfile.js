const gulp = require("gulp");
// const terser = require("gulp-terser");
// const rename = require("gulp-rename");

//bootstrap-toasts  &&  jquery
const bootstrap_toasts_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.js";
const bootstrap_toasts_min_js_path = "./node_modules/bootstrap-toasts/dist/bootstrap-toasts.min.js";
const jquery_js_path = "./node_modules/jquery/dist/jquery.js";
const jquery_min_js_path = "./node_modules/jquery/dist/jquery.min.js";

// popper.js
const popper_js_path = "./node_modules/popper.js/dist/umd/popper.js";
const popper_min_js_path = "./node_modules/popper.js/dist/umd/popper.min.js";
const popper_js_map_path = "./node_modules/popper.js/dist/umd/popper.js.map";
const popper_min_js_map_path = "./node_modules/popper.js/dist/umd/popper.min.js.map";

// Bootstrap
const bs_js_path = "./node_modules/bootstrap/dist/js/bootstrap.js";
const bs_min_js_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js";
const bs_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.js.map";
const bs_min_js_map_path = "./node_modules/bootstrap/dist/js/bootstrap.min.js.map";
const bs_css_path = "./node_modules/bootstrap/dist/css/bootstrap.css";
const bs_min_css_path = "./node_modules/bootstrap/dist/css/bootstrap.min.css";
const bs_css_map_path = "./node_modules/bootstrap/dist/css/bootstrap.css.map";
const bs_min_css_map = "./node_modules/bootstrap/dist/css/bootstrap.min.css.map";

//vue
const vue_js_path = "./node_modules/vue/dist/vue.js";
const vue_min_js_path = "./node_modules/vue/dist/vue.min.js";

//font
const font_css_path = "./node_modules/@fortawesome/fontawesome-free/css/all.css";
const font_min_css_path = "./node_modules/@fortawesome/fontawesome-free/css/all.min.css";
const font_webfonts_path = "./node_modules/@fortawesome/fontawesome-free/webfonts/*";

gulp.task("copy_bs", copy_bs);
gulp.task("copy_js", copy_js);
gulp.task("copy_popper", copy_popper);
gulp.task("copy_fonts", copy_fonts);

function copy_fonts(done) {
    gulp.src([font_css_path, font_min_css_path]).pipe(gulp.dest("./static/font/css"));
    gulp.src([font_webfonts_path]).pipe(gulp.dest("./static/font/webfonts"));
    done();
}

function copy_bs(done) {
    gulp.src([bs_js_path, bs_min_js_path, bs_js_map_path, bs_min_js_map_path])
        .pipe(gulp.dest("./static/js/"));
    gulp.src([bs_css_path, bs_min_css_path, bs_css_map_path, bs_min_css_map])
        .pipe(gulp.dest("./static/css/"));
    done();
}

function copy_popper(done) {
    gulp.src([popper_js_path, popper_min_js_path, popper_js_map_path, popper_min_js_map_path])
        .pipe(gulp.dest("./static/js/"));
    done();
}

function copy_js(done) {
    gulp.src([bootstrap_toasts_js_path, bootstrap_toasts_min_js_path, jquery_js_path, jquery_min_js_path, vue_js_path, vue_min_js_path])
        .pipe(gulp.dest("./static/js/"));
    done();
}
