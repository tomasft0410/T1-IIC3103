<template>
  <div>
    <h1>Seleccioanste un ingrediente!</h1>
	  <h2>Nombre: {{ ingredient.name }}</h2>
    <h2>Descripcion: {{ ingredient.description }}</h2>
    <h2>Precio:{{ ingredient.price }}</h2>
    <h2>Tamaño: {{ ingredient.size }}</h2>
    <h2>Expiración: {{ ingredient.expiration }}</h2>
    <img :src="ingredient.img_url" alt="ingredient.name" width="100" height="100">
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
</style>
