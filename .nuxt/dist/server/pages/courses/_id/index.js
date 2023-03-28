exports.ids = [3];
exports.modules = {

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("4d5799be", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a11ddba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a11ddba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a11ddba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a11ddba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2a11ddba_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{background-color:#f0eaea;border:1px solid #000;border-radius:10px;gap:1rem;margin:3rem auto auto;padding:1rem;width:80%}.ingredients{display:flex;justify-content:space-around;list-style:none}.ingredient{align-items:center;border:1px solid #000;border-radius:10px;cursor:pointer;display:flex;flex-direction:column;justify-content:center;margin:10px;padding:10px;width:200px}.ingredient:hover{background-color:#ccc}.course_card{align-items:center;border:1px solid #000;display:flex;flex-direction:column;gap:1rem;justify-content:center;margin:3rem auto auto;padding:1rem;width:80%}.card_img,.course_card{border-radius:10px}.reviews{display:flex;flex-wrap:wrap;justify-content:space-around;list-style:none}.review{border:1px solid #000;border-radius:10px;margin:10px;padding:10px;width:300px}.username{font-weight:700;margin:0;position:relative;right:0}.buscador{border:1px solid #000;margin:10px;padding:10px;text-align:center;width:180px}.buscador,.volver{border-radius:10px}.volver{background-color:#2c3e50;color:#fff;font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:900;gap:1rem;height:30px;justify-content:center;padding:auto;width:100px}.volver:hover{background-color:#fff;color:#2c3e50;cursor:pointer}html{background-image:url(https://www.sleek-mag.com/wp-content/uploads/2017/08/Brave-Factory-Music-Festival-5.jpg)}.course_name{color:#2c3e50;font-size:.8rem}.course_name,.reseña{font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:700;margin:0}.reseña{background-color:#2c3e50;border-radius:10px;color:#fff;padding:10px}.reseña:hover{background-color:#fff;color:#2c3e50;cursor:pointer}.input{margin:5px 40px 5px 5px;padding:5px}.form_container,.input{border:1px solid #000;border-radius:10px}.form_container{align-items:center;background-color:#e3e3eb;display:flex;justify-content:center;margin:10px;padding:10px}.texto_reseña{border:1px solid #000;border-radius:10px;margin:5px 40px 5px 5px;padding:5px;width:300px}.botones{margin-bottom:20px}.boton,.botones{display:flex;gap:1rem;justify-content:center}.boton{background-color:#2c3e50;border-radius:10px;color:#fff;font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:900;height:30px;padding:auto;width:100px}.boton:hover{background-color:#fff;color:#2c3e50;cursor:pointer}.boton_2{background-color:#2c3e50;border-radius:10px;color:#fff;font-family:\"Catamaran\",sans-serif;font-style:italic;font-weight:900;gap:1rem;height:30px;justify-content:center;padding:auto;width:200px}.boton_2:hover{background-color:#fff;color:#2c3e50;cursor:pointer}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/_id/index.vue?vue&type=template&id=2a11ddba&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<button onclick=\"history.back()\" class=\"volver\">Volver</button>  \n  <div class=\"course_card\"><h2>" + _vm._ssrEscape(_vm._s(_vm.course.name)) + "</h2> <img" + _vm._ssrAttr("src", _vm.course.img_url) + " alt=\"course.name\" width=\"200\" height=\"200\" class=\"card_img\"> <h2>" + _vm._ssrEscape(_vm._s(_vm.course.description)) + "</h2></div> <h2>" + _vm._ssrEscape("$" + _vm._s(_vm.course.price)) + "</h2> <h2>" + _vm._ssrEscape("Tamaño: " + _vm._s(_vm.course.size)) + "</h2> <h2>" + _vm._ssrEscape("Expiración: " + _vm._s(_vm.course.expiration)) + "</h2> <h2>" + _vm._ssrEscape("Categoria: " + _vm._s(_vm.course.category)) + "</h2> " + (_vm.course.average != 'NaN' ? "<div><h2>" + _vm._ssrEscape(" Promedio Ratings: " + _vm._s(_vm.course.average)) + "</h2></div>" : "<!---->") + " <h1 style=\"text-align: center;\"> Ingredientes </h1> <input type=\"text\" placeholder=\"Buscar entre los ingredientes\"" + _vm._ssrAttr("value", _vm.search) + " class=\"buscador\"> <ul class=\"ingredients\">" + _vm._ssrList(_vm.filterlist, function (ingredient) {
    return "<li class=\"ingredient\">" + _vm._ssrEscape("\n      " + _vm._s(ingredient.name) + "\n      ") + "<br> <br> <img" + _vm._ssrAttr("src", ingredient.img_url) + " alt=\"ingredient.name\" width=\"100\" height=\"100\"> <br> <br>" + _vm._ssrEscape("\n      Cantidad: " + _vm._s(ingredient.quantity) + "\n    ") + "</li>";
  }) + "</ul> <h1 style=\"text-align: center;\"> Reseñas </h1> <p style=\" font-size: 20px; font-weight: 900; font-family: 'Catamaran'; sans-serif; font-style: italic;\">Ordenar Por:</p> <div class=\"botones\"><button name=\"order\" id=\"fecha,asc\" class=\"boton_2\"> Fecha Ascendente</button> <button name=\"order\" id=\"fecha,desc\" class=\"boton_2\">Fecha Descendente</button> <button name=\"order\" id=\"rating,asc\" class=\"boton_2\">Rating (Menor a Mayor)</button> <button name=\"order\" id=\"rating,desc\" class=\"boton_2\">Rating (Mayor a Menor)</button></div> <div class=\"reviews\">" + _vm._ssrList(_vm.course.reviews, function (review) {
    return "<li class=\"review\">" + _vm._ssrEscape("\n      " + _vm._s(review.rating) + " / 5 ") + "<br>" + _vm._ssrEscape("\n      " + _vm._s(review.content) + " ") + "<br> <hr> <p class=\"username\">" + _vm._ssrEscape(_vm._s(review.username)) + "</p>" + _vm._ssrEscape(" \n      " + _vm._s(review.date.split(" ")[0]) + "\n      ") + "<br> <br></li>";
  }) + "</div> <br> " + (!_vm.showReviewForm ? "<div><button class=\"reseña\">Dejar una reseña</button></div>" : "<!---->") + " " + (_vm.showReviewForm ? "<div class=\"form_container\"><form><label><input type=\"text\" placeholder=\"ingrese su email\"" + _vm._ssrAttr("value", _vm.email) + " class=\"input\"></label> <label><input type=\"password\" placeholder=\"ingrese contraseña\"" + _vm._ssrAttr("value", _vm.contraseña) + " class=\"input\"></label> <label><input type=\"text\" placeholder=\"ingrese su reseña..\"" + _vm._ssrAttr("value", _vm.review) + " class=\"texto_reseña\"></label> <label><input min=\"1\" max=\"5\" type=\"number\" placeholder=\"rating\"" + _vm._ssrAttr("value", _vm.rating) + " class=\"input\"></label> <button type=\"button\" class=\"reseña\">Enviar reseña</button></form></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/courses/_id/index.vue?vue&type=template&id=2a11ddba&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/_id/index.vue?vue&type=script&lang=js&

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
    const response = await fetch(url + '/courses/' + params.id);
    const course = await response.json();
    const response2 = await external_axios_default.a.get(url + '/reviews/' + course.id, {
      params: {
        entity_id: course.id
      }
    });
    course.reviews = response2.data;
    course.average = (course.reviews.map(review => review.rating).reduce((a, b) => a + b, 0) / course.reviews.length).toFixed(1);
    return {
      course
    };
  },
  computed: {
    filterlist() {
      return this.course.ingredients.filter(ingredient => {
        return ingredient.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    selectIngredient(id) {
      this.$router.push('/ingredients/' + id);
    },
    showPopup() {
      this.showReviewForm = true;
    },
    orderBy(event) {
      const order = event.target.id.split(",")[0];
      if (order === "fecha") {
        //order tray.review by date
        if (event.target.id.split(",")[1] === "asc") {
          this.course.reviews.sort((a, b) => a.date >= b.date ? 1 : -1);
        } else {
          this.course.reviews.sort((a, b) => a.date <= b.date ? 1 : -1);
        }
      } else {
        if (event.target.id.split(",")[1] === "asc") {
          this.course.reviews.sort((a, b) => a.rating >= b.rating ? 1 : -1);
        } else {
          this.course.reviews.sort((a, b) => a.rating <= b.rating ? 1 : -1);
        }
      }
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
        alert("Error al enviar la reseña.");
        this.showReviewForm = false;
      }
    }
  },
  mounted() {
    this.entity_id = this.$route.params.id;
  }
});
// CONCATENATED MODULE: ./pages/courses/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var courses_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/courses/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  courses_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "66e7f317"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map