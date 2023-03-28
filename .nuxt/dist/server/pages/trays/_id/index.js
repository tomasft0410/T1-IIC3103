exports.ids = [6];
exports.modules = {

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("f8a819fa", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2f96c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2f96c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2f96c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2f96c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5d2f96c4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{background-color:#f0eaea;border:1px solid #000;border-radius:10px;gap:1rem;margin:3rem auto auto;padding:1rem;width:80%}.platos{display:flex;height:auto;justify-content:space-around;list-style:none}.plato{border:1px solid #000;border-radius:10px;cursor:pointer;margin:10px;padding:10px;width:200px}.plato:hover{background-color:#d3d3d3}.card{align-items:center;display:flex;flex-direction:column}.card,.card_img{border-radius:10px}.card_img{max-height:100%;max-width:100%}.reviews{align-items:center;display:flex;height:auto;list-style:none}.review{border:1px solid #000;border-radius:10px;margin:10px;padding:10px;width:300px}.username{font-weight:700;margin:0;position:relative;right:0}.buscador,.form_container{border:1px solid #000;border-radius:10px;margin:10px;padding:10px}.form_container{align-items:center;background-color:#e3e3eb;display:flex;justify-content:center}.volver{background-color:#2c3e50;border-radius:10px;color:#fff;font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:900;gap:1rem;height:30px;justify-content:center;padding:auto;width:100px}.volver:hover{background-color:#fff;color:#2c3e50;cursor:pointer}html{background-image:url(https://www.sleek-mag.com/wp-content/uploads/2017/08/Brave-Factory-Music-Festival-5.jpg)}.tray_name{color:#2c3e50;font-size:.8rem}.reseña,.tray_name{font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:700;margin:0}.reseña{background-color:#2c3e50;border-radius:10px;color:#fff;padding:10px}.reseña:hover{background-color:#fff;color:#2c3e50;cursor:pointer}.input,.texto_reseña{border:1px solid #000;border-radius:10px;margin:5px 40px 5px 5px;padding:5px}.texto_reseña{width:300px}.botones{margin-bottom:20px}.boton,.botones{display:flex;gap:1rem;justify-content:center}.boton{background-color:#2c3e50;border-radius:10px;color:#fff;font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:900;height:30px;padding:auto;width:100px}.boton:hover{background-color:#fff;color:#2c3e50;cursor:pointer}.boton_2{background-color:#2c3e50;border-radius:10px;color:#fff;font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:900;gap:1rem;height:30px;justify-content:center;padding:auto;width:200px}.boton_2:hover{background-color:#fff;color:#2c3e50;cursor:pointer}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/trays/_id/index.vue?vue&type=template&id=5d2f96c4&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<button onclick=\"history.back()\" class=\"volver\">Volver</button>  \n  <input type=\"text\" placeholder=\"Buscar plato por nombre\"" + _vm._ssrAttr("value", _vm.search) + " class=\"buscador\"> <h1>El menu seleccionado contiene los siguientes platos:</h1> <ul class=\"platos\">" + _vm._ssrList(_vm.filterlist, function (course) {
    return "<li class=\"plato\"><p class=\"tray_name\">" + _vm._ssrEscape(_vm._s(course.name)) + "</p> <br> <img" + _vm._ssrAttr("src", course.img_url) + " alt=\"course.name\" class=\"card_img\"></li>";
  }) + "</ul> <h3>" + _vm._ssrEscape(_vm._s(_vm.tray.description)) + "</h3> <h3>" + _vm._ssrEscape("$" + _vm._s(_vm.tray.price)) + "</h3> <h3>" + _vm._ssrEscape("Tamaño: " + _vm._s(_vm.tray.size)) + "</h3> <h3>" + _vm._ssrEscape("Expiración: " + _vm._s(_vm.tray.expiration)) + "</h3> " + (_vm.tray.average != 'NaN' ? "<div><h3>" + _vm._ssrEscape("Promedio rating: " + _vm._s(_vm.tray.average)) + "</h3></div>" : "<!---->") + " <h1 style=\"text-align: center;\"> Reseñas </h1> <p style=\" font-size: 20px; font-weight: 900; font-family: 'Catamaran'; sans-serif; font-style: italic;\">Ordenar Por:</p> <div class=\"botones\"><button name=\"order\" id=\"fecha,asc\" class=\"boton_2\"> Fecha Ascendente</button> <button name=\"order\" id=\"fecha,desc\" class=\"boton_2\">Fecha Descendente</button> <button name=\"order\" id=\"rating,asc\" class=\"boton_2\">Rating (Menor a Mayor)</button> <button name=\"order\" id=\"rating,desc\" class=\"boton_2\">Rating (Mayor a Menor)</button></div> <div class=\"reviews\">" + _vm._ssrList(_vm.tray.reviews, function (review) {
    return "<li class=\"review\">" + _vm._ssrEscape("\n      " + _vm._s(review.rating) + " / 5 ") + "<br>" + _vm._ssrEscape("\n      " + _vm._s(review.content) + " ") + "<br> <hr> <p class=\"username\">" + _vm._ssrEscape(_vm._s(review.username)) + "</p>" + _vm._ssrEscape(" \n      " + _vm._s(review.date.split(" ")[0]) + "\n      ") + "<br> <br></li>";
  }) + "</div> <br> " + (!_vm.showReviewForm ? "<div><button class=\"reseña\">Dejar una reseña</button></div>" : "<!---->") + " " + (_vm.showReviewForm ? "<div class=\"form_container\"><form><label><input type=\"text\" placeholder=\"ingrese su email\"" + _vm._ssrAttr("value", _vm.email) + " class=\"input\"></label> <label><input type=\"password\" placeholder=\"ingrese contraseña\"" + _vm._ssrAttr("value", _vm.contraseña) + " class=\"input\"></label> <label><input type=\"text\" placeholder=\"ingrese su reseña..\"" + _vm._ssrAttr("value", _vm.review) + " class=\"texto_reseña\"></label> <label><input min=\"1\" max=\"5\" type=\"number\" placeholder=\"rating\"" + _vm._ssrAttr("value", _vm.rating) + " class=\"input\"></label> <button type=\"button\" class=\"reseña\">Enviar reseña</button></form></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/trays/_id/index.vue?vue&type=template&id=5d2f96c4&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/trays/_id/index.vue?vue&type=script&lang=js&

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: 'App',
  components: {},
  data() {
    return {
      search: '',
      showReviewForm: false,
      email: "",
      contraseña: "",
      review: "",
      rating: "",
      entity_id: ''
    };
  },
  async asyncData({
    params
  }) {
    const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl';
    const response = await fetch(url + '/trays/' + params.id);
    const tray = await response.json();
    tray.name = tray.name.split(',');
    const response2 = await external_axios_default.a.get(url + '/reviews/' + tray.id, {
      params: {
        entity_id: tray.id
      }
    });
    tray.reviews = response2.data;
    tray.average = (tray.reviews.map(review => review.rating).reduce((a, b) => a + b, 0) / tray.reviews.length).toFixed(1);
    return {
      tray
    };
  },
  computed: {
    filterlist() {
      return this.tray.courses.filter(course => {
        return course.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    selectCourse(id) {
      this.$router.push('/courses/' + id);
    },
    showPopup() {
      this.showReviewForm = true;
    },
    async submitReview() {
      try {
        await external_axios_default()({
          method: "post",
          url: "https://tarea-1.2023-1.tallerdeintegracion.cl/reviews",
          data: {
            "entity_id": this.entity_id,
            "email": this.email,
            "password": this.contraseña,
            "content": this.review,
            "rating": this.rating
          },
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          responseType: 'json'
        });
        alert("¡Gracias por tu reseña!");
        this.email = "";
        this.review = "";
        this.rating = 0;
        this.password = "";
        this.showReviewForm = false;
      } catch (error) {
        alert("Ocurrió un error al enviar la reseña.");
        this.showReviewForm = false;
      }
    },
    orderBy(event) {
      const order = event.target.id.split(",")[0];
      if (order === "fecha") {
        //order tray.review by date
        if (event.target.id.split(",")[1] === "asc") {
          this.tray.reviews.sort((a, b) => a.date >= b.date ? 1 : -1);
        } else {
          this.tray.reviews.sort((a, b) => a.date <= b.date ? 1 : -1);
        }
      } else {
        if (event.target.id.split(",")[1] === "asc") {
          this.tray.reviews.sort((a, b) => a.rating >= b.rating ? 1 : -1);
        } else {
          this.tray.reviews.sort((a, b) => a.rating <= b.rating ? 1 : -1);
        }
      }
    }
  },
  mounted() {
    this.entity_id = this.$route.params.id;
  }
});
// CONCATENATED MODULE: ./pages/trays/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var trays_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/trays/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  trays_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0087c8dc"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map