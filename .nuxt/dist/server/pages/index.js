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
  add("e5822780", content, true, context)
};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fdad8d3a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fdad8d3a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fdad8d3a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fdad8d3a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fdad8d3a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{background-color:#f0eaea;border:1px solid #000;border-radius:10px;gap:1rem;margin:3rem auto auto;padding:1rem;width:80%}.menus{grid-gap:1rem;background-color:#2c3e50;display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(320px,1fr))}.menu,.menus{border:1px solid #ccc;border-radius:4px;margin-bottom:10px;padding:10px}.menu{background-color:#fff;border-radius:10px;list-style:none;min-height:80px}.menu:hover{background-color:#ccc;cursor:pointer}.botones{display:flex;gap:1rem;justify-content:center}.title{color:#2c3e50;font-family:\"Catamaran\",sans-serif;font-size:3rem;font-style:italic;font-weight:900;position:relative;-moz-text-align-last:center;text-align-last:center;text-transform:uppercase}.buscador{border:1px solid #000;border-radius:10px;margin:10px;padding:10px}.texto{color:#13a01a;font-size:1rem}.boton,.texto{display:flex;font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:900;justify-content:center}.boton{background-color:#2c3e50;border-radius:10px;color:#fff;gap:1rem;height:30px;padding:auto;width:100px}.boton:hover{background-color:#fff;color:#2c3e50;cursor:pointer}.boton_2{background-color:#2c3e50;border-radius:10px;color:#fff;font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:900;gap:1rem;height:30px;justify-content:center;padding:auto;width:200px}.boton_2:hover{background-color:#fff;color:#2c3e50;cursor:pointer}.name,.price{color:#2c3e50;font-family:\"Catamaran\",sans-serif;font-size:1.5rem;font-style:italic;font-weight:900;margin:0}html{background-image:url(https://www.sleek-mag.com/wp-content/uploads/2017/08/Brave-Factory-Music-Festival-5.jpg)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=fdad8d3a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.trays.length >= 0 ? _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<h1 class=\"title\"> RestoRave </h1> <div><p style=\" font-size: 20px; font-weight: 900; font-family: 'Catamaran', sans-serif; font-style: italic;\">Ordenar Por:</p> <div class=\"botones\"><button name=\"order\" id=\"name,asc\" class=\"boton_2\">Nombre (A-Z)</button> <button name=\"order\" id=\"name,desc\" class=\"boton_2\">Nombre (Z-A)</button> <button name=\"order\" id=\"price,asc\" class=\"boton_2\">Precio (Menor a Mayor)</button> <button name=\"order\" id=\"price,desc\" class=\"boton_2\">Precio (Mayor a Menor)</button></div></div> <input type=\"text\" placeholder=\"Buscar un menu por nombre\"" + _vm._ssrAttr("value", _vm.search) + " class=\"buscador\"> <ul class=\"menus\">" + _vm._ssrList(_vm.filterlist, function (tray) {
    return "<li class=\"menu\"><p class=\"name\">" + _vm._ssrEscape(_vm._s(tray.name)) + "</p> <br> <br> <h2 class=\"price\">" + _vm._ssrEscape("$ " + _vm._s(tray.price)) + "</h2></li>";
  }) + "</ul> <div class=\"botones\">" + (this.page > 1 ? "<button class=\"boton\">Anterior</button>" : "<!---->") + " " + (this.page < this.total_pages ? "<button class=\"boton\">Siguiente</button>" : "<!---->") + "</div>")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=fdad8d3a&

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
      size: 15,
      search: '',
      sort: 'name',
      order: 'asc',
      total_pages: 0
    };
  },
  methods: {
    showTray(id) {
      this.$router.push(`/trays/${id}`);
    },
    nextPage() {
      this.page = this.page + 1;
      console.log(this.page);
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl';
      external_axios_default.a.get(url + '/trays', {
        params: {
          page: this.page,
          size: this.size,
          sort: this.sort,
          order: this.order
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
            size: this.size,
            sort: this.sort,
            order: this.order
          }
        }).then(response => {
          this.trays = response.data.items;
          console.log(this.trays);
        }).catch(error => {
          console.log(error);
        });
      }
    },
    orderBy(event) {
      this.order = event.target.id.split(',')[1];
      this.sort = event.target.id.split(',')[0];
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl';
      external_axios_default.a.get(url + '/trays', {
        params: {
          page: 1,
          size: this.size,
          sort: event.target.id.split(',')[0],
          order: event.target.id.split(',')[1]
        }
      }).then(response => {
        this.trays = response.data.items;
        console.log(this.trays);
      }).catch(error => {
        console.log(error);
      });
    },
    searchTrayByName() {
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl';
      external_axios_default.a.get(url + '/search/trays', {
        params: {
          name: this.search
        }
      }).then(response => {
        console.log(response.data);
        this.trays = response.data;
      }).catch(error => {
        console.log(error);
      });
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
  },
  computed: {
    filterlist() {
      return this.trays.filter(tray => {
        return tray.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
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