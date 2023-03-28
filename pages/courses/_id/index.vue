<template>
  <div class="container">
    <button onclick="history.back()" class="volver">Volver</button> &nbsp;
    <div class="course_card">
      <h2>{{ course.name }}</h2>
      <img :src="course.img_url" alt="course.name" width="200" height="200" class="card_img">
      <h2>{{ course.description }}</h2>
    </div>
    <h2>${{ course.price }}</h2>
    <h2>Tamaño: {{ course.size }}</h2>
    <h2>Expiración: {{ course.expiration }}</h2>
    <h2>Categoria: {{ course.category }}</h2>
    <div v-if="course.average != 'NaN'">
      <h2> Promedio Ratings: {{ course.average }}</h2>
    </div>

    <h1 style="text-align: center;"> Ingredientes </h1>
     <!-- buscar por nombre -->
    <input type="text" v-model="search" placeholder="Buscar entre los ingredientes" class="buscador" >
    <ul class="ingredients ">
      <li v-for="ingredient in filterlist" :key="ingredient.id" @click="selectIngredient(ingredient.id)" class="ingredient">
        {{ ingredient.name }}
        <br> <br>
        <img :src="ingredient.img_url" alt="ingredient.name" width="100" height="100">
        <br> <br>
        Cantidad: {{ ingredient.quantity }}
      </li>
    </ul>

    <h1 style="text-align: center;"> Reseñas </h1>
    <p style=" font-size: 20px; font-weight: 900; font-family: 'Catamaran'; sans-serif; font-style: italic;">Ordenar Por:</p>
    <div class="botones" >
      <button name="order" id = "fecha,asc" @click="orderBy" class="boton_2"> Fecha Ascendente</button>
      <button name="order" id = "fecha,desc" @click="orderBy" class="boton_2">Fecha Descendente</button>
      <button name="order" id = "rating,asc" @click="orderBy" class="boton_2">Rating (Menor a Mayor)</button>
      <button name="order" id = "rating,desc" @click="orderBy" class="boton_2">Rating (Mayor a Menor)</button>
    </div>
    <div class="reviews">
      <li v-for="review in course.reviews" :key="review.id" class="review">
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
          <input type="text" v-model="email" class="input" placeholder = "ingrese su email"/>
        </label>
        <label>
          <input type="password" v-model="contraseña" class="input" placeholder = "ingrese contraseña" />
        </label>
        <label>
          <input type="text" v-model="review" class="texto_reseña" placeholder = "ingrese su reseña..">
        </label>
        <label>
          <input min="1" max="5" type="number" v-model="rating" class="input" placeholder ="rating"/>
        </label>
        <button  class="reseña" type="button" @click="submitReview">Enviar reseña</button>
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
      rating : "",
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
    orderBy(event){
      const order = event.target.id.split(",")[0]
      if (order === "fecha"){
        //order tray.review by date
        if (event.target.id.split(",")[1] === "asc"){
          this.course.reviews.sort((a, b) => (a.date >= b.date) ? 1 : -1)
        } else {
          this.course.reviews.sort((a, b) => (a.date <= b.date) ? 1 : -1)
        }
      }
      else {
        if (event.target.id.split(",")[1] === "asc"){
          this.course.reviews.sort((a, b) => (a.rating >= b.rating) ? 1 : -1)
        } else {
          this.course.reviews.sort((a, b) => (a.rating <= b.rating) ? 1 : -1)
        }
      }
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
  border-radius: 10px;
}
.ingredients {
  display: flex;
  justify-content: space-around;
  list-style: none;
}
.ingredient {
  width: 200px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.ingredient:hover {
  background-color: #ccc;
}
.course_card {
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
.card_img {
  border-radius: 10px;
}
.reviews {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;

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
  text-align: center;
  width: 180px;
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
.course_name {
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
.input {
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 40px;
}

.form_container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: hwb(240 89% 8%);
}

.texto_reseña {
  margin: 5px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 40px;
  width: 300px;
}

.botones {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 20px;
}

.boton {
  display: flex;
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
.boton:hover {
  background-color: white;
  color: #2c3e50;
  cursor: pointer;
}
.boton_2 {
  justify-content: center;
  gap: 1rem;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  background-color: #2c3e50;
  color: white;
  font-weight: 900;
  font-family: 'Catamaran', sans-serif;
  font-style: italic;
  padding: auto;
}
.boton_2:hover {
  background-color: white;
  color: #2c3e50;
  cursor: pointer;
}
</style>