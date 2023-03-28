<template>
  <div class="container">
    <button onclick="history.back()" class="volver">Volver</button> &nbsp;

    <div class="card">
      <h2 class="name">{{ ingredient.name }}</h2>
      <img :src="ingredient.img_url" alt="ingredient.name" width="100" height="100">
      <h2>{{ ingredient.description }}</h2>
    </div>

    <h2>${{ ingredient.price }}</h2>
    <h2>Tamaño: {{ ingredient.size }}</h2>
    <h2>Expiración: {{ ingredient.expiration }}</h2>

    <div v-if="ingredient.average != 'NaN'">
      <h2> Promedio Rating: {{ ingredient.average }}</h2>
    </div>

    <h3> Reseñas: </h3>
    <div class="reviews">
      <li v-for="review in ingredient.reviews" :key="review.id" class="review">
        {{ review.rating }} / 5 <br>
        {{ review.content }} <br>
        <hr>
        <p class="username">{{  review.username }}</p> 
        {{ review.date.split(" ")[0] }}
        <br> <br>
      </li>
    </div>
    <br>
    <div v-if="!showReviewForm">
    <button class="reseña" @click="showPopup">Dejar una reseña</button>
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
        <button class="reseña" type="button" @click="submitReview">Enviar reseña</button>
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
.volver {
  justify-content: center;
  gap: 1rem;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: #2c3e50;
  color: white;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
  padding: auto;
}
.volver:hover {
  background-color: white;
  color: #2c3e50;
  cursor: pointer;
}
.reviews {
  display: flex;
  align-items: center;
  list-style: none;
  height: auto;
}
.review {
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  width: 300px;
}
.username {
  font-weight: bold;
  margin: 0;
  right: 0;
  position: relative;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  margin: auto;
  border: 1px solid black;
  width: 80%;
  margin-top: 3rem;
  border-radius: 10px;
}
html {
  background-image: url(https://www.sleek-mag.com/wp-content/uploads/2017/08/Brave-Factory-Music-Festival-5.jpg)
}
.name {
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
  margin: 0;
}
.reseña {
  background-color: #2c3e50;
  color: white;
  font-weight: bold;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
  margin: 0;
  padding: 10px;
  border-radius: 10px;
}
.reseña:hover {
  cursor: pointer;
  color: #2c3e50;
  background-color: white;
}
</style>
