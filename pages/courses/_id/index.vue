<template>
  <div class="container">
    <h1>El plato que seleccionaste es: {{ course.name }}</h1>
    <img :src="course.img_url" alt="course.name" width="100" height="100">
    <h2>{{ course.description }}</h2>
    <h2>${{ course.price }}</h2>
    <h2>Tamaño: {{ course.size }}</h2>
    <h2>Expiración: {{ course.expiration }}</h2>
    <h2>Categoria: {{ course.category }}</h2>
    <div v-if="course.average != 'NaN'">
      <h2> Promedio Ratings {{ course.average }}</h2>
    </div>
    <h3> Reseñas: </h3>
    <li v-for="review in course.reviews" :key="review.id" class="review">
      {{ review.content }}
      {{ review.rating }}
      {{  review.username }}
    </li>
    <br>
    <div v-if="!showReviewForm">
    <button @click="showPopup">Dejar una reseña</button>
    </div>
    <div v-if="showReviewForm">
      <form>
        <label>
          Email:
          <input type="text" v-model="email" />
        </label>
        <label>
          Contraseña:
          <input type="email" v-model="contraseña" />
        </label>
        <label>
          Reseña:
          <textarea v-model="review"></textarea>
        </label>
        <label>
          rating:
          <input min="1" max="5" type="number" v-model="rating" />
        </label>
        <button type="button" @click="submitReview">Enviar reseña</button>
      </form>
    </div>
    <h1>Ingredientes:</h1>
     <!-- buscar por nombre -->
     <input type="text" v-model="search" placeholder="Search">
    <ul class="ingredients">
      <li v-for="ingredient in filterlist" :key="ingredient.id" @click="selectIngredient(ingredient.id)" class="ingredient">
        {{ ingredient.name }}
        <br> <br>
        <img :src="ingredient.img_url" alt="ingredient.name" width="100" height="100">
        <br> <br>
        Cantidad: {{ ingredient.quantity }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      search: '',
      showReviewForm: false,
      email: "",
      contraseña: "",
      review: "",
      rating : 0,
      entity_id : '',
    }
  },
  async asyncData ({ params }) {
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl'
      const response = await fetch(url + '/courses/' + params.id)
      const course = await response.json()
      const response2 = await axios.get(url + '/reviews/' + course.id, {
      params: {
        entity_id: course.id,
              }
      })
      course.reviews = response2.data
      course.average = (course.reviews.map(review => review.rating).reduce((a, b) => a + b, 0) / course.reviews.length).toFixed(1)
      console.log((course.reviews.map(review => review.rating).reduce((a, b) => a + b, 0) / course.reviews.length).toFixed(1))
      return { course }
  },
  computed: {
    filterlist() {
      return this.course.ingredients.filter((ingredient) => {
        return ingredient.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    selectIngredient (id) {
      this.$router.push('/ingredients/' + id)
    },
    showPopup() {
        this.showReviewForm = true;
    },
    async submitReview() {
      try {
        await axios(
          {
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
    },
  },
  mounted () {
    this.entity_id = this.$route.params.id
  }
}
</script>

<style>
.container {
  gap: 1rem;
  padding: 1rem;
  margin: auto;
  border: 1px solid black;
  width: 80%;
  background-color: #f0eaea;
  margin-top: 3rem;
}
.ingredients {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
}
.ingredient {
  width: 200px;
  height: 300px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}
.ingredient:hover {
  background-color: #ccc;
}
</style>