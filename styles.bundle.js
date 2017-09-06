webpackJsonp(["styles"],{

/***/ "../../../../../src/assets/images/board.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "board.648e1adcbf9e8c9b1ac4.svg";

/***/ }),

/***/ "../../../../../src/assets/images/caret-down.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "caret-down.6e6071157322da5d2789.svg";

/***/ }),

/***/ "../../../../../src/assets/images/green-pepper.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "green-pepper.4652ba56c7aff192190d.svg";

/***/ }),

/***/ "../../../../../src/assets/images/jam.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jam.4b13f877d6d86af004cb.svg";

/***/ }),

/***/ "../../../../../src/assets/images/loaf.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "loaf.8b1a1d5f1f2a3665d195.svg";

/***/ }),

/***/ "../../../../../src/assets/images/plant.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "plant.a872ffbfc39f433758b7.svg";

/***/ }),

/***/ "../../../../../src/assets/images/rice.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rice.65931329e74b456d275b.svg";

/***/ }),

/***/ "../../../../../src/assets/images/salad.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "salad.98d5609678799b14c8ff.svg";

/***/ }),

/***/ "../../../../../src/assets/scss/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/assets/scss/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--9-1!../../../node_modules/postcss-loader/index.js??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--9-1!../../../node_modules/postcss-loader/index.js??postcss!../../../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/assets/scss/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Pangolin:100,200,300,400,500,600,700,800,900);", ""]);

// module
exports.push([module.i, "@font-face {\n  font-family: 'WorkSans-Regular';\n  src: url(\"/../../fonts/WorkSans-Regular.ttf\") format(\"ttf\"); }\n\n@font-face {\n  font-family: 'WorkSans-Bold';\n  src: url(\"/../../fonts/WorkSans-Bold.ttf\") format(\"ttf\"); }\n\n@font-face {\n  font-family: 'WorkSans-Semibold';\n  src: url(\"/../../fonts/WorkSans-Semibold.ttf\") format(\"ttf\"); }\n\n@font-face {\n  font-family: 'WorkSans-Light';\n  src: url(\"/../../fonts/WorkSans-Light.ttf\") format(\"ttf\"); }\n\n@font-face {\n  font-family: 'WorkSans-Italic';\n  src: url(\"/../../fonts/WorkSans-Italic.ttf\") format(\"ttf\"); }\n\n@font-face {\n  font-family: 'Pangolin';\n  src: url(\"/../../fonts/Pangolin-Regular.ttf\") format(\"ttf\"); }\n\n.message-formatting {\n  /* css reset overrides */ }\n  .message-formatting h1, .message-formatting h2, .message-formatting h3, .message-formatting h4, .message-formatting h5, .message-formatting h6 {\n    font-family: inherit;\n    font-weight: 500;\n    line-height: 1.1;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .message-formatting h1 {\n    font-size: 36px; }\n  .message-formatting h2 {\n    font-size: 30px; }\n  .message-formatting h3 {\n    font-size: 24px; }\n  .message-formatting h4 {\n    font-size: 18px; }\n  .message-formatting h5 {\n    font-size: 14px; }\n  .message-formatting h6 {\n    font-size: 12px; }\n  .message-formatting pre {\n    display: block;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    line-height: 1.428571429;\n    word-break: break-all;\n    word-wrap: break-word;\n    color: #333;\n    background-color: #f5f5f5;\n    border: 1px solid #ccc;\n    border-radius: 4px; }\n  .message-formatting blockquote {\n    padding: 10px 20px;\n    margin: 0 0 20px;\n    font-size: 17.5px;\n    border-left: 5px solid #eee; }\n  .message-formatting i {\n    font-style: italic; }\n  .message-formatting b, .message-formatting strong {\n    font-weight: 700; }\n  .message-formatting ol {\n    display: block;\n    list-style-type: decimal;\n    -webkit-margin-before: 1em;\n    -webkit-margin-after: 1em;\n    -webkit-margin-start: 0px;\n    -webkit-margin-end: 0px;\n    -webkit-padding-start: 40px; }\n    .message-formatting ol li {\n      display: list-item;\n      text-align: -webkit-match-parent; }\n  .message-formatting ul {\n    display: block;\n    list-style-type: disc;\n    -webkit-margin-before: 1em;\n    -webkit-margin-after: 1em;\n    -webkit-margin-start: 0px;\n    -webkit-margin-end: 0px;\n    -webkit-padding-start: 40px; }\n    .message-formatting ul li {\n      display: list-item;\n      text-align: -webkit-match-parent; }\n\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\na:visited,\na:active {\n  text-decoration: none;\n  color: #333; }\n\n* {\n  box-sizing: border-box; }\n  *:focus {\n    outline: none; }\n\napp-root {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\nhtml {\n  height: 100%;\n  font-size: 62.5%; }\n\nbody {\n  height: 100%;\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 1.4rem;\n  font-family: \"WorkSans-Regular\", sans-serif; }\n\ninput[type=\"text\"], textarea {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.4rem;\n  color: #666;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n  display: block;\n  width: 50%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.4;\n  color: #666;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 0;\n  opacity: 0;\n  padding: 0;\n  position: absolute; }\n\ntextarea {\n  max-width: 100%;\n  overflow: auto;\n  height: 100px; }\n\nbutton::-moz-focus-inner {\n  border: 0; }\n\n.o-form-wrapper {\n  padding-top: 5rem; }\n  .o-form-wrapper__checkbox--blue {\n    display: block;\n    margin-bottom: 4rem; }\n    .o-form-wrapper__checkbox--blue:last-child {\n      margin-bottom: 0; }\n\n.form-col {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n  .form-col label, .form-col textarea {\n    width: 520px; }\n\n.o-footer {\n  background-color: #fcfcfc;\n  border-top: 1px solid #d9dfe9;\n  padding-bottom: 10rem;\n  padding-top: 10rem; }\n\n.c-heading, .c-heading--big, .c-heading--medium, .c-heading--small, .c-heading--heading, .c-heading--info {\n  font-family: \"Pangolin\", cursive;\n  font-size: 3rem; }\n  .c-heading--big {\n    font-size: 2.5rem; }\n  .c-heading--medium {\n    font-size: 2rem; }\n  .c-heading--small {\n    font-size: 1.6rem; }\n  .c-heading--heading {\n    font-size: 3rem; }\n  .c-heading--info {\n    color: #afafaf; }\n\n.c-button, .c-button--add, .c-button--delete, .c-button--clear {\n  background: none;\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: \"Pangolin\", cursive;\n  font-size: 1.7rem;\n  letter-spacing: .05em;\n  font-weight: 600;\n  height: 4.4rem;\n  line-height: 4.4rem;\n  min-width: 15rem;\n  padding: 0 1.5rem;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0); }\n  .c-button:after, .c-button--add:after, .c-button--delete:after, .c-button--clear:after {\n    content: '';\n    background: linear-gradient(to right, #457fca 50%, #5691c8 100%);\n    height: 4.4rem;\n    display: inline-block;\n    left: 0;\n    position: absolute;\n    top: 0;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    transition: -webkit-transform .4s ease;\n    transition: transform .4s ease;\n    transition: transform .4s ease, -webkit-transform .4s ease;\n    width: 200%;\n    z-index: -1; }\n  .c-button:not([disabled]):hover:after, .c-button--add:not([disabled]):hover:after, .c-button--delete:not([disabled]):hover:after, .c-button--clear:not([disabled]):hover:after, .c-button:not([disabled]):focus:after, .c-button--add:not([disabled]):focus:after, .c-button--delete:not([disabled]):focus:after, .c-button--clear:not([disabled]):focus:after {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  @media only screen and (min-width: 320px) and (max-width: 768px) {\n    .c-button, .c-button--add, .c-button--delete, .c-button--clear {\n      min-width: 18rem; } }\n  .c-button--add {\n    margin-right: 1rem; }\n    .c-button--add:after {\n      background: linear-gradient(to right, #2ecc71 50%, #27ae60 100%); }\n  .c-button--delete {\n    margin-right: 1rem; }\n    .c-button--delete:after {\n      background: linear-gradient(to right, #e74c3c 50%, #c0392b 100%); }\n  .c-button--clear:after {\n    background: linear-gradient(to right, #bdc3c7 50%, #95a5a6 100%); }\n  .c-button[disabled], [disabled].c-button--add, [disabled].c-button--delete, [disabled].c-button--clear {\n    background-color: #fcfcfc;\n    border: 1px solid rgba(217, 223, 233, 0.8);\n    color: rgba(0, 128, 199, 0.5);\n    cursor: default; }\n    .c-button[disabled]:after, [disabled].c-button--add:after, [disabled].c-button--delete:after, [disabled].c-button--clear:after {\n      content: none; }\n\n.c-list-data__container {\n  background-color: #f4f6f9;\n  border-top: 2px solid #d9dfe9;\n  display: block;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  padding-top: 3rem;\n  position: relative; }\n\n.c-list-data__row {\n  border: 1px solid #E9E9E9;\n  line-height: 2.4rem;\n  padding: 5rem 2.5rem 5rem;\n  border-radius: 5px;\n  position: relative; }\n  @media only screen and (min-width: 320px) and (max-width: 768px) and (max-height: 1024px) {\n    .c-list-data__row {\n      padding: 2rem 0rem 2rem;\n      margin-top: 2rem; } }\n  .c-list-data__row__label {\n    color: #666;\n    font-size: 1.2rem;\n    font-family: \"WorkSans-Italic\", sans-serif;\n    line-height: 1.8rem; }\n\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 150px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n  .row--no-margin {\n    margin-right: 0 !important;\n    margin-left: 0 !important; }\n  .row--no-padding > [class*=\"col-\"] {\n    padding-left: 0;\n    padding-right: 0; }\n  .row--trim-padding > [class*=\"col-\"]:first-child {\n    padding-left: 0 !important; }\n  .row--trim-padding > [class*=\"col-\"]:last-child {\n    padding-right: 0 !important; }\n\n.row-nowrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap; }\n\n.column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.col-xs {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0; }\n\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.333%;\n      flex-basis: 8.333%;\n  max-width: 8.333%; }\n\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.667%;\n      flex-basis: 16.667%;\n  max-width: 16.667%; }\n\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n      flex-basis: 25%;\n  max-width: 25%; }\n\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.333%;\n      flex-basis: 33.333%;\n  max-width: 33.333%; }\n\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.667%;\n      flex-basis: 41.667%;\n  max-width: 41.667%; }\n\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n      flex-basis: 50%;\n  max-width: 50%; }\n\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.333%;\n      flex-basis: 58.333%;\n  max-width: 58.333%; }\n\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.667%;\n      flex-basis: 66.667%;\n  max-width: 66.667%; }\n\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n      flex-basis: 75%;\n  max-width: 75%; }\n\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.333%;\n      flex-basis: 83.333%;\n  max-width: 83.333%; }\n\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.667%;\n      flex-basis: 91.667%;\n  max-width: 91.667%; }\n\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  max-width: 100%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.667%; }\n\n.start-xs {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.center-xs {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.end-xs {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.top-xs {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.middle-xs {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.bottom-xs {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end; }\n\n.around-xs {\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.between-xs {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1; }\n\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n@media only screen and (min-width: 320px) and (max-width: 1279px) {\n  .container {\n    width: 320px; }\n  .col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    padding-right: 15px;\n    padding-left: 15px; }\n  .col-sm {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0; }\n  .col-sm-1 {\n    -ms-flex-preferred-size: 8.333%;\n        flex-basis: 8.333%;\n    max-width: 8.333%; }\n  .col-sm-2 {\n    -ms-flex-preferred-size: 16.667%;\n        flex-basis: 16.667%;\n    max-width: 16.667%; }\n  .col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n        flex-basis: 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -ms-flex-preferred-size: 33.333%;\n        flex-basis: 33.333%;\n    max-width: 33.333%; }\n  .col-sm-5 {\n    -ms-flex-preferred-size: 41.667%;\n        flex-basis: 41.667%;\n    max-width: 41.667%; }\n  .col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -ms-flex-preferred-size: 58.333%;\n        flex-basis: 58.333%;\n    max-width: 58.333%; }\n  .col-sm-8 {\n    -ms-flex-preferred-size: 66.667%;\n        flex-basis: 66.667%;\n    max-width: 66.667%; }\n  .col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n        flex-basis: 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -ms-flex-preferred-size: 83.333%;\n        flex-basis: 83.333%;\n    max-width: 83.333%; }\n  .col-sm-11 {\n    -ms-flex-preferred-size: 91.667%;\n        flex-basis: 91.667%;\n    max-width: 91.667%; }\n  .col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    max-width: 100%; }\n  .col-sm-offset-1 {\n    margin-left: 8.333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.667%; }\n  .start-sm {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .center-sm {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .end-sm {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .top-sm {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .middle-sm {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .bottom-sm {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .around-sm {\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n  .between-sm {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .first-sm {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .last-sm {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; } }\n\n@media only screen and (min-width: 1280px) {\n  .container {\n    width: 1280px; }\n  .col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    padding-right: 15px;\n    padding-left: 15px; }\n  .col-lg {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0; }\n  .col-lg-1 {\n    -ms-flex-preferred-size: 8.333%;\n        flex-basis: 8.333%;\n    max-width: 8.333%; }\n  .col-lg-2 {\n    -ms-flex-preferred-size: 16.667%;\n        flex-basis: 16.667%;\n    max-width: 16.667%; }\n  .col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n        flex-basis: 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -ms-flex-preferred-size: 33.333%;\n        flex-basis: 33.333%;\n    max-width: 33.333%; }\n  .col-lg-5 {\n    -ms-flex-preferred-size: 41.667%;\n        flex-basis: 41.667%;\n    max-width: 41.667%; }\n  .col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -ms-flex-preferred-size: 58.333%;\n        flex-basis: 58.333%;\n    max-width: 58.333%; }\n  .col-lg-8 {\n    -ms-flex-preferred-size: 66.667%;\n        flex-basis: 66.667%;\n    max-width: 66.667%; }\n  .col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n        flex-basis: 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -ms-flex-preferred-size: 83.333%;\n        flex-basis: 83.333%;\n    max-width: 83.333%; }\n  .col-lg-11 {\n    -ms-flex-preferred-size: 91.667%;\n        flex-basis: 91.667%;\n    max-width: 91.667%; }\n  .col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    max-width: 100%; }\n  .col-lg-offset-1 {\n    margin-left: 8.333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.667%; }\n  .start-lg {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .center-lg {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .end-lg {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .top-lg {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .middle-lg {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .bottom-lg {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .around-lg {\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n  .between-lg {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .first-lg {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .last-lg {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; } }\n\n@media screen and (min-width: 320px) and (max-width: 1279px) {\n  .container {\n    width: 100vw;\n    padding-right: 0;\n    padding-left: 0;\n    margin-right: auto;\n    margin-left: auto; } }\n\n.svg {\n  background-position: bottom right;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: inline-block;\n  height: 160px;\n  position: relative;\n  width: 200px; }\n\n.svg-icon {\n  background-position: top left;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: inline-block;\n  height: 24px;\n  position: relative;\n  width: 24px; }\n\n.svg--salad {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/salad.svg") + ");\n  height: 10rem;\n  width: 15rem; }\n\n.svg--loaf {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/loaf.svg") + ");\n  height: 10rem;\n  width: 15rem; }\n\n.svg--jam {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/jam.svg") + ");\n  height: 10rem;\n  width: 15rem; }\n\n.svg--rice {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/rice.svg") + ");\n  height: 10rem;\n  width: 15rem; }\n\n.svg--green-pepper {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/green-pepper.svg") + ");\n  height: 10rem;\n  width: 13rem; }\n\n.svg--plant {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/plant.svg") + ");\n  height: 10rem;\n  width: 7rem;\n  margin-left: 2rem; }\n\n.svg--caret-down {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/caret-down.svg") + ");\n  vertical-align: middle; }\n\n.header {\n  position: fixed;\n  width: 100%;\n  height: 150px;\n  left: 0;\n  top: 0;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);\n  transition: -webkit-transform 0.7s .1s ease;\n  transition: transform 0.7s .1s ease;\n  transition: transform 0.7s .1s ease, -webkit-transform 0.7s .1s ease;\n  background-color: #252830;\n  z-index: 2000; }\n  .header__logo {\n    background-image: url(" + __webpack_require__("../../../../../src/assets/images/board.svg") + ");\n    background-repeat: no-repeat;\n    display: inline-block;\n    height: 13rem;\n    width: 24rem; }\n    @media only screen and (min-width: 320px) and (max-width: 1279px) and (max-height: 738px) {\n      .header__logo {\n        height: 10rem;\n        width: 18rem; } }\n    @media only screen and (min-width: 320px) and (max-width: 768px) and (max-height: 738px) {\n      .header__logo {\n        height: 6rem;\n        width: 13rem; } }\n  .header .main-nav {\n    height: 100%; }\n    @media only screen and (min-width: 320px) and (max-width: 768px) and (max-height: 738px) {\n      .header .main-nav__container {\n        padding-top: 1rem; } }\n    .header .main-nav__list-item {\n      display: inline-block;\n      position: relative;\n      z-index: 0;\n      margin: 2rem;\n      cursor: pointer;\n      color: #7d7d7d; }\n      .header .main-nav__list-item--link,\n      .header .main-nav__list-item .active {\n        display: inline-block;\n        text-decoration: none;\n        font-family: \"Pangolin\", cursive;\n        color: #fff;\n        letter-spacing: .05em;\n        font-weight: 600;\n        margin: 0 2rem;\n        padding: 1.6rem 1rem;\n        font-size: 2rem; }\n        @media only screen and (min-width: 320px) and (max-width: 768px) and (max-height: 738px) {\n          .header .main-nav__list-item--link,\n          .header .main-nav__list-item .active {\n            display: block;\n            margin: 0;\n            padding: 0; } }\n      .header .main-nav__list-item--link:before, .header .main-nav__list-item--link:after {\n        position: absolute;\n        left: 0px;\n        width: 100%;\n        height: 2px;\n        background-color: #fff;\n        content: \"\";\n        opacity: 0;\n        transition: all 0.3s; }\n      .header .main-nav__list-item--link:before {\n        top: 0;\n        -webkit-transform: translateY(10px);\n                transform: translateY(10px); }\n      .header .main-nav__list-item--link:after {\n        bottom: 0;\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px); }\n      .header .main-nav__list-item--link:hover:before, .header .main-nav__list-item--link:hover:after {\n        opacity: 1;\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px); }\n      @media only screen and (min-width: 320px) and (max-width: 768px) and (max-height: 738px) {\n        .header .main-nav__list-item {\n          display: block;\n          margin: 0;\n          padding: 1rem 1rem; } }\n\n.active:before,\n.active:after {\n  position: absolute;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: #fff;\n  content: \"\";\n  transition: all 0.3s;\n  opacity: 1 !important;\n  -webkit-transform: translateY(0px) !important;\n          transform: translateY(0px) !important; }\n\n.scrolled {\n  -webkit-transform: translate(0, -100%);\n          transform: translate(0, -100%); }\n\n.app-r {\n  border: none;\n  border-bottom: none !important; }\n\n.dropdown {\n  position: relative;\n  -ms-flex-preferred-size: 37.667%;\n      flex-basis: 37.667%;\n  max-width: 37.667%; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 1.5rem;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 177px;\n  padding: 1rem;\n  margin: 2px 0 0;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175); }\n  .dropdown-menu--item:hover {\n    font-weight: bolder;\n    cursor: pointer; }\n\n.recipe-details-image {\n  height: auto;\n  width: 640px;\n  max-width: 100%;\n  border-radius: 5px;\n  cursor: pointer; }\n\n.recipe-details-row {\n  cursor: default;\n  padding-top: 2rem;\n  padding-bottom: 1rem;\n  padding-left: 1rem; }\n  .recipe-details-row--name {\n    padding-top: 4rem;\n    padding-left: 1rem;\n    cursor: default; }\n\n.gray {\n  background-color: gray; }\n\n.recipe-single-listed {\n  border: 1px solid #E9E9E9;\n  border-radius: 5px;\n  line-height: 2.4rem;\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n  cursor: pointer;\n  margin-bottom: 2rem; }\n  @media only screen and (min-width: 320px) and (max-width: 768px) {\n    .recipe-single-listed {\n      margin: 0.2rem 0.2rem 2rem; } }\n  .recipe-single-listed__image {\n    height: auto;\n    width: 230px;\n    max-width: 100%;\n    border-radius: 3px; }\n\n.new-recipe-button {\n  padding-bottom: 5rem; }\n\n.recipe-active {\n  background-color: #ECECEC; }\n\n.list-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  padding-top: 3rem; }\n  .list-group-item {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row wrap;\n            flex-flow: row wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: .75rem 1.25rem;\n    margin-bottom: -1px;\n    background-color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    border-radius: 5px; }\n  .list-group-item:hover {\n    background-color: #ECECEC;\n    cursor: default; }\n\n.buttons-container {\n  padding-top: 4rem; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("../../../../style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../../../style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/assets/scss/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map