<template>
  <div>
    <h1>Seleccioanste un menu!</h1>
		<h2>{{ tray.name }}</h2>
    <h2>{{ tray.description[0] }}</h2>
    <h2>${{ tray.price }}</h2>
    <h2>Tamaño: {{ tray.size }}</h2>
    <h2>Expiración: {{ tray.expiration }}</h2>

    <h1>Platos</h1>
    <ul class="platos">
      <li v-for="course in tray.courses" :key="course.id" @click="selectCourse(course.id)" class="plato">
        {{ course.name }}
        <img :src="course.img_url" alt="course.name" width="100" height="100">
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
		const response = await fetch(url + '/trays/' + params.id)
		const tray = await response.json()
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
}
</style>
