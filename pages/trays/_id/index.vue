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
    <h2>{{ tray.description[0] }}</h2>
    <h2>${{ tray.price }}</h2>
    <h2>Tamaño: {{ tray.size }}</h2>
    <h2>Expiración: {{ tray.expiration }}</h2>
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
		const response = await fetch(url + '/trays/' + params.id)
		const tray = await response.json()
    tray.name = tray.name.split(',')
		return { tray }
	},
  methods: {
    selectCourse (id) {
      this.$router.push('/courses/' + id)
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
