<template>
  <div class="container">
    <h1>Seleccioanste un ingrediente!</h1>
	  <h2>{{ ingredient.name }}</h2>
    <img :src="ingredient.img_url" alt="ingredient.name" width="100" height="100">
    <h2>{{ ingredient.description }}</h2>
    <h2>${{ ingredient.price }}</h2>
    <h2>Tamaño: {{ ingredient.size }}</h2>
    <h2>Expiración: {{ ingredient.expiration }}</h2>
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
		const response = await fetch(url + '/ingredients/' + params.id)
		const ingredient = await response.json()
		return { ingredient }
	},
  methods: {
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
</style>
