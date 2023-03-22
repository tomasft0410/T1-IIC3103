<template>
  <div class="container">
    <h1>El plato que seleccionaste es: {{ course.name }}</h1>
    <img :src="course.img_url" alt="course.name" width="100" height="100">
    <h2>{{ course.description }}</h2>
    <h2>${{ course.price }}</h2>
    <h2>Tamaño: {{ course.size }}</h2>
    <h2>Expiración: {{ course.expiration }}</h2>
    <h2>Categoria: {{ course.category }}</h2>

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
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      search : '',
    }
  },
  async asyncData ({ params }) {
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl'
      const response = await fetch(url + '/courses/' + params.id)
      const course = await response.json()
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
    }
  },
  mounted () {
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