<template>
  <div class="container">
    <h1>El menu seleccionado es:</h1>
    <ul class="platos">
      <li v-for="course in tray.courses" :key="course.id" @click="selectCourse(course.id)" class="plato">
        {{ course.name }}
        <br> <br>
        <img :src="course.img_url" alt="course.name" width="100" height="100">
      </li>
    </ul>
    <h3>{{ tray.description[0] }}</h3>
    <h3>${{ tray.price }}</h3>
    <h3>Tamaño: {{ tray.size }}</h3>
    <h3>Expiración: {{ tray.expiration }}</h3> 
    <div v-if="tray.average != 'NaN'">
      <h3>Promedio rating {{ tray.average }}</h3></div>
    <h3> Reseñas: </h3>
    <li v-for="review in tray.reviews" :key="review.id" class="review">
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
		const response = await fetch(url + '/trays/' + params.id)
		const tray = await response.json()
    tray.name = tray.name.split(',')
    const response2 = await axios.get(url + '/reviews/' + tray.id, {
      params: {
        entity_id: tray.id,
      }
    })
    tray.reviews = response2.data
    tray.average = (tray.reviews.map(review => review.rating).reduce((a, b) => a + b, 0) / tray.reviews.length).toFixed(1)
		return { tray }
	},
  methods: {
    selectCourse (id) {
      this.$router.push('/courses/' + id)
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
.platos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
}
.plato {
  width: 200px;
  height: 300px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}
.plato:hover {
  background-color: lightgray;
}
</style>
