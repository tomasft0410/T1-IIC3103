<template>
  <div class="container">
    <button onclick="history.back()" class="volver">Volver</button> &nbsp;
    <input type="text" v-model="search" placeholder="Buscar plato por nombre" class="buscador">
    <h1>El menu seleccionado contiene los siguientes platos:</h1>

    <ul class="platos">
      <li v-for="course in filterlist" :key="course.id" @click="selectCourse(course.id)" class="plato">
        <p class="tray_name">{{ course.name }}</p>
        <br> <br>
        <img :src="course.img_url" alt="course.name" width="100" height="100" class="card_img">
      </li>
    </ul>

    <h3>{{ tray.description }}</h3>
    <h3>${{ tray.price }}</h3>
    <h3>Tamaño: {{ tray.size }}</h3>
    <h3>Expiración: {{ tray.expiration }}</h3> 

    <div v-if="tray.average != 'NaN'">
      <h3>Promedio rating: {{ tray.average }}</h3>
    </div>

    <h3> Reseñas: </h3>
    <div class="reviews">
      <li v-for="review in tray.reviews" :key="review.id" class="review">
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
      <button @click="showPopup" class="reseña">Dejar una reseña</button>
    </div>

    <div v-if="showReviewForm" class="form_container">
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
  computed: {
    filterlist() {
      return this.tray.courses.filter((course) => {
        return course.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
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
  border-radius: 10px;
}
.platos {
  display: flex;
  height: auto;
  justify-content: space-around;
  list-style: none;
}
.plato {
  width: 200px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
}
.plato:hover {
  background-color: lightgray;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
}
.card_img {
  border-radius: 10px;
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
.buscador {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
}

.form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
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
html {
  background-image: url(https://www.sleek-mag.com/wp-content/uploads/2017/08/Brave-Factory-Music-Festival-5.jpg)
}
.tray_name {
  font-size: 0.8rem;
  color: #2c3e50;
  font-weight: bold;
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
