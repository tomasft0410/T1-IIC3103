<template>
  <div class="container">
    <h1>Seleccioanste un ingrediente!</h1>
	  <h2>{{ ingredient.name }}</h2>
    <img :src="ingredient.img_url" alt="ingredient.name" width="100" height="100">
    <h2>{{ ingredient.description }}</h2>
    <h2>${{ ingredient.price }}</h2>
    <h2>Tamaño: {{ ingredient.size }}</h2>
    <h2>Expiración: {{ ingredient.expiration }}</h2>
    <div v-if="ingredient.average != 'NaN'">
      <h2> Promedio Rating: {{ ingredient.average }}</h2></div>
    <h3> Reseñas: </h3>
    <li v-for="review in ingredient.reviews" :key="review.id" class="review">
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
		const response = await fetch(url + '/ingredients/' + params.id)
		const ingredient = await response.json()
    const response2 = await axios.get(url + '/reviews/' + ingredient.id, {
      params: {
        entity_id: ingredient.id,
      }
    })
    //calculate the averge rating with map and truncate with 1 decimal
    ingredient.average = (response2.data.map(review => review.rating).reduce((a, b) => a + b, 0) / response2.data.length).toFixed(1)
    ingredient.reviews = response2.data
		return { ingredient }
	},
  methods: {
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
        alert("Ocurrió un error al enviar la reseña.");
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
</style>
