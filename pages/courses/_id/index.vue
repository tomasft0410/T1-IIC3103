<template>
  <div>
    <h1>Seleccioanste un Plato!</h1>
    <h2>Nombre: {{ course.name }}</h2>
    <h2>Descripcion: {{ course.description }}</h2>
    <h2>Precio:{{ course.price }}</h2>
    <h2>Tamaño: {{ course.size }}</h2>
    <h2>Expiración: {{ course.expiration }}</h2>
    <img :src="course.img_url" alt="course.name" width="100" height="100">
    <h2>Categoria: {{ course.category }}</h2>

    <h1>Ingredientes:</h1>
    <ul>
      <li v-for="ingredient in course.ingredients" :key="ingredient.id" @click="selectIngredient(ingredient.id)">
        {{ ingredient.name }}
        <img :src="ingredient.img_url" alt="ingredient.name" width="100" height="100">
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
    }
  },
  async asyncData ({ params }) {
      const url = 'https://tarea-1.2023-1.tallerdeintegracion.cl'
      const response = await fetch(url + '/courses/' + params.id)
      const course = await response.json()
      return { course }
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
</style>