exports.ids = [4];
exports.modules = {

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("6f967a90", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bafa6fb_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bafa6fb_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bafa6fb_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bafa6fb_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bafa6fb_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#app{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50;font-family:Avenir,Helvetica,Arial,sans-serif;margin-top:60px;text-align:center}.container{gap:1rem;margin:auto;padding:1rem}.menus{grid-gap:1rem;background-color:#2c3e50;display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(320px,1fr))}.menu,.menus{border:1px solid #ccc;border-radius:4px;margin-bottom:10px;padding:10px}.menu{background-color:#fff;list-style:none;min-height:150px}.menu:hover{background-color:#ccc;cursor:pointer}.botones{display:flex;gap:1rem;justify-content:center}.title{color:grey;font-family:\"Catamaran\",sans-serif;font-size:3rem;font-style:italic;font-weight:900;position:relative;text-transform:uppercase}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5bafa6fb&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.trays.length > 0 ? _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<h1 class=\"title\"> Bienvenido al RestoRave! </h1> <h2> Menus para agitar la cabeza</h2> <ul class=\"menus\">" + _vm._ssrList(_vm.trays, function (tray) {
    return "<li class=\"menu\">" + _vm._ssrEscape("\n      " + _vm._s(tray.name) + "\n      ") + "<br> <br> <h2>" + _vm._ssrEscape("$ " + _vm._s(tray.price)) + "</h2></li>";
  }) + "</ul> <div class=\"botones\">" + (this.page > 1 ? "<button>Anterior</button>" : "<!---->") + " " + (this.page < this.total_pages ? "<button>Siguiente</button>" : "<!---->") + "</div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5bafa6fb&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'App',
  components: {},
  data() {
    return {
      trays: [],
      page: 1,
      size: 15
    };
  },
  methods: {
    showTray(id) {
      window.location.href = '/trays/' + id;
    },
    nextPage() {
      this.page = this.page + 1;
      console.log(this.page);
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl';
      external_axios_default.a.get(url + '/trays', {
        params: {
          page: this.page,
          size: this.size
        }
      }).then(response => {
        this.trays = response.data.items;
        console.log(this.trays);
      }).catch(error => {
        console.log(error);
      });
    },
    prevPage() {
      if (this.page > 1) {
        this.page = this.page - 1;
        console.log(this.page);
        const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl';
        external_axios_default.a.get(url + '/trays', {
          params: {
            page: this.page,
            size: this.size
          }
        }).then(response => {
          this.trays = response.data.items;
          console.log(this.trays);
        }).catch(error => {
          console.log(error);
        });
      }
    }
  },
  mounted() {
    const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl';
    external_axios_default.a.get(url + '/trays', {
      params: {
        page: 1,
        size: this.size
      }
    }).then(response => {
      this.trays = response.data.items;
      this.total_pages = response.data.pages;
    }).catch(error => {
      console.log(error);
    });
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "33db94c3"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map